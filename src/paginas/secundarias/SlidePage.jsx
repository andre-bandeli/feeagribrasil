import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Header from '../../componentes/header/Header'
import Footer from '../../componentes/footer/Footer'
import slidesData from './slidesData'
import '../secundarias/Content.scss' // ← reutiliza o mesmo CSS

export default function SlidePage() {
  const { slug } = useParams()
  const slide = slidesData.find(s => s.slug === slug)

  if (!slide) {
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
        style={{ '--ct-bg': `url(${slide.img})` }}
        aria-label={slide.title}
      >
        <div className="ct-hero__overlay" />
        <div className="ct-hero__content">
          <nav className="ct-hero__breadcrumb" aria-label="Navegação">
            <Link to="/">Home</Link>
            <span aria-hidden="true"> / </span>
            <span>{slide.title}</span>
          </nav>
          {slide.spn && (
            <p className="ct-hero__spn">{slide.spn}</p>
          )}
          <h1 className="ct-hero__title">{slide.title}</h1>
          <p className="ct-hero__lead">{slide.content}</p>
          <div className="ct-hero__line" aria-hidden="true" />
        </div>
      </section>

      {/* ── Corpo do artigo ───────────────────────────────────────────── */}
      <main className="ct-main">
        <article className="ct-article">
          <h2 className="ct-article__title">{slide.titleTxt}</h2>
          <div className="ct-article__body">
            {[slide.text, slide.text2, slide.text3].filter(Boolean).map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </article>
      </main>

      <Footer />
    </div>
  )
}