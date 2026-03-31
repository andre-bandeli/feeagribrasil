import React from "react";
import Header from "../../componentes/header/Header";
import Footer from "../../componentes/footer/Footer";
import "../../styles/auxiliar.scss";

import imagem from '../../assets/irrigation.jpg';
import imagem2 from '../../assets/fertilizante.jpg';
import imagem3 from '../../assets/agropecuaria.jpg';
import imagem4 from '../../assets/alimento.jpg';
import logo from '../../assets/logo_colored.png';

export default function NewsletterPost() {
  return (
    <div>
      <Header />
      
      <div className="auxiliar">
        <div className="newsletter-wrapper">
          
          {/* HEADER DA NEWSLETTER */}
          <header className="newsletter-header">
            <div className="logo-container">
              <img src={logo} alt="Logo FEEAGRI" />
            </div>
            
            <p className="organization-name">
              Federação Brasileira dos Estudantes de Engenharia Agrícola, 
              Engenharia Agrícola e Ambiental e Engenharia de Biossistemas
            </p>
            
            <div className="edition-badge">Newsletter #1</div>
            
            <p className="introduction">
              Fique por dentro das discussões mais relevantes sobre o futuro do agro 
              brasileiro. Nesta edição, trazemos reflexões aprofundadas sobre sistemas 
              irrigados, uso de fertilizantes, produção de alimentos e desenvolvimento 
              sustentável. Informação técnica com linguagem acessível para transformar 
              o campo com consciência e inovação.
            </p>
          </header>

          {/* ÍNDICE */}
          <nav className="table-of-contents">
            <h3>Nesta Edição</h3>
            <ul>
              <li>
                <a href="#sistemas-irrigados">
                  Sistemas irrigados e a escassez hídrica
                </a>
              </li>
              <li>
                <a href="#uso-fertilizantes">
                  Uso racional de fertilizantes no Brasil
                </a>
              </li>
              <li>
                <a href="#producao-agricola">
                  Desafios e oportunidades na produção agrícola
                </a>
              </li>
              <li>
                <a href="#desenvolvimento-sustentavel">
                  O papel da agropecuária no desenvolvimento sustentável
                </a>
              </li>
            </ul>
          </nav>

          {/* DIVISOR */}
          <div className="section-divider" />

          {/* ARTIGO 1: SISTEMAS IRRIGADOS */}
          <article id="sistemas-irrigados" className="newsletter-article">
            <h2 className="article-title">
              Sistemas Irrigados: Uso Eficiente da Água no Campo
            </h2>
            
            <h3 className="article-subtitle">
              A irrigação é essencial para garantir segurança alimentar, mas exige 
              responsabilidade diante do cenário de mudanças climáticas e crise hídrica.
            </h3>

            <div className="article-image">
              <img 
                src={imagem} 
                alt="Sistema de irrigação em operação no campo" 
              />
            </div>

            <p>
              O Brasil, apesar de possuir um dos maiores volumes de água doce do mundo, 
              enfrenta desafios significativos em relação ao uso e à gestão eficiente da 
              água na agricultura. Os sistemas irrigados têm sido apontados como soluções 
              fundamentais para aumentar a produtividade das lavouras e garantir a segurança 
              alimentar, especialmente diante das incertezas climáticas. Contudo, o uso 
              inadequado desses sistemas pode causar esgotamento de mananciais, salinização 
              do solo e desperdício de recursos hídricos valiosos.
            </p>

            <div className="info-box">
              <p>
                💧 <strong>Dados da ANA:</strong> Menos de 10% da área cultivada no Brasil 
                utiliza irrigação. Isso mostra um enorme potencial de expansão, mas também 
                um alerta: a adoção deve ser acompanhada por práticas sustentáveis e 
                tecnologia de ponta.
              </p>
            </div>

            <p>
              Sistemas como gotejamento, aspersão e pivô central, quando bem manejados, 
              apresentam alta eficiência, reduzindo perdas por evaporação e promovendo o 
              uso racional da água. Engenheiros agrícolas desempenham papel estratégico 
              nesse cenário, promovendo o dimensionamento adequado dos sistemas, o uso de 
              sensores de umidade do solo, a automação da irrigação e a fertirrigação.
            </p>

            <h4>Tecnologias de Precisão na Irrigação</h4>
            <p>
              Essas tecnologias permitem irrigar com precisão, respeitando as necessidades 
              das plantas e as condições ambientais, aumentando a eficiência e diminuindo os 
              custos operacionais. Os principais sistemas incluem:
            </p>

            <ul>
              <li>
                <strong>Gotejamento:</strong> Alta eficiência hídrica, ideal para culturas 
                perenes e de alto valor agregado
              </li>
              <li>
                <strong>Aspersão:</strong> Versatilidade e cobertura uniforme para grandes 
                áreas
              </li>
              <li>
                <strong>Pivô Central:</strong> Automação e economia de mão de obra em 
                grandes extensões
              </li>
              <li>
                <strong>Sensores IoT:</strong> Monitoramento em tempo real da umidade do 
                solo e clima
              </li>
            </ul>

            <h4>Gestão Integrada de Recursos Hídricos</h4>
            <p>
              Além disso, o manejo da irrigação deve estar integrado à gestão da bacia 
              hidrográfica. Isso significa considerar os diferentes usos da água — agrícola, 
              urbano e industrial — e garantir a sustentabilidade do recurso a longo prazo. 
              A participação ativa dos agricultores, pesquisadores, órgãos públicos e 
              sociedade civil é essencial para construir uma cultura de uso consciente da água.
            </p>

            <p>
              Portanto, mais do que expandir os sistemas irrigados, é preciso fazer isso com 
              inteligência, sustentabilidade e justiça social. A água é um bem comum e sua 
              gestão deve refletir os princípios de equidade, preservação ambiental e 
              produtividade agrícola responsável.
            </p>
          </article>

          <div className="section-divider" />

          {/* ARTIGO 2: FERTILIZANTES */}
          <article id="uso-fertilizantes" className="newsletter-article">
            <h2 className="article-title">
              Uso de Fertilizantes: Eficiência e Impactos Ambientais
            </h2>
            
            <h3 className="article-subtitle">
              O uso de fertilizantes é um dos pilares da produtividade agrícola, mas requer 
              equilíbrio entre eficiência agronômica e responsabilidade ambiental.
            </h3>

            <div className="article-image">
              <img 
                src={imagem2} 
                alt="Aplicação de fertilizantes na agricultura" 
              />
            </div>

            <p>
              Fertilizantes são indispensáveis para alcançar altos rendimentos nas culturas 
              agrícolas. Eles fornecem nutrientes essenciais que muitas vezes estão ausentes 
              ou são insuficientes nos solos tropicais brasileiros. No entanto, o uso 
              indiscriminado ou inadequado desses insumos pode gerar problemas sérios ao meio 
              ambiente e à saúde humana, além de aumentar os custos de produção sem ganhos 
              proporcionais na produtividade.
            </p>

            <div className="info-box">
              <p>
                ⚠️ <strong>Dependência Externa:</strong> O Brasil importa cerca de 85% dos 
                fertilizantes que consome, o que representa uma vulnerabilidade estratégica 
                diante de instabilidades no mercado internacional. Investir na produção 
                nacional é um passo importante rumo à soberania agrícola.
              </p>
            </div>

            <h4>Boas Práticas no Manejo de Fertilizantes</h4>
            <p>
              É fundamental aprimorar o manejo da adubação nas propriedades rurais. Práticas 
              sustentáveis incluem:
            </p>

            <ul>
              <li>
                <strong>Análise de Solo:</strong> Base científica para recomendação precisa 
                de nutrientes
              </li>
              <li>
                <strong>Rotação de Culturas:</strong> Melhora a fertilidade natural e quebra 
                ciclos de pragas
              </li>
              <li>
                <strong>Plantio Direto:</strong> Conserva matéria orgânica e reduz erosão
              </li>
              <li>
                <strong>Bioinsumos:</strong> Alternativas biológicas que reduzem dependência 
                de químicos
              </li>
              <li>
                <strong>Fertirrigação:</strong> Aplicação eficiente via sistema de irrigação
              </li>
            </ul>

            <p>
              Engenheiros agrícolas e técnicos agrícolas têm papel fundamental na orientação 
              do uso correto, no monitoramento dos impactos e na proposição de soluções 
              inovadoras e eficientes.
            </p>

            <h4>Impactos Ambientais e Tecnologias Emergentes</h4>
            <p>
              Outro ponto crítico é a poluição difusa causada pelo escoamento superficial de 
              fertilizantes, que pode levar à eutrofização de rios e lagos. Nesse sentido, a 
              adoção de boas práticas agrícolas e o cumprimento de legislações ambientais 
              devem ser fortalecidos.
            </p>

            <p>
              A pesquisa também tem avançado no desenvolvimento de tecnologias de liberação 
              controlada e fertilizantes de baixa solubilidade, que reduzem perdas por 
              lixiviação. Essas inovações representam o futuro da nutrição de plantas com 
              menor impacto ambiental.
            </p>

            <p>
              Em suma, o uso racional de fertilizantes passa por um tripé: conhecimento 
              técnico, políticas públicas eficientes e compromisso dos produtores. Essa 
              combinação é essencial para uma agricultura produtiva, competitiva e 
              ambientalmente responsável.
            </p>
          </article>

          <div className="section-divider" />

          {/* ARTIGO 3: PRODUÇÃO AGRÍCOLA */}
          <article id="producao-agricola" className="newsletter-article">
            <h2 className="article-title">
              Produção Agrícola e Agropecuária: Desafios do Século XXI
            </h2>
            
            <h3 className="article-subtitle">
              O aumento da demanda por alimentos exige soluções que conciliem produtividade, 
              preservação ambiental e justiça social.
            </h3>

            <div className="article-image">
              <img 
                src={imagem3} 
                alt="Produção agropecuária moderna e sustentável" 
              />
            </div>

            <p>
              A produção agrícola e agropecuária brasileira está entre as mais expressivas do 
              mundo, posicionando o país como protagonista na segurança alimentar global. 
              Contudo, essa posição traz grandes responsabilidades. Com o crescimento da 
              população mundial e as mudanças no padrão de consumo, será necessário produzir 
              mais com menos: menos terra, menos água, menos insumos e menor impacto ambiental.
            </p>

            <h4>Principais Desafios Atuais</h4>
            <p>
              Entre os principais desafios estão:
            </p>

            <ul>
              <li>Variabilidade climática e eventos extremos</li>
              <li>Degradação dos recursos naturais</li>
              <li>Êxodo rural e envelhecimento da população do campo</li>
              <li>Concentração fundiária</li>
              <li>Pressão por preços baixos no mercado</li>
            </ul>

            <div className="info-box">
              <p>
                🌾 <strong>Agricultura Familiar:</strong> Responsável por grande parte dos 
                alimentos que chegam à mesa dos brasileiros, a agricultura familiar precisa 
                de assistência técnica, crédito rural, políticas públicas e acesso a mercados 
                justos. O fortalecimento de cooperativas e associações é fundamental.
              </p>
            </div>

            <h4>Inovação Tecnológica e Inclusão</h4>
            <p>
              Para enfrentar esses desafios, é preciso promover uma revolução tecnológica no 
              campo que vá além da mecanização: trata-se de integrar dados, inteligência 
              artificial, agricultura de precisão, automação e biotecnologia à rotina produtiva.
            </p>

            <p>
              No entanto, a inovação precisa ser acessível a todos. A agricultura familiar, 
              responsável por grande parte dos alimentos que chegam à mesa dos brasileiros, 
              precisa de assistência técnica, crédito rural, políticas públicas e acesso a 
              mercados justos.
            </p>

            <h4>Pecuária Sustentável</h4>
            <p>
              A pecuária, por sua vez, enfrenta o desafio de reduzir suas emissões e melhorar 
              seus indicadores de bem-estar animal. A integração lavoura-pecuária-floresta 
              (ILPF), a gestão de dejetos e a rastreabilidade são algumas das práticas que vêm 
              sendo adotadas com sucesso por produtores comprometidos com a sustentabilidade e 
              a qualidade da produção.
            </p>

            <p>
              O futuro da produção agrícola e agropecuária exige compromisso coletivo: dos 
              produtores, do Estado, da ciência e da sociedade. Cada decisão no campo afeta 
              não apenas o ambiente, mas também a saúde pública, a economia e as relações 
              sociais. É tempo de pensar a produção rural como parte essencial de um sistema 
              alimentar justo, resiliente e sustentável.
            </p>
          </article>

          <div className="section-divider" />

          {/* ARTIGO 4: DESENVOLVIMENTO SUSTENTÁVEL */}
          <article id="desenvolvimento-sustentavel" className="newsletter-article">
            <h2 className="article-title">
              Produção de Alimentos e Desenvolvimento Sustentável
            </h2>
            
            <h3 className="article-subtitle">
              Produzir mais, com menos impacto, é o maior compromisso do agro com o futuro 
              do planeta.
            </h3>

            <div className="article-image">
              <img 
                src={imagem4} 
                alt="Produção sustentável de alimentos para o futuro" 
              />
            </div>

            <p>
              A relação entre produção de alimentos e sustentabilidade está no centro dos 
              debates globais sobre o futuro da humanidade. Garantir alimento seguro, nutritivo 
              e acessível a uma população crescente é um desafio gigantesco, especialmente em 
              um planeta com limites ambientais cada vez mais pressionados. Nesse cenário, a 
              agricultura sustentável surge como uma necessidade urgente e não mais uma opção.
            </p>

            <h4>Práticas Agrícolas Regenerativas</h4>
            <p>
              Adotar práticas agrícolas regenerativas, que promovam a saúde do solo, a 
              biodiversidade e a ciclagem de nutrientes, é uma das chaves para essa 
              transformação. Técnicas eficazes incluem:
            </p>

            <ul>
              <li><strong>Adubos Verdes:</strong> Leguminosas e outras plantas que fixam nitrogênio</li>
              <li><strong>Compostagem:</strong> Reciclagem de matéria orgânica</li>
              <li><strong>Cobertura Vegetal:</strong> Proteção do solo e controle de erosão</li>
              <li><strong>Consórcios de Culturas:</strong> Diversificação e otimização de recursos</li>
            </ul>

            <p>
              Essas técnicas ajudam a melhorar a estrutura do solo e aumentar a resiliência 
              das lavouras a extremos climáticos.
            </p>

            <div className="info-box">
              <p>
                🌍 <strong>Desperdício Global:</strong> Segundo a FAO, um terço de todos os 
                alimentos produzidos no mundo é perdido ou desperdiçado. Isso representa não 
                apenas prejuízo econômico, mas também um enorme impacto ambiental evitável.
              </p>
            </div>

            <h4>Redução de Perdas e Desperdícios</h4>
            <p>
              A sustentabilidade passa por reduzir perdas na colheita, no transporte e no 
              armazenamento, bem como combater o desperdício nos centros de consumo. Investir 
              em infraestrutura pós-colheita, logística eficiente e educação do consumidor são 
              medidas essenciais.
            </p>

            <h4>Transição para Sistemas Alimentares Sustentáveis</h4>
            <p>
              A transição para sistemas alimentares sustentáveis envolve repensar toda a cadeia 
              produtiva: da escolha das sementes ao consumo final. É preciso incentivar:
            </p>

            <ul>
              <li>Uso de energias renováveis na produção</li>
              <li>Certificação ambiental e rastreabilidade</li>
              <li>Comércio justo e valorização do produtor</li>
              <li>Educação alimentar e ambiental</li>
              <li>Redução do uso de agrotóxicos</li>
            </ul>

            <p>
              A educação alimentar e ambiental também é essencial para formar cidadãos 
              conscientes e engajados com a sustentabilidade do sistema alimentar.
            </p>

            <h4>O Papel da Engenharia Agrícola</h4>
            <p>
              Por fim, o papel da Engenharia Agrícola é essencial nesse processo, ao integrar 
              tecnologias, práticas e conhecimentos voltados para a sustentabilidade do campo. 
              O desafio é grande, mas também é uma oportunidade única de fazer da agricultura 
              uma ferramenta para regenerar o planeta e garantir o bem-estar das futuras 
              gerações.
            </p>

            <p>
              O futuro do agro brasileiro depende de decisões tomadas hoje. Cada prática 
              adotada, cada tecnologia implementada e cada política pública criada deve ter 
              como norte a sustentabilidade, a produtividade responsável e a justiça social.
            </p>
          </article>

          {/* FOOTER DA NEWSLETTER */}
          <footer className="newsletter-footer">
            <p>© 2025 FEEAGRI - Todos os direitos reservados</p>
          </footer>

        </div>
      </div>
      
      <Footer />
    </div>
  );
}