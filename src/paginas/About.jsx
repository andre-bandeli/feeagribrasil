import React from "react";
import Header from "../componentes/Header";
import "../styles/HeaderSecundario.scss";
import "../styles/About.scss";
import Footer from "../componentes/Footer";
import WidgetCustom from "../componentes/WidgetCustom";
import { Link } from "react-router-dom";


export default function About() {
  return (
    <div>
      <Header />
      <div className="HeaderSecundario">
        <div className="links">
          <h3>
            <Link to={`/`} className="">Home</Link> | <Link to={`/about`} className="">Sobre</Link>
          </h3>
        </div>
        <div className="container">
          <h2>Sobre Nós</h2>
          <p>
            Conheça nossa trajetória e compromisso com o fortalecimento da
            Engenharia Agrícola, promovendo a união entre os estudantes e o
            desenvolvimento de soluções inovadoras para o setor agrícola no
            Brasil
          </p>
        </div>
      </div>
      <main>
        <div className="mainContent">
          <div className="containerAbout">
            <h2>Construindo a união dos estudantes brasileiros</h2>
            <p>
              A Federação Brasileira dos Estudantes de Engenharia Agrícola,
              Engenharia Agrícola e Ambiental e Engenharia de Biossistemas
              (FEEAGRI) é uma entidade nacional, sem fins lucrativos, que
              representa os estudantes dessas áreas em todo o Brasil. Atuamos
              como um elo entre acadêmicos, instituições de ensino e entidades
              públicas e privadas, promovendo a união, o desenvolvimento
              acadêmico e a participação ativa de nossos membros em eventos
              técnicos, científicos e sociais. Com uma estrutura democrática,
              composta por estudantes eleitos em assembleias gerais realizadas
              anualmente durante o Congresso Nacional dos Estudantes de
              Engenharia Agrícola (CONEEAGRI), buscamos garantir que a voz dos
              futuros engenheiros agrícolas seja ouvida em nível nacional.
            </p>

            <h2>Nossa história</h2>
            <p>
              A FEEAGRI foi fundada com o propósito de unificar os estudantes de
              Engenharia Agrícola, Engenharia Agrícola e Ambiental e Engenharia
              de Biossistemas de todo o Brasil, fortalecendo a
              representatividade de nossas áreas em cenários acadêmicos e
              profissionais. Desde a sua criação, tem sido protagonista na
              organização do CONEEAGRI, evento anual que reúne acadêmicos,
              pesquisadores e profissionais do setor. Ao longo dos anos,
              expandimos nossa atuação, com a inclusão de delegados de
              universidades e representantes regionais, promovendo a cooperação
              entre instituições de ensino superior e fomentando a participação
              ativa dos estudantes em discussões e projetos de impacto nacional.
              Hoje, a FEEAGRI é mais do que uma federação estudantil; é uma
              comunidade vibrante, comprometida com a formação de líderes que
              transformarão o futuro da engenharia e da sociedade.
            </p>
            <h2>Nossa Missão, Visão e Valores</h2>
            <p>
              {" "}
              <strong>Missão</strong>: Representar os estudantes de Engenharia
              Agrícola, Engenharia Agrícola e Ambiental e Engenharia de
              Biossistemas, promovendo o desenvolvimento acadêmico, profissional
              e social, por meio da integração entre instituições de ensino e
              eventos técnico-científicos, sempre visando a formação de
              profissionais capacitados e conscientes de seu papel na sociedade.
            </p>
            <p>
              <strong>Visão</strong>: Ser reconhecida como a principal entidade
              estudantil de referência nacional na promoção de ações que
              impactem positivamente a formação dos estudantes de Engenharia
              Agrícola e áreas correlatas, fortalecendo a união e a
              representatividade do segmento.
            </p>
            <p>
              <strong>Valores</strong>:
            </p>
            <ul>
              <li>
                Compromisso com os estudantes: Trabalhar em prol do
                desenvolvimento e bem-estar dos nossos membros;
              </li>
              <li>
                Transparência: Gestão participativa e comunicação clara em todas
                as nossas ações;
              </li>
              <li>
                Inovação: Incentivar práticas e soluções modernas no ensino e
                aplicação da Engenharia Agrícola;
              </li>
              <li>
                Sustentabilidade: Promover ações que contribuam para o
                equilíbrio ambiental e o desenvolvimento sustentável;
              </li>
              <li>
                Inclusão: Garantir que todas as vozes sejam ouvidas, respeitando
                a diversidade de ideias e culturas;
              </li>
              <li>
                Excelência acadêmica: Incentivar a busca constante pela
                qualidade no ensino e pesquisa.
              </li>
            </ul>
          </div>
          <div className="widget">
            <WidgetCustom />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
