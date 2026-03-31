import React from "react";
import { Routes, Route } from "react-router-dom";
import Index from "./paginas/Index";
import About from "./paginas/about/About";
import Congressos from "./paginas/congressos/Congressos";
import Parceiros from "./paginas/parceiros/Parceiros";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import Membros from "./paginas/membros/Membros";
import Newsletter from "./paginas/noticias/Newsletter";
import NewsletterDetailPage from "./paginas/noticias/NewsletterDetailPage"; // ← novo
import SlidePage from "./paginas/secundarias/SlidePage";
import CongressosPage from "./paginas/secundarias/CongressosCard";
import Delegacao from "./paginas/membros/Delegacao";
import Content from "./paginas/secundarias/Content";
import Suporte from "./paginas/auxiliar/Suporte";
import DelegacaoSup from "./paginas/membros/DelegacaoSup";
import NoticiaPage from "./paginas/secundarias/NoticiaPage";
import ConselhoDiretivo from "./paginas/membros/ConselhoDiretivo";
import Instituicoes from "./paginas/instituicoes/Instituicoes";
import Cursos from "./paginas/cursos/Cursos";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <>
      <Analytics />
      <Routes>
        <Route path="/"                        element={<Index />} />
        <Route path="/About"                   element={<About />} />
        <Route path="/cursos"                  element={<Cursos />} />
        <Route path="/atividades/:slug"        element={<Content />} />
        <Route path="/:slug"                   element={<SlidePage />} />
        <Route path="/congressos"              element={<Congressos />} />
        <Route path="/congressos/:slug"        element={<CongressosPage />} />
        <Route path="/membros"                 element={<Membros />} />
        <Route path="/membros/delegacao"       element={<Delegacao />} />
        <Route path="/noticias/:slug"          element={<NoticiaPage />} />
        <Route path="/parceiros"               element={<Parceiros />} />
        <Route path="/newsletter"              element={<Newsletter />} />
        <Route path="/newsletter/:slug"        element={<NewsletterDetailPage />} /> {/* ← novo */}
        <Route path="/suporte"                 element={<Suporte />} />
        <Route path="/delegacao"               element={<DelegacaoSup />} />
        <Route path="/conselho-diretivo"       element={<ConselhoDiretivo />} />
        <Route path="/instituicoes"            element={<Instituicoes />} />
      </Routes>
    </>
  );
}

export default App;