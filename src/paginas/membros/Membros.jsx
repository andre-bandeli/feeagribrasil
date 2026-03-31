import React, { useState } from 'react'
import { Link } from 'react-router-dom'

import Header from '../../componentes/header/Header'
import Footer from '../../componentes/footer/Footer'
import CardMembro from '../../componentes/membros/CardMembro'
import { useTodasGestoes } from '../../hooks/useMembros'
import PageHero from '../../componentes/PageHero/PageHero'


import './Membros.scss'

const SKELETON_COUNT = 8

export default function Membros() {
  const { gestoes, isLoading, error } = useTodasGestoes()
  const [gestaoAtivaId, setGestaoAtivaId] = useState(null)

  const gestaoSelecionada =
    gestoes.find(g => g.id === gestaoAtivaId) ??
    gestoes.find(g => g.ativa) ??
    gestoes[0] ??
    null

  return (
    <div className="mb-page">
      <Header />

      <PageHero
        eyebrow="Federação dos Estudantes"
        title="Conselho Diretivo"
        subtitle="Conheça as pessoas que constroem a FEEAGRI — os representantes de cada gestão dedicados à federação dos estudantes de Engenharia Agrícola do Brasil."
        wm="MB"
      >
        <Link to="/membros/delegacao" className="mb-hero__btn">
          Ver delegados →
        </Link>
      </PageHero>

      <main className="mb-main">

        {!isLoading && !error && gestoes.length > 0 && (
          <section className="mb-nav">
            <span className="mb-nav__label">Gestões</span>
            <div className="mb-nav__pills" role="tablist">
              {gestoes.map(gestao => (
                <button
                  key={gestao.id}
                  role="tab"
                  aria-selected={gestaoSelecionada?.id === gestao.id}
                  className={[
                    'mb-nav__pill',
                    gestaoSelecionada?.id === gestao.id ? 'mb-nav__pill--on' : '',
                  ].join(' ')}
                  onClick={() => setGestaoAtivaId(gestao.id)}
                >
                  {gestao.ano}
                  {gestao.ativa && <span className="mb-nav__badge">atual</span>}
                </button>
              ))}
            </div>
          </section>
        )}

        {!isLoading && gestaoSelecionada && (
          <div className="mb-gestao-titulo">
            <p className="mb-gestao-titulo__label">
              {gestaoSelecionada.ativa ? '— Gestão atual' : '— Gestão'}
            </p>
            <h2 className="mb-gestao-titulo__heading">
              {gestaoSelecionada.nome ?? `Gestão ${gestaoSelecionada.ano}`}
            </h2>
          </div>
        )}

        <section className="mb-grid-wrap" role="tabpanel">
          {error && (
            <p className="mb-msg mb-msg--erro" role="alert">
              Não foi possível carregar os membros. Tente novamente mais tarde.
            </p>
          )}

          <div className="mb-grid">
            {isLoading
              ? Array.from({ length: SKELETON_COUNT }, (_, i) => (
                  <div key={i} className="mb-skel">
                    <div className="mb-skel__foto" />
                    <div className="mb-skel__linha mb-skel__linha--longa" />
                    <div className="mb-skel__linha mb-skel__linha--curta" />
                  </div>
                ))
              : gestaoSelecionada?.membros?.map(membro => (
                  <CardMembro
                    key={membro.id}
                    nome={membro.nome}
                    curso={membro.curso}
                    instituicao={membro.instituicao}
                    cargo={membro.cargo_display}
                    foto={membro.foto}
                  />
                ))}
          </div>

          {!isLoading && !error && gestaoSelecionada?.membros?.length === 0 && (
            <p className="mb-msg">Nenhum membro cadastrado para esta gestão.</p>
          )}
        </section>

      </main>

      <Footer />
    </div>
  )
}