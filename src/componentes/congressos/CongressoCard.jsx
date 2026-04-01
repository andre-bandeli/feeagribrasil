import { Link } from 'react-router-dom'

export default function CongressoCard({ congresso }) {
  const { id, numero_romano, titulo, descricao_curta, imagem_destaque } = congresso

  return (
    <article className="card">
      <div
        className="card__image"
        style={{
          backgroundImage: imagem_destaque
            ? `linear-gradient(rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url(${imagem_destaque})`
            : 'none',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
        role="img"
        aria-label={titulo}
      >
        <h2 className="card__edicao">{numero_romano}</h2>
      </div>
      <div className="card__body">
        <h3 className="card__title">{titulo}</h3>
        <p className="card__description">{descricao_curta}</p>
        <Link to={`/congressos/${id}`} className="yellow-btn">
          saiba mais
        </Link>
      </div>
    </article>
  )
}