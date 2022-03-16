function Product({product, addToCart}) {
  return(
    <>
      <h1 className="title title--product"> {product.name} </h1>
      <p className="text">{product.description}</p>
      <button className="button--product" onClick={() => addToCart(product)}>Add to cart</button>
    </>
  );
}

export default Product;
