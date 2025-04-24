import React from "react";
import "../styles/HeaderSecundario.scss";
import "../styles/Membros.scss";
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
import "../styles/buttons.scss";
import { Link } from "react-router-dom";

import Imagem1 from "../assets/membros/7.jpg";
import Imagem2 from "../assets/membros/1.jpg";
import Imagem3 from "../assets/membros/2.png";
import Imagem4 from "../assets/membros/8.jpg";
import Imagem5 from "../assets/membros/3.jpg";
import Imagem6 from "../assets/membros/4.jpg";
import Imagem7 from "../assets/membros/5.png";
import Imagem8 from "../assets/membros/6.jpeg";

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
    foto: Imagem2,
  },
  {
    nome: "Felipe Borges",
    instituicao: "Engenharia Agrícola UEG",
    cargo: "Secretário Geral",
    foto: Imagem3,
  },
  {
    nome: "Talisson Natan",
    instituicao: "Engenharia Agrícola UFPEL",
    cargo: "Coordenador Financeiro",
    foto: Imagem4,
  },
  {
    nome: "Kamylla Farias",
    instituicao: "Engenharia Agrícola UFMA",
    cargo: "Coordenadora Científica",
    foto: Imagem5,
  },
  {
    nome: "Luan Henrique",
    instituicao: "Engenharia Agrícola UFPEL",
    cargo: "1º Suplente",
    foto: Imagem6,
  },
  {
    nome: "Mariane Oliveira",
    instituicao: "Engenharia Agrícola UFVJM",
    cargo: "2º Suplente",
    foto: Imagem7,
  },
  {
    nome: "Matheus Meireles",
    instituicao: "Engenharia Agrícola UFPR",
    cargo: "3º Suplente",
    foto: Imagem8,
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
            <Link to={`/`} className="">Home</Link> | <Link to={`/membros`} className="">Membros</Link>
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
