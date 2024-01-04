import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Text
} from '@chakra-ui/react'
import { SecondaryButton, AlertButton } from '../button'

type ConfirmModalProps = {
  isOpen: boolean
  onClose: () => void
  confirmText: string
  submitLabel: string
  onClick: () => void
}

export const ConfirmModal = ({
  isOpen,
  onClose,
  confirmText,
  submitLabel,
  onClick
}: ConfirmModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent maxW={'30rem'}>
        <ModalCloseButton />
        <ModalBody pt="48px">
          <Text fontSize="xl" fontWeight="semibold">
            Are you sure you want to {confirmText}?
          </Text>
        </ModalBody>

        <ModalFooter>
          <SecondaryButton mr={3} onClick={onClose}>
            Close
          </SecondaryButton>
          <AlertButton onClick={onClick}>{submitLabel}</AlertButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
