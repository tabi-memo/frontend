import { Header } from '@/components/navigation'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Header> = {
  title: 'Navigation/Header',
  component: Header
}

export default meta
type Story = StoryObj<typeof Header>

export const Default: Story = {
  args: {}
}
