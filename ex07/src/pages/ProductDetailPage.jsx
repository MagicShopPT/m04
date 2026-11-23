import { Link, useParams } from 'react-router-dom'
import { products } from '../data/products'

const ProductDetailPage = () => {
  const { id } = useParams()
  const product = products.find((item) => item.id === id)

  if (!product) {
    return (
      <section className="page-card">
        <h2>Produto não encontrado</h2>
        <p>
          Não existe nenhum produto com o identificador <code>{id}</code>.
        </p>
        <Link to="/products" className="btn-primary">
          Voltar a Produtos
        </Link>
      </section>
    )
  }

  return (
    <section className="page-card detail-card">
      <img src={product.image} alt={product.name} className="detail-card__img" />
      <div className="detail-card__content">
        <span className="product-card__category">{product.category}</span>
        <h2>{product.name}</h2>
        <p className="product-card__price">{product.price.toFixed(2)} €</p>
        <p>{product.description}</p>
        <p className="meta-param">
          Parâmetro da rota (<code>useParams</code>): <strong>id = {id}</strong>
        </p>
        <Link to="/products" className="btn-secondary">
          ← Voltar ao catálogo
        </Link>
      </div>
    </section>
  )
}

export default ProductDetailPage