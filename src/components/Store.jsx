import { useState } from "react";
import ProductsList from "./ProductsList";
import Cart from "./Cart";
import { PRODUCTS } from "../logic/constants";

function Store({componentToRender, setComponentToRender}) {

  const [products, setProducts] = useState(PRODUCTS);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
      if (!cartItems.includes(product, 0)) {
        setCartItems((currentState) => [...currentState, product]);
      }
  }

  if (componentToRender === 'cart') {
    return(
      <Cart />
    );
  };
  if (componentToRender === 'products') {
    return(
      <ProductsList products={products} addToCart={addToCart}/>
    );
  };
}

export default Store;
