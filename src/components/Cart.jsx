import CartItem from "./CartItem";

function Cart({cart, removeFromCart, checkout}) {
  return(
    <>
    <div className="cart">
    {cart.map(cartItem => (
      <CartItem item={cartItem} removeFromCart={removeFromCart} key={cartItem.name} />
    ))}
    </div>
    <button className="button button--checkout button--wide" onClick={() => checkout(cart)}>Checkout</button>
    </>
);
}

export default Cart;
