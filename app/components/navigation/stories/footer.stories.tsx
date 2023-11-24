import { Footer } from '@/components/navigation'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Footer> = {
  title: 'Navigation/Footer',
  component: Footer
}

export default meta
type Story = StoryObj<typeof Footer>

export const Default: Story = {
  args: {}
}
