import React, { useState } from 'react'
import './ContatoForm.scss'

const ContatoForms = () => {
  const [formData, setFormData] = useState({ email: '', telefone: '', mensagem: '' })
  const [status, setStatus] = useState(null)
  const [isLoading, setIsLoading] = useState(false)

  const handleChange = e =>
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }))

  const handleSubmit = async e => {
    e.preventDefault()
    setIsLoading(true)
    setStatus(null)
    try {
      const response = await fetch(
        'https://apifeeagri-production.up.railway.app/newsletter/subscribe/',
        {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(formData),
        }
      )
      const data = await response.json()
      if (response.ok) {
        setStatus({ type: 'success', message: data.message || 'Mensagem enviada com sucesso!' })
        setFormData({ email: '', telefone: '', mensagem: '' })
        setTimeout(() => setStatus(null), 4000)
      } else {
        setStatus({ type: 'error', message: data.message || 'Erro ao enviar. Tente novamente.' })
      }
    } catch {
      setStatus({ type: 'error', message: 'Erro de conexão. Verifique sua internet.' })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <section className="cf-section ix-contato" aria-label="Formulário de contato">
      <div className="cf-inner ix-container">

        {/* ── Texto ── */}
        <div className="cf-text">
          <span className="ix-label ix-label--light">Fale conosco</span>
          <h2 className="ix-heading ix-heading--light">
            Entre em Contato
          </h2>
          <p className="cf-text__body">
            Tem alguma dúvida, sugestão ou quer saber mais sobre nossas
            atividades? Envie uma mensagem — respondemos em breve.
          </p>

          <ul className="cf-info" aria-label="Canais de contato">
            <li className="cf-info__item">
              <span className="cf-info__icon" aria-hidden="true">✉</span>
              <span>feeagri@feeagri.org.br</span>
            </li>
            <li className="cf-info__item">
              <span className="cf-info__icon" aria-hidden="true">📍</span>
              <span>Brasil — atuação nacional</span>
            </li>
          </ul>
        </div>

        {/* ── Formulário ── */}
        <div className="cf-card">
          <h3 className="cf-card__title">Envie uma mensagem</h3>

          <form className="cf-form" onSubmit={handleSubmit} noValidate>
            <div className="cf-form__group">
              <label className="cf-form__label" htmlFor="email">E-mail</label>
              <input
                className="cf-form__input"
                type="email"
                id="email"
                name="email"
                placeholder="seu@email.com"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="cf-form__group">
              <label className="cf-form__label" htmlFor="telefone">Telefone</label>
              <input
                className="cf-form__input"
                type="tel"
                id="telefone"
                name="telefone"
                placeholder="(00) 00000-0000"
                value={formData.telefone}
                onChange={handleChange}
              />
            </div>

            <div className="cf-form__group">
              <label className="cf-form__label" htmlFor="mensagem">Mensagem</label>
              <textarea
                className="cf-form__input cf-form__input--textarea"
                id="mensagem"
                name="mensagem"
                rows="5"
                placeholder="Escreva sua mensagem..."
                value={formData.mensagem}
                onChange={handleChange}
                required
              />
            </div>

            <button
              type="submit"
              className="cf-form__btn"
              disabled={isLoading}
              aria-busy={isLoading}
            >
              {isLoading ? 'Enviando...' : 'Enviar mensagem'}
            </button>
          </form>

          {status && (
            <div
              className={`cf-status cf-status--${status.type}`}
              role="alert"
            >
              {status.message}
            </div>
          )}
        </div>

      </div>
    </section>
  )
}

export default ContatoForms