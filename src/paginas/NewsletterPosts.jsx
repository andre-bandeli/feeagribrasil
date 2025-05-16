import React from "react";
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
import "../styles/auxiliar.scss";
import imagem from '../assets/9.webp';
import imagem2 from '../assets/10.jpg';

export default function NewsletterPost() {
  return (
    <div>
      <Header />
      <div className="auxiliar">
        <div className="container">
          <h1>FEEAGRI</h1>
          <h2>Federação Brasileira dos Estudantes de Engenharia Agrícola, Engenharia Agrícola e Ambiental e Engenharia de Biossistemas</h2>
          <h2 className="custom"><strong>Newsletter #1</strong></h2>

          <p>
            É com grande entusiasmo que iniciamos nossa primeira Newsletter oficial! Aqui você encontrará informações importantes sobre as ações da FEEAGRI, oportunidades de representação estudantil e atualizações sobre eventos nacionais da nossa área. Fique por dentro e compartilhe com os colegas!
          </p>

          <div className="resume">
            <h2>Resumo da Edição</h2>
            <ul>
            <li>
                <p>Primeira edição da Newsletter da Federação</p>
              </li>
              <li>
                <p>Como se tornar delegado da FEEAGRI</p>
              </li>
              <li>
                <p>Atualizações sobre o XXXVII CONEEAGRI</p>
              </li>
            </ul>
          </div>

          <div className="sep" />

          {/* BLOCO 2 - ESTREIA NEWSLETTER */}
          <div className="conteudo">
            <h2>Estreia da Newsletter FEEAGRI</h2>
            <h3>Agora com comunicações mensais para os estudantes</h3>
            <img src={imagem} alt="Newsletter FEEAGRI" />
            <p>
              A FEEAGRI está lançando sua Newsletter mensal com o objetivo de aproximar ainda mais os estudantes e divulgar as ações da Federação. Esperamos manter todos informados sobre oportunidades, eventos, atividades e muito mais.
            </p>
            <p>Se você é estudante da área, acompanhe nossos canais e fique por dentro de tudo que estamos organizando para fortalecer nossa comunidade acadêmica!</p>
          </div>

          {/* BLOCO 1 - DELEGADO */}
          <div className="conteudo">
            <h2>Indicação de Delegados(as) da FEEAGRI</h2>
            <h3>Fortalecendo a representação estudantil nacional</h3>
            <p>
              A Federação dos Estudantes de Engenharia Agrícola (FEEAGRI) abre inscrições para a indicação de delegados(as) representantes das instituições de ensino superior dos cursos de Engenharia Agrícola, Engenharia Agrícola e Ambiental e Engenharia de Biossistemas.
            </p>

            <p>
              O edital visa selecionar estudantes para o mandato de <strong>1º de maio de 2025 a 30 de abril de 2026</strong>, com o objetivo de fortalecer a representação estudantil, promover a integração entre universidades e contribuir para o avanço tecnológico e sustentável do setor.
            </p>

            <h3>📆 Período de Indicações</h3>
            <p>
              As indicações poderão ser feitas até o dia <strong>25 de abril de 2025</strong>.
            </p>

            <h3>👥 Quem pode indicar?</h3>
            <p>
              As indicações devem ser realizadas por <strong>Centros Acadêmicos</strong>, <strong>Diretórios Acadêmicos</strong>, <strong>Colegiados</strong> ou <strong>Coordenações de Curso</strong>.
            </p>

            <h3>📎 Edital completo</h3>
            <p>
              Para mais informações, critérios e documentação necessária, acesse o edital completo no link:
            </p>
            <p>
              <a href="https://drive.google.com/file/d/1IyqeOEv_iW4lCxcokWhGm6s7T3Q7FjlY/view" target="_blank" rel="noopener noreferrer">
                https://drive.google.com/file/d/1IyqeOEv_iW4lCxcokWhGm6s7T3Q7FjlY/view
              </a>
            </p>

            <p>📩 Dúvidas? Escreva para: <strong>abeagnacional@gmail.com</strong></p>
          </div>

          {/* BLOCO 3 - CONEEAGRI */}
          <div className="conteudo">
            <h2>Novidades sobre o XXXVIII CONEEAGRI & II ENPEAG</h2>
            <h3>O maior encontro nacional da nossa categoria está confirmado!</h3>
            <img src={imagem2} alt="CONNEAGRI" />
            <p>
              O <strong>XXXVIII Congresso Nacional dos Estudantes de Engenharia Agrícola (CONEEAGRI)</strong> e o <strong>II Encontro Nacional dos Pós-Graduandos em Engenharia Agrícola (ENPEAG)</strong> já têm data e local marcados!
            </p>
            <p>
              O evento acontecerá na <strong>Universidade Federal de Pelotas (UFPel)</strong>, em <strong>Pelotas/RS</strong>, entre os dias <strong>27 e 30 de outubro de 2025</strong>.
            </p>
            <p>
              A FEEAGRI estará presente e trará atualizações mensais sobre o congresso. Fique atento às chamadas de trabalhos, inscrições e às oportunidades de participação ativa na construção desse grande encontro estudantil.
            </p>
            <p>📩 Dúvidas sobre o evento? Entre em contato conosco!</p>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
