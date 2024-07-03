import {React, useEffect, useState } from 'react'
import { getProductById } from '../../data/asyncMock'
import { useParams } from 'react-router-dom'
import { Box, Flex } from '@chakra-ui/react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { PropagateLoader } from 'react-spinners'



const ItemDetailContainer = () => {
  const [ product, setProduct ] = useState({})
  const {productId} = useParams()
  const [ loading, setLoading ] = useState(true)

 

  useEffect(() => {
    getProductById(productId)
      .then((data) => setProduct(data))
      .catch((error) => console.log(error))
      .finally(() => setLoading(false))
  }, [] )
  
  return (
    <Box>
      {
      loading ?
      
      <Flex justify={'center'} align={'center'} h={'50vh'}>
      <PropagateLoader color="#2589BD" />
      </Flex>
      :
      <Flex justify={'center'} h={'10vh'}>  
        <ItemDetail {...product} />
      </Flex>        
      }
      
    </Box>
  )
}

export default ItemDetailContainer