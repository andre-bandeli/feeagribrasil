import React from 'react'
import userPlaceholder from '../../assets/user.jpg'

export default function CardMembro({ nome, instituicao, curso, cargo, sigla, foto }) {
  return (
    <div className="cardMembro">
      <div className="mb-card__top">
        <div className="mb-card__avatar-wrap">
          <img
            src={foto || userPlaceholder}
            alt={nome}
            className="fotoMembro"
            onError={e => { e.currentTarget.src = userPlaceholder }}
          />
        </div>
      </div>

      {/* <svg className="mb-card__wave" viewBox="0 0 200 32" preserveAspectRatio="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0,0 Q50,28 100,16 Q150,4 200,20 L200,32 L0,32 Z" />
        <path d="M0,0 Q50,28 100,16 Q150,4 200,20" className="mb-card__wave-line" />
      </svg> */}

      <div className="mb-card__body">
        <h4 className="mb-card__nome">{nome}</h4>
        {cargo && <span className="mb-card__cargo">{cargo}</span>}
        <div className="mb-card__divider" />
        {curso && <p className="mb-card__curso">{curso}</p>}
        {instituicao && (
          <div className="mb-card__inst">
            <span className="mb-card__inst-dot" />
            <span className="mb-card__inst-text">
              {sigla ? `${instituicao} (${sigla})` : instituicao}
            </span>
          </div>
        )}
      </div>
    </div>
  )
}