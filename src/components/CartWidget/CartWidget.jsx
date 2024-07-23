import React, { useContext } from 'react'
import { FaCartShopping } from "react-icons/fa6";
import Context from '../../context/CartContext';
import { Badge } from '@chakra-ui/react';
import { Link } from 'react-router-dom';


const CartWidget = () => {
  const { getQuantity } = useContext(Context)
 
  return (
    
    <Link to='/cart'>
      <Badge><FaCartShopping/>{getQuantity()}</Badge>
    </Link>
    
  )
}

export default CartWidget