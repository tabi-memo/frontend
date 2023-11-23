import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps
} from '@chakra-ui/react'

type ButtonProps = ChakraButtonProps & {
  children: React.ReactNode
}

export const AlertButton = ({ children, ...props }: ButtonProps) => {
  return (
    <ChakraButton colorScheme="red" px="28px" {...props}>
      {children}
    </ChakraButton>
  )
}
