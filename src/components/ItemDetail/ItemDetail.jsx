import React, { useContext, useState } from 'react'
import { Card, CardBody, CardFooter, Stack, Heading, Text, Button, ButtonGroup, Divider, Image, Flex, Link as ChakraLink } from '@chakra-ui/react'
import ItemCount from '../ItemCount/ItemCount'
import { ToastContainer, toast } from 'react-toastify';
import Context from '../../context/CartContext'
import { Link } from 'react-router-dom';

const ItemDetail = ({nombre, descripcion, img, id, precio, stock}) => {
    const [quantity, setQuantity] = useState(0)
    const { addItem } = useContext(Context)

    const onAdd = (quantity) => {
      const item = {
        id,
        nombre,
        precio
      }

      setQuantity(quantity)
      addItem(item, quantity)
       toast(`Agregaste ${quantity} productos`)
    }


    return (
        
         
        <Card margin={'10px'} maxW='sm' h={'90vh'}>
        <CardBody>
          <Image
            src={img}
            alt={nombre}
            borderRadius='lg'
            w={'350px'}
            h={'350px'}
            objectFit={'cover'}
          />
          <Stack mt='6' spacing='3'>
            <Heading size='md'>{nombre}</Heading>
            <Text align={'end'} fontWeight={'bold'} color='blue.600' fontSize='2xl'>
              ${precio}
            </Text>
            <Text color='blue.600' fontSize='2xl'>
              {descripcion}
            </Text>
            { 
              quantity === 0 ?
              <ItemCount initialValue={1} stock={stock} onAdd={onAdd} />
              :
              <Flex flexDirection={'column'} fontSize={'1.5em'}  >
              <ChakraLink as={Link} textAlign={'center'} to='/cart' marginBottom={'10px'}  borderRadius={'15px'} background={'#a3b4a2'}>Ir al Carrito</ChakraLink>
              <ChakraLink as={Link} textAlign={'center'} to='/' borderRadius={'15px'} background={'#a3b4a2'}>Seguir comprando</ChakraLink>
              </Flex>
            }            
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
        <Text color='blue.600' fontSize='2xl'>
             Unidades disponibles - {stock}
            </Text>
        </CardFooter>
        <ToastContainer />
      </Card>
      
  )
}

export default ItemDetail