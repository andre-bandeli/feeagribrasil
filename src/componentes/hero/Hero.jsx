import React, { useState, useEffect, useRef } from 'react'
import Slider from 'react-slick'
import './Hero.scss'
import { Link } from 'react-router-dom'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import logo_white from '../../assets/logo_white.png'
import slidesData from '../../paginas/secundarias/slidesData'

const AUTOPLAY_SPEED = 6000

const FULL_NAME =
  'Federação Brasileira dos Estudantes de Engenharia Agrícola, Agrícola e Ambiental e de Biossistemas'

export default function Hero() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [progress, setProgress] = useState(0)
  const rafRef = useRef(null)
  const startRef = useRef(null)

  useEffect(() => {
    startRef.current = performance.now()
    const tick = (now) => {
      const pct = Math.min(((now - startRef.current) / AUTOPLAY_SPEED) * 100, 100)
      setProgress(pct)
      if (pct < 100) rafRef.current = requestAnimationFrame(tick)
    }
    rafRef.current = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(rafRef.current)
  }, [currentSlide])

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
    cssEase: 'cubic-bezier(0.77, 0, 0.175, 1)',
    beforeChange: (_old, next) => {
      setCurrentSlide(next)
      setProgress(0)
    },
  }

  return (
    <section className="Hero" aria-label="Destaque principal">
      <Slider {...settings}>
        {slidesData.map((slide, index) => (
          <div key={index}>
            <div className="Hero__slide">
              <img
                src={slide.img}
                alt={slide.title}
                className="Hero__bg"
                loading={index === 0 ? 'eager' : 'lazy'}
                decoding="async"
                fetchPriority={index === 0 ? 'high' : 'auto'}
              />
              <div className="Hero__overlay" />
              <div className="Hero__content">
                <span className="Hero__eyebrow">{slide.eyebrow}</span>
                <h1 className="Hero__title">{slide.title}</h1>
                <p className="Hero__description">{slide.content}</p>
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
        {slidesData.map((_, index) => (
          <div
            key={index}
            className={`Hero__indicator ${index === currentSlide ? 'is-active' : ''}`}
            aria-hidden="true"
          >
            <span
              className="Hero__indicator-progress"
              style={{
                transform: `scaleX(${
                  index === currentSlide ? progress / 100
                  : index < currentSlide ? 1
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

      <div className="Hero__banner" aria-hidden="true">
        <div className="Hero__banner-track">
          {[0, 1, 2, 3].map((n) => (
            <span key={n} className="Hero__banner-item">
              {FULL_NAME}
              <span className="Hero__banner-sep">✦</span>
            </span>
          ))}
        </div>
      </div>
    </section>
  )
}