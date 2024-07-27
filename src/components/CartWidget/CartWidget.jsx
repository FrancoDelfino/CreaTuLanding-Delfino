import React, { useContext } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import Context from '../../context/CartContext';
import { Badge, Flex } from '@chakra-ui/react';
import { Link } from 'react-router-dom';
import './CartWidget.css'

const CartWidget = () => {
  const { getQuantity } = useContext(Context)
 
  return (
    
 

    <Link className='carrito' to='/cart'>
      <FaCartShopping fontSize={'30px'}/> <span>{getQuantity()}</span>
    </Link>
    

    
  )
}

export default CartWidget