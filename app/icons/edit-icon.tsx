import React from 'react'
import { Box } from '@chakra-ui/react'

export const EditIcon = () => {
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
          fillRule="evenodd"
          d="M8.333 33.334h23.334a1.667 1.667 0 010 3.333H8.333a1.667 1.667 0 010-3.333zm-1.666-8.333L23.333 8.334l5 5-16.666 16.667h-5v-5zM25 6.667l3.333-3.333 5 5-3.335 3.335L25 6.667z"
          clipRule="evenodd"
        ></path>
      </svg>
    </Box>
  )
}
