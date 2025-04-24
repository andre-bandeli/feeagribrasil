import React from "react";
import "../styles/HeaderSecundario.scss";
import "../styles/Membros.scss";
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
import "../styles/buttons.scss";
import { Link } from "react-router-dom";

import Imagem1 from "../assets/user.jpg";

const DelegacaoData = [
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1,
  },
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1,
  },
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1,
  },
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1,
  },
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1,
  },
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1,
  },
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1,
  },
];

const exDelegacaoData = [
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1,
  },
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1,
  },
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1,
  },
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1,
  },
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1,
  },
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1,
  },
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1,
  },
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1,
  },
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1,
  },
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1,
  },
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1,
  },
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1,
  },
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1,
  },
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1,
  },
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1,
  },
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1,
  },
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1,
  },
  {
    nome: "João Silva",
    instituicao: "UFPR",
    cargo: "Presidente",
    foto: Imagem1,
  },
];

export default function Delegacao() {
  return (
    <div>
      <Header />
      <div className="HeaderSecundario">
        <div className="links">
          <h3>
            {" "}
            <a href="">Home</a> | <a href="">Delegacao</a>
          </h3>
        </div>
        <div className="container">
          <h2>Delegados</h2>
          <p>
            Conheça as pessoas que contribuem para a consolidação da Federação.
          </p>
          <div className="btn">
            <button className="button_primary_members">
              <Link to={`/membros/`} className="">
                Conselho Diretivo
              </Link>
            </button>
          </div>
        </div>
      </div>
      <main>
        <div className="containerCustom">
          <div className="container">
            <h2>Delegação 2025</h2>
            <div className="membros">
              {DelegacaoData.map((membro, index) => (
                <div key={index} className="cardMembro">
                  <img
                    src={membro.foto}
                    alt={membro.nome}
                    className="fotoMembro"
                  />
                  <h4>{membro.nome}</h4>
                  <p>{membro.instituicao}</p>
                  <p>{membro.cargo}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
