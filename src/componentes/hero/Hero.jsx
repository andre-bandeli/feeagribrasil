import React, { useState, useEffect, useRef } from "react";
import Slider from "react-slick";
import "./Hero.scss";
import { Link } from "react-router-dom";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import Hero1 from "../../assets/background/bg12.jpg";
import Hero2 from "../../assets/background/bg4.jpg";
import Hero3 from "../../assets/background/bg3.jpg";
import logo_white from "../../assets/logo_white.png";

const AUTOPLAY_SPEED = 6000;

const slides = [
  {
    image: Hero1,
    eyebrow: "Entidade Estudantil Nacional",
    title: "Unindo estudantes das Ciências Agrárias em todo o Brasil",
    description:
      "A FEEAGRI fortalece os laços entre futuros engenheiros agrícolas, ambientais e de biossistemas — promovendo eventos, representação e desenvolvimento profissional.",
    slug: "federacao-brasileira",
    cta: "Conheça a FEEAGRI",
  },
  {
    image: Hero2,
    eyebrow: "Inovação & Sustentabilidade",
    title: "Moldando o futuro da Engenharia Agrícola e Ambiental",
    description:
      "Práticas sustentáveis, tecnologia de campo e uma rede nacional de estudantes comprometidos com a transformação do agro brasileiro.",
    slug: "futuro-engenharia-agricola",
    cta: "Saiba mais",
  },
  {
    image: Hero3,
    eyebrow: "XXXVII CONEEAGRI · II ENPEAG",
    title: "O maior encontro de estudantes do agro está chegando",
    description:
      "Conecte-se com centenas de estudantes e profissionais, explore inovações e viva experiências que definem carreiras no setor.",
    slug: "coneeagri-enpeag",
    cta: "Garanta sua vaga",
  },
];

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);
  const rafRef = useRef(null);
  const startRef = useRef(null);

  useEffect(() => {
    startRef.current = performance.now();

    const tick = (now) => {
      const pct = Math.min(((now - startRef.current) / AUTOPLAY_SPEED) * 100, 100);
      setProgress(pct);
      if (pct < 100) rafRef.current = requestAnimationFrame(tick);
    };

    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, [currentSlide]);

  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: AUTOPLAY_SPEED,
    pauseOnHover: false,
    pauseOnFocus: false,
    fade: true,
    cssEase: "cubic-bezier(0.77, 0, 0.175, 1)",
    beforeChange: (_old, next) => {
      setCurrentSlide(next);
      setProgress(0);
    },
  };

  return (
    <section className="Hero" aria-label="Destaque principal">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index}>
            <div className="Hero__slide">
              <img
                src={slide.image}
                alt={slide.title}
                className="Hero__bg"
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
                fetchPriority={index === 0 ? "high" : "auto"}
              />
              <div className="Hero__overlay" />

              <div className="Hero__content">
                <span className="Hero__eyebrow">{slide.eyebrow}</span>
                <h1 className="Hero__title">{slide.title}</h1>
                <p className="Hero__description">{slide.description}</p>
                <Link to={`/${slide.slug}`} className="Hero__cta">
                  {slide.cta}
                  <svg viewBox="0 0 20 20" fill="none" aria-hidden="true">
                    <path
                      d="M4 10h12M11 5l5 5-5 5"
                      stroke="currentColor"
                      strokeWidth="1.6"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </Slider>

      <img src={logo_white} alt="FEEAGRI" className="Hero__brand" />

      <div className="Hero__indicators" aria-label="Navegação de slides">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`Hero__indicator ${index === currentSlide ? "is-active" : ""}`}
            aria-hidden="true"
          >
            <span
              className="Hero__indicator-progress"
              style={{
                transform: `scaleX(${
                  index === currentSlide
                    ? progress / 100
                    : index < currentSlide
                    ? 1
                    : 0
                })`,
              }}
            />
          </div>
        ))}
      </div>

      <div className="Hero__scroll" aria-hidden="true">
        <span className="Hero__scroll-mouse">
          <span className="Hero__scroll-wheel" />
        </span>
      </div>
    </section>
  );
}