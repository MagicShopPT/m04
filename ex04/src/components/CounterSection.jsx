import { useState } from 'react'

const CounterSection = () => {
  const [counter, setCounter] = useState(0)

  const handleIncrement = () => {
    setCounter(counter + 1)
  }

  const handleDecrement = () => {
    setCounter(counter - 1)
  }

  const handleReset = () => {
    setCounter(0)
  }

  return (
    <section className="card-box">
      <h2>1. Contador com useState</h2>
      <p className="counter-value" aria-live="polite">
        Valor atual: <strong>{counter}</strong>
      </p>

      <div className="button-group">
        <button type="button" onClick={handleIncrement}>
          Incrementar (+1)
        </button>
        <button type="button" onClick={handleDecrement}>
          Decrementar (-1)
        </button>
        <button type="button" onClick={handleReset}>
          Repor (0)
        </button>
      </div>
    </section>
  )
}

export default CounterSection