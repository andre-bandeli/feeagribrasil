import React from "react";
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
import "../styles/auxiliar.scss";
import imagem from '../assets/irrigation.jpg';
import imagem2 from '../assets/fertilizante.jpg';
import imagem3 from '../assets/agropecuaria.jpg';
import imagem4 from '../assets/alimento.jpg';
import logo from '../assets/logo_colored.png';
import logo_branco from '../assets/logo_white.png';

export default function NewsletterPost() {
  return (
    <div>
      <Header />
      <div className="auxiliar">
        <div className="containerTitle">
          <img src={logo} alt="Logo FEEAGRI" />
          <h2>Federação Brasileira dos Estudantes de Engenharia Agrícola, Engenharia Agrícola e Ambiental e Engenharia de Biossistemas</h2>
          <h2 className="custom"><strong>Newsletter #1</strong></h2>
          <p>Fique por dentro das discussões mais relevantes sobre o futuro do agro brasileiro. Nesta edição, trazemos reflexões aprofundadas sobre sistemas irrigados, uso de fertilizantes, produção de alimentos e desenvolvimento sustentável. Informação técnica com linguagem acessível para transformar o campo com consciência e inovação.</p>

          <div className="resume">
            <h2>Resumo da Edição</h2>
            <ul>
              <li><p>Sistemas irrigados e a escassez hídrica</p></li>
              <li><p>Uso racional de fertilizantes no Brasil</p></li>
              <li><p>Desafios e oportunidades na produção agrícola</p></li>
              <li><p>O papel da agropecuária no desenvolvimento sustentável</p></li>
            </ul>
          </div>

          <div className="sep" />

          <div className="container">
            <div className="conteudo">
              <h2>Sistemas Irrigados <br></br>Uso eficiente da água no campo</h2>
              <h3>A irrigação é essencial para garantir segurança alimentar, mas exige responsabilidade diante do cenário de mudanças climáticas e crise hídrica.</h3>
              <div className="imagem-container">
                <img src={imagem} alt="Sistemas Irrigados" />
                <img className="logo" src={logo_branco} alt="Logo FEEAGRI" />
              </div>
              <p>O Brasil, apesar de possuir um dos maiores volumes de água doce do mundo, enfrenta desafios significativos em relação ao uso e à gestão eficiente da água na agricultura. Os sistemas irrigados têm sido apontados como soluções fundamentais para aumentar a produtividade das lavouras e garantir a segurança alimentar, especialmente diante das incertezas climáticas. Contudo, o uso inadequado desses sistemas pode causar esgotamento de mananciais, salinização do solo e desperdício de recursos hídricos valiosos.</p>
              <p>Segundo a Agência Nacional de Águas (ANA), menos de 10% da área cultivada no Brasil utiliza irrigação. Isso mostra um enorme potencial de expansão, mas também um alerta: a adoção deve ser acompanhada por práticas sustentáveis e tecnologia de ponta. Sistemas como gotejamento, aspersão e pivô central, quando bem manejados, apresentam alta eficiência, reduzindo perdas por evaporação e promovendo o uso racional da água.</p>
              <p>Engenheiros agrícolas desempenham papel estratégico nesse cenário, promovendo o dimensionamento adequado dos sistemas, o uso de sensores de umidade do solo, a automação da irrigação e a fertirrigação. Essas tecnologias permitem irrigar com precisão, respeitando as necessidades das plantas e as condições ambientais, aumentando a eficiência e diminuindo os custos operacionais.</p>
              <p>Além disso, o manejo da irrigação deve estar integrado à gestão da bacia hidrográfica. Isso significa considerar os diferentes usos da água — agrícola, urbano e industrial — e garantir a sustentabilidade do recurso a longo prazo. A participação ativa dos agricultores, pesquisadores, órgãos públicos e sociedade civil é essencial para construir uma cultura de uso consciente da água.</p>
              <p>Portanto, mais do que expandir os sistemas irrigados, é preciso fazer isso com inteligência, sustentabilidade e justiça social. A água é um bem comum e sua gestão deve refletir os princípios de equidade, preservação ambiental e produtividade agrícola responsável.</p>
            </div>

            <div className="conteudo">
              <h2>Uso de Fertilizantes: eficiência e impactos ambientais</h2>
              <h3>O uso de fertilizantes é um dos pilares da produtividade agrícola, mas requer equilíbrio entre eficiência agronômica e responsabilidade ambiental.</h3>
              <div className="imagem-container">
                <img src={imagem2} alt="Uso de Fertilizantes" />
                <img className="logo" src={logo_branco} alt="Logo FEEAGRI" />
              </div>
              <p>Fertilizantes são indispensáveis para alcançar altos rendimentos nas culturas agrícolas. Eles fornecem nutrientes essenciais que muitas vezes estão ausentes ou são insuficientes nos solos tropicais brasileiros. No entanto, o uso indiscriminado ou inadequado desses insumos pode gerar problemas sérios ao meio ambiente e à saúde humana, além de aumentar os custos de produção sem ganhos proporcionais na produtividade.</p>
              <p>Atualmente, o Brasil importa cerca de 85% dos fertilizantes que consome, o que representa uma vulnerabilidade estratégica diante de instabilidades no mercado internacional. Investir na produção nacional, tanto de fertilizantes minerais quanto organominerais e biológicos, é um passo importante rumo à soberania agrícola. Além disso, é fundamental aprimorar o manejo da adubação nas propriedades rurais.</p>
              <p>Práticas como o uso de adubação baseada em análise de solo, a rotação de culturas, o plantio direto e o uso de bioinsumos vêm ganhando espaço por aliarem produtividade com sustentabilidade. Engenheiros agrícolas e técnicos agrícolas têm papel fundamental na orientação do uso correto, no monitoramento dos impactos e na proposição de soluções inovadoras e eficientes.</p>
              <p>Outro ponto crítico é a poluição difusa causada pelo escoamento superficial de fertilizantes, que pode levar à eutrofização de rios e lagos. Nesse sentido, a adoção de boas práticas agrícolas e o cumprimento de legislações ambientais devem ser fortalecidos. A pesquisa também tem avançado no desenvolvimento de tecnologias de liberação controlada e fertilizantes de baixa solubilidade, que reduzem perdas por lixiviação.</p>
              <p>Em suma, o uso racional de fertilizantes passa por um tripé: conhecimento técnico, políticas públicas eficientes e compromisso dos produtores. Essa combinação é essencial para uma agricultura produtiva, competitiva e ambientalmente responsável.</p>
            </div>

            <div className="conteudo">
              <h2>Produção Agrícola e Agropecuária: desafios do século XXI</h2>
              <h3>O aumento da demanda por alimentos exige soluções que conciliem produtividade, preservação ambiental e justiça social.</h3>
              <div className="imagem-container">
                <img src={imagem3} alt="Produção Agrícola" />
                <img className="logo" src={logo_branco} alt="Logo FEEAGRI" />
              </div>
              <p>A produção agrícola e agropecuária brasileira está entre as mais expressivas do mundo, posicionando o país como protagonista na segurança alimentar global. Contudo, essa posição traz grandes responsabilidades. Com o crescimento da população mundial e as mudanças no padrão de consumo, será necessário produzir mais com menos: menos terra, menos água, menos insumos e menor impacto ambiental.</p>
              <p>Entre os principais desafios estão a variabilidade climática, a degradação dos recursos naturais, o êxodo rural, a concentração fundiária e a pressão por preços baixos no mercado. Para enfrentá-los, é preciso promover uma revolução tecnológica no campo que vá além da mecanização: trata-se de integrar dados, inteligência artificial, agricultura de precisão, automação e biotecnologia à rotina produtiva.</p>
              <p>No entanto, a inovação precisa ser acessível a todos. A agricultura familiar, responsável por grande parte dos alimentos que chegam à mesa dos brasileiros, precisa de assistência técnica, crédito rural, políticas públicas e acesso a mercados justos. O fortalecimento de cooperativas, associações e cadeias curtas de comercialização é fundamental para garantir a inclusão e valorização desses produtores.</p>
              <p>A pecuária, por sua vez, enfrenta o desafio de reduzir suas emissões e melhorar seus indicadores de bem-estar animal. A integração lavoura-pecuária-floresta, a gestão de dejetos e a rastreabilidade são algumas das práticas que vêm sendo adotadas com sucesso por produtores comprometidos com a sustentabilidade e a qualidade da produção.</p>
              <p>O futuro da produção agrícola e agropecuária exige compromisso coletivo: dos produtores, do Estado, da ciência e da sociedade. Cada decisão no campo afeta não apenas o ambiente, mas também a saúde pública, a economia e as relações sociais. É tempo de pensar a produção rural como parte essencial de um sistema alimentar justo, resiliente e sustentável.</p>
            </div>

            <div className="conteudo">
              <h2>Produção de Alimentos e Desenvolvimento Sustentável</h2>
              <h3>Produzir mais, com menos impacto, é o maior compromisso do agro com o futuro do planeta.</h3>
              <div className="imagem-container">
                <img src={imagem4} alt="Desenvolvimento Sustentável" />
                <img className="logo" src={logo_branco} alt="Logo FEEAGRI" />
              </div>
              <p>A relação entre produção de alimentos e sustentabilidade está no centro dos debates globais sobre o futuro da humanidade. Garantir alimento seguro, nutritivo e acessível a uma população crescente é um desafio gigantesco, especialmente em um planeta com limites ambientais cada vez mais pressionados. Nesse cenário, a agricultura sustentável surge como uma necessidade urgente e não mais uma opção.</p>
              <p>Adotar práticas agrícolas regenerativas, que promovam a saúde do solo, a biodiversidade e a ciclagem de nutrientes, é uma das chaves para essa transformação. Técnicas como o uso de adubos verdes, compostagem, cobertura vegetal e consórcios de culturas ajudam a melhorar a estrutura do solo e aumentar a resiliência das lavouras a extremos climáticos.</p>
              <p>Além disso, a sustentabilidade passa por reduzir perdas na colheita, no transporte e no armazenamento, bem como combater o desperdício nos centros de consumo. Segundo a FAO, um terço de todos os alimentos produzidos no mundo é perdido ou desperdiçado. Isso representa não apenas prejuízo econômico, mas também um enorme impacto ambiental evitável.</p>
              <p>A transição para sistemas alimentares sustentáveis envolve repensar toda a cadeia produtiva: da escolha das sementes ao consumo final. É preciso incentivar o uso de energias renováveis, a certificação ambiental, a rastreabilidade e o comércio justo. A educação alimentar e ambiental também é essencial para formar cidadãos conscientes e engajados.</p>
              <p>Por fim, o papel da Engenharia Agrícola é essencial nesse processo, ao integrar tecnologias, práticas e conhecimentos voltados para a sustentabilidade do campo. O desafio é grande, mas também é uma oportunidade única de fazer da agricultura uma ferramenta para regenerar o planeta e garantir o bem-estar das futuras gerações.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
