import { useState } from 'react'
import { Link } from '@chakra-ui/next-js'
import {
  Container,
  Flex,
  Box,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  IconButton,
  useColorMode,
  useColorModeValue,
  useToast,
  useBoolean
} from '@chakra-ui/react'
import Image from 'next/image'
import { FiMoon, FiSun } from 'react-icons/fi'
import { MdAccountCircle, MdLogout } from 'react-icons/md'
import { signOut } from '@/(auth)/signout/action'

const LogOut = () => {
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
      bgColor="white"
      _hover={{ bgColor: 'gray.100' }}
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

export const Header = () => {
  const { colorMode, toggleColorMode } = useColorMode()
  const bg = useColorModeValue('white', 'gray.800')
  const borderColor = useColorModeValue('gray.200', 'gray.600')

  return (
    <Flex
      as="header"
      justifyContent="center"
      borderBottomWidth="1px"
      borderBottomColor={borderColor}
      bg={bg}
    >
      <Container
        maxW={{ base: '100%', lg: 'container.xl' }}
        py={{ base: '8px', md: '12px' }}
      >
        <Flex justifyContent="space-between" align="center">
          <Link href="/">
            <Image
              src="/logo/logo.png"
              width={144}
              height={40}
              alt="Tabi Memo"
            />
          </Link>
          <Flex gap={{ base: '20px', md: '28px' }}>
            <Menu>
              <MenuButton
                as={IconButton}
                aria-label="Options"
                icon={<MdAccountCircle size="100%" />}
                variant="unstyled"
                color="gray.400"
                w={{ base: '26px', md: '40px' }}
                h={{ base: '26px', md: '40px' }}
              />
              {/* TODO Change Link and Add Logout logic */}
              <MenuList fontSize={{ base: 'md', md: 'lg' }} bgColor={bg}>
                <MenuItem
                  bgColor={bg}
                  _hover={{
                    bgColor: useColorModeValue('gray.100', 'gray.700'),
                    textDecoration: 'none'
                  }}
                  as={Link}
                  href="/account"
                >
                  Account Info
                </MenuItem>
                <LogOut />
              </MenuList>
            </Menu>
            <Box
              as="button"
              w={{ base: '26px', md: '40px' }}
              h={{ base: '26px', md: '40px' }}
              color="gray.400"
              onClick={toggleColorMode}
            >
              {colorMode === 'light' ? (
                <FiMoon size="100%" />
              ) : (
                <FiSun size="100%" />
              )}
            </Box>
          </Flex>
        </Flex>
      </Container>
    </Flex>
  )
}
