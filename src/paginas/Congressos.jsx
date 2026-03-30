import React from 'react'
import Header from '../componentes/Header'
import Footer from '../componentes/Footer'
import CongressoCard from '../componentes/congressos/CongressoCard'
import CongressoDestaque from '../componentes/congressos/CongressoDestaque'
import CongressoSkeleton from '../componentes/congressos/CongressoSkeleton'
import NoticiaDestaque from '../componentes/congressos/NoticiaDestaque'
import { useCongressos } from '../hooks/useCongressos'
import FotoPelotas from '../assets/coneeagri/recente/foto6.jpg'

import '../styles/HeaderSecundario.scss'
import '../styles/Congressos.scss'
import '../styles/buttons.scss'

const SKELETON_COUNT = 6

export default function Congressos() {
  const { congressos, isLoading, error, usingFallback } = useCongressos()

  return (
    <div className="congressos-page">
      <Header />

      <section className="congressos-hero" aria-label="Cabeçalho da página de eventos">
        <div className="congressos-hero__overlay" />
        <div className="congressos-hero__content">
          <span className="congressos-hero__eyebrow">Ações Nacionais</span>
          <h1 className="congressos-hero__title">
            <span className="congressos-hero__title--outline">Memórias</span>
            <span className="congressos-hero__title--solid">CONEEAGRI</span>
          </h1>
          <p className="congressos-hero__subtitle">
            Nossa trajetória — conheça as edições que construíram a história do Congresso Nacional dos Estudantes de
            Engenharia Agrícola, Engenharia Agrícola e Ambiental e Engenharia de Biossistemas no Brasil.
          </p>
          <div className="congressos-hero__line" aria-hidden="true" />
        </div>
      </section>

      <main className="congressos-main">

        {/* Countdown + próximo congresso */}
        <section className="congressos-section congressos-section--featured" aria-label="Próximo congresso">
          <CongressoDestaque imagemFallback={FotoPelotas} />
        </section>

        {/* Notícia destaque */}
        <section className="congressos-section congressos-section--news" aria-label="Notícia em destaque">
          <NoticiaDestaque />
        </section>

        {/* Histórico de edições */}
        <section className="congressos-section congressos-section--grid" aria-label="Edições anteriores">
          <header className="congressos-section__header">
            <span className="congressos-section__label">Arquivo histórico</span>
            <h2 className="congressos-section__title">Edições anteriores</h2>
          </header>

          {usingFallback && (
            <p className="congressos-fallback-warning" role="status">
              Exibindo dados locais. Algumas informações podem estar desatualizadas.
            </p>
          )}

          {error && (
            <p className="congressos-error" role="alert">
              Não foi possível carregar os congressos. Tente novamente mais tarde.
            </p>
          )}

          <div className="congressos-grid">
            {isLoading
              ? Array.from({ length: SKELETON_COUNT }, (_, i) => (
                  <CongressoSkeleton key={i} />
                ))
              : congressos.map(congresso => (
                  <CongressoCard key={congresso.id} congresso={congresso} />
                ))}
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}