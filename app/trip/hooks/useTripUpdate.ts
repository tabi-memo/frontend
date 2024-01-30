import { useForm, Controller } from 'react-hook-form'
import { useToast } from '@chakra-ui/react'
import { formatToISODate, getDateObj } from '@/libs/utils'
import { TripDetailsArgs } from '../components/trip-form'
import { TripSchema, tripSchemaResolver } from '../schema'
import { useUpdateTripMutation } from '@generated/api'

export const useTripUpdate = (tripDetails?: TripDetailsArgs) => {
  const toast = useToast()
  const [updateTripMutation, { loading: isTripUpdating }] =
    useUpdateTripMutation()

  const {
    register,
    handleSubmit,
    control,
    formState: { errors }
  } = useForm<TripSchema>({
    defaultValues: {
      title: tripDetails?.title,
      date_from: tripDetails?.dateFrom
        ? getDateObj(tripDetails.dateFrom)
        : undefined,
      date_to: tripDetails?.dateTo ? getDateObj(tripDetails.dateTo) : null,
      image_storage_object_id: tripDetails?.image,
      cost: tripDetails?.cost ? tripDetails.cost.toString() : '',
      cost_unit: tripDetails?.costUnit
    },
    resolver: tripSchemaResolver
  })

  const mutationTrip = async (data: TripSchema) => {
    const type = tripDetails ? 'update' : 'create'

    try {
      if (tripDetails) {
        await updateTripMutation({
          variables: {
            id: tripDetails.id,
            set: {
              title: data.title,
              date_from: formatToISODate(data.date_from),
              date_to: data.date_to ? formatToISODate(data.date_to) : null,
              image_storage_object_id: data.image_storage_object_id,
              cost: data.cost ? data.cost : null,
              cost_unit: data.cost_unit
            }
          }
        })
        tripDetails.refetch()
      }

      if (!tripDetails) {
        console.log('create!')
      }

      window.scroll({ top: 0 })
      toast({
        title: `Successfully ${type}d!`,
        status: 'success',
        duration: 2000,
        isClosable: true,
        position: 'top'
      })
    } catch (error) {
      console.error(error)
      window.scroll({ top: 0 })

      toast({
        title: `We're sorry, but you failed to ${type} a trip`,
        description:
          error instanceof Error ? error.message : 'Please try again later.',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top'
      })
    }
  }

  return {
    onMutate: handleSubmit(mutationTrip),
    isTripUpdating,
    register,
    control,
    errors,
    Controller
  }
}
