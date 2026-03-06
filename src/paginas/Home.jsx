import React from "react";
import { Link } from "react-router-dom";
import Header from "../componentes/Header";
import Hero from "../componentes/Hero";
import StatsCounter from "../componentes/StatsCounter";
import Footer from "../componentes/Footer";
import NewsletterComponent from "../componentes/NewsletterComponent";
import ContatoForms from "../componentes/ContatoForms";

import "../styles/Home.scss";
import "../styles/buttons.scss";

import Imagem1 from "../assets/coneeagri.jpeg";
import Imagem2 from "../assets/assembleia.jpg";
import Imagem3 from "../assets/coneeagri2.jpeg";
import Imagem4 from "../assets/21.jpg";
import abeag from "../assets/abeag.png";
import sbea from "../assets/sbea.png";

import Foto1 from "../assets/coneeagri/recente/foto1.jpg";
import Foto2 from "../assets/coneeagri/recente/foto2.jpg";
import Foto3 from "../assets/coneeagri/recente/foto3.jpg";
import Foto4 from "../assets/coneeagri/recente/foto4.jpg";
import Foto5 from "../assets/coneeagri/recente/foto5.jpg";
import Foto6 from "../assets/coneeagri/recente/foto6.jpg";

const cardsData = [
  {
    slug: "representacao-estudantil",
    title: "Voz Ativa e Liderança",
    content: "Atuamos na defesa dos interesses estudantis perante órgãos profissionais e acadêmicos, garantindo que o estudante seja protagonista nas decisões que moldam nossas carreiras.",
    img: Imagem2,
  },
  {
    slug: "organizacao-de-eventos",
    title: "Conexão e Conhecimento",
    content: "O CONEEAGRI é o nosso maior marco anual, conectando centenas de acadêmicos e profissionais para debater o futuro das engenharias e as fronteiras da inovação tecnológica.",
    img: Imagem3,
  },
  {
    slug: "capacitacao-e-desenvolvimento",
    title: "Futuro Sustentável",
    content: "Fomentamos a formação de profissionais qualificados e conscientes, preparados para os desafios do agronegócio moderno e da gestão sustentável de recursos naturais.",
    img: Imagem4,
  },
];

export default function Home() {
  return (
    <div>
      <Header />
      <Hero />

      <div className="stats-section">
        <div className="card">
          <h2><strong>+</strong><StatsCounter finalNumber={30} /></h2>
          <p>Instituições de Ensino</p>
        </div>
        <div className="card">
          <h2><strong>+</strong><StatsCounter finalNumber={5000} /></h2>
          <p>Alunos em todo o Brasil</p>
        </div>
        <div className="card">
          <h2><strong>+</strong><StatsCounter finalNumber={38} /></h2>
          <p>Edições do CONEEAGRI</p>
        </div>
        <div className="card">
          <h2><strong>+</strong><StatsCounter finalNumber={13} /></h2>
          <p>Anos de História</p>
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
              <h3>O que nos move</h3>
              <h2>
                Representamos a força das Engenharias Agrária e de Biossistemas em todo o território nacional.
              </h2>
              <p>
                Unimos estudantes de diversas instituições para fortalecer a formação acadêmica e profissional. 
                Através de nossa rede nacional, atuamos na integração de tecnologia, inovação e sustentabilidade, 
                preparando as novas gerações para liderar a transformação no campo e na indústria.
              </p>
            </div>
            <img src={Imagem1} alt="Liderança Estudantil FEEAGRI" />
          </div>

          <div className="featured-secondary">
            {cardsData.map((card, index) => (
              <div className="card" key={index}>
                <img src={card.img} alt={card.title} />
                <h3>
                  <Link to={`/atividades/${card.slug}`}>{card.title}</Link>
                </h3>
                <p>{card.content}</p>
              </div>
            ))}
          </div>
        </div>
        </div>

        <div className="pos-evento-section" style={{ padding: '60px 0', textAlign: 'center', backgroundColor: '#f8f9fa' }}>
          <div className="container">
            <h2><strong>XXXVIII</strong> CONEEAGRI & II ENPEAG</h2>
            <p style={{ marginBottom: '30px' }}>Pelotas/RS | 27 a 30 de outubro de 2025</p>
            
            <div  className="grid-album">
              <img src={Foto1} alt="Evento 1" />
              <img src={Foto2} alt="Evento 2" />
              <img src={Foto3} alt="Evento 3" />
              <img src={Foto4} alt="Evento 4" />
              <img src={Foto5} alt="Evento 5" />
              <img src={Foto6} alt="Evento 6" />
            </div>

            <a 
              href="https://www.flickr.com/photos/confea/albums/72177720330020769/with/54890387698" 
              target="_blank" 
              rel="noopener noreferrer"
              className="button_secundary_red"
              style={{ textDecoration: 'none', display: 'inline-block' }}
            >
              Ver Album Completo no Flickr
            </a>
          </div>
        </div>

        <div className="parceiros-section">
          <div className="parceiros-content">
            <div className="parceiros-texto">
              <h2>Nossos Parceiros</h2>
              <p>Contamos com o apoio das principais instituições agrárias que acreditam na nossa missão.</p>
            </div>
            <div className="parceiros-imagem">
              <img src={abeag} alt="ABEAG" />
              <img src={sbea} alt="SBEA / CREA" />
            </div>
          </div>
        </div>

        <NewsletterComponent />
        
        <div className="contato-section">
          <ContatoForms />
        </div>
      </main>

      <Footer />
    </div>
  );
}