
import React from 'react'
import useCounter from '../../hooks/useCounter'
import { Button, Flex, Spacer } from '@chakra-ui/react'
import './ItemCount.css'
import { wrap } from 'framer-motion'

const ItemCount = ({initialValue, stock, onAdd}) => {
    const { count, incrementar, decrementar} = useCounter(initialValue, stock)
  
    return (
    <Flex mt={'5%'} display={'flex'} justifyContent={'center'}>
      <div className='contador'>
        <button className='boton' onClick={decrementar}>-</button>
        <span className='cantidad' >{count}</span>
        <button className='boton' onClick={incrementar}>+</button>
      </div>
      <Spacer></Spacer>
        <Button width={'60%'}  onClick={() => onAdd(count)}>Agregar al carrito</Button>
    </Flex>
  )
}

export default ItemCount