import { useState } from 'react'

const ContactPage = () => {
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (event) => {
    event.preventDefault()
    if (!name.trim() || !message.trim()) return
    setSent(true)
    setName('')
    setMessage('')
  }

  return (
    <section className="page-card">
      <h2>Contacto (<code>/contact</code>)</h2>
      <p>Envia uma mensagem através da rota de contacto.</p>

      <form onSubmit={handleSubmit} className="contact-form">
        <label htmlFor="contact-name">Nome</label>
        <input
          id="contact-name"
          type="text"
          value={name}
          onChange={(e) => {
            setName(e.target.value)
            setSent(false)
          }}
          placeholder="O teu nome"
          required
        />

        <label htmlFor="contact-message">Mensagem</label>
        <textarea
          id="contact-message"
          rows="4"
          value={message}
          onChange={(e) => {
            setMessage(e.target.value)
            setSent(false)
          }}
          placeholder="Escreve a tua mensagem..."
          required
        />

        <button type="submit" className="btn-primary">
          Enviar mensagem
        </button>
      </form>

      {sent && (
        <p className="success-msg" role="status">
          Mensagem enviada com sucesso!
        </p>
      )}
    </section>
  )
}

export default ContactPage