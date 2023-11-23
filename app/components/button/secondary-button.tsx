import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps
} from '@chakra-ui/react'

type ButtonProps = ChakraButtonProps & {
  children: React.ReactNode
}

export const SecondaryButton = ({ children, ...props }: ButtonProps) => {
  return (
    <ChakraButton colorScheme="gray" px="28px" {...props}>
      {children}
    </ChakraButton>
  )
}
