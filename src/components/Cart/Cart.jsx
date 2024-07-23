import React, { useContext } from 'react'
import {
    Table,
    Thead,
    Tbody,
    Tfoot,
    Tr,
    Th,
    Td,
    TableCaption,
    TableContainer,
    Button,
    Flex,
    Heading,
    Text,
  } from '@chakra-ui/react'
import Context from '../../context/CartContext'
import { Link } from 'react-router-dom'


const Cart = () => {
    const { cart, removeItem, clearCart, getTotalPrice} = useContext(Context)


    if(cart.length === 0){
        return(
        
         <Flex direction={'column'} justify={'center'} align={'center'} mt={'10'}>
           <Text>Todavia no agregaste productos al carrito</Text>
           <Link to={'/'}>Ver productos</Link>
        </Flex>
                )
}else {
  return (
    <TableContainer>
  <Table variant='simple'>
    
    <Thead>
      <Tr>
        <Th>Producto</Th>
        <Th>Cantidad</Th>
        <Th>Precio</Th>
        <Th>Subtotal</Th>
      </Tr>
    </Thead>
    <Tbody>
     { 
          cart.map((prod) => (
        
            <Tr key={prod.id}>
                <Td>{prod.nombre}</Td>
                <Td>{prod.quantity}</Td>
                <Td>{prod.precio}</Td>
                <Td>{prod.precio * prod.quantity}</Td>
                <Td>
                    {
                        <Button onClick={() => removeItem(prod.id)}>Eliminar</Button>
                    }
                 </Td>
            </Tr>
        ))
    }
    </Tbody>
    
  </Table>
  <Flex>
    <Heading>Total: {getTotalPrice()}</Heading>
    <Button onClick={() => clearCart()}>Vaciar el carrito</Button>
    <Heading>Finalizar compra</Heading>
  </Flex>
</TableContainer>
  )}
}

export default Cart