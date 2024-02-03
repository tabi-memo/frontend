import { useState } from 'react'
import { IconType } from 'react-icons'
import {
  Input as ChakraFormInput,
  InputProps as ChakraInputProps,
  InputGroup,
  InputRightElement,
  forwardRef,
  useColorModeValue
} from '@chakra-ui/react'
import { FiEye, FiEyeOff } from 'react-icons/fi'
type InputFormProps = {
  rightIcon?: IconType
  showInput?: boolean
}
export const InputForm = forwardRef<ChakraInputProps & InputFormProps, 'input'>(
  ({ rightIcon: RightIcon, showInput, ...props }, ref) => {
    const bgColor = useColorModeValue('white', 'gray.700')
    const borderColor = useColorModeValue('gray.300', 'gray.500')
    const placeholdercolor = useColorModeValue('gray.400', 'gray.600')
    const [show, setShow] = useState(false)
    const handleClick = () => setShow(!show)

    return (
      <InputGroup minW={'100%'}>
        <ChakraFormInput
          {...props}
          type={show ? 'text' : 'password'}
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

        {showInput && (
          <InputRightElement
            color="gray.500"
            onClick={handleClick}
            style={{ cursor: 'pointer' }}
          >
            {show ? <FiEye /> : <FiEyeOff />}
          </InputRightElement>
        )}
      </InputGroup>
    )
  }
)
