import { Meta, StoryObj } from '@storybook/react'
import { InputSearch } from '../index'

const meta: Meta<typeof InputSearch> = {
  title: 'Input Search',
  component: InputSearch
}
export default meta
type Story = StoryObj<typeof InputSearch>

export const Default: Story = {
  args: {
    ariaLabel: 'Search',
    placeholder: 'Search...'
  }
}
