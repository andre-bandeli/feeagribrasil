import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./paginas/Home";
import About from "./paginas/About";
import Events from "./paginas/Events";
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
import ConselhoDiretivo from "./paginas/ConselhoDiretivo";
import NewsletterPost from "./paginas/NewsletterPosts";
import Instituicoes from "./paginas/Instituicoes";
import Cursos from "./paginas/Cursos";

function App() {

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/About" element={<About />} />
      <Route path="/cursos" element={<Cursos />} />
      <Route path="/atividades/:slug" element={<Content />} />
      <Route path="/:slug" element={<SlidePage />} />
      <Route path="/congressos" element={<Events />} />
      <Route path="/congressos/:slug" element={<CongressosPage />} />
      <Route path="/membros" element={<Membros />} />
      <Route path="/membros/delegacao" element={<Delegacao />} />
      <Route path="/parceiros" element={<Parceiros />} />
      <Route path="/newsletter" element={<Newsletter />} />
      <Route path="/suporte" element={<Suporte />} />
      <Route path="/delegacao" element={<DelegacaoSup />} />
      <Route path="/conselho-diretivo" element={<ConselhoDiretivo />} />
      <Route path="/post" element={<NewsletterPost />} />
      <Route path="/instituicoes" element={<Instituicoes />} />


    </Routes>
  );
}

export default App;