import { IconType } from 'react-icons'
import {
  Input as ChakraFormInput,
  InputProps as ChakraInputProps,
  InputGroup,
  InputRightElement,
  forwardRef,
  useColorModeValue
} from '@chakra-ui/react'

type InputFormProps = {
  rightIcon?: IconType
}
export const InputForm = forwardRef<ChakraInputProps & InputFormProps, 'input'>(
  ({ rightIcon: RightIcon, ...props }, ref) => {
    const bgColor = useColorModeValue('white', 'gray.700')
    const borderColor = useColorModeValue('gray.300', 'gray.500')
    const placeholdercolor = useColorModeValue('gray.400', 'gray.600')

    return (
      <InputGroup minW={'100%'}>
        <ChakraFormInput
          {...props}
          ref={ref}
          focusBorderColor={'primary.600'}
          borderColor={borderColor}
          bgColor={bgColor}
          _placeholder={{
            color: placeholdercolor
          }}
        />
        {RightIcon && (
          <InputRightElement color="gray.500">
            <RightIcon />
          </InputRightElement>
        )}
      </InputGroup>
    )
  }
)
