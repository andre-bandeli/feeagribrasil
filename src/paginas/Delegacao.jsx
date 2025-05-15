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
    nome: "Nátale Aparecida Ilidio da Silva",
    instituicao: "IFG - Campus Urataí",
    foto: Imagem1,
  },
  {
    nome: "Otávio Almeida Komiyama",
    instituicao: "Unicamp",
    foto: Imagem1,
  },
  {
    nome: "Laissa Regina de Oliveira Alves",
    instituicao: "IFSP - Campus Avaré",
    foto: Imagem1,
  },
  {
    nome: "Alison Miguel Martins de Araujo",
    instituicao: "Ufersa",
    foto: Imagem1,
  },
  {
    nome: "Cristiano Lázaro de Oliveira",
    instituicao: "UFLA",
    foto: Imagem1,
  },
  {
    nome: "Luiza Rodriguues da Silva",
    instituicao: "UFGO",
    foto: Imagem1,
  },
  {
    nome: "Maria Luiza Carvalho Teixeira",
    instituicao: "UFSM",
    foto: Imagem1,
  },
    {
    nome: "Laysa Passos de Souza",
    instituicao: "UFSB",
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
