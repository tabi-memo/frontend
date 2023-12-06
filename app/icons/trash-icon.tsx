import React from 'react'
import { Box } from '@chakra-ui/react'
export const TrashIcon = () => {
  return (
    <Box
      w={{ base: '25px', md: '30px' }}
      h={{ base: '25px', md: '30px' }}
      _hover={{ opacity: 0.8 }}
      mx={1}
    >
      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 40 40">
        <path
          fill="#0987A0"
          d="M6.667 8.334h5V6.667A3.333 3.333 0 0115 3.334h10a3.333 3.333 0 013.333 3.333v1.667h5a1.666 1.666 0 110 3.333h-1.666v21.667a3.333 3.333 0 01-3.334 3.333H11.667a3.333 3.333 0 01-3.334-3.333V11.667H6.667a1.667 1.667 0 010-3.333zm5 3.333v21.667h16.666V11.667H11.667zM15 8.334h10V6.667H15v1.667zm0 6.667h3.333v15H15V15zm6.667 0H25v15h-3.333V15z"
        ></path>
      </svg>
    </Box>
  )
}
