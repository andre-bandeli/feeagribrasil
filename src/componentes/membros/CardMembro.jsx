import React from 'react'
import userPlaceholder from '../../assets/user.jpg'

/**
 * Props:
 *   nome        string  — obrigatório
 *   instituicao string
 *   cargo       string  — label legível vindo de cargo_display (conselho)
 *   sigla       string  — exibida entre parênteses após instituição (delegados)
 *   foto        string  — URL absoluta retornada pelo DRF (ou null)
 */
export default function CardMembro({ nome, instituicao, cargo, sigla, foto }) {
  return (
    <div className="cardMembro">
      <img
        src={foto || userPlaceholder}
        alt={nome}
        className="fotoMembro"
        onError={e => { e.currentTarget.src = userPlaceholder }}
      />
      <h4>{nome}</h4>
      {instituicao && (
        <p>{sigla ? `${instituicao} (${sigla})` : instituicao}</p>
      )}
      {cargo && <p>{cargo}</p>}
    </div>
  )
}