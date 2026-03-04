import React from "react";
import { Link } from "react-router-dom";
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";

import "../styles/HeaderSecundario.scss";
import "../styles/Events.scss";
import '../styles/buttons.scss';

import coneeagri2018 from '../assets/coneeagri/c2018_1.jpeg';
import Imagem1 from "../assets/coneeagri.jpeg";
import Imagem2 from "../assets/c1.jpeg";
import Imagem3 from "../assets/c2.png";
import FotoPelotas from "../assets/coneeagri/recente/foto6.jpg"; 

export default function Events() {
  const congressos = [
    {
      image: FotoPelotas,
      title: "XXXVIII CONEEAGRI e II ENPEAG (2025) UFPel - Pelotas/RS",
      edicao: "XXXVIII",
      description:
        "Realizado na Universidade Federal de Pelotas, o evento marcou o retorno presencial ao Rio Grande do Sul, com foco em inovação tecnológica e sustentabilidade.",
      slug: "coneeagri-2025",
    },
    {
      image: Imagem1,
      title: "XXXVII CONEEAGRI e I ENPEAG (2024) UFPR - Jandaia do Sul/PR",
      edicao: "XXXVII",
      description:
        "Ocorreu na UFPR - Campus Jandaia do Sul, promovendo inovação e integração entre estudantes de todo o Brasil.",
      slug: "coneeagri-2024",
    },
    {
      image: Imagem2,
      title: "XXXVI CONEEAGRI (2023) Pirenópolis/GO",
      edicao: "XXXVI",
      description:
        'Realizado em Pirenópolis, Goiás, com o tema "Inovações Além do Campo: Transformando o Futuro".',
      slug: "coneeagri-2023",
    },
    {
      image: Imagem3,
      title: "XXXV CONEEAGRI (2022) Especial Online",
      edicao: "XXXV",
      description:
        "Evento online realizado de 16 a 19 de novembro de 2022, com minicursos e palestras setoriais.",
      slug: "coneeagri-2022",
    },
    {
      image: Imagem1,
      title: "XXXIV CONEEAGRI (2021) Especial Online",
      edicao: "XXXIV",
      description:
        "Edição online com palestras e minicursos focados nos desafios da Engenharia Agrícola e Ambiental.",
      slug: "coneeagri-2021",
    },
    {
      image: Imagem2,
      title: "XXXIII CONEEAGRI (2020) Especial Online",
      edicao: "XXXIII",
      description:
        "Congresso realizado no formato virtual, adaptando-se ao contexto da pandemia.",
      slug: "coneeagri-2020",
    },
    {
      image: Imagem3,
      title: "XXXII CONEEAGRI (2019) UFPel - Pelotas/RS",
      edicao: "XXXII",
      description:
        "Edição organizada pelo PET Engenharia Agrícola, promovendo discussões sobre tecnologia e sustentabilidade.",
      slug: "coneeagri-2019",
    },
    {
      image: coneeagri2018,
      title: "XXXI CONEEAGRI (2018) UFPR - Jandaia do Sul/PR",
      edicao: "XXXI",
      description:
        "Realizado na Universidade Federal do Paraná (UFPR), Campus Jandaia do Sul.",
      slug: "coneeagri-2018",
    },
    {
      image: Imagem1,
      title: "XXX CONEEAGRI (2017) UFLA - Lavras/MG",
      edicao: "XXX",
      description:
        "Realizado na Universidade Federal de Lavras (UFLA), reunindo acadêmicos e profissionais do setor.",
      slug: "coneeagri-2017",
    },
  ];

  return (
    <div>
      <Header />
      <div className="container_events">
        <div className="container">
          <h2><strong>MEMÓRIAS CONEEAGRI</strong></h2>
          <h3>NOSSA TRAJETÓRIA</h3>
          <p>Conheça as edições que construíram a história da Engenharia no Brasil.</p>
        </div>
      </div>

      <main>
        {/* <div style={{ padding: '40px 0', backgroundColor: '#fff' }}>
          <div className="btn" style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
            <button className="button_secundary_red">
              <Link to={`https://www.even3.com.br/38-coneeagri-e-2-enpeag-611476/`} target="__blank">Certificados e Anais</Link>
            </button>
            <button className="button_secundary_red">
              <Link to={`/galeria`}>Álbum de Fotos</Link>
            </button>
          </div>
        </div> */}
      
        <div className="featuredSec">
          <div className="featuredSec-main">
            <div className="featuredSec-main-content">
              <h3>O EVENTO</h3>
              <h2>Conexão entre estudantes e profissionais de todo o país.</h2>
              <p>
                O CONEEAGRI é o espaço onde a Engenharia Agrícola, Ambiental e de Biossistemas se encontra. 
                A cada edição, uma nova sede, novos aprendizados e o fortalecimento da nossa rede estudantil.
              </p>
            </div>
            <img src={FotoPelotas} alt="Destaque Edição Pelotas" />
          </div>
          
          <div className="featuredSec-secondary">
            {congressos.map((congresso, index) => (
              <div className="card" key={index}>
                <div 
                  className="img" 
                  style={{ 
                    backgroundImage: `linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${congresso.image})`, 
                    backgroundSize: 'cover', 
                    backgroundPosition: 'center' 
                  }}
                >
                  <h2>{congresso.edicao}</h2>
                </div>
                <h3>{congresso.title}</h3>
                <p>{congresso.description}</p>
                <button className="yellow-btn">
                  <Link to={`/congressos/${congresso.slug}`} className="Hero__button">saiba mais</Link>
                </button>
              </div>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}