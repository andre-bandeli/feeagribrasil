import React from "react";
import "./widget.scss";

export default function WidgetCongressos() {
  const contentData = [
    {
      slug: "organizacao-de-eventos",
      title: "Organização",
      text: "A organização do CONEEAGRI envolve o apoio da ABEAG, a comissão organizadora local, a instituição sede e a FEEAGRI, que atuam em conjunto para garantir o sucesso do congresso.",
    },
    {
      slug: "empresas-parceiras",
      title: "Empresas Parceiras",
      text: "Todos os anos diversas empresas financiam o congresso, contribuindo para a realização das atividades e o fortalecimento da Engenharia Agrícola.",
    },
    {
      slug: "instituicoes-sede",
      title: "Instituições",
      text: "Para ser sede de um CONEEAGRI, basta entrar em contato com o Conselho Diretivo da FEEAGRI e demonstrar interesse e capacidade de organização.",
    },
  ];

  return (
    <div className="widget">
      {contentData.map((card, index) => (
        <div className="contentWidget" key={index}>
          <h2>{card.title}</h2>
          <p>{card.text}</p>
        </div>
      ))}
    </div>
  );
}
