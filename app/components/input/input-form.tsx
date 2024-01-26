import {
  Input as ChakraFormInput,
  InputProps as ChakraInputProps,
  InputGroup,
  forwardRef,
  useColorModeValue
} from '@chakra-ui/react'

export const InputForm = forwardRef(
  (props: ChakraInputProps, ref: React.Ref<HTMLInputElement>) => {
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
      </InputGroup>
    )
  }
)
