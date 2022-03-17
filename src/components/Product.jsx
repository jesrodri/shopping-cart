function Product({product, addToCart}) {
  return(
    <div className="product">
      <h1 className="title title--product"> {product.name} </h1>
      <p className="text">{product.description}</p>
      <button className="button--product" onClick={() => addToCart(product)}>Add to cart</button>
    </div>
  );
}

export default Product;

