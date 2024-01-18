import { DateTimePicker as ReactDateTimePicker } from 'react-datetime-picker'
import { useColorMode } from '@chakra-ui/react'
import { MdCalendarToday, MdClose } from 'react-icons/md'
import 'react-clock/dist/Clock.css'
import 'react-datetime-picker/dist/DateTimePicker.css'
import 'react-calendar/dist/Calendar.css'

type ValuePiece = Date | null
type Value = ValuePiece | [ValuePiece, ValuePiece]

export const CustomDateTimePicker = ({
  onChange,
  value
}: {
  onChange: (value: Value) => void
  value: Value
}) => {
  const { colorMode } = useColorMode()

  return (
    <>
      <style>{`
       
        .react-calendar{
          margin-top: 12%;
        }
        .react-calendar__tile--now {
          background-color: ${colorMode === 'dark' ? '#2D3748' : '#CBD5E0'};
        }

        .react-calendar__tile--active:enabled:hover {
          background-color: ${colorMode === 'dark' && '#086F83'};
        }

        .react-calendar__navigation__label:focus {
          color: ${colorMode === 'dark' && 'black'};
        }

        .react-calendar__tile:enabled:hover {
          color: ${colorMode === 'dark' && 'black'};
        }

        .react-calendar__navigation__arrow:focus,
        .react-calendar__navigation__arrow:hover,
        .react-calendar__navigation__label__labelText:hover {
          color: ${colorMode === 'dark' && 'black'};
        }

        .react-calendar {
          background-color: ${colorMode === 'dark' && '#1a202c'};
        }

        .react-datetime-picker {
          width: 100%;
          height: 2.5rem;
        }

        .react-datetime-picker__wrapper {
          background-color: ${colorMode === 'dark' ? '#2d3748' : '#f8f8f8'};
          border: 1px solid ${colorMode === 'dark' ? '#718096' : '#CBD5E0'};
          border-radius: 0.375rem;
        }

        .react-calendar__tile--active {
          background-color: #086F83;
        }

        .react-calendar__tile--hasActive,
        .react-calendar__tile--hasActive:enabled:hover {
          background: ${colorMode === 'dark' ? 'white' : '#0987a0'};
          color: ${colorMode === 'dark' ? 'black' : 'white'};
        }

        .react-calendar__navigation button:disabled {
          background: ${colorMode === 'dark' ? 'white' : '#0987a0'};
        }

        .react-calendar__navigation button:enabled:hover {
          background: ${colorMode === 'dark' ? 'white' : '#0987a0'};
          color: ${colorMode === 'dark' ? 'black' : 'white'};
        }

        .react-datetime-picker__inputGroup__input:invalid {
          background: ${colorMode === 'dark' ? '#2d3748' : '#f8f8f8'};
        }

        .react-calendar__tile--now:enabled:hover {
          background-color: ${colorMode === 'dark' ? '#CBD5E0' : '#EDF2F7'};
        }

        .react-datetime-picker__wrapper{
          position:relative;
        }

        .react-datetime-picker__calendar--open {
          inset:0 !important;
        }

        .react-datetime-picker__inputGroup{
          padding:0 16px;
        }

      `}</style>

      <div style={{ position: 'relative' }}>
        <ReactDateTimePicker
          onChange={onChange}
          value={value}
          calendarIcon={<MdCalendarToday />}
          clearIcon={<MdClose />}
          format={'y-MM-dd h:mm a'}
        />
      </div>
    </>
  )
}
