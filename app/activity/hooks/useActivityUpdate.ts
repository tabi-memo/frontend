import { useToast } from '@chakra-ui/react'
import { useRouter } from 'next/navigation'
import { formatToISODate } from '@/libs/utils'
import { ActivitySchema } from '../schema'
import { useRefetchTrips } from './useRefetchTrips'
import { useUploadFiles } from './useUploadFiles'
import { useUpdateActivityMutation } from '@generated/api'

export const useActivityUpdate = (tripId: string) => {
  const toast = useToast()
  const router = useRouter()
  const [updateActivityMutation, { loading: isActivityUpdating }] =
    useUpdateActivityMutation()
  const { uploadFiles } = useUploadFiles()
  const { refetchTrips } = useRefetchTrips()

  const updateActivity = async (
    activityId: string,
    activityData: ActivitySchema
  ) => {
    try {
      const { data, errors } = await updateActivityMutation({
        variables: {
          id: activityId,
          set: {
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

      const updatedActivityId = data?.updateactivityCollection?.records[0]?.id

      if (!updatedActivityId) throw new Error('Failed to create an activity')

      if (
        updatedActivityId &&
        activityData.newFiles &&
        activityData.newFiles.length > 0
      ) {
        await uploadFiles(activityData.newFiles, { id: activityId, tripId })
      }

      refetchTrips(tripId)
      router.push(`/activity/${activityId}`)
      toast({
        title: 'Successfully updated!',
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
    updateActivity,
    isActivityUpdating
  }
}
