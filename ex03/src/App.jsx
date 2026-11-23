import Header from './components/Header'
import ProductList from './components/ProductList'
import Footer from './components/Footer'

const products = [
  {
    id: 1,
    name: 'Teclado Mecânico Compacto',
    price: 79.9,
    category: 'Periféricos',
    image: 'https://placehold.co/400x240/1e293b/f8fafc?text=Teclado+Mecanico',
    variant: 'default',
  },
  {
    id: 2,
    name: 'Monitor Ultrawide 34"',
    price: 349.0,
    category: 'Monitores',
    image: 'https://placehold.co/400x240/0f766e/f0fdfa?text=Monitor+34',
    variant: 'featured',
  },
  {
    id: 3,
    name: 'Rato Sem Fios Ergonómico',
    price: 45.5,
    category: 'Periféricos',
    image: 'https://placehold.co/400x240/334155/e2e8f0?text=Rato+Ergonomico',
    variant: 'compact',
  },
  {
    id: 4,
    name: 'Webcam Full HD 1080p',
    price: 59.99,
    category: 'Acessórios',
    image: 'https://placehold.co/400x240/475569/f8fafc?text=Webcam+1080p',
    variant: 'default',
  },
]

const App = () => {
  return (
    <div className="app-container">
      <Header />
      <ProductList products={products} />
      <Footer />
    </div>
  )
}

export default App