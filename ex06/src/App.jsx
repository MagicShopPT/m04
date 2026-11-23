import { useEffect, useState } from 'react'

const API_URL = 'https://jsonplaceholder.typicode.com/posts?_limit=6'

const App = () => {
  const [status, setStatus] = useState('loading') // 'loading' | 'success' | 'error'
  const [posts, setPosts] = useState([])
  const [errorMessage, setErrorMessage] = useState('')
  const [reloadTick, setReloadTick] = useState(0)

  useEffect(() => {
    const controller = new AbortController()

    const fetchPosts = async () => {
      setStatus('loading')
      setErrorMessage('')

      try {
        const response = await fetch(API_URL, { signal: controller.signal })

        if (!response.ok) {
          throw new Error(`Erro HTTP ${response.status} ao comunicar com a API.`)
        }

        const data = await response.json()
        setPosts(data)
        setStatus('success')
      } catch (err) {
        if (err.name === 'AbortError') return
        setErrorMessage(err.message || 'Ocorreu um erro ao obter os dados.')
        setStatus('error')
      }
    }

    fetchPosts()

    return () => controller.abort()
  }, [reloadTick])

  const handleReload = () => {
    setReloadTick((prev) => prev + 1)
  }

  return (
    <main className="app-container">
      <header className="site-header">
        <h1>Módulo 04 — React (EX06 — useEffect)</h1>
        <p>Consumo de API com useEffect, useState e fetch (estados: loading, success, error)</p>
      </header>

      <section className="api-panel">
        <div className="panel-top">
          <span className={`status-badge status-badge--${status}`}>
            Estado atual: <strong>{status}</strong>
          </span>

          <button type="button" onClick={handleReload} className="btn-reload">
            Recarregar dados
          </button>
        </div>

        {status === 'loading' && (
          <div className="feedback-box feedback-loading" role="status">
            <p>A carregar dados da API...</p>
          </div>
        )}

        {status === 'error' && (
          <div className="feedback-box feedback-error" role="alert">
            <strong>Falha ao carregar dados</strong>
            <p>{errorMessage}</p>
          </div>
        )}

        {status === 'success' && (
          <div className="posts-grid">
            {posts.map((post) => (
              <article key={post.id} className="post-card">
                <span className="post-id">Post #{post.id}</span>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </article>
            ))}
          </div>
        )}
      </section>
    </main>
  )
}

export default App