import Product from "./Product";

function ProductsList(props) {
  return(
    <div className="products--container">
    {props.products.map(product => (
      <div className="product" key={`${props.products.indexOf(product)}`}>
        <Product product={product} addToCart={props.addToCart}/>
      </div>
    ))}
  </div>
);
}

export default ProductsList;
