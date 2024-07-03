import React from 'react'
import { Card, CardBody, CardFooter, Stack, Heading, Text, Button, ButtonGroup, Divider, Image, Flex } from '@chakra-ui/react'


const ItemDetail = ({nombre, descripcion, img, id, precio, stock}) => {
  
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
           
          </Stack>
        </CardBody>
        <Divider />
        <CardFooter>
        <Text color='blue.600' fontSize='2xl'>
             Unidades disponibles - {stock}
            </Text>
        </CardFooter>
      </Card>
      
  )
}

export default ItemDetail