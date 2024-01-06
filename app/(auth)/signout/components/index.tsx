import { useState } from 'react'
import {
  MenuItem,
  useToast,
  useBoolean,
  useColorModeValue
} from '@chakra-ui/react'
import { MdLogout } from 'react-icons/md'
import { signOut } from '@/(auth)/signout/action'

const LogOut = () => {
  const bg = useColorModeValue('white', 'gray.800')

  const toast = useToast()
  const [isLoading, setIsLoading] = useBoolean()
  isLoading
  const [toastId, setToastId] = useState<ReturnType<typeof toast> | undefined>(
    undefined
  )

  const signOutHandler = async () => {
    try {
      setIsLoading.on()
      await signOut()
    } catch (error) {
      if (!toastId) {
        const res = toast({
          title: "We're sorry, but you failed to sign out.",
          description: error instanceof Error ? error.message : 'unknown error',
          status: 'error',
          duration: 5000,
          isClosable: true,
          position: 'top',
          onCloseComplete() {
            setToastId(undefined)
          }
        })
        setToastId(res)
      }
    } finally {
      setIsLoading.off()
    }
  }

  return (
    <MenuItem
      icon={<MdLogout size="20px" />}
      bgColor={bg}
      _hover={{
        bgColor: useColorModeValue('gray.100', 'gray.700')
      }}
      sx={{
        svg: {
          color: 'primary.700'
        }
      }}
      onClick={signOutHandler}
      isDisabled={isLoading}
    >
      Logout
    </MenuItem>
  )
}

export default LogOut
