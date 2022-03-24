function Product({product, addToCart}) {
  return(
    <div className="product">
      <h1 className="title title--product"> {product.name} </h1>
      <p className="text">{product.description}</p>
      <p className="text">$ {product.price}</p>
      <button className="button button--product" onClick={() => addToCart(product)} data-testid={`${product.name}`}>Add to cart</button>
    </div>
  );
}

export default Product;

