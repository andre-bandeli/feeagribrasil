import React from 'react'
import Header from '../../componentes/header/Header'
import Footer from '../../componentes/footer/Footer'
import logo from '../../assets/logo_colored.png'
import heroImg from '../../assets/background/bg3.webp'
import './About.scss'

const valores = [
  { titulo: 'Compromisso', texto: 'Trabalhar em prol do desenvolvimento e bem-estar dos nossos membros.' },
  { titulo: 'Transparência', texto: 'Gestão participativa e comunicação clara em todas as nossas ações.' },
  { titulo: 'Inovação', texto: 'Incentivar práticas e soluções modernas no ensino e aplicação da Engenharia Agrícola.' },
  { titulo: 'Sustentabilidade', texto: 'Promover ações que contribuam para o equilíbrio ambiental e o desenvolvimento sustentável.' },
  { titulo: 'Inclusão', texto: 'Garantir que todas as vozes sejam ouvidas, respeitando a diversidade de ideias e culturas.' },
  { titulo: 'Excelência', texto: 'Incentivar a busca constante pela qualidade no ensino e pesquisa.' },
]

export default function About() {
  return (
    <div className="ab-page">
      <Header />

      {/* ── Hero 100vh ── */}
      <section className="ab-hero" aria-label="Sobre a FEEAGRI">
        <img
          className="ab-hero__img"
          src={heroImg}
          alt="Campo agrícola brasileiro"
          loading="eager"
        />
        <div className="ab-hero__overlay" />
        <div className="ab-hero__content">
          <span className="ab-hero__eyebrow">Federação Brasileira</span>
          <h1 className="ab-hero__title">Sobre a<br />FEEAGRI</h1>
          <div className="ab-hero__line" aria-hidden="true" />
        </div>
        <div className="ab-hero__scroll" aria-hidden="true">
          <span />
        </div>
      </section>

      {/* ── Corpo principal ── */}
      <main className="ab-main">

        {/* Intro chamativa */}
        <section className="ab-intro">
          <p className="ab-intro__lead">
            Representamos os estudantes de Engenharia Agrícola, Agrícola e Ambiental
            e de Biossistemas em todo o Brasil — unindo academia, instituições e o
            campo numa única federação democrática.
          </p>
        </section>

        {/* Seções de texto + widget */}
        <div className="ab-body">
          <div className="ab-body__text">

            <article className="ab-section">
              <span className="ab-section__label">Nossa identidade</span>
              <h2 className="ab-section__title">Construindo a união dos estudantes brasileiros</h2>
              <p>
                A Federação Brasileira dos Estudantes de Engenharia Agrícola,
                Engenharia Agrícola e Ambiental e Engenharia de Biossistemas
                (FEEAGRI) é uma entidade nacional, sem fins lucrativos, que
                representa os estudantes dessas áreas em todo o Brasil. Atuamos
                como um elo entre acadêmicos, instituições de ensino e entidades
                públicas e privadas, promovendo a união, o desenvolvimento
                acadêmico e a participação ativa de nossos membros em eventos
                técnicos, científicos e sociais.
              </p>
              <p>
                Com uma estrutura democrática, composta por estudantes eleitos
                em assembleias gerais realizadas anualmente durante o Congresso
                Nacional dos Estudantes de Engenharia Agrícola (CONEEAGRI),
                buscamos garantir que a voz dos futuros engenheiros agrícolas
                seja ouvida em nível nacional.
              </p>
            </article>

            <article className="ab-section">
              <span className="ab-section__label">Trajetória</span>
              <h2 className="ab-section__title">Nossa história</h2>
              <p>
                A FEEAGRI foi fundada com o propósito de unificar os estudantes de
                Engenharia Agrícola, Engenharia Agrícola e Ambiental e Engenharia
                de Biossistemas de todo o Brasil, fortalecendo a representatividade
                de nossas áreas em cenários acadêmicos e profissionais.
              </p>
              <p>
                Desde a sua criação, tem sido protagonista na organização do
                CONEEAGRI, evento anual que reúne acadêmicos, pesquisadores e
                profissionais do setor. Ao longo dos anos, expandimos nossa
                atuação com a inclusão de delegados de universidades e
                representantes regionais, promovendo a cooperação entre
                instituições e fomentando a participação ativa dos estudantes
                em discussões e projetos de impacto nacional.
              </p>
              <p>
                Hoje, a FEEAGRI é mais do que uma federação estudantil — é uma
                comunidade vibrante, comprometida com a formação de líderes que
                transformarão o futuro da engenharia e da sociedade.
              </p>
            </article>

            <article className="ab-section">
              <span className="ab-section__label">Propósito</span>
              <h2 className="ab-section__title">Missão e Visão</h2>
              <div className="ab-mvv">
                <div className="ab-mvv__item">
                  <p className="ab-mvv__label">Missão</p>
                  <p className="ab-mvv__texto">
                    Representar os estudantes de Engenharia Agrícola, Engenharia
                    Agrícola e Ambiental e Engenharia de Biossistemas, promovendo
                    o desenvolvimento acadêmico, profissional e social por meio
                    da integração entre instituições de ensino e eventos
                    técnico-científicos.
                  </p>
                </div>
                <div className="ab-mvv__item">
                  <p className="ab-mvv__label">Visão</p>
                  <p className="ab-mvv__texto">
                    Ser reconhecida como a principal entidade estudantil de
                    referência nacional na promoção de ações que impactem
                    positivamente a formação dos estudantes de Engenharia
                    Agrícola e áreas correlatas.
                  </p>
                </div>
              </div>
            </article>

          </div>

          {/* <aside className="ab-body__aside">
            <div className="ab-widget-wrap">
              <WidgetCustom />
            </div>
          </aside> */}
        </div>

        <div className="ab-logo">
          <img src={logo} alt="Logo FEEAGRI" />
        </div>

        {/* Valores */}
        <section className="ab-valores">
          <div className="ab-valores__header">
            <span className="ab-section__label">Princípios</span>
            <h2 className="ab-section__title">Nossos valores</h2>
          </div>
          <div className="ab-valores__grid">
            {valores.map((v, i) => (
              <div key={i} className="ab-valor">
                <span className="ab-valor__num">{String(i + 1).padStart(2, '0')}</span>
                <p className="ab-valor__titulo">{v.titulo}</p>
                <p className="ab-valor__texto">{v.texto}</p>
              </div>
            ))}
          </div>
          
        </section>

      </main>

      <Footer />
    </div>
  )
}