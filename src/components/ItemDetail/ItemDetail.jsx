import React, { useContext } from 'react'
import { Card, CardBody, CardFooter, Stack, Heading, Text, Button, ButtonGroup, Divider, Image, Flex } from '@chakra-ui/react'
import ItemCount from '../ItemCount/ItemCount'
import { ToastContainer, toast } from 'react-toastify';
import Context from '../../context/CartContext'


const ItemDetail = ({nombre, descripcion, img, id, precio, stock}) => {

    const { addItem } = useContext(Context)

    const onAdd = (quantity) => {
      const item = {
        id,
        nombre,
        precio
      }


      addItem(item, quantity)
       toast(`Agregaste ${quantity} productos`)
    }


    return (
        
         
        <Card margin={'10px'} maxW='sm' h={'600px'}>
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
            <Text color='blue.600' fontSize='2xl'>
              ${precio}
            </Text>
            <Text color='blue.600' fontSize='2xl'>
              {descripcion}
            </Text>            
            <ItemCount initialValue={1} stock={stock} onAdd={onAdd} />
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