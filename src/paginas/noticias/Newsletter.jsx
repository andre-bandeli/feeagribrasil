import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../componentes/header/Header'
import Footer from '../../componentes/footer/Footer'
import NewsletterComponent from '../../componentes/noticias/NewsletterComponent'
import { useNewsletter } from '../../hooks/useNewsletter'
import './Newsletter.scss'

const SKELETON_COUNT = 6

// Ícone decorativo para placeholder de imagem
function FieldIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
      <path d="M6 36 C12 28 18 20 24 20 C30 20 36 28 42 36" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
      <path d="M24 20 L24 10 M18 16 L24 10 L30 16" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="24" cy="10" r="2" fill="currentColor" opacity="0.5" />
    </svg>
  )
}

function NewsletterSkeleton() {
  return (
    <div className="nl-skel" aria-hidden="true">
      <div className="nl-skel__img" />
      <div className="nl-skel__body">
        <div className="nl-skel__line nl-skel__line--short" />
        <div className="nl-skel__line nl-skel__line--long" />
        <div className="nl-skel__line nl-skel__line--medium" />
        <div className="nl-skel__line nl-skel__line--full" />
        <div className="nl-skel__line nl-skel__line--medium" />
      </div>
    </div>
  )
}

export default function Newsletter() {
  const { newsletters, total, isLoading, error } = useNewsletter({ limit: 100 })

  return (
    <div className="nl-page">
      <Header />

      {/* ── Hero ────────────────────────────────────────────────────────── */}
      <section className="nl-hero" aria-label="Cabeçalho da página de newsletter">
        <span className="nl-hero__wm" aria-hidden="true">NL</span>
        <div className="nl-hero__overlay" />
        <div className="nl-hero__content">
          <span className="nl-hero__eyebrow">Canal de Comunicação</span>
          <h1 className="nl-hero__title">Newsletter<br />FEEAGRI</h1>
          <p className="nl-hero__sub">
            O canal direto com estudantes e profissionais de Engenharia Agrícola.
            CONEEAGRI, estágios, pesquisa, eventos e tudo que move nossa área — em cada edição.
          </p>
          <div className="nl-hero__line" aria-hidden="true" />
        </div>
      </section>

      {/* ── Intro ───────────────────────────────────────────────────────── */}
      <section className="nl-intro" aria-label="Sobre a newsletter">
        <div className="nl-intro__inner">
          <p className="nl-intro__lead">
            Da lavoura ao laboratório — cada edição reúne o que há de mais
            relevante no agronegócio, na academia e na comunidade estudantil
            de Engenharia Agrícola do Brasil.
          </p>
          <div className="nl-intro__meta">
            <div className="nl-intro__stat">
              <span className="nl-intro__stat-num">
                {isLoading ? '—' : total > 0 ? `${total}` : '—'}
              </span>
              <span className="nl-intro__stat-txt">Edições publicadas</span>
            </div>
            <div className="nl-intro__stat">
              <span className="nl-intro__stat-num">+40</span>
              <span className="nl-intro__stat-txt">Universidades alcançadas</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Grid de publicações ─────────────────────────────────────────── */}
      <main className="nl-main">
        <span className="nl-section-label">Arquivo de publicações</span>
        <h2 className="nl-section-title">Todas as edições</h2>

        {error && (
          <p className="nl-msg nl-msg--erro" role="alert">
            Não foi possível carregar as publicações. Tente novamente mais tarde.
          </p>
        )}

        <div className="nl-grid">
          {isLoading
            ? Array.from({ length: SKELETON_COUNT }, (_, i) => (
                <NewsletterSkeleton key={i} />
              ))
            : newsletters.map(nl => (
                <Link
                  key={nl.id ?? nl.slug}
                  to={`/newsletter/${nl.slug}`}
                  className="nl-card"
                  aria-label={`Edição #${nl.numero}: ${nl.titulo}`}
                >
                  <div className="nl-card__img">
                    {nl.imagem_capa
                      ? <img src={nl.imagem_capa} alt={nl.titulo} loading="lazy" />
                      : (
                        <div className="nl-card__img-placeholder">
                          <FieldIcon />
                        </div>
                      )
                    }
                    <span className="nl-card__num">#{nl.numero}</span>
                  </div>
                  <div className="nl-card__body">
                    <time className="nl-card__date" dateTime={nl.data_publicacao}>
                      {new Date(nl.data_publicacao).toLocaleDateString('pt-BR', {
                        day: '2-digit',
                        month: 'short',
                        year: 'numeric',
                      })}
                    </time>
                    <h3 className="nl-card__title">{nl.titulo}</h3>
                    {nl.chamada && (
                      <p className="nl-card__chamada">{nl.chamada}</p>
                    )}
                    <span className="nl-card__cta" aria-hidden="true">
                      Ler edição →
                    </span>
                  </div>
                </Link>
              ))
          }
        </div>

        {!isLoading && !error && newsletters.length === 0 && (
          <p className="nl-msg">Nenhuma publicação disponível no momento.</p>
        )}
      </main>

      {/* ── Inscrição newsletter ────────────────────────────────────────── */}
      <section className="nl-subscribe" aria-label="Inscreva-se na newsletter">
        <div className="nl-subscribe__bg" aria-hidden="true" />
        <div className="nl-subscribe__inner">
          <div className="nl-subscribe__text">
            <span className="nl-subscribe__label">Fique por dentro</span>
            <h2 className="nl-subscribe__heading">
              Receba cada edição<br />diretamente no seu e-mail
            </h2>
            <p className="nl-subscribe__body">
              Notícias do CONEEAGRI, oportunidades de estágio, chamadas de trabalhos,
              cursos e tudo que movimenta a Engenharia Agrícola nacional — sem custo,
              sem spam.
            </p>
          </div>
          <div className="nl-subscribe__glass">
            <NewsletterComponent />
          </div>
        </div>
      </section>

      <Footer />
    </div>
  )
}