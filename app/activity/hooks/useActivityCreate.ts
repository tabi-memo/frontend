import { useToast } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { formatToISODate } from '@/libs/utils'
import { ActivitySchema } from '../schema'
import { useRefetchTrips } from './useRefetchTrips'
import { useUploadFiles } from './useUploadFiles'
import { useCreateActivityMutation } from '@generated/api'

export const useActivityCreate = (tripId: string) => {
  const toast = useToast()
  const router = useRouter()
  const [createActivityMutation, { loading: isActivityCreating }] =
    useCreateActivityMutation()
  const { uploadFiles } = useUploadFiles()
  const { refetchTrips } = useRefetchTrips()

  const createActivity = async (activityData: ActivitySchema) => {
    try {
      const { data, errors } = await createActivityMutation({
        variables: {
          object: {
            trip_id: tripId,
            title: activityData.title,
            time_from: formatToISODate(activityData.timeFrom),
            time_to: activityData.timeTo
              ? formatToISODate(activityData.timeTo)
              : null,
            address: activityData.address,
            url: activityData.url,
            memo: activityData.memo,
            cost: activityData.cost || null,
            cost_unit: activityData.costUnit
          }
        },
        refetchQueries: ['activityCollection']
      })

      if (errors) throw new Error(errors[0].message)

      const createdActivityId =
        data?.insertIntoactivityCollection?.records[0]?.id

      if (!createdActivityId) throw new Error('Failed to create an activity')

      if (
        createdActivityId &&
        activityData.newFiles &&
        activityData.newFiles.length > 0
      ) {
        await uploadFiles(activityData.newFiles, {
          id: createdActivityId,
          tripId
        })
      }

      refetchTrips(tripId)
      router.push(`/activity/${createdActivityId}`)
      toast({
        title: 'Successfully created!',
        status: 'success',
        duration: 2000,
        isClosable: true,
        position: 'top'
      })
    } catch (error) {
      toast({
        title: 'Failed to create an activity',
        status: 'error',
        duration: 3000,
        isClosable: true
      })
    }
  }

  return {
    createActivity,
    isActivityCreating
  }
}
