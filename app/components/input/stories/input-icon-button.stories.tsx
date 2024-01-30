import { Meta, StoryObj } from '@storybook/react'
import { FiSearch } from 'react-icons/fi'
import { InputIconButton } from '@/components/input'

const meta: Meta<typeof InputIconButton> = {
  title: 'Input Icon Button',
  component: InputIconButton
}
export default meta
type Story = StoryObj<typeof InputIconButton>

export const Default: Story = {
  args: {
    ariaLabel: 'Search',
    placeholder: 'Search...',
    icon: FiSearch
  }
}
