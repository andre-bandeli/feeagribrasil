import React from 'react'
import { Link } from 'react-router-dom'
import { useNoticiaDestaque } from '../../hooks/useCongressos'

export default function NoticiaDestaque() {
  const { noticia, isLoading } = useNoticiaDestaque()

  if (isLoading || !noticia) return null

  return (
    <section className="noticia-destaque">
      <div className="noticia-destaque__inner">
        {noticia.imagem_capa && (
          <img
            className="noticia-destaque__imagem"
            src={noticia.imagem_capa}
            alt={noticia.titulo}
          />
        )}
        <div className="noticia-destaque__conteudo">
          <span className="noticia-destaque__tag">Novidade</span>
          <h2 className="noticia-destaque__titulo">{noticia.titulo}</h2>
          <p className="noticia-destaque__chamada">{noticia.chamada}</p>
          <Link to={`/noticias/${noticia.slug}`} className="yellow-btn">
            leia mais
          </Link>
        </div>
      </div>
    </section>
  )
}