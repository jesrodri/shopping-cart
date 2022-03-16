import CartItem from "./CartItem";

function Cart({cart, removeFromCart}) {
  return(
    <div className="cart">
    {cart.map(cartItem => (
      <div className="cart-item" key={`${cartItem.name}`}>
        <CartItem item={cartItem} removeFromCart={removeFromCart}/>
      </div>
    ))}
  </div>
);
}

export default Cart;
