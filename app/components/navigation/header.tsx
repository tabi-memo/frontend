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
  useColorModeValue
} from '@chakra-ui/react'
import Image from 'next/image'
import { FiMoon, FiSun } from 'react-icons/fi'
import { MdAccountCircle, MdLogout } from 'react-icons/md'

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
          <Image src="/logo/logo.png" width={144} height={40} alt="Tabi Memo" />
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
              <MenuList fontSize={{ base: 'md', md: 'lg' }} bgColor="white">
                <MenuItem bgColor="white" _hover={{ bgColor: 'gray.100' }}>
                  Account Info
                </MenuItem>
                <MenuItem
                  icon={<MdLogout size="20px" />}
                  bgColor="white"
                  _hover={{ bgColor: 'gray.100' }}
                  sx={{
                    svg: {
                      color: 'primary.700'
                    }
                  }}
                >
                  Logout
                </MenuItem>
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
