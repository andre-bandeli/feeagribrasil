import React from "react";
import "../styles/HeaderSecundario.scss";
import Header from "../componentes/Header";

export default function Parceiros() {
  return (
    <div>
      <Header />
      <div className="HeaderSecundario">
        <div className="links">
          <h3>
            {" "}
            <a href="">Home</a> | <a href="">Parceiros</a>
          </h3>
        </div>
        <div className="container">
          <h2>Nossos Parceiros</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis eos
            deserunt quo illum et sit, laborum facilis laudantium mollitia
            voluptatum incidunt dicta voluptate fugit quasi maxime corrupti enim
            cum quod.
          </p>
        </div>
      </div>
      <main></main>
    </div>
  );
}
