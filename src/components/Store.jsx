import { useState } from "react";
import ProductsList from "./ProductsList";
import Cart from "./Cart";
import { PRODUCTS } from "../logic/constants";

function Store({initialComponent}) {

  const [products, setProducts] = useState(PRODUCTS);
  const [cartItems, setCartItems] = useState([]);
  const [componentToRender, setComponentToRender] = useState(initialComponent);

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

  return (
    <div className="store">
      <header className="store__header">
        <button className="button button--wide button--product" onClick={() => setComponentToRender('products')}>Products List</button>
        <button className="button button--wide button--cart" onClick={() => setComponentToRender('cart')}>Cart</button>
      </header>
      <main className="store__body">
        {componentToRender === 'cart' && <Cart cart={cartItems} removeFromCart={removeFromCart}/>}
        {componentToRender === 'products' && <ProductsList products={products} addToCart={addToCart}/>}
      </main>
    </div>
  );
}

export default Store;
