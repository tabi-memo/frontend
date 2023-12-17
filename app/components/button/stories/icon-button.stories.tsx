import { FiEdit3 } from 'react-icons/fi'
import { IconButton } from '@/components/button'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof IconButton> = {
  title: 'Button/IconButton',
  component: IconButton
}

export default meta
type Story = StoryObj<typeof IconButton>

export const Default: Story = {
  args: {
    icon: FiEdit3,
    isDisabled: false,
    isActive: false,
    isLoading: false
  }
}
