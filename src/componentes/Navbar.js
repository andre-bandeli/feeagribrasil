import React, { useState } from 'react';
import '../styles/Navbar.scss';
import { Link } from "react-router-dom";
import { FaHome, FaInfoCircle, FaUsers, FaUniversity, FaHandshake, FaNewspaper, FaCalendarAlt } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo"> 
        <h2><Link to="/">FEEAGRI BRASIL</Link></h2> 
        <h3>Federação Brasileira dos Estudantes de Engenharia Agrícola, Ambiental e de Biossistemas</h3>
      </div>
      <div className={`menu-links ${isOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="/"><FaHome className='fa' /> Home</a></li>
          <li><a href="/about"><FaInfoCircle className='fa' /> Sobre</a></li>
          <li><a href="/congressos"><FaCalendarAlt className='fa' /> Congressos</a></li>
          <li><a href="/membros"><FaUsers className='fa' /> Membros</a></li>
          <li><a href="/instituicoes"><FaUniversity className='fa' /> Instituições</a></li>
          <li><a href="/parceiros"><FaHandshake className='fa' /> Parceiros</a></li>
          <li><a href="/newsletter"><FaNewspaper className='fa' /> Newsletter</a></li>
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
