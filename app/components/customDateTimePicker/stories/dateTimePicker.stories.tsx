import React from 'react'
import { Story, Meta } from '@storybook/react'
import { DateTimePickerWrapper } from '@/components/customDateTimePicker' // Adjust the import path accordingly

export default {
  title: 'Components/DateTime',
  component: DateTimePickerWrapper
} as Meta

type StoryProps = {
  onChange: (value: Date | [Date, Date] | null) => void
  value: Date | [Date, Date] | null
}

const Template: Story<StoryProps> = (args) => (
  <DateTimePickerWrapper {...args} />
)

export const Default = Template.bind({})
Default.args = {
  onChange: (value) => console.log(value),
  value: new Date()
}

export const CustomDate = Template.bind({})
CustomDate.args = {
  onChange: (value) => console.log(value),
  value: new Date('2023-01-01T12:00:00')
}

export const NullDate = Template.bind({})
NullDate.args = {
  onChange: (value) => console.log(value),
  value: null
}
