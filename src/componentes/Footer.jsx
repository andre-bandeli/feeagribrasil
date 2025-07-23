import React from "react";
import "../styles/Footer.scss";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-column">
          <h4>Institucional</h4>
          <ul>
            <li>
              <Link to={`/conselho-diretivo`}>Faça parte do Conselho</Link>
            </li>
            <li>
              <Link to={`/delegacao`}>Torne-se Delegado</Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Sobre Nós</h4>
          <ul>
            <li>
              <Link to={`/about`}>História</Link>
            </li>
            <li>
              <Link to={`/membros`}>Equipe</Link>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Ajuda</h4>
          <ul>
            <li>
              <Link to={`/suporte`}>Suporte</Link>
            </li>
            <li>
              <a href="#!">Contato</a>
            </li>
            <li>
              <a href="#!">Feedback</a>
            </li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Redes Sociais</h4>
          <ul>
            <li>
              <Link to={`https://www.instagram.com/feeagri/`} target="_blank">
                Instagram Feeagri
              </Link>
            </li>
            <li>
              <Link to={`https://www.instagram.com/coneeagri/?hl=en`} target="_blank">
                Instagram Cooneagri
              </Link>
            </li>
            <li>
              <Link
                to={`https://www.linkedin.com/company/feeagri-brasil/?originalSubdomain=br`}
                target="_blank"
              >
                LinkedIn Feeagri
              </Link>
            </li>
          </ul>
        </div>
      </div>
      <div className="footer-copyright">
        <p>
          &copy; {new Date().getFullYear()} FEEAGRI. Todos os direitos
          reservados. Website desenvolvido por{" "}
          <Link
            target="_blank"
            to={`https://www.linkedin.com/in/andrebandeli/`}
          >
            andrebandeli
          </Link>
        </p>
      </div>
    </footer>
  );
}
