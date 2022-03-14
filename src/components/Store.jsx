import { useState } from "react";
import ProductsList from "./ProductsList";
import Cart from "./Cart";
import { PRODUCTS } from "../logic/constants";

function Store({isCart}) {

  const [products, setProducts] = useState(PRODUCTS);
  const [cartItems, setCartItems] = useState();

  if (isCart) {
    return(
      <Cart />
    );
  } else if (!isCart) {
      return(
        <ProductsList />
      );
    };
}

export default Store;
