import { useState } from 'react'
import { Meta } from '@storybook/react'
import { CustomDatePicker } from '@/components/date'

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
