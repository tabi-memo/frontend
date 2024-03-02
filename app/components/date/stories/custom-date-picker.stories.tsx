import { useState } from 'react'
import { Meta, StoryFn } from '@storybook/react'
import { CustomDatePicker, CustomDateTimePicker } from '@/components/date'

const meta: Meta<typeof CustomDatePicker> = {
  title: 'CustomDatePicker',
  component: CustomDatePicker
}
export default meta

export const Default = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date())
  return (
    <CustomDatePicker
      selectedDate={selectedDate}
      onChange={(date) => setSelectedDate(date)}
      placeholderText="Select Date"
    />
  )
}

export const DateTimePicker: StoryFn = () => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date())
  return (
    <CustomDateTimePicker
      selectedDate={selectedDate}
      onChange={(date) => setSelectedDate(date)}
      placeholderText="Select Date"
      dateFormat="yyyy/MM/dd HH:mm"
    />
  )
}
