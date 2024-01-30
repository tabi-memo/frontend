import { KeyboardEvent } from 'react'
import { useForm } from 'react-hook-form'
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  FormErrorMessage,
  FormControl,
  Flex,
  Tag,
  useColorModeValue,
  Box,
  Heading,
  useToast
} from '@chakra-ui/react'
import { FiPlusCircle, FiX } from 'react-icons/fi'
import { InputIconButton } from '@/components/input'
import { Loading } from '@/components/loading'
import { useUserId } from '@/providers/session-provider'
import { TagSchema, tagSchemaResolver } from '../schema'
import { useCreateTagMutation, useDeleteTagMutation } from '@generated/api'

type TagFormModalProps = {
  isOpen: boolean
  onClose: () => void
  allTags: { id: string; name: string }[]
  tagsCollectionRefetch: () => void
}

export const TagFormModal = ({
  isOpen,
  onClose,
  allTags,
  tagsCollectionRefetch
}: TagFormModalProps) => {
  const tagBgColor = useColorModeValue('primary.700', 'primary.800')
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
        }
      })
      tagsCollectionRefetch()
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

  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent maxW="30rem">
        <ModalCloseButton />
        <ModalBody pt="48px">
          <Flex flexDir="column" gap="30px">
            <Box as="form">
              <Heading as="h2" fontSize="xl">
                Tag List
              </Heading>
              <Flex columnGap="20px" rowGap="10px" flexWrap="wrap" mt="8px">
                {isCreating || isDeleting ? (
                  <Loading p="10px" size="md" />
                ) : (
                  <>
                    {allTags.map((tag) => (
                      <Tag
                        key={tag.id}
                        variant="solid"
                        bgColor={tagBgColor}
                        borderRadius="full"
                        px="14px"
                        py="6px"
                        gap="8px"
                      >
                        {tag.name}
                        <Box
                          as="button"
                          cursor="pointer"
                          _hover={{
                            opacity: '.7'
                          }}
                          type="button"
                          onClick={() => deleteTag(tag.id)}
                        >
                          <FiX size="18" />
                        </Box>
                      </Tag>
                    ))}
                  </>
                )}
              </Flex>
            </Box>
            <Box as="form">
              <Heading as="h2" fontSize="xl">
                Add New Tag
              </Heading>
              <Box mt="8px">
                <FormControl isInvalid={!!errors.name}>
                  <InputIconButton
                    type={'text'}
                    placeholder={'Add tag'}
                    ariaLabel={'Add tag'}
                    icon={FiPlusCircle}
                    isDisabled={isCreating}
                    onKeyDown={(e) => addEnterHandler(e)}
                    onClick={handleSubmit((d) => addTag(d))}
                    {...register('name')}
                  />
                  <FormErrorMessage>{errors?.name?.message}</FormErrorMessage>
                </FormControl>
              </Box>
            </Box>
          </Flex>
        </ModalBody>
        <ModalFooter />
      </ModalContent>
    </Modal>
  )
}
