import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../../componentes/header/Header'
import Footer from '../../componentes/footer/Footer'
import CardMembro from '../../componentes/membros/CardMembro'
import { useGestaoAtiva } from '../../hooks/useMembros'

import '../../componentes/header/HeaderSecundario.scss'
import '../../styles/buttons.scss'
import './Membros.scss'

export default function Delegacao() {
  const { gestao, delegados, isLoading, error } = useGestaoAtiva()

  return (
    <div>
      <Header />

      <div className="HeaderSecundario">
        <div className="links">
          <h3>
            <Link to="/">Home</Link> | <Link to="/membros/delegacao">Delegação</Link>
          </h3>
        </div>
        <div className="container">
          <h2>Delegados</h2>
          <p>Conheça as pessoas que contribuem para a consolidação da Federação.</p>
          <div className="btn">
            <button className="button_primary_members">
              <Link to="/membros">Conselho Diretivo</Link>
            </button>
          </div>
        </div>
      </div>

      <main>
        <div className="containerCustom">
          <div className="container">
            <h2>{gestao ? `Delegação ${gestao.ano}` : 'Delegação'}</h2>

            {isLoading && <p>Carregando delegados...</p>}

            {!isLoading && error && (
              <p>Não foi possível carregar os delegados. Tente novamente mais tarde.</p>
            )}

            {!isLoading && !error && delegados.length === 0 && (
              <p>Nenhum delegado cadastrado para esta gestão.</p>
            )}

            {!isLoading && !error && delegados.length > 0 && (
              <div className="membros">
                {delegados.map(delegado => (
                  <CardMembro
                    key={delegado.id}
                    nome={delegado.nome}
                    instituicao={delegado.instituicao}
                    sigla={delegado.sigla}
                    foto={delegado.foto}
                  />
                ))}
              </div>
            )}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}