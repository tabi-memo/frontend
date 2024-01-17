import { Meta, StoryObj } from '@storybook/react'
import { FiSearch } from 'react-icons/fi'
import { InputIcon } from '@/components/input'

const meta: Meta<typeof InputIcon> = {
  title: 'Input Icon',
  component: InputIcon
}
export default meta
type Story = StoryObj<typeof InputIcon>

export const Default: Story = {
  args: {
    ariaLabel: 'Search',
    placeholder: 'Search...',
    icon: FiSearch
  }
}
