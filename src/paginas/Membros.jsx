import React from "react";
import "../styles/HeaderSecundario.scss";
import "../styles/Membros.scss";
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
import "../styles/buttons.scss";
import { Link } from "react-router-dom";

import Imagem1 from "../assets/user.jpg";

const membrosData = [
  {
    nome: "Renan Neitzke",
    instituicao: "Engenharia Agrícola UFPEL",
    cargo: "Presidente",
    foto: Imagem1,
  },
  {
    nome: "Emanuelly Souza",
    instituicao: "Engenharia Agrícola UFPR",
    cargo: "Vice-Presidente",
    foto: Imagem1,
  },
  {
    nome: "Felipe Borges",
    instituicao: "Engenharia Agrícola UEG",
    cargo: "Secretário Geral",
    foto: Imagem1,
  },
  {
    nome: "Talisson Natan",
    instituicao: "Engenharia Agrícola UFPEL",
    cargo: "Coordenador Financeiro",
    foto: Imagem1,
  },
  {
    nome: "Kamylla Farias",
    instituicao: "Engenharia Agrícola UFMA",
    cargo: "Coordenadora Científica",
    foto: Imagem1,
  },
  {
    nome: "Luan Henrique",
    instituicao: "Engenharia Agrícola UFPEL",
    cargo: "1º Suplente",
    foto: Imagem1,
  },
  {
    nome: "Mariane Oliveira",
    instituicao: "Engenharia Agrícola UFVJM",
    cargo: "2º Suplente",
    foto: Imagem1,
  },
  {
    nome: "Matheus Meireles",
    instituicao: "Engenharia Agrícola UFPR",
    cargo: "3º Suplente",
    foto: Imagem1,
  },
];


// const membrosFundadoresData = [
//   {
//     nome: "Membro 1",
//     instituicao: "Engenharia Agrícola UFPEL",
//     foto: Imagem1,
//   },
//   {
//     nome: "Membro 2",
//     instituicao: "Engenharia Agrícola UFPR",
//     foto: Imagem1,
//   },

// ];


export default function Membros() {
  return (
    <div>
      <Header />
      <div className="HeaderSecundario">
        <div className="links">
          <h3>
            {" "}
            <a href="">Home</a> | <a href="">Membros</a>
          </h3>
        </div>
        <div className="container">
          <h2>Conselho Diretivo</h2>
          <p>
            Conheça as pessoas que contribuem para a consolidação da Federação.
          </p>
          <div className="btn">
            <button className="button_primary_members">
              <Link to={`/membros/delegacao`} className="">
                Página de Delegados
              </Link>
            </button>
          </div>
        </div>
      </div>
      <main>
        <div className="containerCustom">
          <div className="container">
            <h2>Gestão 2025</h2>
            <div className="membros">
              {membrosData.map((membro, index) => (
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
