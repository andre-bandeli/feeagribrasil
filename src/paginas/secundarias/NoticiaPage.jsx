import React from 'react'
import { useParams, Link } from 'react-router-dom'
import useSWR from 'swr'
import api from '../../lib/api'
import Header from '../../componentes/Header'
import Footer from '../../componentes/Footer'

const fetcher = url => api.get(url).then(r => r.data)

export default function NoticiaPage() {
  const { slug } = useParams()
  const { data: noticia, error, isLoading } = useSWR(
    slug ? `/noticias/${slug}/` : null,
    fetcher,
    { revalidateOnFocus: false }
  )

  if (isLoading) return (
    <div><Header /><div style={{ padding: '4rem', textAlign: 'center' }}>Carregando...</div><Footer /></div>
  )

  if (error || !noticia) return (
    <div><Header /><div style={{ padding: '4rem', textAlign: 'center' }}>
      <h1>Notícia não encontrada</h1>
      <Link to="/congressos">← Voltar</Link>
    </div><Footer /></div>
  )

  return (
    <div>
      <Header />
      <main style={{ width: '90%', maxWidth: '800px', margin: '4rem auto 8rem' }}>
        {noticia.imagem_capa && (
          <img src={noticia.imagem_capa} alt={noticia.titulo}
            style={{ width: '100%', height: '400px', objectFit: 'cover', borderRadius: '10px', marginBottom: '2rem' }} />
        )}
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: '2.2rem', lineHeight: 1.2 }}>
          {noticia.titulo}
        </h1>
        <p style={{ color: '#888', fontSize: '0.85rem', margin: '0.5rem 0 2rem' }}>
          {new Date(noticia.data_publicacao).toLocaleDateString('pt-BR', { day: '2-digit', month: 'long', year: 'numeric' })}
        </p>
        <div dangerouslySetInnerHTML={{ __html: noticia.conteudo }} />
        <Link to="/congressos" style={{ display: 'inline-block', marginTop: '3rem', color: '#5a9e6f' }}>
          ← Voltar para eventos
        </Link>
      </main>
      <Footer />
    </div>
  )
}