import { PrimaryButton } from '@/components/button'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof PrimaryButton> = {
  title: 'Button/PrimaryButton',
  component: PrimaryButton
}

export default meta
type Story = StoryObj<typeof PrimaryButton>

export const Solid: Story = {
  args: {
    children: 'Button',
    variant: 'solid',
    isDisabled: false,
    isActive: false,
    isLoading: false
  }
}

export const Outline: Story = {
  args: {
    children: 'Button',
    variant: 'outline',
    isDisabled: false,
    isActive: false,
    isLoading: false
  }
}
