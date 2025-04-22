import React, { useState } from 'react';
import '../styles/Navbar.scss';
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo"> 
        <h2><Link to={`/`} className="">FEEAGRI BRASIL</Link></h2> 
        <h3>Federação Brasileira dos Estudantes de Engenharia Agrícola, Ambiental e de Biossistemas</h3>
      </div>
      <div className={`menu-links ${isOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">Sobre</a></li>
          <li><a href="/congressos">Congressos</a></li>
          <li><a href="/membros">Membros</a></li>
          <li><a href="/instituicoes">Instituições</a></li>
          <li><a href="/parceiros">Parceiros</a></li>
          <li><a href="/newsletter">Newsletter</a></li>
        </ul>
      </div>
      <div className="hamburger" onClick={toggleMenu}>
        {isOpen ? (
          <div className="close-icon">✕</div>
        ) : (
          <>
            <div className="bar"></div>
            <div className="bar"></div>
            <div className="bar"></div>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
