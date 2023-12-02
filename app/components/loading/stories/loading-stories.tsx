import { Loading } from '@/components/loading'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Loading> = {
  title: 'Loading/Loading',
  component: Loading
}

export default meta
type Story = StoryObj<typeof Loading>

export const Default: Story = {
  args: {}
}
