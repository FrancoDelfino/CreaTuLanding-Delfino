import {React, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Box, Flex } from '@chakra-ui/react'
import ItemDetail from '../ItemDetail/ItemDetail'
import { PropagateLoader } from 'react-spinners'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '../../config/firebase'



const ItemDetailContainer = () => {
  const [ product, setProduct ] = useState({})
  const {productId} = useParams()
  const [ loading, setLoading ] = useState(true)

 

  useEffect(() => {
    const getData = async () => {
        const queryRef = doc(db, 'productos', productId)  
        const response = await getDoc(queryRef)
        const newItem = {
          ...response.data(),
          id: response.id
        }
        setProduct(newItem)
        setLoading(false)
      }
      getData()
  }, [])
  
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