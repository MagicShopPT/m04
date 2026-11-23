import { Link } from 'react-router-dom'

const NotFoundPage = () => {
  return (
    <section className="page-card not-found-box">
      <span className="status-404">404</span>
      <h2>Página não encontrada</h2>
      <p>O endereço que procuraste não existe nesta aplicação.</p>
      <Link to="/" className="btn-primary">
        Ir para a página inicial
      </Link>
    </section>
  )
}

export default NotFoundPage