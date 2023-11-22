import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps
} from '@chakra-ui/react'

type ButtonProps = ChakraButtonProps & {
  children: React.ReactNode
}

export const PrimaryButton = ({ children, ...props }: ButtonProps) => {
  return (
    <ChakraButton colorScheme="primary" px="28px" {...props}>
      {children}
    </ChakraButton>
  )
}
