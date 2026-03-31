import React from "react";
import "./widget.scss";
import drive from '../../assets/googledrive.png'
import { Link } from "react-router-dom";


export default function WidgetCustom() {
  const contentData = [
    {
      slug: "organizacao-de-eventos",
      title: "Organização de Eventos Acadêmicos",
      text: "Uma das principais atividades da FEEAGRI consiste em atuar na manutenção do CONEEAGRI, garantindo, junto a outras intituiçõpes, a continuidade do maior congresso de estudantes de ENgenharia Agrícola, Engenharia Agrícola e Ambiental e Engenharia de Biosistemass",
    },
    {
      slug: "incentivo-a-pesquisa-e-extensao",
      title: "Incentivo à Pesquisa e Extensão",
      text: "Todas as edições do CONEEAGRI são pensadas para alcançar o maior número de estudantes, incentivando a apresentação de trabalhos acadêmicos e networking entre pesquisadores-profissionais. ",
    },
    {
      slug: "capacitacao-e-desenvolvimento",
      title: "Capacitação e Desenvolvimento",
      text: "Atravérs de iniciativas envolvendo intituições e professores, atuamos na promoção de seminários e mini-cursos dos mais diversos tipos, buscando levar atualizações técnicas da área de maneira democrática. ",
    },
    {
      slug: "baixe-nossa-logo",
      title: "Nossas Logos",
      text: "Tenha acesso à nossas logos e utilize em suas postagens. Vamos juntos popularizar a FEEAGRI",
      image: drive,
      button: "https://drive.google.com/drive/folders/1nRV3bUmhvaExS85r5YKvfgQpKaVhM60D",
    },
  ];
  return (
    <div className="widget">
      {contentData.map((card, index) => (
        <div className="contentWidget" key={index}> {/* Added key for list items */}
          <h2 className="custom">{card.title}</h2>
          <p>{card.text}</p>
          {card.image ? ( // If card.image exists (is not null or undefined)
            <Link to={card.button} target="__blank" className="text-sm font-medium"><button><img src={card.image} alt="" /> Google Drive  </button> </Link>
            
          ) : null} {/* Otherwise, render nothing */}
        </div>
      ))}
    </div>
  );
}