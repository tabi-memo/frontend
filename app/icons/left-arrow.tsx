import { useBreakpointValue } from '@chakra-ui/react'

export const LeftArrow = () => {
  const width = useBreakpointValue({ base: '25px', md: '30px' })
  const height = useBreakpointValue({ base: '25px', md: '30px' })

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 30 30"
    >
      <g clipPath="url(#clip0_327_3402)">
        <circle cx="15" cy="15" r="15" fill="#A0AEC0"></circle>
        <path
          fill="#F7FAFC"
          d="M19.262 20.725L13.537 15l5.725-5.738L17.5 7.5 10 15l7.5 7.5 1.762-1.775z"
        ></path>
      </g>
      <defs>
        <clipPath id="clip0_327_3402">
          <path fill="#fff" d="M0 0H30V30H0z"></path>
        </clipPath>
      </defs>
    </svg>
  )
}
