import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  InputGroup,
  InputRightElement,
  IconButton,
  forwardRef
} from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi'

export const InputSearch = forwardRef<ChakraInputProps, 'input'>(
  ({ ...props }, ref) => {
    return (
      <InputGroup minW={{ base: '100%', md: '23.75rem' }}>
        <ChakraInput
          ref={ref}
          {...props}
          borderColor="primary.700"
          placeholder="places, dates, tags..."
          focusBorderColor={'primary.600'}
        />
        <InputRightElement>
          <IconButton
            aria-label="Search Trip"
            variant="unstyled"
            type="submit"
            color="primary.700"
          >
            <FiSearch size="24px" />
          </IconButton>
        </InputRightElement>
      </InputGroup>
    )
  }
)
