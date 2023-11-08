import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps
} from '@chakra-ui/react'

type ButtonProps = ChakraButtonProps & {
  label: React.ReactNode
}

// TODO - This is a temp component to use story book. Please modify or delete it as you like.
export const Button = ({ label }: ButtonProps) => {
  return <ChakraButton>{label}</ChakraButton>
}
