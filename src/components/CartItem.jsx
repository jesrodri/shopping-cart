function CartItem({item, removeFromCart}) {
  return(
    <div className="cart-item">
      <h1 className="title title--cart">{item.name}</h1>
      <p className="text">{item.description}</p>
      <button className="button button--cart-item" onClick={() => removeFromCart(item)}>Remove from cart</button>
    </div>
  );
}

export default CartItem;
