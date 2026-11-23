import { BrowserRouter, NavLink, Route, Routes } from 'react-router-dom'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import ProductDetailPage from './pages/ProductDetailPage'
import ContactPage from './pages/ContactPage'
import AboutPage from './pages/AboutPage'
import NotFoundPage from './pages/NotFoundPage'

const App = () => {
  return (
    <BrowserRouter>
      <div className="app-shell">
        <header className="topbar">
          <div>
            <h1>EX07 — React Router</h1>
            <p>SPA com rotas estáticas, dinâmicas e página 404</p>
          </div>

          <nav aria-label="Navegação principal" className="nav-bar">
            <NavLink to="/" end className={({ isActive }) => (isActive ? 'active' : '')}>
              Início
            </NavLink>
            <NavLink
              to="/products"
              end
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Produtos
            </NavLink>
            <NavLink
              to="/contact"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Contacto
            </NavLink>
            <NavLink
              to="/about"
              className={({ isActive }) => (isActive ? 'active' : '')}
            >
              Sobre
            </NavLink>
          </nav>
        </header>

        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/products" element={<ProductsPage />} />
            <Route path="/products/:id" element={<ProductDetailPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </main>

        <footer className="site-footer">
          <p>Programação WEB — ISMT | Módulo 04 — React Router</p>
        </footer>
      </div>
    </BrowserRouter>
  )
}

export default App