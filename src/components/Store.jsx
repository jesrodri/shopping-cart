import { useState } from "react";
import ProductsList from "./ProductsList";
import Cart from "./Cart";
import { PRODUCTS } from "../logic/constants";


function Store({componentToRender}) {
  const [products, setProducts] = useState(PRODUCTS);
  const [cartItems, setCartItems] = useState([]);
  console.log(cartItems);

  const addToCart = (product) => {
      if (!cartItems.includes(product)) {
        setCartItems((currentState) => [...currentState, product]);
      }
  }

  const removeFromCart = (item) => {
    setCartItems((currentState) => currentState.filter( element => {
      return element !== item;
    }))
  }

  if (componentToRender === 'cart') {
    return(
      <Cart cart={cartItems} removeFromCart={removeFromCart}/>
    );
  };
  if (componentToRender === 'products') {
    return(
      <ProductsList products={products} addToCart={addToCart}/>
    );
  };
}

export default Store;
