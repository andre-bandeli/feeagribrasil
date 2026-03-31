import React from "react";
import Header from "../componentes/header/Header";
import "../styles/Parceiros.scss";
import Footer from "../componentes/footer/Footer";
import { Link } from "react-router-dom";
import '../styles/buttons.scss'


export default function Parceiros() {
  return (
    <div>
      <Header />
      <div className="HeaderSecundario custom-background-parceiros">
        <div className="links">
          <h3>
          <Link to={`/`} className="">Home</Link> | <Link to={`/parceiros`} className="">Parceiros</Link>
          </h3>
        </div>
        <div className="container">
          <h2>Nossos Parceiros</h2>
          <p>
            Contamos com o apoio de organizações e instituições que compartilham
            nossa visão e valores, que nos ajudam a construir uma classe forte.
          </p>
        </div>
      </div>
      <main>
        <div className="parceiros parceiro1">
          <div className="text">
            <h2>ABEAG NACIONAL</h2>
            <p>Associação Brasileira dos Profissionais de Engenharia Agrícola</p>
            <button className="yellow-btn">
                              <Link
                                to={`https://abeag.org.br/`}
                                className="Hero__button"
                                target='_blank'
                              >
                                saiba mais
                              </Link>
                            </button>
          </div>
        </div>
        <div className="parceiros parceiro2">
          <div className="text">
            <h2>ABEAG PR</h2>
            <p>Associação Brasileira dos Profissionais de Engenharia Agrícola do Paraná</p>
          <button className="yellow-btn">
                            <Link
                              to={`https://www.instagram.com/abeagpr/`}
                              className="Hero__button"
                              target='_blank'
                            >
                              saiba mais
                            </Link>
                          </button>
          </div>
        </div>
        <div className="parceiros parceiro3">
          <div className="text">
            <h2>SBEA</h2>
            <p>Associação Brasileira de Engenharia Agrícola</p>
          <button className="yellow-btn">
                            <Link
                              to={'https://www.sbea.org.br/'}
                              className="Hero__button"
                              target='_blank'
                    
                            >
                              saiba mais
                            </Link>
                          </button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
