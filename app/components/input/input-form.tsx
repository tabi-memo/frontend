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
      <InputGroup minW={{ base: '100%', md: '23.75rem' }}>
        <ChakraFormInput
          {...props}
          ref={ref}
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
