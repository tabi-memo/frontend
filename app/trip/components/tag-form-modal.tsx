import { useState } from 'react'
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
  useDisclosure,
  Text
} from '@chakra-ui/react'
import { FiPlusCircle, FiX } from 'react-icons/fi'
import { InputIconButton } from '@/components/input'
import { Loading } from '@/components/loading'
import { ConfirmModal } from '@/components/modal'
import { useTagCreateDelete } from '../hooks'

type TagFormModalProps = {
  isOpen: boolean
  onOpen: () => void
  onClose: () => void
  allTags: { id: string; name: string }[]
  tagsCollectionRefetch: () => void
}

export const TagFormModal = ({
  isOpen,
  onOpen,
  onClose,
  allTags,
  tagsCollectionRefetch
}: TagFormModalProps) => {
  const [tagToDelete, setTagToDelete] = useState('')
  const tagBgColor = useColorModeValue('primary.700', 'primary.800')

  const {
    isOpen: isDeleteModalOpen,
    onOpen: onDeleteModalOpen,
    onClose: onDeleteModalClose
  } = useDisclosure()

  const {
    addEnterHandler,
    addTag,
    deleteTag,
    isCreating,
    isDeleting,
    register,
    errors
  } = useTagCreateDelete(tagsCollectionRefetch)

  return (
    <>
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
                            onClick={() => {
                              setTagToDelete(tag.id)
                              onClose()
                              onDeleteModalOpen()
                            }}
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
                      onClick={addTag}
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

      <ConfirmModal
        isOpen={isDeleteModalOpen}
        onClose={() => {
          onDeleteModalClose()
          onOpen()
        }}
        onClick={() => deleteTag(tagToDelete)}
        submitLabel="Delete"
        confirmBody={
          <>
            <Text fontSize="lg" fontWeight="semibold">
              Are you sure you want to delete this tag?
            </Text>
            <Text>*This tag in other trips will also be deleted.</Text>
          </>
        }
      />
    </>
  )
}
