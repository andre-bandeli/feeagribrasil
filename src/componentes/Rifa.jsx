import React from "react";
import "../styles/rifa.scss"; // Certifique-se de que o caminho está correto
import leaf from "../assets/leaf.png"; // Reutilizando a folha para consistência

export default function Rifa() {
  const raffleLink = "https://rifei.com.br/registro-feeagri";

  return (
    <div className="Rifa">
      <div className="container">
        <h2>
          🚨 Participe da nossa Rifa Solidária!
          <img src={leaf} alt="Folha decorativa" />
        </h2>
        <p>
          A FEEAGRI está em um momento crucial: precisamos garantir o registro
          oficial da nossa Federação. Por isso, lançamos uma rifa solidária
          para tornar esse sonho uma realidade! Cada bilhete que você compra é um passo em direção à história das
          Engenharias no Brasil.
        </p>
        <div className="button-container">
          <a
            href={raffleLink}
            target="_blank"
            rel="noopener noreferrer"
            className="raffle-button primary"
          >
            Garanta já o seu bilhete
          </a>
        </div>
        <p className="slogan">
          Juntos somos mais fortes. Juntos somos  <span>FEEAGRI</span>!
        </p>
      </div>
    </div>
  );
}