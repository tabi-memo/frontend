import { SecondaryButton } from '@/components/button'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof SecondaryButton> = {
  title: 'Button/SecondaryButton',
  component: SecondaryButton
}

export default meta
type Story = StoryObj<typeof SecondaryButton>

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
