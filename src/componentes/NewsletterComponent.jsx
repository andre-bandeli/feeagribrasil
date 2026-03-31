import React from "react";
import "../paginas/noticias/Newsletter.scss";
import leaf from "../assets/leaf.png";
import { FaWhatsapp } from "react-icons/fa";

export default function Newsletter() {
  const whatsappLink = "https://chat.whatsapp.com/CB7qtzHP03513bX9GK4pJ5?mode=ems_wa_c"; // Substitua pelo link do seu grupo

  return (
    <div className="Newsletter">
      <div className="container">
        <h2>
          Junte-se a nós em nossa comunidade no WhatsApp!{" "}
          <img src={leaf} alt="Folha decorativa" />
        </h2>
        <p>
          Participe de nossa comunidade para ficar por dentro das últimas
          novidades sobre o setor agrícola, inovações ambientais e tecnologias
          de biossistemas. É o espaço perfeito para interagir, trocar
          experiências e se conectar com outros estudantes e profissionais da área.
        </p>
        <p className="mob">
          Participe de nossa comunidade para ficar por dentro das últimas
          novidades sobre o setor agrícola, inovações ambientais e tecnologias
          de biossistemas.
        </p>

        <a
          href={whatsappLink}
          target="_blank"
          rel="noopener noreferrer"
          className="whatsapp-button"
        >
          <FaWhatsapp className="whatsapp-icon" />
          Entrar no grupo
        </a>
      </div>
    </div>
  );
}