import { useState } from 'react'
import './App.css'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar'
import { ChakraProvider } from '@chakra-ui/react'


function App() {
 

  return (
    
    <ChakraProvider>

        <Navbar />
        <ItemListContainer title='Tienda'/>
    
    </ChakraProvider>  
    
  )
}

export default App
