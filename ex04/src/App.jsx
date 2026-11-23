import CounterSection from './components/CounterSection'
import DynamicListSection from './components/DynamicListSection'

const App = () => {
  return (
    <main className="app-container">
      <header className="site-header">
        <h1>Módulo 04 — React (EX04 — State)</h1>
        <p>Gestão de estado com useState, eventos e atualização reativa da interface</p>
      </header>

      <CounterSection />
      <DynamicListSection />
    </main>
  )
}

export default App