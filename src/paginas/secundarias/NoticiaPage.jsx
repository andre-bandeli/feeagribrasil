import React from 'react'
import { useParams, Link } from 'react-router-dom'
import useSWR from 'swr'
import api from '../../lib/api'
import Header from '../../componentes/header/Header'
import Footer from '../../componentes/footer/Footer'
import '../../paginas/noticias/NoticiaPage.scss'

const fetcher = url => api.get(url).then(r => r.data)

function formatarData(data) {
  return new Date(data).toLocaleDateString('pt-BR', {
    day: '2-digit',
    month: 'long',
    year: 'numeric',
  })
}

function NoticiaLoading() {
  return (
    <div className="noticia-page">
      <Header />
      <main className="noticia-page__main">
        <div className="noticia-page__skeleton">
          <div className="skeleton skeleton--hero" />
          <div className="skeleton skeleton--title" />
          <div className="skeleton skeleton--meta" />
          <div className="skeleton skeleton--body" />
          <div className="skeleton skeleton--body skeleton--body--short" />
        </div>
      </main>
      <Footer />
    </div>
  )
}

function NoticiaNotFound() {
  return (
    <div className="noticia-page">
      <Header />
      <main className="noticia-page__main noticia-page__main--empty">
        <p className="noticia-page__not-found-label">404</p>
        <h1 className="noticia-page__not-found-title">Notícia não encontrada</h1>
        <p className="noticia-page__not-found-sub">
          O conteúdo que você buscou não existe ou foi removido.
        </p>
        <Link to="/congressos" className="noticia-page__back-btn">
          ← Voltar para eventos
        </Link>
      </main>
      <Footer />
    </div>
  )
}

export default function NoticiaPage() {
  const { slug } = useParams()

  const { data: noticia, error, isLoading } = useSWR(
    slug ? `/noticias/${slug}/` : null,
    fetcher,
    { revalidateOnFocus: false, shouldRetryOnError: false }
  )

  if (isLoading) return <NoticiaLoading />
  if (error || !noticia) return <NoticiaNotFound />

  return (
    <div className="noticia-page">
      <Header />

      {noticia.imagem_capa && (
        <div className="noticia-page__hero">
          <img
            src={noticia.imagem_capa}
            alt={noticia.titulo}
            className="noticia-page__hero-img"
          />
          <div className="noticia-page__hero-overlay" />
        </div>
      )}

      <main className="noticia-page__main">
        <article className="noticia-page__article">

          <header className="noticia-page__header">
            <Link to="/congressos" className="noticia-page__back">
              ← Eventos
            </Link>

            {noticia.congresso && (
              <span className="noticia-page__tag">
                {noticia.congresso_nome ?? 'CONEEAGRI'}
              </span>
            )}

            <h1 className="noticia-page__title">{noticia.titulo}</h1>

            {noticia.chamada && (
              <p className="noticia-page__chamada">{noticia.chamada}</p>
            )}

            <div className="noticia-page__meta">
              <time className="noticia-page__date" dateTime={noticia.data_publicacao}>
                {formatarData(noticia.data_publicacao)}
              </time>
            </div>

            <div className="noticia-page__divider" aria-hidden="true" />
          </header>

          <div
            className="noticia-page__content"
            dangerouslySetInnerHTML={{ __html: noticia.conteudo }}
          />

          <footer className="noticia-page__footer">
            <Link to="/congressos" className="noticia-page__back-btn">
              ← Voltar para eventos
            </Link>
          </footer>

        </article>
      </main>

      <Footer />
    </div>
  )
}