import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  InputGroup,
  InputRightElement,
  IconButton,
  forwardRef,
  useColorModeValue
} from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi'

type InputSearchProps = {
  ariaLabel: string
}

export const InputSearch = forwardRef<
  ChakraInputProps & InputSearchProps,
  'input'
>(({ ariaLabel, ...props }, ref) => {
  const bgColor = useColorModeValue('white', 'gray.700')
  const borderColor = useColorModeValue('primary.700', 'gray.500')

  return (
    <InputGroup minW={{ base: '100%', md: '23.75rem' }}>
      <ChakraInput
        ref={ref}
        {...props}
        borderColor={borderColor}
        placeholder="places, dates, tags..."
        focusBorderColor={'primary.600'}
        bgColor={bgColor}
        _placeholder={{ color: 'gray.400' }}
      />
      <InputRightElement>
        <IconButton
          aria-label={ariaLabel}
          variant="unstyled"
          type="submit"
          color="primary.700"
        >
          <FiSearch size="24px" />
        </IconButton>
      </InputRightElement>
    </InputGroup>
  )
})
