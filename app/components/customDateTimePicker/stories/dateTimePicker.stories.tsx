import { StoryObj, Meta } from '@storybook/react'
import { CustomDateTimePicker } from '../index' // Adjust the import path accordingly

const meta: Meta<typeof CustomDateTimePicker> = {
  title: 'CustomDateTimePicker',
  component: CustomDateTimePicker
}

export default meta

type Story = StoryObj<typeof CustomDateTimePicker>

export const Default: Story = {
  args: {
    onChange: (value) => console.log(value),
    value: new Date()
  }
}
