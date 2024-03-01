import DatePicker from 'react-datepicker'
import { Box, useColorMode } from '@chakra-ui/react'
import { FiCalendar } from 'react-icons/fi'
import 'react-datepicker/dist/react-datepicker.css'
import { InputForm } from '@/components/input'

type DatePickerProps = {
  selectedDate: Date | null
  onChange: (date: Date) => void
  placeholderText: string
  dateFormat?: string | string[] | undefined
}

export const CustomDatePicker = ({
  selectedDate,
  onChange,
  placeholderText,
  dateFormat
}: DatePickerProps) => {
  const { colorMode } = useColorMode()

  const datePickerStyles = {
    '.react-datepicker-wrapper': {
      width: '100%'
    },
    '.react-datepicker-popper': {
      right: { base: 0, md: 'unset' }
    },
    '.react-datepicker ': {
      width: '100%',
      border: 'none',
      boxShadow: '0px 2px 16px 0px rgba(0,0,0,.25);',
      fontSize: 'sm'
    },
    '.react-datepicker__month-container': {
      backgroundColor: colorMode === 'dark' ? 'gray.700' : 'white',
      width: { base: '100%', md: '400px' }
    },
    '.react-datepicker__triangle': {
      display: 'none'
    },
    '.react-datepicker__header': {
      backgroundColor: colorMode === 'dark' ? 'gray.700' : 'white',
      borderBottomColor: colorMode === 'dark' ? 'gray.500' : 'gray.300'
    },
    '.react-datepicker__current-month': {
      color: colorMode === 'dark' ? 'primary.700' : 'primary.800',
      paddingY: '8px',
      fontSize: 'lg'
    },
    '.react-datepicker__navigation': {
      top: '11px'
    },
    '.react-datepicker__navigation--previous': {
      left: '32px'
    },
    '.react-datepicker__navigation--next': {
      right: '32px'
    },
    '.react-datepicker__navigation-icon': {
      '&::before': {
        borderColor: colorMode === 'dark' ? 'gray.500' : 'gray.400'
      }
    },
    '.react-datepicker__month': {
      margin: '1rem'
    },
    '.react-datepicker__day-names': {
      paddingY: '4px'
    },
    '.react-datepicker__day-name': {
      width: { base: '2.4rem', md: '2.8rem' },
      lineHeight: { base: '2.4rem', md: '2.8rem' },
      color: colorMode === 'dark' ? 'gray.300' : 'black'
    },
    '.react-datepicker__day': {
      width: { base: '2.4rem', md: '2.8rem' },
      lineHeight: { base: '2.2rem', md: '2.4rem' },
      ':hover': {
        backgroundColor: colorMode === 'dark' ? 'gray.600' : 'gray.100'
      },
      color: colorMode === 'dark' ? 'gray.300' : 'black'
    },
    '.react-datepicker__day--selected': {
      fontWeight: 'bold',
      color: 'white',
      backgroundColor: colorMode === 'dark' ? 'primary.700' : 'primary.500'
    },
    '.react-datepicker__day--keyboard-selected': {
      background: 'none'
    }
  }

  return (
    <Box sx={datePickerStyles}>
      <DatePicker
        selected={selectedDate}
        placeholderText={placeholderText}
        onChange={onChange}
        dateFormat={dateFormat}
        popperPlacement="bottom-start"
        customInput={<InputForm rightIcon={FiCalendar} />}
      />
    </Box>
  )
}

export const CustomDateTimePicker = ({
  selectedDate,
  onChange,
  placeholderText,
  dateFormat
}: DatePickerProps) => {
  const { colorMode } = useColorMode()

  const dateTimePickerStyles = {
    '.react-datepicker-wrapper': {
      width: '100%'
    },
    '.react-datepicker-popper': {
      right: { base: 0, md: 'unset' }
    },
    '.react-datepicker ': {
      width: '100%',
      border: 'none',
      boxShadow: '0px 2px 16px 0px rgba(0,0,0,.25);',
      fontSize: 'sm'
    },
    '.react-datepicker__month-container': {
      backgroundColor: colorMode === 'dark' ? 'gray.700' : 'white',
      width: { base: '80%', md: '400px' }, // In order to display month and time side by side, width is set to 80% and 20% respectively
      height: { base: '360px', md: '386px' } // Due to .react-datepicker__time-list height is set to static px value by inline style, this is to prevent the time list from overflowing.
    },
    '.react-datepicker__time-container': {
      backgroundColor: colorMode === 'dark' ? 'gray.700' : 'white',
      width: { base: '20%', md: '85px' } // In order to display month and time side by side, width is set to 20% and 80% respectively
    },
    '.react-datepicker__triangle': {
      display: 'none'
    },
    '.react-datepicker__header': {
      backgroundColor: colorMode === 'dark' ? 'gray.700' : 'white',
      borderBottomColor: colorMode === 'dark' ? 'gray.500' : 'gray.300'
    },
    '.react-datepicker__header--time': {
      backgroundColor: colorMode === 'dark' ? 'gray.700' : 'white',
      borderBottomColor: colorMode === 'dark' ? 'gray.500' : 'gray.300',
      width: { base: '85px' }
    },
    '.react-datepicker__current-month': {
      color: colorMode === 'dark' ? 'primary.700' : 'primary.800',
      paddingY: '8px',
      fontSize: 'lg'
    },
    '.react-datepicker__navigation': {
      top: '11px'
    },
    '.react-datepicker__navigation--previous': {
      left: '32px'
    },
    '.react-datepicker__navigation--next': {
      right: '32px'
    },
    '.react-datepicker__navigation-icon': {
      '&::before': {
        borderColor: colorMode === 'dark' ? 'gray.500' : 'gray.400'
      }
    },
    '.react-datepicker__month': {
      margin: '1rem'
    },
    '.react-datepicker__day-names': {
      paddingY: '4px'
    },
    '.react-datepicker__day-name': {
      width: { base: '2rem', md: '2.8rem' },
      lineHeight: { base: '2.4rem', md: '2.8rem' },
      color: colorMode === 'dark' ? 'gray.300' : 'black'
    },
    '.react-datepicker__day': {
      width: { base: '2rem', md: '2.8rem' },
      lineHeight: { base: '2.2rem', md: '2.4rem' },
      ':hover': {
        backgroundColor: colorMode === 'dark' ? 'gray.600' : 'gray.100'
      },
      color: colorMode === 'dark' ? 'gray.300' : 'black'
    },
    '.react-datepicker__day--selected': {
      fontWeight: 'bold',
      color: 'white',
      backgroundColor: colorMode === 'dark' ? 'primary.700' : 'primary.500'
    },
    '.react-datepicker__day--keyboard-selected': {
      background: 'none'
    },
    '.react-datepicker-time__header': {
      backgroundColor: colorMode === 'dark' ? 'gray.700' : 'white',
      borderBottomColor: colorMode === 'dark' ? 'gray.500' : 'gray.300',
      color: colorMode === 'dark' ? 'gray.300' : 'black'
    },
    '.react-datepicker__time-box': {
      backgroundColor: colorMode === 'dark' ? 'gray.700' : 'white',
      color: colorMode === 'dark' ? 'gray.300' : 'black'
    }
  }

  return (
    <Box sx={dateTimePickerStyles}>
      <DatePicker
        selected={selectedDate}
        placeholderText={placeholderText}
        onChange={onChange}
        dateFormat={dateFormat}
        showTimeSelect
        timeFormat="HH:mm"
        timeIntervals={15}
        timeCaption="time"
        popperPlacement="bottom-start"
        customInput={<InputForm rightIcon={FiCalendar} />}
      />
    </Box>
  )
}
