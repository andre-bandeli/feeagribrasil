import React from "react";
import Header from "../componentes/Header";
import "../styles/Parceiros.scss";
import abeag from "../assets/abeag.png";
import Footer from "../componentes/Footer";
import { Link } from "react-router-dom";

export default function Parceiros() {
  return (
    <div>
      <Header />
      <div className="HeaderSecundario">
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
          </div>
        </div>
        <div className="parceiros parceiro2">
          <div className="text">
            <h2>ABEAG PR</h2>
            <p>Associação Brasileira dos Profissionais de Engenharia Agrícola do Paraná</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
