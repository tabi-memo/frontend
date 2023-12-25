import React, { useState, useMemo } from 'react'
import {
  Box,
  useColorModeValue,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  VStack,
  Heading
} from '@chakra-ui/react'
import { formatDbTimeToDate, formatDateToSlash } from '@/libs/utils'
import { ActivityCard } from '../components'

export type ActivityType = {
  id: string
  timeFrom: string
  timeTo: string | null | undefined
  title: string
  address: string | null | undefined
}

type TripDetailsTabsProps = {
  activities: ActivityType[]
}

export const TripDetailsTabs = ({ activities }: TripDetailsTabsProps) => {
  const borderColor = useColorModeValue('gray.300', 'gray.600')

  const sortedActivities = useMemo(() => {
    return activities.sort((a, b) => {
      const dateA = new Date(a.timeFrom).getTime()
      const dateB = new Date(b.timeFrom).getTime()

      return dateA - dateB
    })
  }, [activities])

  // Grouping by date
  const activitiesByDate = useMemo(() => {
    const result: { [date: string]: ActivityType[] } = {}

    if (sortedActivities.length === 1) {
      const dateKey = formatDbTimeToDate(sortedActivities[0].timeFrom)

      result[dateKey] = sortedActivities
    } else {
      // Array list for all dates
      const allDates: string[] = []
      sortedActivities.forEach((activity) => {
        const startDate = new Date(formatDbTimeToDate(activity.timeFrom))
        const endDate = new Date(formatDbTimeToDate(activity.timeTo))

        const currentDate = startDate

        while (currentDate <= endDate) {
          const formattedDate = currentDate.toISOString().split('T')[0] // Format to yyyy-mm-dd
          if (!allDates.includes(formattedDate)) {
            allDates.push(formattedDate)
          }

          // Move to the next day
          currentDate.setDate(currentDate.getDate() + 1)
        }
      })

      allDates.forEach((dateKey) => {
        const activitiesForDate = sortedActivities.filter(
          (activity) =>
            formatDbTimeToDate(activity.timeFrom) === dateKey ||
            formatDbTimeToDate(activity.timeTo) === dateKey
        )

        result[dateKey] = activitiesForDate
      })
    }

    return result
  }, [sortedActivities])

  const [tabIndex, setTabIndex] = useState(0)

  const [selectedDate, setSelectedDate] = useState(
    Object.keys(activitiesByDate)[0]
  )

  const handleTabsChange = (index: number) => {
    setTabIndex(index)
    setSelectedDate(Object.keys(activitiesByDate)[index])
  }

  return (
    <Box mt="20px">
      <Tabs index={tabIndex} onChange={handleTabsChange}>
        <TabList>
          {Object.keys(activitiesByDate).map((date, index) => (
            <Tab key={`${date}_${index}`} fontWeight={'semibold'}>
              Day {index + 1}
            </Tab>
          ))}
        </TabList>

        <TabPanels>
          {Object.keys(activitiesByDate).map((date) => (
            <TabPanel key={date} py="10px" px="0">
              <Heading as="h2" fontWeight={'normal'} fontSize="md">
                {formatDateToSlash(date, 'dayMonth')}
              </Heading>
              <VStack
                gap="14px"
                mt={{ base: '30px', md: '40px' }}
                w={{ base: '100%', md: 'max-content' }}
                mx="auto"
              >
                {activitiesByDate[date].map((activity, index) => (
                  <React.Fragment key={activity.id}>
                    <ActivityCard
                      activity={activity}
                      selectedDate={selectedDate}
                    />
                    {index !== activitiesByDate[date].length - 1 && (
                      <Box
                        h="30px"
                        w="1px"
                        bgColor={borderColor}
                        alignSelf="flex-start"
                        ml="21px"
                      />
                    )}
                  </React.Fragment>
                ))}
              </VStack>
            </TabPanel>
          ))}
        </TabPanels>
      </Tabs>
    </Box>
  )
}
