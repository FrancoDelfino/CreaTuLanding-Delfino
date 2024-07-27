import "./App.css";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import Navbar from "./components/Navbar/Navbar";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import { CartContextProvider } from "./context/CartContext";
import 'react-toastify/dist/ReactToastify.css';
import Cart from "./components/Cart/Cart";
import Checkout from "./components/Checkout/Checkout";


function App() {
  return (
    <ChakraProvider>
      <CartContextProvider>
        <BrowserRouter>
          <Navbar />
          <Routes>
            <Route path="/" element={<ItemListContainer title={"Tienda"} />} />
            <Route
              path="/categorias/:categoryId"
              element={<ItemListContainer title={"Tienda"} />}
            />
            <Route
              path="/producto/:productId"
              element={<ItemDetailContainer />}
            />
            <Route path="/cart" element={<Cart/>}/>
            <Route path="/checkout" element={<Checkout/>}/>
            <Route path="*" element={<PageNotFound />} />
          </Routes>
        </BrowserRouter>
      </CartContextProvider>
    </ChakraProvider>
  );
}

export default App;
