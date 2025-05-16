import React, { useEffect, useRef, useState } from "react";
import Slider from "react-slick";
import "../styles/Hero.scss";
import { Link } from "react-router-dom";
import "../styles/buttons.scss";

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import Hero1 from "../assets/6.jpg";
import Hero2 from "../assets/5.jpg";
import Hero3 from "../assets/9.jpg";

import logo_white from '../assets/logo_white.png'

export default function Hero() {
  const slides = [
    {
      image: Hero1,
      title: "Entidade Estudantil Nacional nas Ciências Agrárias",
      description:
        "A FEEAGRI atua para fortalecer os laços entre estudantes de Engenharia Agrícola, Agrícola e Ambiental e Engenharia de Biossistemas em todo o Brasil, promovendo eventos e defendendo seus interesses.",
      slug: "federacao-brasileira",
    },
    {
      image: Hero2,
      title: "Transformando o Futuro da Engenharia Agrícola",
      description:
        "Juntos, estamos inovando no campo e impulsionando práticas sustentáveis que moldam o futuro da Engenharia Agrícola no Brasil. Unindo as próximas gerações de profissionais do setor.",
      slug: "futuro-engenharia-agricola",
    },
    {
      image: Hero3,
      title: "Participe do XXXVII CONEEAGRI e I ENPEAG",
      description:
        "Uma oportunidade única para se conectar com estudantes e profissionais da área, e explorar as mais recentes inovações e desafios da Engenharia Agrícola.",
      slug: "coneeagri-enpeag",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const settings = {
    dots: true,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    pauseOnFocus: false,
    pauseOnDotsHover: false,
    beforeChange: (oldIndex, newIndex) => setCurrentSlide(newIndex),
  };
  return (
    <div className="Hero">
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className="Hero__item">
            <img src={slide.image} alt={slide.title} />
            <div className="Hero__content">
              <h1>{slide.title}</h1>
              <p>{slide.description}</p>
              <button className="button_secundary">
                {" "}
                <Link to={`/${slide.slug}`}>Saiba mais</Link>{" "}
              </button>
              <img src={logo_white} alt="" />
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
}
