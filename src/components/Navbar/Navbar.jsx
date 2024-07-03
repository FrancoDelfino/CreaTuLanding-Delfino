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
import './Navbar.css'
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex background={'#a3b4a2'} justify={"space-evenly"} align={"center"} height={"10vh"} width={"100%"}>
      <Heading><Link to='/' >Logo</Link></Heading>
      <Menu>
        <MenuButton as={Button} rightIcon={<FaCaretDown />}>
          Categorias
        </MenuButton>
        <MenuList>
          <MenuItem><Link to='/categorias/Remeras'>Remeras</Link></MenuItem>
          <MenuItem><Link to='/categorias/Buzos'>Buzos</Link></MenuItem>
          <MenuItem><Link to='/categorias/Pantalones'>Pantalones </Link></MenuItem>
          <MenuItem><Link to='/categorias/Zapatillas'>Zapatillas </Link></MenuItem>
        </MenuList>
      </Menu>
      <CartWidget />
    </Flex>
  );
};

export default Navbar;
