import { KeyboardEvent } from 'react'
import { useForm } from 'react-hook-form'
import { useToast } from '@chakra-ui/react'
import { useUserId } from '@/providers/session-provider'
import { TagSchema, tagSchemaResolver } from '../schema'
import { useTripsGet, useTripDetailsGet } from '.'
import { useCreateTagMutation, useDeleteTagMutation } from '@generated/api'

export const useTagCreateDelete = (tagsCollectionRefetch: () => void) => {
  const userId = useUserId()
  const toast = useToast()

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm<TagSchema>({
    resolver: tagSchemaResolver
  })

  const [createTagMutation, { loading: isCreating }] = useCreateTagMutation()
  const [deleteTagMutation, { loading: isDeleting }] = useDeleteTagMutation()

  const { tripsRefetch } = useTripsGet()
  const { tripDetailsClient } = useTripDetailsGet()

  const addTag = async (input: TagSchema) => {
    try {
      await createTagMutation({
        variables: {
          name: input.name,
          userId: userId
        }
      })

      reset()
      tagsCollectionRefetch()
      tripsRefetch()
    } catch (error) {
      console.error(error)
      toast({
        title: "We're sorry, but you failed to create a tag",
        description:
          error instanceof Error ? error.message : 'Please try again later.',
        status: 'error',
        duration: 5000,
        isClosable: true,
        position: 'top'
      })
    }
  }

  const addEnterHandler = (e: KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault()
      handleSubmit(addTag)()
    }
  }

  const deleteTag = async (id: string) => {
    try {
      await deleteTagMutation({
        variables: {
          id: id
        },
        refetchQueries: []
      })

      // refetch all tripDetails in case tag is used
      tripDetailsClient.resetStore()
      tagsCollectionRefetch()
      toast({
        title: 'Successfully deleted!',
        status: 'success',
        duration: 2000,
        isClosable: true,
        position: 'top'
      })
    } catch (error) {
      console.error(error)
      toast({
        title: "We're sorry, but you failed to delete a tag",
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
    addEnterHandler,
    addTag: handleSubmit((d) => addTag(d)),
    deleteTag,
    isCreating,
    isDeleting,
    register,
    errors
  }
}
