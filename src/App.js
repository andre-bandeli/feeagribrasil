import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./paginas/Home";
import About from "./paginas/about/About";
import Congressos from "./paginas/congressos/Congressos";
import Parceiros from "./paginas/Parceiros";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Membros from "./paginas/membros/Membros";
import Newsletter from "./paginas/noticias/Newsletter";
import SlidePage from "./paginas/secundarias/SlidePage";
import CongressosPage from "./paginas/secundarias/CongressosCard";
import Delegacao from "./paginas/membros/Delegacao";
import Content from "./paginas/secundarias/Content";
import Suporte from "./paginas/Suporte";
import DelegacaoSup from "./paginas/membros/DelegacaoSup";
import NoticiaPage from "./paginas/secundarias/NoticiaPage"
import ConselhoDiretivo from "./paginas/membros/ConselhoDiretivo";
import NewsletterPost from "./paginas/noticias/NewsletterPosts";
import NewsletterPost2 from "./paginas/noticias/NewsletterPosts2";
import NewsletterPost3 from "./paginas/noticias/NewsletterPosts3";
import Instituicoes from "./paginas/instituicoes/Instituicoes";
import Cursos from "./paginas/cursos/Cursos";
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <>
      <Analytics />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/cursos" element={<Cursos />} />
      <Route path="/atividades/:slug" element={<Content />} />
      <Route path="/:slug" element={<SlidePage />} />
      <Route path="/congressos" element={<Congressos />} />
      <Route path="/congressos/:slug" element={<CongressosPage />} />
      <Route path="/membros" element={<Membros />} />
      <Route path="/membros/delegacao" element={<Delegacao />} />
      <Route path="/noticias/:slug" element={<NoticiaPage />} />
      <Route path="/parceiros" element={<Parceiros />} />
      <Route path="/newsletter" element={<Newsletter />} />
      <Route path="/suporte" element={<Suporte />} />
      <Route path="/delegacao" element={<DelegacaoSup />} />
      <Route path="/conselho-diretivo" element={<ConselhoDiretivo />} />
      <Route path="/publicacao/1" element={<NewsletterPost />} />
      <Route path="/publicacao/2" element={<NewsletterPost2 />} />
      <Route path="/publicacao/3" element={<NewsletterPost3 />} />
      <Route path="/instituicoes" element={<Instituicoes />} />
    </Routes>
   </>
  );
}
export default App;