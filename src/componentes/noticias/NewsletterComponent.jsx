import React from 'react'
import { FaWhatsapp } from 'react-icons/fa'
import './NewsletterComponent.scss'

const WHATSAPP_LINK = 'https://chat.whatsapp.com/CB7qtzHP03513bX9GK4pJ5?mode=ems_wa_c'

// variant="glass"  → usado dentro do nl-subscribe__glass (newsletter page)
// variant="default" → usado na home e outros contextos
export default function NewsletterComponent({ variant = 'default' }) {
  return (
    <div className={`nlc nlc--${variant}`}>
      <span className="nlc__label">Comunidade</span>

      <p className="nlc__heading">
        Entre no grupo<br />do WhatsApp
      </p>

      <p className="nlc__body">
        Novidades agrícolas, estágios, eventos e conexões com estudantes
        e profissionais de todo o Brasil — tudo em um só lugar.
      </p>

      
       <a href={WHATSAPP_LINK}
        target="_blank"
        rel="noopener noreferrer"
        className="nlc__btn"
        aria-label="Entrar no grupo do WhatsApp da FEEAGRI"
      >
        <FaWhatsapp className="nlc__btn-icon" aria-hidden="true" />
        Entrar no grupo
      </a>

      <p className="nlc__fine">Gratuito · Sem spam · Sai quando quiser</p>
    </div>
  )
}