import { Box, Button, Flex, Heading, Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuItemOption,
    MenuGroup,
    MenuOptionGroup,
    MenuDivider, Image, IconButton } from '@chakra-ui/react'
import { ChevronDownIcon, HamburgerIcon } from '@chakra-ui/icons'
import React from 'react'

function Navbar() {
  return (
    <div>
        <Flex width="100%" height="70px" gap="20px" px="2rem" background="burlywood" alignItems="center" justifyContent="center">
            <Box marginRight="auto">
                <Heading>LOGO</Heading>
            </Box>
            <Flex gap="20px">
                <Box height="100%" py="10px">HOME</Box>
                <Box height="100%" py="10px">ABOUT</Box>
                <Box height="100%" py="10px">CONTACT</Box>
            </Flex>
            <Menu>
            <MenuButton background='orange.100' as={Button} rightIcon={<ChevronDownIcon />}>
                FURNITURE
            </MenuButton>
            <MenuList>
                <MenuItem minH='48px'>
                <Image
                    boxSize='2rem'
                    borderRadius='full'
                    src='https://placekitten.com/100/100'
                    alt='Fluffybuns the destroyer'
                    mr='12px'
                />
                <span>Tables</span>
                </MenuItem>
                <MenuItem minH='40px'>
                <Image
                    boxSize='2rem'
                    borderRadius='full'
                    src='https://placekitten.com/120/120'
                    alt='Simon the pensive'
                    mr='12px'
                />
                <span>Chairs</span>
                </MenuItem>
            </MenuList>
            </Menu>
            <IconButton background="none" borderRadius="50%" icon={<HamburgerIcon />} />
        </Flex>
    </div>
  )
}

export default Navbar