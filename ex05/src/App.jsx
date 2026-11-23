import { useState } from 'react'
import FormField from './components/FormField'

const initialForm = {
  name: '',
  email: '',
  password: '',
  confirmPassword: '',
}

const App = () => {
  const [formData, setFormData] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [submittedUser, setSubmittedUser] = useState(null)

  const handleChange = (event) => {
    const { name, value } = event.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))

    if (errors[name]) {
      setErrors((prev) => ({
        ...prev,
        [name]: '',
      }))
    }
  }

  const validate = (values) => {
    const nextErrors = {}

    if (!values.name.trim()) {
      nextErrors.name = 'O nome é obrigatório.'
    } else if (values.name.trim().length < 3) {
      nextErrors.name = 'O nome deve ter pelo menos 3 caracteres.'
    }

    if (!values.email.trim()) {
      nextErrors.email = 'O email é obrigatório.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
      nextErrors.email = 'Introduz um endereço de email válido.'
    }

    if (!values.password) {
      nextErrors.password = 'A palavra-passe é obrigatória.'
    } else if (values.password.length < 6) {
      nextErrors.password = 'A palavra-passe deve ter pelo menos 6 caracteres.'
    }

    if (!values.confirmPassword) {
      nextErrors.confirmPassword = 'Confirma a palavra-passe.'
    } else if (values.confirmPassword !== values.password) {
      nextErrors.confirmPassword = 'As palavras-passe não coincidem.'
    }

    return nextErrors
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    const validationErrors = validate(formData)

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors)
      setSubmittedUser(null)
      return
    }

    setErrors({})
    setSubmittedUser({
      name: formData.name.trim(),
      email: formData.email.trim(),
    })
    setFormData(initialForm)
  }

  return (
    <main className="app-container">
      <header className="site-header">
        <h1>Módulo 04 — React (EX05 — React Forms)</h1>
        <p>Formulário de registo com inputs controlados, validação e componente reutilizável</p>
      </header>

      <section className="form-card">
        <h2>Registo de Utilizador</h2>

        <form onSubmit={handleSubmit} noValidate>
          <FormField
            id="reg-name"
            label="Nome completo"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Ex.: Vitor Silva"
            error={errors.name}
          />

          <FormField
            id="reg-email"
            label="Email"
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="vitor@exemplo.pt"
            error={errors.email}
          />

          <FormField
            id="reg-password"
            label="Palavra-passe"
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            placeholder="Mínimo 6 caracteres"
            error={errors.password}
          />

          <FormField
            id="reg-confirm-password"
            label="Confirmar palavra-passe"
            type="password"
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
            placeholder="Repete a palavra-passe"
            error={errors.confirmPassword}
          />

          <button type="submit" className="btn-submit">
            Registar
          </button>
        </form>

        {submittedUser && (
          <div className="success-box" role="status">
            <strong>Registo concluído com sucesso!</strong>
            <p>
              Nome: <strong>{submittedUser.name}</strong> | Email:{' '}
              <strong>{submittedUser.email}</strong>
            </p>
          </div>
        )}
      </section>
    </main>
  )
}

export default App