import React from "react";
import Header from "../componentes/Header";
import "../styles/Home.scss";
import Hero from "../componentes/Hero";
import { Link } from "react-router-dom";
import StatsCounter from "../componentes/StatsCounter";
import Imagem1 from "../assets/coneeagri.jpeg";
import Imagem2 from "../assets/assembleia.jpg";
import Imagem3 from "../assets/coneeagri2.jpeg";
import Imagem4 from "../assets/21.jpg";
import Imagem5 from "../assets/7.jpeg";
import Imagem6 from "../assets/8.jpg";
import Imagem7 from "../assets/13.jpg";
import abeag from "../assets/abeag.png";
import crea from "../assets/crea.png";
import Contador from "../componentes/Contador";
import Footer from "../componentes/Footer";
import NewsletterComponent from "../componentes/NewsletterComponent";
import "../styles/buttons.scss";

import ContatoForms from "../componentes/ContatoForms";

const cardsData = [
  {
    slug: "representacao-estudantil",
    title:
      "Realização de assembleias gerais, convocação para votação e representação institucional",
    content:
      "A FEEAGRI atua como a voz dos estudantes das Engenharias Agrícola, Agrícola e Ambiental e de Biossistemas, promovendo a união e defendendo os interesses acadêmicos e profissionais em nível nacional [...]",
    spn: "by FEEAGRI • December 20, 2024",
    img: Imagem2,
  },
  {
    slug: "organizacao-de-eventos",
    title:
      "Promoção do Congresso Nacional dos Estudantes de ENgenharia Agrícola, Agrícola e Ambiental e Engenharia de Biossistemas",
    content:
      "O CONEEAGRI é mais do que um evento: é o ponto de encontro para estudantes e profissionais de todo o Brasil compartilharem conhecimentos, experiências e fortalecerem os laços em prol do desenvolvimento técnico e científico [...]",
    spn: "by FEEAGRI • December 20, 2024",
    img: Imagem3,
  },
  {
    slug: "capacitacao-e-desenvolvimento",
    title: "Capacitação e desenvolvimento para um futuro sustentável no Agro",
    content:
      "Através de iniciativas voltadas à capacitação e desenvolvimento técnico, a FEEAGRI fomenta a formação de profissionais qualificados e conscientes, preparados para enfrentar os desafios da sustentabilidade no agro. Trabalhamos para unir [...]",
    spn: "by FEEAGRI • December 20, 2024",
    img: Imagem4,
  },
];

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 3 } },
      { breakpoint: 768, settings: { slidesToShow: 2 } },
      { breakpoint: 480, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <div>
      <Header />
      <Hero />

      <div className="stats-section">
        <div className="card">
          <h2>
            <strong>+</strong>
            <StatsCounter finalNumber={30} />
          </h2>
          <p>Instituições de Ensino</p>
        </div>
        <div className="card">
          <h2>
            <strong>+</strong>
            <StatsCounter finalNumber={5000} />
          </h2>
          <p>Alunos em todo o Brasil</p>
        </div>
        <div className="card">
          <h2>
            <strong>+</strong>
            <StatsCounter finalNumber={10} />
          </h2>
          <p>Edições do CONEEAGRI</p>
        </div>
        <div className="card">
          <h2>
            <strong>+</strong>
            <StatsCounter finalNumber={12} />
          </h2>
          <p>Anos de História</p>
        </div>
      </div>

      <div className="content">
        <div className="cardContent">
          <div className="text title">
            <h2>
              FEEAGRI <br />
              <strong>NACIONAL</strong>
            </h2>
          </div>
          <div className="text">
            <p>
              A FEEAGRI foi fundada com o propósito de unificar os estudantes de
              Engenharia Agrícola, Engenharia Agrícola e Ambiental e Engenharia
              de Biossistemas de todo o Brasil, fortalecendo a
              representatividade de nossas áreas em cenários acadêmicos e
              profissionais. Desde a sua criação, tem atuado na organização do
              CONEEAGRI, evento anual que reúne acadêmicos, pesquisadores e
              profissionais do setor.
            </p>
            <button className="button_primary">
              {" "}
              <Link to={`/about`} className="">
                Saiba mais
              </Link>{" "}
            </button>
          </div>
        </div>
      </div>

      <main>
        <div className="container">
          <div className="textContainer">
            <h2>
              <strong className="gradientText">Inovação no Campo</strong> &{" "}
              <strong>Desenvolvimento Sustentável</strong> &{" "}
              <strong className="gradientText">Tecnologia</strong>
            </h2>
          </div>
          <div className="separador"></div>
          <div className="featured">
            <div className="featured-main">
              <div className="featured-main-content">
                <h3>Nossas atividades</h3>

                <h2>
                  A última edição do CONEEAGRI foi marcada pela realização do I
                  ENPEAG, reunindo profissionais e estudantes do setor agrícola
                  de todo o Brasil.
                </h2>
                <p>
                  O XXXVII CONEEAGRI, realizado na UFPR - Campus Jandaia do Sul,
                  foi marcada pela realização do I Encontro Nacional dos
                  Profissionais de Engenharia Agrícola. O encontro ocorreu no
                  último dia do evento, em uma celebração comemorada com um
                  almoço, engajando o networking entre estudantes e
                  profissionais de todo o Brasil.
                </p>
                <span>by FEEAGRI • December 20, 2024</span>
              </div>
              <img src={Imagem1} alt="Main Feature" />
            </div>

            <div className="featured-secondary">
              {cardsData.map((card, index) => (
                <div className="card">
                  <img src={card.img} alt="Feature 2" />
                  <h3>
                    <Link to={`/atividades/${card.slug}`}>{card.title}</Link>
                  </h3>
                  <p>{card.content}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="contadorSection">
          <h2>
            <strong>XXXVIII</strong> CONEEAGRI & II ENPEAG
          </h2>
          <h3>
            Universidade Federal de Pelotas - Pelotas/RS <br />
            De 27 à 30 de outubro de 2025
          </h3>
          <Contador />
          <button className="button_secundary_red">
            Inscreva-se [em breve]
          </button>
        </div>

        <div className="congressos-section">
          <div className="congressos-content">
            <h2>
              Conheça as últimas edições do CONEEAGRI e a edição especial do I
              ENPEAG.
            </h2>
            <p>
              <strong>Unindo estudantes de todo o Brasil</strong>
              <br />
              A última edição do CONEEAGRI e o I ENPEAG realizados na UFPR -
              Campus Jandaia do Sul, representam marcos na integração dos
              estudantes de Engenharia Agrícola, Agrícola e Ambiental e de
              Biossistemas. Esses eventos promovem a troca de conhecimento, o
              fortalecimento da rede acadêmica e a valorização das áreas de
              atuação. Juntos, celebramos a união e o avanço das nossas
              profissões, com um olhar voltado para inovação e sustentabilidade.
              <br />{" "}
              <button className="button_primary">
                <Link to={`/congressos`} className="">
                  Todas as edições
                </Link>
              </button>
            </p>
          </div>
          <div className="congressos-images">
            <div className="main-image">
              <img src={Imagem5} alt="Main Field" />
            </div>
            <div className="side-images">
              <img src={Imagem6} alt="Irrigation System" />
              <img src={Imagem7} alt="Crop Management" />
              <img
                src={Imagem6}
                className="mobile-remove"
                alt="Irrigation System"
              />
              <img
                src={Imagem7}
                className="mobile-remove"
                alt="Crop Management"
              />
            </div>
          </div>
        </div>

        <div className="parceiros-section">
          <div className="parceiros-content">
            <div className="parceiros-texto">
              <h2>Nossos Parceiros</h2>
              <p>
                Contamos com o apoio das principais instituições agrárias e
                empresas que acreditam na nossa missão de promover a engenharia
                agrícola e ambiental.
              </p>
            </div>
            <div className="parceiros-imagem">
              <img src={abeag} alt="Parceiros" />
              <img src={crea} alt="Parceiros" />
            </div>
          </div>
        </div>

        <div className="contato-section">
          <ContatoForms />
        </div>
      </main>

      <NewsletterComponent />
      <Footer />
    </div>
  );
}
