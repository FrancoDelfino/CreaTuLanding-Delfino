import React from "react";
import CartWidget from "../CartWidget/CartWidget";
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Heading,
  Button,
  Flex,
} from "@chakra-ui/react";
import { FaCaretDown } from "react-icons/fa";

const Navbar = () => {
  return (
    <Flex color={"blue"} justify={"space-evenly"} align={"center"} height={"10vh"} width={"100%"}>
      <Heading>Logo</Heading>
      <Menu>
        <MenuButton as={Button} rightIcon={<FaCaretDown />}>
          Actions
        </MenuButton>
        <MenuList>
          <MenuItem>Download</MenuItem>
          <MenuItem>Create a Copy</MenuItem>
          <MenuItem>Mark as Draft</MenuItem>
          <MenuItem>Delete</MenuItem>
          <MenuItem>Attend a Workshop</MenuItem>
        </MenuList>
      </Menu>
      <CartWidget />
    </Flex>
  );
};

export default Navbar;
