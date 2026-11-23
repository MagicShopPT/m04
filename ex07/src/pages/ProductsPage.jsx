import { Link } from 'react-router-dom'
import { products } from '../data/products'

const ProductsPage = () => {
  return (
    <section className="page-card">
      <h2>Produtos (<code>/products</code>)</h2>
      <p>Seleciona um produto para ver a sua rota dinâmica (<code>/products/:id</code>).</p>

      <div className="products-grid">
        {products.map((product) => (
          <article key={product.id} className="product-card">
            <img src={product.image} alt={product.name} className="product-card__img" />
            <div className="product-card__body">
              <span className="product-card__category">{product.category}</span>
              <h3>{product.name}</h3>
              <p className="product-card__price">{product.price.toFixed(2)} €</p>
              <Link to={`/products/${product.id}`} className="btn-link">
                Ver detalhes
              </Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  )
}

export default ProductsPage