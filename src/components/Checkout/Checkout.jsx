import React, { useContext, useState } from "react";
import {
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Flex,
  Input,
  Heading,
  Button,
} from "@chakra-ui/react";
import { collection, addDoc, Timestamp } from "firebase/firestore";
import Context from "../../context/CartContext";
import {db} from "../../config/firebase.js"
import Swal from 'sweetalert2'

const Checkout = () => {
  const [user, setUser] = useState({
    name: "",
    email: "",
    repeatedEmail: "",
    phone: "",
  });
  const [ error, setError ] = useState({})


  const { cart, getTotalPrice } = useContext(Context)

  

  const updateUser = (event) => {
    setUser((user) => ({
      ...user,
      [event.target.name]: event.target.value
    }))
  }

  const validateForm = () => {
    const errors = {}
    if(!user.name){
      errors.name = 'Debes ingresar un nombre'
    }else if(user.name.length < 3 || user.name.length >= 15) {
      errors.name = 'El nombre debe tener al menos 3 caracteres y un maximo de 15'
    }
    if(!user.email){
      errors.email = 'Debes ingresar un email'
    }else if(!/\S+@+\S+\.\S+/.test(user.email)){
      errors.email = 'Debes ingresar un email valido'
    }
    if(!user.repeatedEmail){
      errors.repeatedEmail = 'Debes repetir el email'
    }else if(user.email !== user.repeatedEmail){
      errors.repeatedEmail = 'El email no coincide'
    }
    if(!user.phone){
      errors.phone = 'Debes ingresar un numero de telefono'
    }else if (user.phone.length < 9 || user.phone.length > 15){
      errors.phone = 'Por favor, ingresa tu numero de telefono con el codigo de area incluido'
    }

    setError(errors)
    return Object.keys(errors).length === 0
  }

  const getOrder = async () => {
    if(!validateForm()){
      return
    }
    if(cart.length === 0){
      Swal.fire('El carrito esta vacio!')
      return
    }
    const ordersCollection = collection(db, 'orders')

    try {
      const order = {
        buyer : user,
        cart: cart,
        total: getTotalPrice(),
        fechaDeCompra: Timestamp.now()
      }
      const orderRef = await addDoc(ordersCollection, order)

      
      Swal.fire(`Gracias por tu compra!
         Tu numero de orden es: ${orderRef.id}`)
    } catch (error) {
      console.log(error)
    }
  }



  return (
   
    <Flex ml={'3vw'} display={'flex'}  mt={'50px'} flexFlow={'column'}  w={'100vw'} maxWidth={'400px'}>
      <Heading>Datos de facturacion</Heading>
      <FormControl >
        <Input name="name" type="text" placeholder={"Nombre"} onChange={updateUser}/>    
        <FormHelperText ml={'10px'} mb={'15px'} color={'red'} >{error.name}</FormHelperText>
        <Input name="email" type="email" placeholder={"Email"} onChange={updateUser}/>
        <FormHelperText ml={'10px'} mb={'15px'} color={'red'} >{error.email}</FormHelperText>
        <Input name="repeatedEmail" type="email" placeholder={"Repetir Email"} onChange={updateUser}/>
        <FormHelperText ml={'10px'} mb={'15px'} color={'red'} >{error.repeatedEmail}</FormHelperText>
        <Input name="phone" type="text" placeholder={"Telefono"} onChange={updateUser}/>
        <FormHelperText ml={'10px'} mb={'15px'} color={'red'} >{error.phone}</FormHelperText>
        <Button onClick={getOrder}>Finalizar compra</Button>
      </FormControl>
    </Flex>
    
  );
};

export default Checkout;
