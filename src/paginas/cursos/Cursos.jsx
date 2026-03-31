import React from "react";
import { Link } from "react-router-dom";
import Header from "../../componentes/header/Header";
import Footer from "../../componentes/footer/Footer";

import "./Cursos.scss";
import "../../componentes/header/HeaderSecundario.scss";

import imagem1 from "../../assets/7.jpeg";
import imagem2 from "../../assets/back2.webp";
import imagem3 from "../../assets/back6.jpg";
import imagem7 from "../../assets/back8.jpg";
import imagem8 from "../../assets/4.jpg";
import imagem9 from "../../assets/back13.jpg";

export default function Cursos() {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="cursos-page">
      <Header />
      
      <div className="HeaderSecundario custom-background">
        <div className="links">
          <h3>
            <Link to="/">Home</Link> | <Link to="/cursos">Cursos</Link>
          </h3>
        </div>
        <div className="container">
          <h2>EA | EAA | EB</h2>
          <p>
            Explore as Engenharias que moldam o futuro do agronegócio e da sustentabilidade.
          </p>
          
          <nav className="anchor-nav">
            <button onClick={() => scrollToSection('ea')}>Eng. Agrícola</button>
            <button onClick={() => scrollToSection('eaa')}>Eng. Agrícola e Ambiental</button>
            <button onClick={() => scrollToSection('eb')}>Eng. de Biossistemas</button>
          </nav>
        </div>
      </div>

      <main className="container-main">
        {/* --- ENGENHARIA AGRÍCOLA --- */}
        <section id="ea" className="curso-section ea-theme">
          <div className="curso-header">
            <h1>Engenharia Agrícola (EA)</h1>
            <p className="intro">
              Focada na otimização da produção agropecuária através da aplicação de princípios da engenharia clássica em máquinas, recursos hídricos e construções rurais.
            </p>
          </div>

          <div className="pilar-grid">
            <div className="pilar-card">
              <h4>Exatas e Terra</h4>
              <p>Cálculo, Física, Estatística, Topografia e Sensoriamento Remoto.</p>
            </div>
            <div className="pilar-card">
              <h4>Ciências Agrárias</h4>
              <p>Botânica, Fitotecnia, Zootecnia e Mecanização Agrícola.</p>
            </div>
            <div className="pilar-card">
              <h4>Engenharia Pura</h4>
              <p>Mecânica, CAD, Hidráulica, Termodinâmica e Projeto de Máquinas.</p>
            </div>
            <div className="pilar-card">
              <h4>Gestão</h4>
              <p>Economia Agrícola, Administração Rural e Logística.</p>
            </div>
          </div>

          <div className="content-split">
            <div className="info-box">
              <h3>Aplicações Práticas</h3>
              <ul>
                <li>Tratores e colheitadeiras autônomas.</li>
                <li>Sistemas de irrigação de precisão.</li>
                <li>Ambiência e eficiência em instalações rurais.</li>
                <li>Pós-colheita e armazenamento de grãos.</li>
              </ul>
            </div>
            <div className="info-box">
              <h3>Mercado de Trabalho</h3>
              <ul>
                <li>Indústria de Máquinas e Implementos.</li>
                <li>Cooperativas e Consultoria.</li>
                <li>Gestão de Propriedades Rurais.</li>
                <li>Pesquisa e Desenvolvimento (P&D).</li>
              </ul>
            </div>
          </div>

          <div className="fotos">
            <img src={imagem1} alt="Mecanização" />
            <img src={imagem2} alt="Irrigação" />
            <img src={imagem3} alt="Solo" className="mobile-remove" />
          </div>
        </section>

        <hr className="divider" />

        {/* --- ENGENHARIA AGRÍCOLA E AMBIENTAL --- */}
        <section id="eaa" className="curso-section eaa-theme">
          <div className="curso-header">
            <h1>Engenharia Agrícola e Ambiental (EAA)</h1>
            <p className="intro">
              O equilíbrio entre a produtividade no campo e a conservação dos recursos naturais, atuando no controle da poluição e gestão de bacias.
            </p>
          </div>

          <div className="pilar-grid">
            <div className="pilar-card">
              <h4>Base Tecnológica</h4>
              <p>Cálculo, Química Orgânica, Hidrologia e Geotecnologias.</p>
            </div>
            <div className="pilar-card">
              <h4>Foco Ambiental</h4>
              <p>Ecologia, Tratamento de Resíduos, Saneamento e Licenciamento.</p>
            </div>
            <div className="pilar-card">
              <h4>Conservação</h4>
              <p>Manejo de Bacias, Recuperação de Áreas e Gestão da Água.</p>
            </div>
            <div className="pilar-card">
              <h4>Produção</h4>
              <p>Construções Sustentáveis e Máquinas de Baixo Impacto.</p>
            </div>
          </div>

          <div className="content-split">
            <div className="info-box">
              <h3>Aplicações Práticas</h3>
              <ul>
                <li>Recuperação de áreas degradadas e controle erosivo.</li>
                <li>Gestão de efluentes agroindustriais.</li>
                <li>Monitoramento ambiental via drones e satélites.</li>
                <li>Sistemas integrados de produção sustentável.</li>
              </ul>
            </div>
            <div className="info-box">
              <h3>Mercado de Trabalho</h3>
              <ul>
                <li>Órgãos Ambientais e Reguladores.</li>
                <li>Gestão de Recursos Hídricos.</li>
                <li>Empresas de Crédito de Carbono.</li>
                <li>Licenciamento Ambiental em Agroindústrias.</li>
              </ul>
            </div>
          </div>

          <div className="fotos">
            <img src={imagem7} alt="Recursos Naturais" />
            <img src={imagem8} alt="Preservação" />
            <img src={imagem9} alt="Tecnologia Verde" className="mobile-remove" />
          </div>
        </section>

        <hr className="divider" />

        {/* --- ENGENHARIA DE BIOSSISTEMAS --- */}
        <section id="eb" className="curso-section eb-theme">
          <div className="curso-header">
            <h1>Engenharia de Biossistemas (EB)</h1>
            <p className="intro">
              A interface entre a engenharia moderna e os processos biológicos. Foca em sistemas complexos, biotecnologia e automação inteligente.
            </p>
          </div>

          <div className="pilar-grid">
            <div className="pilar-card">
              <h4>Ciências da Vida</h4>
              <p>Biologia Molecular, Bioquímica, Genética e Microbiologia.</p>
            </div>
            <div className="pilar-card">
              <h4>Tecnologia de Ponta</h4>
              <p>Automação, Controle de Processos e Inteligência Artificial.</p>
            </div>
            <div className="pilar-card">
              <h4>Bioenergia</h4>
              <p>Termodinâmica, Biocombustíveis e Energias Renováveis.</p>
            </div>
            <div className="pilar-card">
              <h4>Sistemas</h4>
              <p>Modelagem Matemática e Engenharia de Bioprocessos.</p>
            </div>
          </div>

          <div className="content-split">
            <div className="info-box">
              <h3>Aplicações Práticas</h3>
              <ul>
                <li>Estufas inteligentes com controle de clima automatizado.</li>
                <li>Produção de bioenergia (biogás/biodiesel).</li>
                <li>Desenvolvimento de bioplásticos e biomateriais.</li>
                <li>Sensores biológicos e nanotecnologia no campo.</li>
              </ul>
            </div>
            <div className="info-box">
              <h3>Mercado de Trabalho</h3>
              <ul>
                <li>Agtechs e Startups de Inovação.</li>
                <li>Indústria de Bioprocessos e Farmacêutica.</li>
                <li>Setor de Energias Limpas.</li>
                <li>Automação e Robótica Agrícola.</li>
              </ul>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}