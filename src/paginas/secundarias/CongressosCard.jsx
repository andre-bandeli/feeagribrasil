import React from 'react'
import { useParams, Link } from 'react-router-dom'
import Header from '../../componentes/Header'
import Footer from '../../componentes/Footer'
import WidgetCongressos from '../../componentes/WidgetCongressos.jsx'
import { useCongressoDetalhe } from '../../hooks/useCongressos'
import '../../styles/CongressosPage.scss'
import '../../styles/SecundaryPage.scss'

export default function CongressosPage() {
  const { id } = useParams()
  const { slug } = useParams()
  const { congresso, isLoading, error } = useCongressoDetalhe(slug)

  console.log('slug:', slug)
  console.log('isLoading:', isLoading)
  console.log('error:', error)
  console.log('congresso:', congresso)

  if (isLoading) return (
    <div>
      <Header />
      <div className="containerSecundaryPage">
        <p>Carregando...</p>
      </div>
      <Footer />
    </div>
  )

  if (error || !congresso) return (
    <div>
      <Header />
      <div className="containerSecundaryPage">
        <h1>Congresso não encontrado</h1>
        <Link to="/congressos">← Voltar para congressos</Link>
      </div>
      <Footer />
    </div>
  )

  return (
    <div>
      <Header />
      <div className="secundaryPage"></div>
      <div className="containerSecundaryPage">
        <h2>{congresso.titulo}</h2>
        <h3>{congresso.descricao_curta}</h3>
        {congresso.imagem_destaque && (
          <img src={congresso.imagem_destaque} alt={congresso.titulo} />
        )}
        <div className="container">
          <div className="content">
            <h2>{congresso.numero_romano} CONEEAGRI</h2>
            <div dangerouslySetInnerHTML={{ __html: congresso.descricao_completa }} />
          </div>
          <div className="widgets">
            <WidgetCongressos />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}