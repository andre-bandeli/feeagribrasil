import React, { useState, useEffect, useRef } from 'react';
import { Link, useLocation } from 'react-router-dom';
import {
  FaHome, FaInfoCircle, FaSeedling, FaCalendarAlt,
  FaUsers, FaUniversity, FaNewspaper, FaHandshake,
} from 'react-icons/fa';
import './Navbar.scss';

const NAV_ITEMS = [
  { label: 'Home',        path: '/',            icon: FaHome },
  { label: 'Sobre',       path: '/about',       icon: FaInfoCircle },
  { label: 'Congressos',  path: '/congressos',  icon: FaCalendarAlt },
  { label: 'Cursos',      path: '/cursos',      icon: FaSeedling },
  { label: 'Membros',     path: '/membros',     icon: FaUsers },
  { label: 'Instituições',path: '/instituicoes',icon: FaUniversity },
  { label: 'Publicações', path: '/newsletter',  icon: FaNewspaper },
  { label: 'Parceiros',   path: '/parceiros',   icon: FaHandshake },
];

export default function Navbar() {
  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);
  const [activeIdx, setActiveIdx] = useState(null);
  const location = useLocation();
  const menuRef = useRef(null);

  // Detecta scroll
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Fecha menu ao trocar de rota
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Trava scroll do body quando menu mobile está aberto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  // Fecha menu ao clicar fora
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  const isActive = (path) =>
    path === '/' ? location.pathname === '/' : location.pathname.startsWith(path);

  return (
    <>
      <nav
        className={`Navbar ${scrolled ? 'is-scrolled' : 'is-top'} ${menuOpen ? 'menu-is-open' : ''}`}
        ref={menuRef}
      >
        {/* ── Logo ──────────────────────────────────────────────────── */}
        <Link to="/" className="Navbar__logo" onClick={() => setMenuOpen(false)}>
          <div className="Navbar__logo-text">
            <strong>FEEAGRI</strong>
            {/* Se preferir usar imagem: <img src="caminho/bandeira.svg" alt="Brasil" className="Navbar__flag-img" /> */}
          </div>
        </Link>

        {/* ── Links desktop ─────────────────────────────────────────── */}
        <ul className="Navbar__links">
          {NAV_ITEMS.map((item, i) => (
            <li key={item.path} className={isActive(item.path) ? 'is-current' : ''}>
              <Link to={item.path}>
                {item.label}
                <span className="Navbar__underline" />
              </Link>
            </li>
          ))}
        </ul>

        {/* ── Hamburger ─────────────────────────────────────────────── */}
        <button
          className={`Navbar__burger ${menuOpen ? 'is-open' : ''}`}
          onClick={() => setMenuOpen((v) => !v)}
          aria-label={menuOpen ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={menuOpen}
        >
          <span /><span /><span />
        </button>
      </nav>

      {/* ── Menu mobile (fora do nav para não interferir no z-index) ── */}
      <div className={`Navbar__mobile ${menuOpen ? 'is-open' : ''}`} aria-hidden={!menuOpen}>
        <div className="Navbar__mobile-inner">

          {/* Divisor decorativo */}
          <div className="Navbar__mobile-header">
            <span className="Navbar__mobile-eyebrow">Navegação</span>
          </div>

          <ul className="Navbar__mobile-links">
            {NAV_ITEMS.map((item, i) => {
              const Icon = item.icon;
              return (
                <li
                  key={item.path}
                  className={isActive(item.path) ? 'is-current' : ''}
                  style={{ '--i': i }}
                >
                  <Link to={item.path} onClick={() => setMenuOpen(false)}>
                    <span className="Navbar__mobile-icon">
                      <Icon />
                    </span>
                    <span className="Navbar__mobile-label">{item.label}</span>
                    <span className="Navbar__mobile-arrow">→</span>
                  </Link>
                </li>
              );
            })}
          </ul>

          <div className="Navbar__mobile-footer">
            <p>Federação Brasileira dos Estudantes de<br />Engenharia Agrícola e Afins</p>
          </div>
        </div>
      </div>

      {/* ── Backdrop ──────────────────────────────────────────────────── */}
      <div
        className={`Navbar__backdrop ${menuOpen ? 'is-visible' : ''}`}
        onClick={() => setMenuOpen(false)}
        aria-hidden="true"
      />
    </>
  );
}