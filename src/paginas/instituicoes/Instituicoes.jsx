import React from 'react'
import Header from '../../componentes/header/Header'
import './instituicoes.scss'
import Footer from '../../componentes/footer/Footer';
import { Link } from "react-router-dom";

const institutionsData = [
  // Engenharia Agrícola
  { nome: "Universidade Estadual de Maringa", sigla: "UEM", local: "Maringá, PR", curso: "Engenharia Agrícola", fundacao: 2010 },
  { nome: "Universidade Estadual de Goias", sigla: "UEG", local: "Anápolis, GO", curso: "Engenharia Agrícola", fundacao: 2000 },
  { nome: "Universidade Federal de Viçosa", sigla: "UFV", local: "Viçosa, MG", curso: "Engenharia Agrícola e Ambiental", fundacao: 2010 },
  { nome: "Universidade Federal do Ceará", sigla: "UFC", local: "Fortaleza, CE", curso: "Engenharia Agrícola", fundacao: 1976 },
  { nome: "Universidade Federal de Campina Grande", sigla: "UFCG", local: "Campina Grande, PB", curso: "Engenharia Agrícola", fundacao: 2002 },
  { nome: "Universidade Federal de Pelotas", sigla: "UFPel", local: "Pelotas, RS", curso: "Engenharia Agrícola", fundacao: 1976 },
  { nome: "Universidade Federal de Lavras", sigla: "UFLA", local: "Lavras, MG", curso: "Engenharia Agrícola", fundacao: 1993 },
  { nome: "Universidade Federal do Recôncavo da Bahia", sigla: "UFRB", local: "Cruz das Almas, BA", curso: "Engenharia Agrícola", fundacao: 2006 },
  { nome: "Universidade Federal de Roraima", sigla: "UFRR", local: "Boa Vista, RR", curso: "Engenharia Agrícola", fundacao: 2009 },
  { nome: "Universidade Federal de Varginha", sigla: "UNIFAL", local: "Varginha, MG", curso: "Engenharia Agrícola", fundacao: 2014 },
  { nome: "Universidade Estadual de Campinas", sigla: "UNICAMP", local: "Campinas, SP", curso: "Engenharia Agrícola", fundacao: 1976 },
  { nome: "Universidade Estadual do Oeste do Paraná", sigla: "UNIOESTE", local: "Cascavel, PR", curso: "Engenharia Agrícola", fundacao: 1994 },
  { nome: "Universidade Federal da Grande Dourados", sigla: "UFGD", local: "Dourados, MS", curso: "Engenharia Agrícola", fundacao: 2006 },
  { nome: "Universidade Federal de Goiás", sigla: "UFG", local: "Goiânia, GO", curso: "Engenharia Agrícola", fundacao: 2009 },
  { nome: "Universidade Federal de Mato Grosso", sigla: "UFMT", local: "Cuiabá, MT", curso: "Engenharia Agrícola", fundacao: 2009 },
  { nome: "Universidade Federal dos Vales do Jequitinhonha e Mucuri", sigla: "UFVJM", local: "Unaí", curso: "Engenharia Agrícola e Ambiental", fundacao: 2010 },
  { nome: "Universidade Federal do Vale do São Francisco", sigla: "UNIVASF", local: "Juazeiro, BA", curso: "Engenharia Agrícola", fundacao: 2012 },
  { nome: "Universidade Federal do Espírito Santo", sigla: "UFES", local: "Alegre, ES", curso: "Engenharia Agrícola", fundacao: 2009 },
  { nome: "Universidade Federal de Minas Gerais", sigla: "UFMG", local: "Belo Horizonte, MG", curso: "Engenharia Agrícola", fundacao: 2006 },
  { nome: "Universidade Federal do Rio Grande do Sul", sigla: "UFRGS", local: "Porto Alegre, RS", curso: "Engenharia Agrícola", fundacao: 2000 },
  { nome: "Universidade Federal do Pará", sigla: "UFPA", local: "Belém, PA", curso: "Engenharia Agrícola", fundacao: 2012 },
  { nome: "Universidade Federal de Rondônia", sigla: "UNIR", local: "Porto Velho, RO", curso: "Engenharia Agrícola", fundacao: 2009 },
  { nome: "Universidade Federal do Tocantins", sigla: "UFT", local: "Gurupi, TO", curso: "Engenharia Agrícola", fundacao: 2003 },
  { nome: "Universidade Federal do Recôncavo da Bahia", sigla: "UFRB", local: "Cruz das Almas, BA", curso: "Engenharia Agrícola", fundacao: 2006 },
  // Instituições não incluídas (Engenharia Agrícola)
  { nome: "Faculdades Integradas Espírita", sigla: "FIES", local: "Curitiba", curso: "Engenharia Agrícola", fundacao: 1998 },
  { nome: "Fundação Universidade Federal do Pampa", sigla: "UNIPAMPA", local: "Bagé", curso: "Engenharia Agrícola", fundacao: 2010 },
  { nome: "Instituto Federal de Educação, Ciência e Tecnologia Farroupilha", sigla: "IFFarroupilha", local: "Farroupilha", curso: "Engenharia Agrícola", fundacao: 2010 },
  { nome: "Faculdade de Educação e Cultura de Vilhena", sigla: "FAEV", local: "Vilhena, RO", curso: "Engenharia Agrícola", fundacao: 2017 },
  { nome: "Universidade Federal do Maranhão", sigla: "UFMA", local: "São Luís, MA", curso: "Engenharia Agrícola", fundacao: 2014 },
  { nome: "Universidade Federal do Paraná", sigla: "UFPR", local: "Jandaia do Sul, PR", curso: "Engenharia Agrícola", fundacao: 2014 },
  { nome: "Universidade Federal Rural do Rio de Janeiro", sigla: "UFRRJ", local: "Seropédica, RJ", curso: "Engenharia Agrícola e Ambiental", fundacao: 2000 },
  { nome: "Universidade de Santa Cruz do Sul", sigla: "UNISC", local: "Santa Cruz do Sul, RS", curso: "Engenharia Agrícola", fundacao: 1995 },
  { nome: "Universidade Federal de Sergipe", sigla: "UFS", local: "São Cristóvão, SE", curso: "Engenharia Agrícola", fundacao: 2010 },
  { nome: "Universidade de Mogi das Cruzes", sigla: "UMC", local: "Mogi das Cruzes, SP", curso: "Engenharia Agrícola", fundacao: null },
  { nome: "Centro Universitário União das Américas Descomplica", sigla: "UNIAMÉRICA", local: "Foz do Iguaçu, PR", curso: "Engenharia Agrícola", fundacao: null },
  { nome: "Instituto Federal de Educação, Ciência e Tecnologia Goiano", sigla: "IF Goiano", local: "Urutaí", curso: "Engenharia Agrícola", fundacao: 2009 },
  { nome: "Universidade Federal Rural da Amazônia", sigla: "UFRA", local: "Tomé Açu, PA", curso: "Engenharia Agrícola", fundacao: 2014 },
  { nome: "Universidade Regional Integrada do Alto Uruguai e das Missões", sigla: "URI", local: "Não especificado", curso: "Engenharia Agrícola", fundacao: 1998 },
  { nome: "Universidade Federal Fluminense", sigla: "UFF", local: "Niterói, RJ", curso: "Engenharia Agrícola e Ambiental", fundacao: 1993 },
  { nome: "Instituto Federal de Educação, Ciência e Tecnologia do Ceará", sigla: "IFCE", local: "Fortaleza, CE", curso: "Engenharia Agrícola", fundacao: 2020 },
  { nome: "Universidade Federal Rural de Pernambuco", sigla: "UFRPE", local: "Recife, PE", curso: "Engenharia Agrícola e Ambiental", fundacao: 2002 },

  // Instituições não incluídas (Engenharia de Biossistemas)
  { nome: "Instituto Federal de Educação, Ciência e Tecnologia de São Paulo", sigla: "IFSP", local: "Avaré", curso: "Engenharia de Biossistemas", fundacao: 2017 },
  { nome: "Instituto Federal de Campina Grande", sigla: "UFCG", local: "Campina Grande", curso: "Engenharia de Biossistemas", fundacao: 2009 },
  { nome: "Universidade de São Paulo", sigla: "USP", local: "Pirassununga", curso: "Engenharia de Biossistemas", fundacao: 2009 },
  { nome: "Universidade Estadual Paulista Júlio de Mesquita Filho", sigla: "UNESP", local: "Tupã", curso: "Engenharia de Biossistemas", fundacao: 2014 },
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
        <caption className="table-caption">Dados atualizados em 2025 - Fonte: MEC</caption>
        <thead>
          <tr>
            <th>Instituição</th>
            <th>Sigla</th>
            <th>Localização</th>
            <th>Curso(s) Oferecido(s)</th>
            <th>Ano de Criação</th>
          </tr>
        </thead>
        <tbody>
          {institutionsData.map((instituicao, index) => (
            <tr key={index}>
              <td>{instituicao.nome}</td>
              <td>{instituicao.sigla}</td>
              <td>{instituicao.local}</td>
              <td>{instituicao.curso}</td>
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
