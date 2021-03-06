import Product from "./Product";

function ProductsList({products, addToCart}) {
  return(
    <div className="products-list">
    {products.map(product => (
      <Product product={product} addToCart={addToCart} key={product.name}/>
    ))}
  </div>
);
}

export default ProductsList;
