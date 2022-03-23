import CartItem from "./CartItem";

function Cart({cart, removeFromCart, renderCheckout}) {
  return(
    <>
    <div className="cart">
    {cart.map(cartItem => (
      <CartItem item={cartItem} removeFromCart={removeFromCart} key={cartItem.name} />
    ))}
    </div>
    <button className="button button--checkout button--wide" onClick={() => renderCheckout()}>Checkout</button>
    </>
);
}

export default Cart;
