import { useState } from "react";
import ProductsList from "./ProductsList";
import Cart from "./Cart";
import { PRODUCTS } from "../logic/constants";

function Store({componentToRender}) {

  const [products, setProducts] = useState(PRODUCTS);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = () => {

  }

  if (componentToRender === 'cart') {
    return(
      <Cart />
    );
  } 
  if (componentToRender === 'products') {
    return(
      <ProductsList products={products} addToCart={addToCart}/>
    );
  };
}

export default Store;
