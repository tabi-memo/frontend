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
import { formatDateToDayMonthWeek } from '@/libs/utils'
import { ActivityCard } from '../components'

export type ActivityType = {
  id: string
  timeFrom: string | null | undefined
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
    const dateA = a.timeFrom
      ? new Date(a.timeFrom).getTime()
      : a.timeTo
      ? new Date(a.timeTo).getTime()
      : 0
    const dateB = b.timeFrom
      ? new Date(b.timeFrom).getTime()
      : b.timeTo
      ? new Date(b.timeTo).getTime()
      : 0

    return dateA - dateB
  })

  // Grouping by date
  const activitiesByDate: { [date: string]: ActivityType[] } = {}

  sortedActivities.forEach((activity) => {
    const date = activity.timeFrom?.split('T')[0]

    if (date) {
      if (!activitiesByDate[date]) {
        activitiesByDate[date] = []
      }
      activitiesByDate[date].push(activity)
    }
  })

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
                {formatDateToDayMonthWeek(date)}
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
