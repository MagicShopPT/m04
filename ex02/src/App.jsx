import ProductCard from './components/ProductCard'

const App = () => {
  return (
    <main>
      <header>
        <h1>Módulo 04 — React (EX02 — Props)</h1>
        <p>Componente reutilizável ProductCard com diferentes variantes</p>
      </header>

      <section className="products-grid">
        <ProductCard
          name="Teclado Mecânico Compacto"
          price={79.9}
          category="Periféricos"
          image="https://placehold.co/400x240/1e293b/f8fafc?text=Teclado+Mecanico"
          variant="default"
        />

        <ProductCard
          name="Monitor Ultrawide 34''"
          price={349.0}
          category="Monitores"
          image="https://placehold.co/400x240/0f766e/f0fdfa?text=Monitor+34"
          variant="featured"
        />

        <ProductCard
          name="Rato Sem Fios Ergonómico"
          price={45.5}
          category="Periféricos"
          image="https://placehold.co/400x240/334155/e2e8f0?text=Rato+Ergonomico"
          variant="compact"
        />

        <ProductCard
          name="Webcam Full HD 1080p"
          price={59.99}
          category="Acessórios"
          image="https://placehold.co/400x240/475569/f8fafc?text=Webcam+1080p"
          variant="default"
        />
      </section>
    </main>
  )
}

export default App