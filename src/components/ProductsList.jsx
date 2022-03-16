import Product from "./Product";

function ProductsList({products, addToCart}) {
  return(
    <div className="products-list">
    {products.map(product => (
      <div className="product" key={`${product.name}`}>
        <Product product={product} addToCart={addToCart}/>
      </div>
    ))}
  </div>
);
}

export default ProductsList;
