import React from "react";
import "../../styles/widget.scss";

export default function Widget() {
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
  ];
  return (
    <div className="widget">
      {contentData.map((card, index) => (
        <div className="contentWidget">
          <img src={card.img} alt="" />
          <h2>{card.title}</h2>
          <p>{card.text}</p>
        </div>
      ))}
    </div>
  );
}
