function Product(props) {
  return(
    <>
      <h1 className="title"> {props.product.name} </h1>
      <p className="text">{props.product.description}</p>
      <button className="button--product" onClick={() => props.addToCart(props.product)}>Add to cart</button>
    </>
  );
}

export default Product;
