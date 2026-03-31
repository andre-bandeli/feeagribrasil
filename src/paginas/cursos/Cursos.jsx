import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../../componentes/header/Header'
import Footer from '../../componentes/footer/Footer'
import './Cursos.scss'

import imagem1 from '../../assets/7.jpeg'
import imagem2 from '../../assets/back2.webp'
import imagem3 from '../../assets/back6.jpg'
import imagem7 from '../../assets/back8.jpg'
import imagem8 from '../../assets/4.jpg'
import imagem9 from '../../assets/back13.jpg'

const scrollTo = id => document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })

const cursos = [
  {
    id: 'ea',
    index: '01 / 03',
    sigla: 'EA',
    nomeCompleto: ['Engenharia', 'Agrícola'],
    headline: 'Da semente ao sistema — a engenharia que move o campo brasileiro',
    corpo: 'O Brasil é o celeiro do mundo. Mas isso não acontece por acaso — acontece porque engenheiros agrícolas desenvolvem as máquinas, os sistemas de irrigação, as instalações e os processos que tornam a produção agropecuária nacional a mais eficiente e competitiva do planeta. A EA é a engenharia clássica aplicada ao agro: rigorosa, prática e indispensável.',
    pullQuote: 'O Brasil possui mais de 340 milhões de hectares de área agricultável. Projetar os sistemas que fazem essa escala funcionar é o desafio diário do engenheiro agrícola.',
    areas: [
      { num: 'I',   nome: 'Máquinas e Mecanização',  desc: 'Projeto, seleção e operação de tratores, colheitadeiras e implementos agrícolas.' },
      { num: 'II',  nome: 'Recursos Hídricos',        desc: 'Irrigação, drenagem e aproveitamento sustentável da água na agricultura.' },
      { num: 'III', nome: 'Construções Rurais',        desc: 'Projetos de silos, galpões, estábulos e ambientes de produção animal.' },
      { num: 'IV',  nome: 'Pós-Colheita',             desc: 'Secagem, armazenamento e processamento primário de grãos e produtos agrícolas.' },
    ],
    atuacao: [
      'Indústrias de máquinas agrícolas como John Deere, Case e AGCO',
      'Empresas de irrigação e consultoria hídrica',
      'Cooperativas e tradings do agronegócio',
      'Gestão técnica de fazendas e propriedades rurais',
      'Embrapa, universidades e centros de P&D',
    ],
    fotos: [imagem1, imagem2],
  },
  {
    id: 'eaa',
    index: '02 / 03',
    sigla: 'EAA',
    nomeCompleto: ['Engenharia', 'Agrícola e', 'Ambiental'],
    headline: 'Produzir sem destruir — a engenharia da responsabilidade territorial',
    corpo: 'A expansão do agronegócio brasileiro só é sustentável quando acompanhada de técnica ambiental rigorosa. O engenheiro agrícola e ambiental é o profissional que sabe onde a produção termina e a conservação começa — e como fazer os dois coexistirem. Atua em licenciamento, recuperação de áreas, gestão de bacias e no nascente mercado de carbono.',
    pullQuote: 'Com o mercado de carbono em franca expansão e o CAR consolidado, nunca houve tanta demanda por profissionais que entendam tanto de produção quanto de legislação ambiental.',
    areas: [
      { num: 'I',   nome: 'Gestão de Recursos Hídricos', desc: 'Hidrologia, manejo de bacias e qualidade da água em sistemas agrícolas.' },
      { num: 'II',  nome: 'Controle Ambiental',           desc: 'Tratamento de efluentes, gestão de resíduos sólidos e passivos ambientais.' },
      { num: 'III', nome: 'Conservação do Solo',           desc: 'Erosão, recuperação de áreas degradadas e planejamento de uso da terra.' },
      { num: 'IV',  nome: 'Geotecnologias',               desc: 'Sensoriamento remoto, SIG e monitoramento ambiental por satélite e drone.' },
    ],
    atuacao: [
      'IBAMA, ICMBio e órgãos estaduais de meio ambiente',
      'Empresas de licenciamento e consultoria ambiental',
      'Comitês de bacia hidrográfica e ANA',
      'Startups e empresas de crédito de carbono',
      'Agroindústrias com passivo ambiental regulado',
    ],
    fotos: [imagem7, imagem8],
  },
  {
    id: 'eb',
    index: '03 / 03',
    sigla: 'EB',
    nomeCompleto: ['Engenharia', 'de', 'Biossistemas'],
    headline: 'Onde a biologia encontra o código — a engenharia do agro do futuro',
    corpo: 'A Engenharia de Biossistemas é a mais nova e a mais multidisciplinar das três. Nasceu da necessidade de formar profissionais capazes de transitar entre a biologia, a automação e a biotecnologia aplicadas à produção de alimentos e energia. É a engenharia das agtechs, dos biorreatores, das fazendas verticais e da agricultura de precisão em sua forma mais avançada.',
    pullQuote: 'A convergência entre biotecnologia, automação e produção de alimentos criou um campo de atuação que mal existia há uma geração. O engenheiro de biossistemas nasceu exatamente para ocupá-lo.',
    areas: [
      { num: 'I',   nome: 'Automação e Controle',   desc: 'Sistemas embarcados, sensores, IoT e controle de processos biológicos.' },
      { num: 'II',  nome: 'Bioenergia',              desc: 'Biogás, bioetanol, biodiesel e aproveitamento energético de resíduos agrícolas.' },
      { num: 'III', nome: 'Biotecnologia Aplicada',  desc: 'Fermentação, bioprocessos e desenvolvimento de biomateriais e bioinsumos.' },
      { num: 'IV',  nome: 'Sistemas de Produção',   desc: 'Estufas inteligentes, aquaponia, hidroponia e fazendas verticais controladas.' },
    ],
    atuacao: [
      'Agtechs e startups de tecnologia agrícola',
      'Indústrias de biocombustíveis e bioenergia',
      'Empresas farmacêuticas e de biotecnologia',
      'Centros de P&D em automação agrícola',
      'Setor elétrico e empresas de energia renovável',
    ],
    fotos: [imagem9, imagem3],
  },
]

export default function Cursos() {
  return (
    <div className="cr-page">
      <Header />

      <section className="cr-hero">
        <div className="cr-hero__overlay" />
        <div className="cr-hero__content">
          <span className="cr-hero__eyebrow">Ciências Agrárias</span>
          <h1 className="cr-hero__title">Eixos de Formação</h1>
          <p className="cr-hero__sub">
            Três engenharias. Uma missão comum: formar os profissionais que alimentam,
            conservam e reinventam o campo brasileiro.
          </p>
        </div>
      </section>

      <nav className="cr-nav" aria-label="Ir para curso">
        <span className="cr-nav__label">Cursos</span>
        <div className="cr-nav__links">
          <button onClick={() => scrollTo('ea')}>Engenharia Agrícola</button>
          <span className="cr-nav__sep">·</span>
          <button onClick={() => scrollTo('eaa')}>Agrícola e Ambiental</button>
          <span className="cr-nav__sep">·</span>
          <button onClick={() => scrollTo('eb')}>Biossistemas</button>
        </div>
      </nav>

      <main className="cr-main">
        {cursos.map((c, idx) => (
          <article key={c.id} id={c.id} className={`cr-cs cr-cs--${c.id}`}>
            <span className="cr-cs__wm" aria-hidden="true">{c.sigla}</span>

            <div className="cr-cs__top">
              {/* Meta separada com padding próprio para a borda lateral funcionar */}
              <div className="cr-cs__meta">
                <p className="cr-cs__index">{c.index}</p>
                <p className="cr-cs__sigla">{c.sigla}</p>
                <p className="cr-cs__fullname">
                  {c.nomeCompleto.map((l, i) => <span key={i}>{l}<br /></span>)}
                </p>
              </div>
              <div className="cr-cs__lead">
                <h2 className="cr-cs__headline">{c.headline}</h2>
                <p className="cr-cs__corpo">{c.corpo}</p>
              </div>
            </div>

            <div className="cr-cs__mid">
              <div className="cr-cs__col">
                <span className="cr-cs__col-label">Áreas de formação</span>
                {c.areas.map(a => (
                  <div key={a.num} className="cr-area">
                    <span className="cr-area__num">{a.num}</span>
                    <div>
                      <p className="cr-area__nome">{a.nome}</p>
                      <p className="cr-area__desc">{a.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="cr-cs__col">
                <span className="cr-cs__col-label">Onde atua o profissional</span>
                {c.atuacao.map((a, i) => (
                  <div key={i} className="cr-atuacao">
                    <span className="cr-atuacao__dash">—</span>
                    <span className="cr-atuacao__text">{a}</span>
                  </div>
                ))}
              </div>
            </div>

            <blockquote className="cr-cs__pull">
              <p>{c.pullQuote}</p>
            </blockquote>

            {c.fotos.length > 0 && (
              <div className="cr-cs__fotos">
                <img src={c.fotos[0]} alt="" />
                {c.fotos[1] && <img src={c.fotos[1]} alt="" />}
              </div>
            )}

            {idx < cursos.length - 1 && <div className="cr-divider" />}
          </article>
        ))}
      </main>

      <Footer />
    </div>
  )
}