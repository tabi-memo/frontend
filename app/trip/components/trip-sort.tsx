import { Menu, MenuButton, MenuList, MenuItem, Flex } from '@chakra-ui/react'
import { MdOutlineSort, MdArrowDropDown } from 'react-icons/md'
import { useIsMobile } from '@/hooks'

export const TripSort = () => {
  const { isMobile } = useIsMobile()

  return (
    <Menu>
      <MenuButton
        borderWidth={{ base: 'none', md: '1px' }}
        borderColor="gray.300"
        px={{ base: '0px', md: '10px' }}
        py={{ base: '0px', md: '8px' }}
      >
        {isMobile ? (
          <Flex as="span" color="primary.700">
            <MdOutlineSort size="40px" />
          </Flex>
        ) : (
          <Flex
            as="span"
            align="center"
            gap="8px"
            fontWeight={700}
            sx={{
              svg: {
                _last: {
                  color: 'gray.400'
                }
              }
            }}
          >
            <MdOutlineSort size="18px" />
            Sort By
            <MdArrowDropDown size="30px" />
          </Flex>
        )}
      </MenuButton>

      <MenuList>
        <MenuItem>Date</MenuItem>
        <MenuItem>Created</MenuItem>
        <MenuItem>Title</MenuItem>
      </MenuList>
    </Menu>
  )
}
