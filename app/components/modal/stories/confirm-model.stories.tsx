import { useDisclosure, Text } from '@chakra-ui/react'
import { ConfirmModal } from '@/components/modal'
import type { Meta, StoryObj } from '@storybook/react'

const WrapperComponent = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <button onClick={onOpen}>Click</button>
      <ConfirmModal
        isOpen={isOpen}
        onClose={onClose}
        confirmBody={
          <Text fontSize="lg" fontWeight="semibold">
            Are you sure you want to delete this tag?
          </Text>
        }
        onClick={() => {}}
        submitLabel="Delete"
      />
    </>
  )
}

const meta: Meta<typeof ConfirmModal> = {
  title: 'Modal/ConfirmModal',
  component: WrapperComponent
}

export default meta
type Story = StoryObj<typeof ConfirmModal>

export const Default: Story = {
  args: {}
}
