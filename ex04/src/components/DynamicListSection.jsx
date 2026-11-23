import { useState } from 'react'

const initialItems = [
  { id: 1, text: 'Estudar useState e event handling', category: 'Estudo', done: true },
  { id: 2, text: 'Preparar demo do EX04 no VS Code', category: 'Projeto', done: false },
]

const DynamicListSection = () => {
  const [items, setItems] = useState(initialItems)
  const [newItemText, setNewItemText] = useState('')
  const [selectedCategory, setSelectedCategory] = useState('Estudo')
  const [filterCategory, setFilterCategory] = useState('Todas')

  const handleTextChange = (event) => {
    setNewItemText(event.target.value)
  }

  const handleCategoryChange = (event) => {
    setSelectedCategory(event.target.value)
  }

  const handleAddItem = (event) => {
    event.preventDefault()
    const trimmed = newItemText.trim()
    if (!trimmed) return

    const nextItem = {
      id: Date.now(),
      text: trimmed,
      category: selectedCategory,
      done: false,
    }

    setItems(items.concat(nextItem))
    setNewItemText('')
  }

  const handleToggleItem = (id) => {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, done: !item.done } : item
      )
    )
  }

  const handleRemoveItem = (id) => {
    setItems(items.filter((item) => item.id !== id))
  }

  const visibleItems =
    filterCategory === 'Todas'
      ? items
      : items.filter((item) => item.category === filterCategory)

  return (
    <section className="card-box">
      <h2>2. Lista Dinâmica e Múltiplos Estados Relacionados</h2>

      <form onSubmit={handleAddItem} className="item-form">
        <input
          type="text"
          value={newItemText}
          onChange={handleTextChange}
          placeholder="Escreve um novo item..."
          aria-label="Novo item da lista"
        />

        <select
          value={selectedCategory}
          onChange={handleCategoryChange}
          aria-label="Categoria do novo item"
        >
          <option value="Estudo">Estudo</option>
          <option value="Projeto">Projeto</option>
          <option value="Revisão">Revisão</option>
        </select>

        <button type="submit">Adicionar</button>
      </form>

      <div className="filter-bar">
        <label htmlFor="filter-select">Filtrar por categoria:</label>
        <select
          id="filter-select"
          value={filterCategory}
          onChange={(event) => setFilterCategory(event.target.value)}
        >
          <option value="Todas">Todas ({items.length})</option>
          <option value="Estudo">Estudo</option>
          <option value="Projeto">Projeto</option>
          <option value="Revisão">Revisão</option>
        </select>
      </div>

      {visibleItems.length === 0 ? (
        <p className="empty-state">Sem itens para a categoria selecionada.</p>
      ) : (
        <ul className="dynamic-list">
          {visibleItems.map((item) => (
            <li key={item.id} className={item.done ? 'is-done' : ''}>
              <span className="item-main">
                <input
                  type="checkbox"
                  checked={item.done}
                  onChange={() => handleToggleItem(item.id)}
                />
                <span className="item-text">{item.text}</span>
                <span className="item-badge">{item.category}</span>
              </span>

              <button
                type="button"
                className="btn-remove"
                onClick={() => handleRemoveItem(item.id)}
              >
                Remover
              </button>
            </li>
          ))}
        </ul>
      )}
    </section>
  )
}

export default DynamicListSection