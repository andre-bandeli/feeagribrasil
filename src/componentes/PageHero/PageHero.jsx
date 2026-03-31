import React from 'react'
import './PageHero.scss'

export default function PageHero({ eyebrow, title, subtitle, wm, children }) {
  return (
    <section className="ph-hero" aria-label={`Cabeçalho — ${title}`}>
      {wm && <span className="ph-hero__wm" aria-hidden="true">{wm}</span>}
      <div className="ph-hero__overlay" />
      <div className="ph-hero__content">
        <span className="ph-hero__eyebrow">{eyebrow}</span>
        <h1 className="ph-hero__title">{title}</h1>
        {subtitle && <p className="ph-hero__sub">{subtitle}</p>}
        {children}
        <div className="ph-hero__line" aria-hidden="true" />
      </div>
    </section>
  )
}