import { IconType } from 'react-icons'
import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  InputGroup,
  InputRightElement,
  IconButton,
  forwardRef,
  useColorModeValue
} from '@chakra-ui/react'

type InputIconProps = {
  ariaLabel: string
  icon: IconType
  onClick?: () => void
}

export const InputIcon = forwardRef<ChakraInputProps & InputIconProps, 'input'>(
  ({ ariaLabel, icon: Icon, onClick, ...props }, ref) => {
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
            variant="unstyled"
            type={onClick ? 'button' : 'submit'}
            onClick={onClick}
            color="primary.700"
          >
            <Icon size="24px" />
          </IconButton>
        </InputRightElement>
      </InputGroup>
    )
  }
)
