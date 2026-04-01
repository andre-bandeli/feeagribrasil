import React from 'react'
import { Link } from 'react-router-dom'
import Header from '../componentes/header/Header'
import Hero from '../componentes/hero/Hero'
import Footer from '../componentes/footer/Footer'
import NewsletterComponent from '../componentes/noticias/NewsletterComponent'
import ContatoForms from '../componentes/contatos/ContatoForms'
import { useNewsletter } from '../hooks/useNewsletter'

import './Index.scss'
import '../styles/buttons.scss'

import Imagem1 from '../assets/coneeagri/recente/foto6.webp'
import Imagem2 from '../assets/background/bg13.webp'
import Imagem3 from '../assets/background/bg15.webp'
import Imagem4 from '../assets/background/bg5.webp'
import abeag   from '../assets/abeag.png'
import sbea    from '../assets/sbea.png'

import Foto1 from '../assets/coneeagri/recente/foto1.webp'
import Foto2 from '../assets/coneeagri/recente/foto2.webp'
import Foto3 from '../assets/coneeagri/recente/foto3.webp'
import Foto4 from '../assets/coneeagri/recente/foto4.webp'
import Foto5 from '../assets/coneeagri/recente/foto5.webp'
import Foto6 from '../assets/coneeagri/recente/foto6.webp'

const pilares = [
  {
    num: '01',
    slug: 'representacao-estudantil',
    title: 'Voz Ativa e Liderança',
    content:
      'Atuamos na defesa dos interesses estudantis perante órgãos profissionais e acadêmicos, garantindo que o estudante seja protagonista nas decisões que moldam nossas carreiras.',
    img: Imagem2,
  },
  {
    num: '02',
    slug: 'organizacao-de-eventos',
    title: 'Conexão e Conhecimento',
    content:
      'O CONEEAGRI é o nosso maior marco anual, conectando centenas de acadêmicos e profissionais para debater o futuro das engenharias e as fronteiras da inovação tecnológica.',
    img: Imagem3,
  },
  {
    num: '03',
    slug: 'capacitacao-e-desenvolvimento',
    title: 'Futuro Sustentável',
    content:
      'Fomentamos a formação de profissionais qualificados e conscientes, preparados para os desafios do agronegócio moderno e da gestão sustentável de recursos naturais.',
    img: Imagem4,
  },
]

// ── Skeleton para cards de newsletter ────────────────────────────────────────
function NewsletterSkeleton() {
  return (
    <div className="ix-pub-card ix-pub-card--skel" aria-hidden="true">
      <div className="ix-pub-card__img-wrap ix-pub-card__img-wrap--skel" />
      <div className="ix-pub-card__body">
        <div className="ix-pub-card__skel-line ix-pub-card__skel-line--short" />
        <div className="ix-pub-card__skel-line" />
        <div className="ix-pub-card__skel-line ix-pub-card__skel-line--medium" />
      </div>
    </div>
  )
}

export default function Index() {
  const { newsletters, isLoading: nlLoading, error: nlError } = useNewsletter({ limit: 4 })

  return (
    <div className="ix-page">
      <Header />
      <Hero />

      <main>

        {/* ── 01 · Missão ────────────────────────────────────────────── */}
        <section className="ix-missao">
          <div className="ix-container">
            <div className="ix-missao__grid">
              <div className="ix-missao__text">
                <span className="ix-label">Nossa missão</span>
                <h2 className="ix-heading">
                  Representamos a força das Engenharias Agrária e de
                  Biossistemas em todo o território nacional.
                </h2>
                <p>
                  Unimos estudantes de diversas instituições para fortalecer a
                  formação acadêmica e profissional. Através de nossa rede
                  nacional, atuamos na integração de tecnologia, inovação e
                  sustentabilidade, preparando as novas gerações para liderar
                  a transformação no campo e na indústria.
                </p>
                <Link to="/about" className="ix-missao__link">
                  Conheça a FEEAGRI
                  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
              <div className="ix-missao__img-wrap">
                <img src={Imagem1} alt="Liderança Estudantil FEEAGRI" />
                <div className="ix-missao__img-badge">
                  <span className="ix-missao__img-badge-num">+40</span>
                  <span className="ix-missao__img-badge-txt">universidades<br />associadas</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ── 02 · Pilares ───────────────────────────────────────────── */}
        <section className="ix-pilares">
          <div className="ix-container">
            <header className="ix-section-header">
              <span className="ix-label">O que nos move</span>
              <h2 className="ix-heading">
                Inovação no Campo &amp; Desenvolvimento Sustentável
              </h2>
            </header>
            <div className="ix-pilares__grid">
              {pilares.map(p => (
                <article key={p.slug} className="ix-pilar">
                  <div className="ix-pilar__img-wrap">
                    <img src={p.img} alt={p.title} />
                    <span className="ix-pilar__num" aria-hidden="true">{p.num}</span>
                  </div>
                  <div className="ix-pilar__body">
                    <h3>
                      <Link to={`/atividades/${p.slug}`}>{p.title}</Link>
                    </h3>
                    <p>{p.content}</p>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* ── 03 · Publicações (newsletter backend) ──────────────────── */}
        <section className="ix-pub">
          <div className="ix-container">
            <header className="ix-section-header">
              <span className="ix-label">Publicações</span>
              <div className="ix-section-header__row">
                <h2 className="ix-heading">Últimas edições</h2>
                <Link to="/newsletter" className="ix-pub__ver-todas">
                  Ver todas →
                </Link>
              </div>
            </header>

            {nlError && !nlLoading && (
              <p className="ix-pub__erro" role="alert">
                Não foi possível carregar as publicações.
              </p>
            )}

            <div className="ix-pub__grid">
              {nlLoading
                ? Array.from({ length: 4 }, (_, i) => <NewsletterSkeleton key={i} />)
                : newsletters.map(nl => (
                    <Link
                      key={nl.id ?? nl.slug}
                      to={`/newsletter/${nl.slug}`}
                      className="ix-pub-card"
                    >
                      <div className="ix-pub-card__img-wrap">
                        {nl.imagem_capa
                          ? <img src={nl.imagem_capa} alt={nl.titulo} />
                          : <div className="ix-pub-card__img-placeholder" aria-hidden="true" />
                        }
                        <span className="ix-pub-card__num">#{nl.numero}</span>
                      </div>
                      <div className="ix-pub-card__body">
                        <time className="ix-pub-card__data" dateTime={nl.data_publicacao}>
                          {new Date(nl.data_publicacao).toLocaleDateString('pt-BR', {
                            day: '2-digit', month: 'short', year: 'numeric',
                          })}
                        </time>
                        <h3 className="ix-pub-card__title">{nl.titulo}</h3>
                        <p className="ix-pub-card__chamada">{nl.chamada}</p>
                        <span className="ix-pub-card__cta">Ler publicação →</span>
                      </div>
                    </Link>
                  ))
              }
            </div>
          </div>
        </section>

        {/* ── 04 · CONEEAGRI álbum ───────────────────────────────────── */}
        <section className="ix-evento">
          <div className="ix-container">
            <header className="ix-section-header ix-section-header--light">
              <span className="ix-label ix-label--light">Edição mais recente</span>
              <div className="ix-section-header__row">
                <h2 className="ix-heading ix-heading--light">
                  <strong>XXXVIII</strong> CONEEAGRI &amp; II ENPEAG
                </h2>
                <p className="ix-evento__local">Pelotas/RS · 27–30 out. 2025</p>
              </div>
            </header>

            <div className="ix-evento__album">
              {[Foto1, Foto2, Foto3, Foto4, Foto5, Foto6].map((f, i) => (
                <div key={i} className={`ix-evento__foto ix-evento__foto--${i}`}>
                  <img src={f} alt={`Foto ${i + 1} do evento`} loading="lazy" />
                </div>
              ))}
            </div>

            <div className="ix-evento__footer">
              <a
                href="https://www.flickr.com/photos/confea/albums/72177720330020769/with/54890387698"
                target="_blank"
                rel="noopener noreferrer"
                className="ix-evento__btn"
              >
                Ver álbum completo no Flickr
                <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                  <path d="M4 10h12M11 5l5 5-5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </a>
            </div>
          </div>
        </section>

        {/* ── 05 · Parceiros ─────────────────────────────────────────── */}
        <section className="ix-parceiros">
          <div className="ix-container">
            <div className="ix-parceiros__inner">
              <div className="ix-parceiros__text">
                <span className="ix-label">Apoio institucional</span>
                <h2 className="ix-heading">Nossos parceiros</h2>
                <p>
                  Contamos com o apoio das principais instituições agrárias
                  que acreditam na nossa missão e investem no futuro dos
                  estudantes brasileiros.
                </p>
              </div>
              <div className="ix-parceiros__logos">
                <a href="https://www.abeag.org.br" target="_blank" rel="noopener noreferrer" className="ix-parceiro">
                  <img src={abeag} alt="ABEAG — Associação Brasileira de Engenharia Agrícola" />
                </a>
                <a href="#" className="ix-parceiro">
                  <img src={sbea} alt="SBEA / CREA" />
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* ── 06 · Newsletter inscrição ──────────────────────────────── */}
        <section className="nl-subscribe" aria-label="Inscreva-se na newsletter">
                <div className="nl-subscribe__bg" aria-hidden="true" />
                <div className="nl-subscribe__inner">
                  <div className="nl-subscribe__text">
                    <span className="nl-subscribe__label">Fique por dentro</span>
                    <h2 className="nl-subscribe__heading">
                      Receba cada edição<br />diretamente no seu e-mail
                    </h2>
                    <p className="nl-subscribe__body">
                      Notícias do CONEEAGRI, oportunidades de estágio, chamadas de trabalhos,
                      cursos e tudo que movimenta a Engenharia Agrícola nacional — sem custo,
                      sem spam.
                    </p>
                  </div>
                  <div className="nl-subscribe__glass">
                    <NewsletterComponent />
                  </div>
                </div>
        </section>

        {/* ── 07 · Contato ───────────────────────────────────────────── */}
        <section className="ix-contato">
          <div className="ix-container">
            <ContatoForms />
          </div>
        </section>

      </main>

      <Footer />
    </div>
  )
}