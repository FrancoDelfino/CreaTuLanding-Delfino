import React, { useEffect, useState } from "react";
import {Center, Flex, Heading} from "@chakra-ui/react"
import { getProducts, getProductsByCategory } from "../../data/asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";
import { PropagateLoader } from "react-spinners";


const ItemListContainer = ({ title }) => {
  const [productos, setProductos] = useState([])
  const {categoryId} = useParams()
  const [ loading, setLoading ] = useState(true)

  useEffect(()=> {
    setLoading(true)
    
    const dataProductos = categoryId ? getProductsByCategory(categoryId) : getProducts()

    dataProductos
    .then((prod) => setProductos(prod))
    .catch((error) => console.log(error))
    .finally(() => setLoading(false))
  }, [categoryId]) 


  return (
    <Flex  background={"#cdc6ae"}  direction={'column'} justify={'center'} align={'center'}>
      <Heading >{title}</Heading>
      {
      loading ?
      
      <Flex justify={'center'} align={'center'} h={'50vh'}>
      <PropagateLoader color="#2589BD" />
      </Flex>
      :
      <ItemList productos={productos} />
      } 
    </Flex>
  );
};

export default ItemListContainer;
