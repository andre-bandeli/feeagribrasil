import React, { useState, useEffect } from 'react'
import { useProximoCongresso } from '../../hooks/useCongressos'

function CountdownBox({ value, label }) {
  return (
    <div className="countdown__box">
      <span className="countdown__value">{String(value).padStart(2, '0')}</span>
      <span className="countdown__label">{label}</span>
    </div>
  )
}

function calcularContagem(dataInicio) {
  const agora = new Date()
  const alvo = new Date(dataInicio)
  const diff = Math.max(alvo - agora, 0)

  return {
    dias: Math.floor(diff / (1000 * 60 * 60 * 24)),
    horas: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutos: Math.floor((diff / (1000 * 60)) % 60),
    segundos: Math.floor((diff / 1000) % 60),
  }
}


export default function CongressoDestaque({ imagemFallback }) {
  const { congresso, isLoading } = useProximoCongresso()
  const [contagem, setContagem] = useState(null)   // ← sem React.

  useEffect(() => {                                  // ← sem React.
    if (!congresso?.data_inicio) return
    const atualizar = () => setContagem(calcularContagem(congresso.data_inicio))
    atualizar()
    const timer = setInterval(atualizar, 1000)
    return () => clearInterval(timer)
  }, [congresso?.data_inicio])

  if (isLoading || !congresso) return null

  const BASE_URL = (process.env.REACT_APP_API_URL || '').replace('/api/v1', '')
  const imagem = congresso.imagem_destaque
    ? `${BASE_URL}${congresso.imagem_destaque}`
    : imagemFallback
  return (
    <section className="featuredSec-main">
      <div className="featuredSec-main-content">
        <h3>O EVENTO</h3>
        <h2>Conexão entre estudantes e profissionais de todo o país.</h2>
        <p>
          O CONEEAGRI é o espaço onde a Engenharia Agrícola, Ambiental e de
          Biossistemas se encontra. A cada edição, uma nova sede, novos
          aprendizados e o fortalecimento da nossa rede estudantil.
        </p>
        {contagem && (
          <div className="countdown" aria-label="Contagem regressiva">
            <CountdownBox value={contagem.dias}    label="dias"     />
            <CountdownBox value={contagem.horas}   label="horas"    />
            <CountdownBox value={contagem.minutos} label="minutos"  />
            <CountdownBox value={contagem.segundos} label="segundos"/>
          </div>
        )}
        <p className="featured__local">{congresso.local_completo}</p>
      </div>
      <img src={imagem} alt={congresso.titulo} loading="lazy" />
    </section>
  )
}