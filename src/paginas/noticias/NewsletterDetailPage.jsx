// src/paginas/noticias/NewsletterDetailPage.jsx
import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Header from '../../componentes/header/Header'
import Footer from '../../componentes/footer/Footer'
import { useNewsletterPost } from '../../hooks/useNewsletterPost'
import './NewsletterDetail.scss'

export default function NewsletterDetailPage() {
  const { slug } = useParams()
  const { post, isLoading, error } = useNewsletterPost(slug)

  return (
    <div className="nld-page">
      <Header />

      <main className="nld-main">
        {/* ── Breadcrumb ─────────────────────────────── */}
        <nav className="nld-breadcrumb" aria-label="Navegação">
          <Link to="/newsletter">← Todas as edições</Link>
        </nav>

        {/* ── Loading skeleton ───────────────────────── */}
        {isLoading && (
          <div className="nld-skeleton" aria-busy="true" aria-label="Carregando edição">
            <div className="nld-skeleton__hero" />
            <div className="nld-skeleton__body">
              {[80, 55, 90, 65, 95, 70].map((w, i) => (
                <div key={i} className="nld-skeleton__line" style={{ width: `${w}%` }} />
              ))}
            </div>
          </div>
        )}

        {/* ── Erro ───────────────────────────────────── */}
        {error && !isLoading && (
          <div className="nld-error" role="alert">
            <p>Não foi possível carregar esta edição.</p>
            <Link to="/newsletter">Voltar para o arquivo</Link>
          </div>
        )}

        {/* ── Conteúdo ───────────────────────────────── */}
        {post && !isLoading && (
          <article className="nld-article">
            {/* Cabeçalho */}
            <header className="nld-header">
              <span className="nld-header__num">Edição #{post.numero}</span>
              <h1 className="nld-header__title">{post.titulo}</h1>
              {post.chamada && (
                <p className="nld-header__chamada">{post.chamada}</p>
              )}
              <time className="nld-header__date" dateTime={post.data_publicacao}>
                {new Date(post.data_publicacao).toLocaleDateString('pt-BR', {
                  day: '2-digit', month: 'long', year: 'numeric',
                })}
              </time>
            </header>

            {/* Imagem de capa */}
            {post.imagem_capa && (
              <figure className="nld-cover">
                <img src={post.imagem_capa} alt={post.titulo} />
              </figure>
            )}

            {/*
              ── Corpo do conteúdo ─────────────────────────────────────────────
              ⚠️  ADAPTE conforme o formato da sua API:

              A) HTML bruto  → use dangerouslySetInnerHTML (padrão abaixo)
              B) Markdown    → use uma lib como react-markdown
              C) Blocos JSON → mapeie cada bloco para o componente correto
            */}
            <div
              className="nld-content"
              dangerouslySetInnerHTML={{ __html: post.conteudo_html ?? post.conteudo ?? '' }}
            />

            {/* Rodapé do artigo */}
            <footer className="nld-footer">
              <Link to="/newsletter" className="nld-footer__back">
                ← Ver todas as edições
              </Link>
            </footer>
          </article>
        )}
      </main>

      <Footer />
    </div>
  )
}