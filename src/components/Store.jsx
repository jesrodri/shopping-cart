import { useState } from "react";
import ProductsList from "./ProductsList";
import Cart from "./Cart";
import { PRODUCTS } from "../logic/constants";

function Store(props) {

  const [products, setProducts] = useState(PRODUCTS);
  const [cartItems, setCartItems] = useState([]);

  const addToCart = (product) => {
      if (!cartItems.includes(product, 0)) {
        setCartItems([...cartItems, product]);
      }
  }
  
  if (props.componentToRender === 'cart') {
    return(
      <Cart />
    );
  };
  if (props.componentToRender === 'products') {
    return(
      <ProductsList products={products} addToCart={addToCart}/>
    );
  };
}

export default Store;
