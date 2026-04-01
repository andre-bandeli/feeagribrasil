import React from "react";
import "../styles/rifa.scss"; // Certifique-se de que o caminho está correto
import leaf from "../assets/leaf.png"; // Reutilizando a folha para consistência

export default function Rifa() {
  const raffleLink = "https://www.instagram.com/coneeagri/?hl=en";

  return (
    <div className="Rifa">
      <div className="container">
        <h2>
          🍃 Desejamos a todos e todas um excelente CONEEAGRI!
          <img src={leaf} alt="Folha decorativa" />
        </h2>
        <p>
          A Universidade Federal de Pelotas está recebendo o XXXVIII CONEEAGRI, celebrando a semana do Engenheiro Agrícola. Com diversas atividades, o Coneeagri fortalece o networking e troca de conhecimento dos estudantes brasileiros.
        </p>
        <div className="button-container">
          <a
            href={raffleLink}
            target="_blank"
            rel="noopener noreferrer"
            className="raffle-button primary"
          >
            Acompanhe o instagram do CONEEAGRI
          </a>
        </div>
        <p className="slogan">
          Agradecimento à UFPEL, Comissão Organizadora, ABEAG e todas instituições que atuam para a existência do <span>CONEEAGRI</span>!
        </p>
      </div>
    </div>
  );
}