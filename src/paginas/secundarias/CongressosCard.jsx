import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Header from '../../componentes/header/Header.jsx'
import Footer from '../../componentes/footer/Footer.jsx'
import { useCongressoDetalhe } from '../../hooks/useCongressos'
import '../../styles/CongressosPage.scss'
import '../../styles/SecundaryPage.scss'

function SkeletonLoader() {
  return (
    <div className="skeleton-wrapper">
      <div className="skeleton skeleton-hero" />
      <div className="skeleton-content">
        <div className="skeleton skeleton-title" />
        <div className="skeleton skeleton-subtitle" />
        <div className="skeleton skeleton-img" />
        <div className="skeleton skeleton-text" />
        <div className="skeleton skeleton-text short" />
      </div>
    </div>
  )
}

export default function CongressosPage() {
  const { slug } = useParams()
  const { congresso, isLoading, error } = useCongressoDetalhe(slug)

  if (isLoading) return (
    <div className="page-wrapper">
      <Header />
      <SkeletonLoader />
      <Footer />
    </div>
  )

  if (error || !congresso) return (
    <div className="page-wrapper">
      <Header />
      <div className="error-state">
        <div className="error-inner">
          <span className="error-code">404</span>
          <h1>Congresso não encontrado</h1>
          <p>O congresso que você procura não existe ou foi removido.</p>
          <Link to="/congressos" className="back-link">
            <span className="arrow">←</span> Voltar para congressos
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  )

  return (
    <div className="page-wrapper">
      <Header />

      {/* ── Hero Banner ── */}
      <section className="hero-banner">
        {congresso.imagem_destaque && (
          <img
            className="hero-bg"
            src={congresso.imagem_destaque}
            alt={congresso.titulo}
          />
        )}
        <div className="hero-overlay" />
        <div className="hero-content">
          <nav className="breadcrumb" aria-label="Breadcrumb">
            <Link to="/">Início</Link>
            <span>/</span>
            <Link to="/congressos">Congressos</Link>
            <span>/</span>
            <span>{congresso.numero_romano} CONEEAGRI</span>
          </nav>
          <h1 className="hero-title">{congresso.titulo}</h1>
          <p className="hero-subtitle">{congresso.descricao_curta}</p>
          <div className="hero-tag">{congresso.numero_romano} CONEEAGRI</div>
        </div>
      </section>

      {/* ── Main Content ── */}
      <main className="main-container">
        <div className="content-grid">

          {/* Article */}
          <article className="article-body">
            <header className="article-header">
              <h2 className="article-title">
                {congresso.numero_romano} CONEEAGRI
              </h2>
              <div className="article-divider" />
            </header>
            <div
              className="article-html"
              dangerouslySetInnerHTML={{ __html: congresso.descricao_completa }}
            />
          </article>

          
        </div>
      </main>

      <Footer />
    </div>
  )
}