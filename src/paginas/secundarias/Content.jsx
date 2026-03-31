import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Header from '../../componentes/header/Header'
import Footer from '../../componentes/footer/Footer'
import contentData from './contentData'
import './Content.scss'

export default function Content() {
  const { slug } = useParams()
  const card = contentData.find(c => c.slug === slug)

  if (!card) {
    return (
      <div className="ct-page">
        <Header />
        <div className="ct-notfound">
          <h1>Página não encontrada</h1>
          <Link to="/">← Voltar para o início</Link>
        </div>
        <Footer />
      </div>
    )
  }

  return (
    <div className="ct-page">
      <Header />

      {/* ── Hero com imagem de fundo ───────────────────────────────────── */}
      <section
        className="ct-hero"
        style={{ '--ct-bg': `url(${card.img})` }}
        aria-label={card.title}
      >
        <div className="ct-hero__overlay" />
        <div className="ct-hero__content">
          <nav className="ct-hero__breadcrumb" aria-label="Navegação">
            <Link to="/">Home</Link>
            <span aria-hidden="true"> / </span>
            <span>Atividades</span>
          </nav>
          <p className="ct-hero__spn">{card.spn}</p>
          <h1 className="ct-hero__title">{card.title}</h1>
          <p className="ct-hero__lead">{card.content}</p>
          <div className="ct-hero__line" aria-hidden="true" />
        </div>
      </section>

      {/* ── Corpo do artigo ───────────────────────────────────────────── */}
      <main className="ct-main">
        <article className="ct-article">
          <h2 className="ct-article__title">{card.titleTxt}</h2>

          <div className="ct-article__body">
            {[card.text, card.text2, card.text3].filter(Boolean).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}