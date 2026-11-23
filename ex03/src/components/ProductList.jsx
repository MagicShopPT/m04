import ProductCard from './ProductCard'

const ProductList = ({ products }) => {
  return (
    <main className="products-section">
      <div className="products-grid">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            name={product.name}
            price={product.price}
            category={product.category}
            image={product.image}
            variant={product.variant}
          />
        ))}
      </div>
    </main>
  )
}

export default ProductList