import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./paginas/Home";
import About from "./paginas/About";
import Congressos from "./paginas/Congressos";
import Parceiros from "./paginas/Parceiros";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Membros from "./paginas/Membros";
import Newsletter from "./paginas/Newsletter";
import SlidePage from "./paginas/secundarias/SlidePage";
import CongressosPage from "./paginas/secundarias/CongressosCard";
import Delegacao from "./paginas/Delegacao";
import Content from "./paginas/secundarias/Content";
import Suporte from "./paginas/Suporte";
import DelegacaoSup from "./paginas/DelegacaoSup";
import NoticiaPage from "./paginas/secundarias/NoticiaPage"
import ConselhoDiretivo from "./paginas/ConselhoDiretivo";
import NewsletterPost from "./paginas/NewsletterPosts";
import NewsletterPost2 from "./paginas/NewsletterPosts2";
import NewsletterPost3 from "./paginas/NewsletterPosts3";
import Instituicoes from "./paginas/Instituicoes";
import Cursos from "./paginas/Cursos";
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