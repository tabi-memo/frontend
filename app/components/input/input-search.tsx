import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  InputGroup,
  InputRightElement,
  forwardRef,
  useColorModeValue
} from '@chakra-ui/react'
import { FiSearch } from 'react-icons/fi'
import { IconButton } from '@/components/button'

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
        focusBorderColor={'primary.600'}
        bgColor={bgColor}
        _placeholder={{ color: 'gray.400' }}
      />
      <InputRightElement>
        <IconButton
          aria-label={ariaLabel}
          type="submit"
          icon={FiSearch}
          w={'24px'}
          h={'24px'}
        />
      </InputRightElement>
    </InputGroup>
  )
})
