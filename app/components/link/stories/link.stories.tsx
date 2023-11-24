import { Link } from '@/components/link'
import type { Meta, StoryObj } from '@storybook/react'

const meta: Meta<typeof Link> = {
  title: 'Link/Link',
  component: Link
}

export default meta
type Story = StoryObj<typeof Link>

export const Default: Story = {
  args: {
    children: 'Link',
    href: '/',
    isExternal: false,
    hasUnderLine: false
  }
}
