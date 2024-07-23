import React from 'react'
import { Card, CardBody, CardFooter, Stack, Heading, Text, Button, ButtonGroup, Divider, Image } from '@chakra-ui/react'
import './Item.css'
import { Link } from 'react-router-dom'


const Item = ({nombre, img, precio, id, stock}) => {
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
      <Heading h={'50px'} size='md'>{nombre}</Heading>
      <Text align={'end'} color='blue.600' fontSize='2xl'>
        ${precio}
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing='2'>
      <Button variant='ghost' colorScheme='blue'>
        <Link to={`/producto/${id}`}>Ver Detalle</Link>
      </Button>
      
    </ButtonGroup>
  </CardFooter>
</Card>
  )
}

export default Item