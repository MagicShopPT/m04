import { Link } from 'react-router-dom'

const HomePage = () => {
  return (
    <section className="page-card">
      <h2>Início (<code>/</code>)</h2>
      <p>
        Bem-vindo à Single Page Application (SPA) do <strong>EX07 — React Router</strong>. A
        navegação entre páginas acontece no cliente sem recarregar o documento inteiro.
      </p>
      <div className="hero-actions">
        <Link to="/products" className="btn-primary">
          Explorar Produtos
        </Link>
        <Link to="/about" className="btn-secondary">
          Sobre o Exercício
        </Link>
      </div>
    </section>
  )
}

export default HomePage