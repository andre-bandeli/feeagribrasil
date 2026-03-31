import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../componentes/header/Header'
import Footer from '../../componentes/footer/Footer'
import { useParceiros } from '../../hooks/useParceiros'
import './Parceiros.scss'

const TIPO_LABELS = {
  institucional: 'Institucional',
  empresarial:   'Empresarial',
  academico:     'Acadêmico',
  apoio:         'Apoio',
}

// Ordem de exibição das seções
const TIPO_ORDER = ['institucional', 'academico', 'empresarial', 'apoio']

function ParceiroSkeleton() {
  return (
    <div className="pc-skel" aria-hidden="true">
      <div className="pc-skel__logo" />
      <div className="pc-skel__line pc-skel__line--title" />
      <div className="pc-skel__line pc-skel__line--sub" />
    </div>
  )
}

function ParceiroCard({ parceiro }) {
  const CardWrapper = parceiro.site
    ? ({ children }) => (
        
          <a href={parceiro.site}
          target="_blank"
          rel="noopener noreferrer"
          className="pc-card"
          aria-label={`Visitar site de ${parceiro.nome}`}
        >
          {children}
        </a>
      )
    : ({ children }) => <div className="pc-card pc-card--no-link">{children}</div>

  return (
    <CardWrapper>
      <div className="pc-card__logo">
        {parceiro.logo
          ? <img src={parceiro.logo} alt={`Logo ${parceiro.nome}`} loading="lazy" />
          : (
            <span className="pc-card__sigla">
              {parceiro.sigla || parceiro.nome.slice(0, 3).toUpperCase()}
            </span>
          )
        }
      </div>
      <div className="pc-card__body">
        <h3 className="pc-card__nome">
          {parceiro.sigla
            ? <><strong>{parceiro.sigla}</strong><span>{parceiro.nome}</span></>
            : parceiro.nome
          }
        </h3>
        {parceiro.descricao && (
          <p className="pc-card__desc">{parceiro.descricao}</p>
        )}
      </div>
      {parceiro.site && (
        <span className="pc-card__cta" aria-hidden="true">
          Visitar site →
        </span>
      )}
    </CardWrapper>
  )
}

export default function Parceiros() {
  const { porTipo, total, isLoading, error } = useParceiros()

  const tiposAtivos = TIPO_ORDER.filter(t => porTipo[t]?.length > 0)

  return (
    <div className="pc-page">
      <Header />

      {/* ── Hero ──────────────────────────────────────────────────────── */}
      <section className="pc-hero" aria-label="Cabeçalho da página de parceiros">
        <span className="pc-hero__wm" aria-hidden="true">P</span>
        <div className="pc-hero__overlay" />
        <div className="pc-hero__content">
          <span className="pc-hero__eyebrow">Rede de Apoio</span>
          <h1 className="pc-hero__title">Nossos<br />Parceiros</h1>
          <p className="pc-hero__sub">
            Organizações e instituições que compartilham nossa visão e nos ajudam
            a construir uma engenharia agrícola mais forte em todo o Brasil.
          </p>
          <div className="pc-hero__line" aria-hidden="true" />
        </div>
      </section>

      {/* ── Intro ─────────────────────────────────────────────────────── */}
      <section className="pc-intro" aria-label="Sobre os parceiros">
        <div className="pc-intro__inner">
          <p className="pc-intro__lead">
            Da pesquisa ao campo — nossa rede de parceiros fortalece a formação
            profissional e amplia as oportunidades para estudantes e engenheiros
            agrícolas de todo o país.
          </p>
          <div className="pc-intro__meta">
            <div className="pc-intro__stat">
              <span className="pc-intro__stat-num">
                {isLoading ? '—' : total > 0 ? total : '—'}
              </span>
              <span className="pc-intro__stat-txt">Parceiros ativos</span>
            </div>
            <div className="pc-intro__stat">
              <span className="pc-intro__stat-num">
                {isLoading ? '—' : tiposAtivos.length || '—'}
              </span>
              <span className="pc-intro__stat-txt">Categorias</span>
            </div>
          </div>
        </div>
      </section>

      {/* ── Conteúdo principal ────────────────────────────────────────── */}
      <main className="pc-main">

        {error && (
          <p className="pc-msg pc-msg--erro" role="alert">
            Não foi possível carregar os parceiros. Tente novamente mais tarde.
          </p>
        )}

        {/* Skeletons */}
        {isLoading && (
          <div className="pc-section">
            <div className="pc-grid">
              {Array.from({ length: 6 }, (_, i) => <ParceiroSkeleton key={i} />)}
            </div>
          </div>
        )}

        {/* Seções por tipo */}
        {!isLoading && !error && tiposAtivos.map(tipo => (
          <section key={tipo} className="pc-section" aria-label={`Parceiros ${TIPO_LABELS[tipo]}`}>
            <div className="pc-section__header">
              <span className="pc-section__label">{TIPO_LABELS[tipo]}</span>
              <div className="pc-section__line" aria-hidden="true" />
            </div>
            <div className="pc-grid">
              {porTipo[tipo].map(p => (
                <ParceiroCard key={p.id} parceiro={p} />
              ))}
            </div>
          </section>
        ))}

        {!isLoading && !error && tiposAtivos.length === 0 && (
          <p className="pc-msg">Nenhum parceiro cadastrado no momento.</p>
        )}
      </main>

      <Footer />
    </div>
  )
}