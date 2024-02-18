import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalFooter,
  ModalBody,
  ModalCloseButton
} from '@chakra-ui/react'
import { SecondaryButton, AlertButton } from '../button'

type ConfirmModalProps = {
  isOpen: boolean
  onClose: () => void
  confirmBody: React.ReactNode
  submitLabel: string
  onClick: () => void
  isMutating?: boolean
}

export const ConfirmModal = ({
  isOpen,
  onClose,
  confirmBody,
  submitLabel,
  onClick,
  isMutating
}: ConfirmModalProps) => {
  return (
    <Modal isOpen={isOpen} onClose={onClose} isCentered>
      <ModalOverlay />
      <ModalContent maxW={'30rem'}>
        <ModalCloseButton />
        <ModalBody pt="48px">{confirmBody}</ModalBody>

        <ModalFooter>
          <SecondaryButton mr={3} onClick={onClose} isDisabled={isMutating}>
            Close
          </SecondaryButton>
          <AlertButton onClick={onClick} isLoading={isMutating}>
            {submitLabel}
          </AlertButton>
        </ModalFooter>
      </ModalContent>
    </Modal>
  )
}
