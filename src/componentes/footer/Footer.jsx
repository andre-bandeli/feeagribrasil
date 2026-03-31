import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.scss'

const IconInstagram = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <rect x="2" y="2" width="20" height="20" rx="5" />
    <circle cx="12" cy="12" r="4" />
    <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" />
  </svg>
)

const IconLinkedIn = () => (
  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
    <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z" />
    <rect x="2" y="9" width="4" height="12" />
    <circle cx="4" cy="4" r="2" />
  </svg>
)

export default function Footer() {
  return (
    <footer className="ft">
      <div className="ft-top">
        <div className="ft-brand">
          <p className="ft-brand__name">FEEAGRI <strong>BRASIL</strong></p>
          <p className="ft-brand__desc">
            Representando os estudantes de Engenharia Agrícola, Ambiental e de
            Biossistemas de todo o Brasil desde nossa fundação.
          </p>
          <div className="ft-brand__badge">Federação ativa</div>
        </div>

        <div className="ft-col">
          <p className="ft-col__label">Institucional</p>
          <ul className="ft-col__list">
            <li><Link to="/conselho-diretivo">Faça parte do Conselho</Link></li>
            <li><Link to="/delegacao">Torne-se Delegado</Link></li>
          </ul>
        </div>

        <div className="ft-col">
          <p className="ft-col__label">Sobre Nós</p>
          <ul className="ft-col__list">
            <li><Link to="/about">História</Link></li>
            <li><Link to="/membros">Equipe</Link></li>
            <li><Link to="/congressos">Congressos</Link></li>
          </ul>
        </div>

        <div className="ft-col">
          <p className="ft-col__label">Redes Sociais</p>
          <div className="ft-social">
            <Link to="https://www.instagram.com/feeagri/" target="_blank" rel="noopener noreferrer">
              <IconInstagram /> Instagram FEEAGRI
            </Link>
            <Link to="https://www.instagram.com/coneeagri/" target="_blank" rel="noopener noreferrer">
              <IconInstagram /> Instagram CONEEAGRI
            </Link>
            <Link to="https://www.linkedin.com/company/feeagri-brasil/" target="_blank" rel="noopener noreferrer">
              <IconLinkedIn /> LinkedIn FEEAGRI
            </Link>
          </div>
        </div>
      </div>

      <div className="ft-bottom">
        <p className="ft-bottom__copy">
          &copy; {new Date().getFullYear()} FEEAGRI. Todos os direitos reservados.
          Website desenvolvido por{' '}
          <Link to="https://www.linkedin.com/in/andrebandeli/" target="_blank" rel="noopener noreferrer">
            andrebandeli
          </Link>.
        </p>
        <div className="ft-bottom__links">
          <Link to="/suporte">Suporte</Link>
          <a href="#contato">Contato</a>
          <a href="#feedback">Feedback</a>
        </div>
      </div>
    </footer>
  )
}