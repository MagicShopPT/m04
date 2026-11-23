const ProductCard = ({ name, price, category, image, variant = 'default' }) => {
  return (
    <article className={`product-card product-card--${variant}`}>
      <img src={image} alt={name} className="product-card__image" />
      <div className="product-card__body">
        <span className="product-card__category">{category}</span>
        <h2 className="product-card__name">{name}</h2>
        <p className="product-card__price">{Number(price).toFixed(2)} €</p>
      </div>
    </article>
  )
}

export default ProductCard