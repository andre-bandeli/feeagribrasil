import React from 'react'
import { Link } from 'react-router-dom'

import Header from '../../componentes/header/Header'
import Footer from '../../componentes/footer/Footer'
import CardMembro from '../../componentes/membros/CardMembro'
import { useGestaoAtiva } from '../../hooks/useMembros'

import '../../componentes/header/HeaderSecundario.scss'
import '../../styles/buttons.scss'
import './Membros.scss'

export default function Membros() {
  const { gestao, membros, isLoading, error } = useGestaoAtiva()

  return (
    <div>
      <Header />

      <div className="HeaderSecundario">
        <div className="links">
          <h3>
            <Link to="/">Home</Link> | <Link to="/membros">Membros</Link>
          </h3>
        </div>
        <div className="container">
          <h2>Conselho Diretivo</h2>
          <p>Conheça as pessoas que contribuem para a consolidação da Federação.</p>
          <div className="btn">
            <button className="button_primary_members">
              <Link to="/membros/delegacao">Página de Delegados</Link>
            </button>
          </div>
        </div>
      </div>

      <main>
        <div className="containerCustom">
          <div className="container">
            <h2>{gestao ? `Gestão ${gestao.ano}` : 'Conselho Diretivo'}</h2>

            {isLoading && <p>Carregando membros...</p>}

            {!isLoading && error && (
              <p>Não foi possível carregar os membros. Tente novamente mais tarde.</p>
            )}

            {!isLoading && !error && membros.length === 0 && (
              <p>Nenhum membro cadastrado para esta gestão.</p>
            )}

            {!isLoading && !error && membros.length > 0 && (
              <div className="membros">
                {membros.map(membro => (
                  <CardMembro
                    key={membro.id}
                    nome={membro.nome}
                    instituicao={membro.instituicao}
                    cargo={membro.cargo_display}
                    foto={membro.foto}
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