import Product from "./Product";

function ProductsList(props) {
  return(
    <div className="products--container">
    {props.products.map(product => (
      <Product product={product} addToCart={props.addToCart}/>
    ))}
  </div>
);
}

export default ProductsList;
