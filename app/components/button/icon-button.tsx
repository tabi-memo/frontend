'use client'
import { IconType } from 'react-icons'
import {
  IconButton as ChakraIconButton,
  IconButtonProps as ChakraIconButtonProps
} from '@chakra-ui/react'

type ButtonProps = ChakraIconButtonProps & {
  icon: IconType
}

export const IconButton = ({ icon: Icon, ...props }: ButtonProps) => {
  return (
    <ChakraIconButton
      variant="unstyled"
      color="primary.700"
      minW={'auto'}
      _hover={{ opacity: '.8' }}
      {...props}
    >
      <Icon size="100%" />
    </ChakraIconButton>
  )
}
