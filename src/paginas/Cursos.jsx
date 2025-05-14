import React from "react";
import "../styles/cursosPage.scss";
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
import { Link } from "react-router-dom";
import "../styles/HeaderSecundario.scss";
import { FaBook, FaBriefcase, FaLightbulb, FaChartLine } from "react-icons/fa";

import imagem1 from "../assets/7.jpeg";
import imagem2 from "../assets/back1.jpg";
import imagem3 from "../assets/3.png";
import imagem4 from "../assets/back4.jpg";
import imagem5 from "../assets/back6.jpg";
import imagem6 from "../assets/back5.jpg";

import imagem7 from "../assets/back8.jpg";
import imagem8 from "../assets/back7.jpg";
import imagem9 from "../assets/back9.jpg";
import imagem10 from "../assets/back10.jpg";
import imagem11 from "../assets/5.jpg";
import imagem12 from "../assets/12.jpg";

import imagem13 from "../assets/back13.jpg";
import imagem14 from "../assets/back14.jpg";
import imagem15 from "../assets/back15.jpg";

export default function Cursos() {
  return (
    <div className="cursos-page">
      <Header />
      <div className="HeaderSecundario custom-background">
        <div className="links">
          <h3>
            <Link to={`/`} className="">
              Home
            </Link>{" "}
            |{" "}
            <Link to={`/cursos`} className="">
              Cursos
            </Link>
          </h3>
        </div>
        <div className="container">
          <h2>EA | EAA | EB</h2>
          <p>
            Explore em profundidade os cursos de Engenharia Agrícola (EA),
            Engenharia Agrícola e Ambiental (EAA) e Engenharia de Biossistemas
            (EB), e descubra como cada um molda o futuro do agronegócio e da
            sustentabilidade.
          </p>

        </div>
      </div>
      <main>
        <div className="cursos">
          <h1>Engenharia Agrícola (EA)</h1>
          <p>
            A Engenharia Agrícola aplica princípios da engenharia para otimizar
            a produção no setor agropecuário, abrangendo desde o projeto de
            máquinas e implementos até o manejo eficiente de recursos hídricos e
            energéticos. O engenheiro agrícola atua na busca por maior
            produtividade, redução de custos e sustentabilidade nas atividades
            do campo.
          </p>
          <h2>Matérias Fundamentais</h2>
          <ul>
            <li className="custom-box">Cálculo, Álgebra Linear, Física, Química, Estatística</li>
            <li className="custom-box">Botânica, Zoologia, Agronomia Geral, Mecanização Agrícola</li>
            <li className="custom-box">Irrigação e Drenagem, Manejo do Solo e da Água</li>
            <li className="custom-box">
              Construções Rurais, Desenho Técnico, Resistência dos Materiais
            </li>
            <li className="custom-box">Economia Agrícola, Administração Rural</li>
          </ul>
          <ul>
            <li>
              <p>
                A formação em Engenharia Agrícola estrutura-se em um arcabouço
                curricular abrangente, que integra conhecimentos fundamentais da
                engenharia com as especificidades do domínio agrícola. Algumas
                das disciplinas nucleares incluem:
              </p>
              <p> <strong>Ciências Exatas e da Terra</strong>:
                Cálculo diferencial e integral (uma e múltiplas variáveis),
                álgebra linear, geometria analítica, física geral e experimental
                (mecânica, termodinâmica, eletromagnetismo, óptica), química
                geral e orgânica, estatística e probabilidade, topografia e
                geodésia, sensoriamento remoto e sistemas de informação
                geográfica (SIG).</p>
                <p><strong>Ciências Agrárias</strong>: Botânica geral e
                sistemática, zoologia geral e aplicada, agronomia geral,
                fitotecnia (grandes culturas, olericultura, fruticultura),
                zootecnia (produção animal, nutrição animal, melhoramento
                genético), mecanização agrícola (máquinas e implementos, tração
                animal e motorizada), irrigação e drenagem (hidráulica aplicada,
                projetos de irrigação e drenagem), manejo do solo e da água
                (conservação do solo, fertilidade do solo, hidrologia agrícola),
                construções rurais e ambiência (projeto e dimensionamento de
                instalações, conforto animal, eficiência energética), tecnologia
                de pós-colheita (secagem, armazenamento, processamento de
                produtos agrícolas).</p> 
                <p> <strong>Engenharia</strong>: Desenho técnico e CAD, mecânica
                geral (estática, dinâmica, resistência dos materiais),
                termodinâmica, hidráulica e hidrologia, eletricidade aplicada e
                eletrônica, fenômenos de transporte (mecânica dos fluidos,
                transferência de calor e massa), projeto de máquinas agrícolas,
                gestão de projetos e obras.</p> 
                <p><strong>Economia e Gestão</strong>: Economia
                agrícola, administração e gestão rural, legislação agrária e
                ambiental, segurança do trabalho no meio rural, análise de
                custos e viabilidade econômica de projetos agropecuários.</p> 
            </li>
          </ul>
          
          <h2>Aplicações</h2>
          <ul>
            <li>
              Desenvolvimento de tratores e colheitadeiras de alta performance.
            </li>
            <li>
              Sistemas de irrigação de precisão para uso eficiente da água.
            </li>
            <li>
              Projetos de instalações rurais com foco em bem-estar animal e
              eficiência energética.
            </li>
            <li>
              Técnicas de manejo do solo para aumentar a produtividade e reduzir
              a erosão.
            </li>
            <li>
              Tecnologias para conservação de grãos e outros produtos agrícolas.
            </li>
            <li>
              Utilização de agricultura de precisão com sensoriamento remoto e
              GPS.
            </li>
          </ul>
          <h2>Mercado de Trabalho</h2>
          <ul>
            <li>Empresas de máquinas e implementos agrícolas.</li>
            <li>Empresas de irrigação e equipamentos.</li>
            <li>Cooperativas e associações de produtores.</li>
            <li>Empresas de consultoria e planejamento agrícola.</li>
            <li>Indústrias de processamento de alimentos e bebidas.</li>
            <li>Instituições de pesquisa e ensino.</li>
            <li>Órgãos governamentais ligados à agricultura.</li>
            <li>Propriedades rurais (gestão e produção).</li>
          </ul>
          <div className="fotos">
            <img src={imagem1} alt="Imagem relacionada à Engenharia Agrícola" />
            <img src={imagem2} alt="Imagem relacionada à Engenharia Agrícola" />
            <img src={imagem3} alt="Imagem relacionada à Engenharia Agrícola" />
            <img src={imagem4} alt="Imagem relacionada à Engenharia Agrícola" />
            <img src={imagem5} alt="Imagem relacionada à Engenharia Agrícola" />
            <img src={imagem6} alt="Imagem relacionada à Engenharia Agrícola" />
          </div>
        </div>

        <div className="cursos">
  <h1>Engenharia Agrícola e Ambiental (EAA)</h1>
  <p>
    A Engenharia Agrícola e Ambiental aplica princípios da engenharia para promover o desenvolvimento sustentável da produção agropecuária e a conservação dos recursos naturais. O profissional formado nessa área atua desde o projeto de máquinas, construções e sistemas produtivos até o controle da poluição, gestão ambiental e uso racional da água, do solo e da energia, contribuindo com soluções tecnológicas que aumentem a produtividade no campo e reduzam os impactos ambientais.
  </p>
  <h2>Matérias Fundamentais</h2>
  <ul>
    <li className="custom-box">Cálculo, Álgebra Linear, Física, Química, Estatística</li>
    <li className="custom-box">Botânica, Zoologia, Agronomia Geral, Ecologia, Mecanização Agrícola</li>
    <li className="custom-box">Irrigação e Drenagem, Manejo e Conservação do Solo e da Água, Hidrologia</li>
    <li className="custom-box">Construções Rurais, Desenho Técnico, Resistência dos Materiais, Saneamento Ambiental</li>
    <li className="custom-box">Economia Agrícola, Gestão e Licenciamento Ambiental</li>
  </ul>
  <ul>
    <li>
      <p>
        A formação em Engenharia Agrícola e Ambiental abrange um currículo multidisciplinar que integra as bases da engenharia com conhecimentos das ciências agrárias e ambientais. Em Ciências Exatas e da Terra, destacam-se disciplinas como cálculo diferencial e integral (uma e múltiplas variáveis), álgebra linear, geometria analítica, física geral e experimental (mecânica, termodinâmica, eletromagnetismo), química geral e orgânica, estatística, topografia, sensoriamento remoto e sistemas de informação geográfica (SIG). Na área das Ciências Agrárias, são estudadas botânica, zoologia, agronomia geral, fitotecnia, zootecnia, mecanização agrícola, irrigação e drenagem, além do manejo e conservação do solo e da água. Já na área ambiental, o estudante aprofunda-se em temas como ecologia aplicada, poluição do solo, da água e do ar, tratamento de resíduos, saneamento rural e urbano, licenciamento e gestão ambiental. No campo da Engenharia, o currículo inclui desenho técnico e CAD, resistência dos materiais, hidráulica, mecânica dos fluidos, eletricidade e eletrônica aplicada, termodinâmica, fenômenos de transporte, projeto de máquinas e construções rurais. Por fim, a formação contempla ainda disciplinas de Economia e Gestão, como economia agrícola, administração rural, análise de viabilidade de projetos, segurança do trabalho e legislação ambiental.
      </p>
    </li>
  </ul>

  <h2>Aplicações</h2>
  <ul>
    <li>
      Desenvolvimento de tecnologias sustentáveis para a produção agropecuária, como tratores e colheitadeiras de alta eficiência energética.
    </li>
    <li>
      Implantação de sistemas de irrigação de precisão e manejo eficiente da água em bacias hidrográficas.
    </li>
    <li>
      Planejamento de construções rurais com foco em conforto animal, ambiência e sustentabilidade.
    </li>
    <li>
      Recuperação de áreas degradadas, controle de erosão e preservação da qualidade do solo e da água.
    </li>
    <li>
      Gestão de resíduos sólidos e efluentes agroindustriais com foco em reaproveitamento e redução de impactos ambientais.
    </li>
    <li>
      Aplicação de técnicas de agricultura de precisão e monitoramento ambiental com uso de sensores remotos, drones e geotecnologias.
    </li>
  </ul>

  <h2>Mercado de Trabalho</h2>
  <ul>
    <li>Empresas de máquinas e implementos agrícolas.</li>
    <li>Empresas de projetos de irrigação, drenagem e saneamento.</li>
    <li>Cooperativas, consultorias e ONGs ambientais.</li>
    <li>Órgãos públicos e agências reguladoras do meio ambiente.</li>
    <li>Instituições de pesquisa agroambiental e universidades.</li>
    <li>Empresas de licenciamento e monitoramento ambiental.</li>
    <li>Propriedades rurais e agroindústrias.</li>
    <li>Setores de planejamento e gestão ambiental urbana e rural.</li>
  </ul>

  <div className="fotos">
    <img src={imagem7} alt="Imagem relacionada à Engenharia Agrícola e Ambiental" />
    <img src={imagem8} alt="Imagem relacionada à Engenharia Agrícola e Ambiental" />
    <img src={imagem9} alt="Imagem relacionada à Engenharia Agrícola e Ambiental" />
    <img src={imagem10} alt="Imagem relacionada à Engenharia Agrícola e Ambiental" />
    <img src={imagem11} alt="Imagem relacionada à Engenharia Agrícola e Ambiental" />
    <img src={imagem12} alt="Imagem relacionada à Engenharia Agrícola e Ambiental" />
  </div>
</div>
<div className="cursos">
  <h1>Engenharia de Biossistemas (EB)</h1>
  <p>
    A Engenharia de Biossistemas é uma área multidisciplinar que une os conhecimentos das engenharias tradicionais com as ciências biológicas e agrárias para desenvolver soluções sustentáveis em sistemas biológicos. O profissional da área atua na interface entre a tecnologia e os processos naturais, projetando, gerenciando e otimizando sistemas relacionados à produção agroindustrial, à energia renovável, ao meio ambiente e ao uso eficiente de recursos naturais.
  </p>

  <h2>Matérias Fundamentais</h2>
  <ul>
    <li className="custom-box">Cálculo, Álgebra Linear, Física, Química, Estatística</li>
    <li className="custom-box">Biologia Celular e Molecular, Microbiologia, Bioquímica, Genética</li>
    <li className="custom-box">Termodinâmica, Mecânica dos Fluidos, Fenômenos de Transporte</li>
    <li className="custom-box">Biotecnologia, Sistemas Biológicos, Engenharia de Bioprocessos</li>
    <li className="custom-box">Projetos de Sistemas Agroindustriais, Energias Renováveis, Automação e Controle</li>
  </ul>
  <ul>
    <li>
      <p>
        A formação em Engenharia de Biossistemas contempla uma sólida base em matemática, física, química e biologia, permitindo que o aluno compreenda e modele processos que envolvem organismos vivos e suas interações com o ambiente e com sistemas tecnológicos. O currículo abrange disciplinas como cálculo diferencial e integral, álgebra linear, estatística aplicada, física geral (mecânica, termodinâmica, eletromagnetismo), química geral e orgânica, além de biologia celular, microbiologia, genética e bioquímica. No campo das engenharias, são estudadas termodinâmica, mecânica dos fluidos, transferência de calor e massa, desenho técnico e CAD, resistência dos materiais, eletrônica, instrumentação, controle e automação. Há também forte presença de conteúdos voltados para biotecnologia, engenharia de bioprocessos, sustentabilidade, gestão ambiental e tecnologias de produção agroindustrial. A integração desses conhecimentos permite ao engenheiro de biossistemas atuar no desenvolvimento de soluções inovadoras, como o aproveitamento energético de resíduos, produção de biocombustíveis, controle ambiental, automação agrícola e gestão de cadeias produtivas sustentáveis.
      </p>
    </li>
  </ul>

  <h2>Aplicações</h2>
  <ul>
    <li>
      Projeto e operação de sistemas de produção agroindustrial integrados com tecnologias biológicas.
    </li>
    <li>
      Desenvolvimento de processos para obtenção de bioenergia, como biogás e biodiesel.
    </li>
    <li>
      Modelagem e simulação de processos biológicos e ambientais.
    </li>
    <li>
      Automação e controle de sistemas agrícolas, como estufas inteligentes e irrigação automatizada.
    </li>
    <li>
      Monitoramento ambiental com uso de sensores e análise de dados em tempo real.
    </li>
    <li>
      Tratamento de resíduos orgânicos e aproveitamento de subprodutos agroindustriais.
    </li>
  </ul>

  <h2>Mercado de Trabalho</h2>
  <ul>
    <li>Empresas agroindustriais e de biotecnologia.</li>
    <li>Setores de energias renováveis e bioenergia.</li>
    <li>Startups de tecnologia aplicada ao agronegócio (agtechs).</li>
    <li>Laboratórios de pesquisa em biossistemas e engenharia biológica.</li>
    <li>Órgãos públicos de controle ambiental e desenvolvimento rural.</li>
    <li>Empresas de automação e controle de processos produtivos.</li>
    <li>Consultorias especializadas em sustentabilidade e inovação agroambiental.</li>
    <li>Instituições de ensino e centros de pesquisa científica e tecnológica.</li>
  </ul>

</div>

      </main>

      <Footer />
    </div>
  );
}
