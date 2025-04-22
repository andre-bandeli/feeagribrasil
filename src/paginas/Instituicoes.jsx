import React from 'react'
import Header from '../componentes/Header'
import '../styles/instituicoes.scss'
import Footer from '../componentes/Footer';
import { Link } from "react-router-dom";

const institutionsData = [
    {
      nome: "Universidade Federal de Viçosa (UFV)",
      local: "Viçosa, MG",
      cursos: "Engenharia Agrícola e Ambiental",
      fundacao: 2010
    },
    {
      nome: "Universidade Federal do Ceará (UFC)",
      local: "Fortaleza, CE",
      cursos: "Engenharia Agrícola",
      fundacao: 1976
    },
    {
      nome: "Universidade Federal de Campina Grande (UFCG)",
      local: "Campina Grande, PB",
      cursos: "Engenharia Agrícola",
      fundacao: 2002
    },
    {
      nome: "Universidade Federal de Lavras (UFLA)",
      local: "Lavras, MG",
      cursos: "Engenharia Agrícola",
      fundacao: 2006
    },
    {
      nome: "Universidade Estadual Paulista (UNESP)",
      local: "Jaboticabal, SP",
      cursos: "Engenharia Agrícola",
      fundacao: 1974
    },
    {
        nome: "Universidade Federal de Viçosa (UFV)",
        local: "Viçosa, MG",
        cursos: "Engenharia Agrícola e Ambiental",
        fundacao: 2010
      },
      {
        nome: "Universidade Federal do Ceará (UFC)",
        local: "Fortaleza, CE",
        cursos: "Engenharia Agrícola",
        fundacao: 1976
      },
      {
        nome: "Universidade Federal de Campina Grande (UFCG)",
        local: "Campina Grande, PB",
        cursos: "Engenharia Agrícola",
        fundacao: 2002
      },
      {
        nome: "Universidade Federal de Lavras (UFLA)",
        local: "Lavras, MG",
        cursos: "Engenharia Agrícola",
        fundacao: 2006
      },
      {
        nome: "Universidade Estadual Paulista (UNESP)",
        local: "Jaboticabal, SP",
        cursos: "Engenharia Agrícola",
        fundacao: 1974
      },
      {
        nome: "Universidade Federal de Viçosa (UFV)",
        local: "Viçosa, MG",
        cursos: "Engenharia Agrícola e Ambiental",
        fundacao: 2010
      },
      {
        nome: "Universidade Federal do Ceará (UFC)",
        local: "Fortaleza, CE",
        cursos: "Engenharia Agrícola",
        fundacao: 1976
      },
      {
        nome: "Universidade Federal de Campina Grande (UFCG)",
        local: "Campina Grande, PB",
        cursos: "Engenharia Agrícola",
        fundacao: 2002
      },
      {
        nome: "Universidade Federal de Lavras (UFLA)",
        local: "Lavras, MG",
        cursos: "Engenharia Agrícola",
        fundacao: 2006
      },
      {
        nome: "Universidade Estadual Paulista (UNESP)",
        local: "Jaboticabal, SP",
        cursos: "Engenharia Agrícola",
        fundacao: 1974
      },
      {
        nome: "Universidade Federal de Viçosa (UFV)",
        local: "Viçosa, MG",
        cursos: "Engenharia Agrícola e Ambiental",
        fundacao: 2010
      },
      {
        nome: "Universidade Federal do Ceará (UFC)",
        local: "Fortaleza, CE",
        cursos: "Engenharia Agrícola",
        fundacao: 1976
      },
      {
        nome: "Universidade Federal de Campina Grande (UFCG)",
        local: "Campina Grande, PB",
        cursos: "Engenharia Agrícola",
        fundacao: 2002
      },
      {
        nome: "Universidade Federal de Lavras (UFLA)",
        local: "Lavras, MG",
        cursos: "Engenharia Agrícola",
        fundacao: 2006
      },
      {
        nome: "Universidade Estadual Paulista (UNESP)",
        local: "Jaboticabal, SP",
        cursos: "Engenharia Agrícola",
        fundacao: 1974
      },
  ];

export default function 
() {
  return (
    <div>
        <Header />
        <div className="HeaderSecundario">
            <div className="links">
              <h3><Link to={`/`} className="">Home</Link> | <Link to={`/instituicoes`} className="">Instituições</Link></h3>
            
            </div>
            <div className="container">
            <h2>Instituições</h2>
            <p>
                Conheça nossa trajetória e compromisso com o fortalecimento da
                Engenharia Agrícola, promovendo a união entre os estudantes e o
                desenvolvimento de soluções inovadoras para o setor agrícola no
                Brasil
            </p>
            </div>
        </div>

      <div className="institutions-table">
      <table>
        <caption className="table-caption">Dados atualizados em 2023 - Fonte: MEC</caption>
        <thead>
          <tr>
            <th>Instituição</th>
            <th>Localização</th>
            <th>Curso(s) Oferecido(s)</th>
            <th>Ano de Criação</th>
          </tr>
        </thead>
        <tbody>
          {institutionsData.map((instituicao, index) => (
            <tr key={index}>
              <td>{instituicao.nome}</td>
              <td>{instituicao.local}</td>
              <td>{instituicao.cursos}</td>
              <td>{instituicao.fundacao}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
    <Footer/>
    </div>
  )
}
