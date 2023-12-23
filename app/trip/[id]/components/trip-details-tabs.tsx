import React from 'react'
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
import { formatDbDate, formatDateToSlash } from '@/libs/utils'
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

  // Sorting by date Time
  const sortedActivities = activities.sort((a, b) => {
    const dateA = new Date(a.timeFrom).getTime()
    const dateB = new Date(b.timeFrom).getTime()

    return dateA - dateB
  })

  // Grouping by date
  const activitiesByDate: { [date: string]: ActivityType[] } = {}

  if (sortedActivities.length === 1) {
    const dateKey = formatDbDate(sortedActivities[0].timeFrom)

    if (dateKey) {
      activitiesByDate[dateKey] = sortedActivities
    }
  } else {
    const startDate = new Date(sortedActivities[0].timeFrom)
    const endDate = new Date(
      sortedActivities[sortedActivities.length - 1].timeFrom
    )

    const currentDate = startDate

    while (currentDate <= endDate) {
      const dateKey = formatDbDate(currentDate.toISOString())

      const activitiesForDate = sortedActivities.filter(
        (activity) => formatDbDate(activity.timeFrom) === dateKey
      )

      if (activitiesForDate.length) {
        activitiesByDate[dateKey] = activitiesForDate
      } else {
        activitiesByDate[dateKey] = []
      }

      currentDate.setDate(currentDate.getDate() + 1)
    }
  }

  return (
    <Box mt="20px">
      <Tabs>
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
                    <ActivityCard activity={activity} />
                    {index !== activitiesByDate[date].length - 1 && (
                      <Box
                        h="30px"
                        w="1px"
                        bgColor={borderColor}
                        alignSelf="flex-start"
                        ml="17px"
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
