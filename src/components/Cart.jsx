import CartItem from "./CartItem";

function Cart({cart, removeFromCart}) {
  return(
    <div className="cart">
    {cart.map(cartItem => (
      <CartItem item={cartItem} removeFromCart={removeFromCart} key={cartItem.name} />
    ))}
    </div>
);
}

export default Cart;
