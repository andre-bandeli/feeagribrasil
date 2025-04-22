import React from "react";
import Header from "../componentes/Header";
import "../styles/HeaderSecundario.scss";
import NewsletterComponent from "../componentes/NewsletterComponent";
import Footer from "../componentes/Footer";
import { Link } from "react-router-dom";

export default function Newsletter() {
  return (
    <div>
      <Header />
      <div className="HeaderSecundario">
        <div className="links">
          <h3>
            <Link to={`/`} className="">Home</Link> | <Link to={`/newsletter`} className="">Newsletter</Link>
          </h3>
        </div>
        <div className="container">
          <h2>Newsletter</h2>
          <p>
            Acompanhe nossas atualizações quinzenais e fique por dentro das
            atualizações no setor agrícola.
          </p>
        </div>
      </div>

      <section className="newsletter-posts">
        <h2>Veja todas nossas publicações e atualizações. Inscreva-se para ficar por dentro de novidades da área agrícola, estágios, eventos futuros e comunicação acadêmica</h2>
        <p>A newsletter da FEEAGRI é um canal direto com estudantes e profissionais da Engenharia Agrícola. Aqui você encontra notícias sobre o CONEEAGRI, oportunidades de estágio, cursos, chamadas de trabalhos e tudo que movimenta nossa área. Não perca nenhuma edição!        </p>
        
        <div className="post">
          <h3>
            <Link to={`/post`}> #1 Newsletter</Link>
          </h3>
          <p>
            Confira as novidades que os membros do conselho diretivo prepararam
            para garantir maior representatividade nas eleições.
          </p>
          <span className="date">March 3, 2025</span>
        </div>
      </section>

      <main>
        <NewsletterComponent />
      </main>
      <Footer />
    </div>
  );
}
