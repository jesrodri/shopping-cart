import { useState } from "react";
import ProductsList from "./ProductsList";
import Cart from "./Cart";
import { PRODUCTS } from "../logic/constants";

function Store({isCart}) {

  const [products, setProducts] = useState(PRODUCTS);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = ({product}) => {
    if (!cartItems.includes(product)) {
      setCartItems([cartItems, product]);
    };
  }
  
  if (isCart) {
    return(
      <Cart />
    );
  } else if (!isCart) {
      return(
        <ProductsList products={products} addToCart={addToCart}/>
      );
    };
}

export default Store;
