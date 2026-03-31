import React from "react";
import { useParams } from "react-router-dom";
import Header from "../../componentes/header/Header";
import "../../styles/SecundaryPage.scss";
import Footer from "../../componentes/footer/Footer";
import contentData from "./contentData";
import WidgetCustom from "../../componentes/widget/WidgetCustom";

export default function Content() {
  const { slug } = useParams();
  const card = contentData.find((card) => card.slug === slug);

  if (!card) {
    return <h1>Notícia não encontrada</h1>;
  }

  return (
    <div>
      <Header />
      <div className="secundaryPage"></div>
      <div className="containerSecundaryPage">
        <h2>{card.title}</h2>
        <h3>{card.content}</h3>
        <img src={card.img} alt={card.title} />
        <div className="container">
          <div className="content">
            <h2 className="custom">{card.titleTxt}</h2>
            <p>{card.text}</p>
            <p>{card.text2}</p>
            <p>{card.text3}</p>
          </div>
          <div className="widgets">
            <WidgetCustom />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
