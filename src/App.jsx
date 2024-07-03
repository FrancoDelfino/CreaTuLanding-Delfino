import './App.css'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import Navbar from './components/Navbar/Navbar'
import { ChakraProvider } from '@chakra-ui/react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PageNotFound from './components/PageNotFound/PageNotFound'


function App() {
 

  return (
    
    <ChakraProvider>
      <BrowserRouter>
        <Navbar/>
         <Routes>
            <Route path='/' element={<ItemListContainer title={'Tienda'}/>}  />
            <Route path='/categorias/:categoryId' element={<ItemListContainer title={'Tienda'}/>} />
            <Route path='/producto/:productId' element={<ItemDetailContainer/>} />
            <Route path='*' element={<PageNotFound />} />
            
         </Routes>
        </BrowserRouter>
    </ChakraProvider>  
    
  )
}

export default App
