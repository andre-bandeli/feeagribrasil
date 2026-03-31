import React from "react";
import Header from "../../componentes/header/Header";
import Footer from "../../componentes/footer/Footer";
import { Link } from "react-router-dom";
import "../../styles/auxiliar.scss";

import imagem from '../../assets/combustivel.jpeg';
import imagem2 from '../../assets/ml_agro.jpg';
import imagem3 from '../../assets/clima.jpg';
import imagem4 from '../../assets/coneeagri.jpg';
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
            
            <div className="edition-badge">Newsletter #2</div>
            
            <p className="introduction">
              Fique por dentro das transformações que estão moldando o futuro da 
              agricultura brasileira. Nesta edição, abordamos temas que unem tecnologia, 
              sustentabilidade e inovação: uso de combustíveis e eficiência energética 
              na mecanização agrícola, machine learning como ferramenta decisória no agro, 
              os impactos já sentidos das mudanças climáticas na produção rural e as 
              novidades sobre o maior congresso estudantil da área: o CONEEAGRI 2025 na UFPel.
            </p>
          </header>

          {/* ÍNDICE */}
          <nav className="table-of-contents">
            <h3>Nesta Edição</h3>
            <ul>
              <li>
                <a href="#combustiveis-eficiencia">
                  Eficiência energética e combustíveis na mecanização agrícola
                </a>
              </li>
              <li>
                <a href="#machine-learning">
                  Aplicações de machine learning no agro
                </a>
              </li>
              <li>
                <a href="#mudancas-climaticas">
                  Mudanças climáticas e impactos reais no campo
                </a>
              </li>
              <li>
                <a href="#coneeagri-2025">
                  O que esperar do CONEEAGRI 2025
                </a>
              </li>
            </ul>
          </nav>

          {/* DIVISOR */}
          <div className="section-divider" />

          {/* ARTIGO 1: COMBUSTÍVEIS */}
          <article id="combustiveis-eficiencia" className="newsletter-article">
            <h2 className="article-title">
              Combustíveis e Eficiência Energética na Mecanização Agrícola
            </h2>
            
            <h3 className="article-subtitle">
              Avanços tecnológicos e boas práticas para um agro mais eficiente e sustentável
            </h3>

            <div className="article-image">
              <img 
                src={imagem} 
                alt="Equipamentos agrícolas em operação demonstrando eficiência energética" 
              />
            </div>

            <p>
              O uso de combustíveis na mecanização agrícola representa uma das maiores 
              fatias do custo operacional nas propriedades rurais. Tratores, colheitadeiras, 
              pulverizadores e outros implementos consomem volumes significativos de diesel, 
              impactando diretamente a rentabilidade do produtor e contribuindo para a emissão 
              de gases de efeito estufa. Por isso, discutir eficiência energética em motores 
              agrícolas não é apenas uma questão técnica, mas também ambiental e econômica.
            </p>

            <p>
              Com o avanço da tecnologia, novos motores agrícolas estão sendo desenvolvidos 
              com maior eficiência térmica, controle eletrônico de injeção e sistemas 
              inteligentes de gerenciamento do torque. Essas inovações reduzem o consumo de 
              combustível por hectare e aumentam a durabilidade dos equipamentos. Entretanto, 
              para que esses benefícios sejam alcançados, é fundamental que o operador esteja 
              capacitado para utilizar as máquinas dentro dos parâmetros recomendados.
            </p>

            <p>
              Além da tecnologia embarcada, práticas como o planejamento de rotas, calibração 
              de pneus, manutenção preventiva e uso adequado da TDP (tomada de potência) são 
              fundamentais para otimizar o uso do combustível. Estudos apontam que uma má 
              regulagem pode elevar em até 20% o consumo de diesel, o que representa prejuízos 
              consideráveis ao longo da safra.
            </p>

            <div className="info-box">
              <p>
                💡 <strong>Biocombustíveis em Foco:</strong> O uso de biodiesel vem ganhando 
                destaque como alternativa viável ao diesel convencional. No Brasil, a mistura 
                obrigatória já atinge 12% de biodiesel (B12) e há planos de expansão. É 
                essencial que o biodiesel seja produzido de forma sustentável, evitando 
                conflitos com a produção de alimentos ou desmatamento.
              </p>
            </div>

            <h4>Otimização de Motores e Eficiência Trativa</h4>
            <p>
              A otimização de motores agrícolas visa assegurar que a potência gerada seja 
              eficientemente transferida para as rodas motrizes, a tomada de força (PTO) e o 
              sistema hidráulico. Perdas de potência ocorrem principalmente devido ao 
              deslizamento das rodas no solo. Esse deslizamento, que é a diferença entre o 
              avanço teórico da roda e o avanço real sob carga, representa uma perda de energia 
              significativa e maiores custos.
            </p>

            <p>
              Valores ótimos de deslizamento variam conforme o tipo de solo:
            </p>

            <ul>
              <li><strong>Solos firmes:</strong> 8 a 10% de deslizamento ideal</li>
              <li><strong>Solos cultivados:</strong> 11 a 13% de deslizamento ideal</li>
              <li><strong>Solos macios e arenosos:</strong> 14 a 16% de deslizamento ideal</li>
            </ul>

            <p>
              Manter o deslizamento dentro desses intervalos otimiza a eficiência trativa (TE) 
              do trator, que é a relação entre a potência na barra de tração e a potência no 
              eixo. Além disso, o consumo de combustível está diretamente ligado à potência 
              demandada pela operação.
            </p>

            <h4>O Impacto da Patinagem nos Custos Operacionais</h4>
            <p>
              Um fator fundamental que muitos produtores rurais não se atentam, mas que impacta 
              diretamente a eficiência e os custos da operação, é a patinagem das máquinas 
              agrícolas. A patinagem excessiva ocorre quando os pneus do trator ou de outros 
              equipamentos deslizam sobre o solo sem que haja um avanço proporcional. Embora um 
              certo nível de patinagem seja inevitável e até desejável para a otimização da 
              tração, valores acima do ideal resultam em desperdício de combustível, desgaste 
              prematuro dos pneus e perda de produtividade.
            </p>

            <p>
              A otimização da patinagem não se resume apenas a economia de combustível. Quando 
              a máquina patina menos, a força de tração é aplicada de forma mais eficiente ao 
              solo, garantindo que o implemento realize sua função com maior precisão e menor 
              retrabalho. Isso se traduz em uma operação mais rápida e homogênea, reduzindo o 
              tempo de campo e aumentando a janela de plantio ou colheita.
            </p>

            <h4>Gestão de Potência e Custos</h4>
            <p>
              Os implementos agrícolas demandam diferentes tipos de potência. A potência na 
              barra de tração é essencial para mover o implemento no solo, superando a 
              resistência do terreno. Implementos rotativos, como enfardadeiras, dependem da 
              potência da tomada de força (PTO). Já sistemas específicos utilizam potência 
              hidráulica, enquanto componentes eletrônicos necessitam de potência elétrica.
            </p>

            <p>
              A potência total requerida (PT) é a soma dessas demandas, convertidas para uma 
              base de PTO equivalente e considerando a eficiência da transmissão. É fundamental 
              que a potência do motor do trator seja 20% superior à potência total exigida pelo 
              implemento, garantindo uma reserva para lidar com variações de terreno, solo, 
              cultura e equipamentos adicionais.
            </p>

            <p>
              A gestão eficaz dos custos é igualmente essencial. Os custos de propriedade 
              (fixos), como depreciação, juros sobre o investimento, impostos, armazenagem e 
              seguro, ocorrem independentemente do uso da máquina. Por outro lado, os custos 
              operacionais (variáveis), que incluem reparo e manutenção, combustível, óleo e 
              lubrificantes, e mão de obra, variam diretamente com o uso da máquina.
            </p>
          </article>

          <div className="section-divider" />

          {/* ARTIGO 2: MACHINE LEARNING */}
          <article id="machine-learning" className="newsletter-article">
            <h2 className="article-title">
              Machine Learning e Agricultura: Decisões Guiadas por Dados
            </h2>
            
            <h3 className="article-subtitle">
              Como a inteligência artificial está moldando o futuro da agricultura de precisão
            </h3>

            <div className="article-image">
              <img 
                src={imagem2} 
                alt="Aplicação de machine learning na agricultura de precisão" 
              />
            </div>

            <p>
              Machine learning (aprendizado de máquina) tem se consolidado como uma das 
              ferramentas mais poderosas da agricultura digital. Trata-se de uma técnica da 
              inteligência artificial que permite que sistemas aprendam a partir de dados e 
              tomem decisões sem serem explicitamente programados. No agro, seu uso já está 
              presente em previsões climáticas, recomendações agronômicas e análise de imagens 
              de satélite e drones.
            </p>

            <p>
              Na prática, algoritmos de machine learning podem ser aplicados para prever o 
              rendimento de safras, identificar doenças em plantas, classificar tipos de solo 
              e até estimar a necessidade hídrica de culturas específicas. Essas análises são 
              feitas com base em um grande volume de dados coletados por sensores, estações 
              meteorológicas e imagens multiespectrais.
            </p>

            <p>
              Entre os modelos mais utilizados estão Random Forest, XGBoost, regressão 
              logística e redes neurais artificiais. A escolha do algoritmo depende do tipo de 
              dado, do objetivo da predição e da complexidade do problema. Entretanto, de nada 
              adianta a melhor técnica se os dados utilizados forem incompletos ou imprecisos.
            </p>

            <div className="info-box">
              <p>
                🌾 <strong>Desafio no Campo:</strong> Muitos produtores ainda não adotaram 
                sistemas integrados de monitoramento, o que dificulta a aplicação de modelos 
                robustos. É necessário que engenheiros e técnicos estejam capacitados para 
                interpretar os resultados dos modelos e transformá-los em ações práticas e 
                eficazes.
              </p>
            </div>

            <p>
              O futuro aponta para fazendas cada vez mais conectadas, com decisões orientadas 
              por inteligência artificial e maior precisão no uso de insumos. Machine learning 
              não substitui o conhecimento humano, mas o potencializa, oferecendo análises 
              rápidas, personalizadas e com base em evidências.
            </p>

            <h4>Armadilhas Comuns em Machine Learning Agrícola</h4>
            <p>
              Apesar do enorme potencial do machine learning na agricultura, a implementação 
              desses modelos não está isenta de desafios e armadilhas comuns que podem 
              comprometer a precisão e a confiabilidade das previsões. Um dos erros mais 
              frequentes é o <strong>data leakage</strong>, onde informações que não estariam 
              disponíveis no momento da predição são inadvertidamente incluídas no treinamento 
              do modelo, levando a um desempenho superestimado e irreal em cenários práticos.
            </p>

            <p>
              Outro problema crítico é o <strong>overfitting</strong> (superajuste), que ocorre 
              quando um modelo se ajusta excessivamente aos dados de treinamento, aprendendo 
              ruídos e particularidades que não se generalizam para novos dados. Isso resulta 
              em um modelo com alta performance no conjunto de treinamento, mas que falha 
              drasticamente ao ser aplicado em dados reais e não vistos anteriormente.
            </p>

            <p>
              O oposto, o <strong>underfitting</strong> (subajuste), também é prejudicial, 
              acontecendo quando o modelo é muito simples para capturar a complexidade dos 
              dados, resultando em um desempenho ruim tanto no treinamento quanto na validação. 
              Ambas as situações podem levar a decisões agrícolas equivocadas e perdas 
              significativas.
            </p>

            <p>
              Por fim, uma etapa frequentemente subestimada, mas de extrema importância, é o 
              <strong> pré-processamento de dados</strong>. Dados brutos, muitas vezes, contêm 
              valores ausentes, inconsistências ou ruídos que, se não tratados adequadamente, 
              podem enviesar o treinamento do modelo e comprometer a qualidade das previsões. A 
              limpeza, normalização e transformação dos dados são passos fundamentais para 
              garantir a robustez e a utilidade dos modelos de machine learning no campo.
            </p>
          </article>

          <div className="section-divider" />

          {/* ARTIGO 3: MUDANÇAS CLIMÁTICAS */}
          <article id="mudancas-climaticas" className="newsletter-article">
            <h2 className="article-title">
              Mudanças Climáticas e Agricultura: Uma Realidade Incontornável
            </h2>
            
            <h3 className="article-subtitle">
              Como eventos climáticos extremos já estão afetando o agro brasileiro
            </h3>

            <div className="article-image">
              <img 
                src={imagem3} 
                alt="Impactos das mudanças climáticas na agricultura" 
              />
            </div>

            <p>
              As mudanças climáticas deixaram de ser uma previsão para o futuro e se tornaram 
              uma realidade presente no cotidiano do produtor rural. O aumento na frequência e 
              intensidade de eventos extremos como secas, chuvas torrenciais, geadas e ondas de 
              calor vem impactando diretamente a produtividade agrícola e a segurança alimentar.
            </p>

            <p>
              Esses fenômenos provocam desde perdas de safra até prejuízos logísticos, além de 
              favorecerem o surgimento de pragas e doenças em regiões antes pouco afetadas. O 
              estado do Rio Grande do Sul, por exemplo, enfrentou em 2024 uma das maiores 
              enchentes de sua história, com consequências severas para a produção agropecuária.
            </p>

            <p>
              A adaptação a esse novo cenário exige investimentos em tecnologia, planejamento e 
              políticas públicas. Zoneamentos agrícolas mais precisos, cultivares mais 
              resistentes, irrigação inteligente e sistemas de alerta precoce são ferramentas 
              essenciais para mitigar os riscos climáticos.
            </p>

            <div className="info-box">
              <p>
                🌱 <strong>Agricultura como Solução:</strong> Do ponto de vista ambiental, a 
                agricultura pode e deve ser parte da solução. Práticas conservacionistas, 
                sequestro de carbono no solo, integração lavoura-pecuária-floresta e uso de 
                energias renováveis contribuem para reduzir a pegada de carbono da produção 
                rural.
              </p>
            </div>

            <h4>O Desafio do Zoneamento Agrícola de Risco Climático (ZARC)</h4>
            <p>
              Um dos instrumentos mais importantes para orientar o plantio seguro no Brasil é o 
              <strong> Zoneamento Agrícola de Risco Climático (ZARC)</strong>. O ZARC estabelece, 
              para cada cultura, os municípios e períodos de plantio com menor risco de perdas 
              por eventos climáticos adversos. Contudo, a intensificação das mudanças climáticas 
              tem desafiado a validade e a precisão desses zoneamentos.
            </p>

            <p>
              A ocorrência de secas prolongadas em regiões tradicionalmente úmidas e chuvas 
              extremas em períodos atípicos tem desorganizado os calendários agrícolas 
              historicamente estabelecidos. Produtores que seguem as recomendações do ZARC podem 
              ser surpreendidos por eventos que fogem à normalidade, resultando em perdas 
              significativas e na necessidade de revisão constante dessas diretrizes.
            </p>

            <h4>Programas de Proteção: Proagro e Proagro Mais</h4>
            <p>
              Diante da crescente imprevisibilidade climática, programas de apoio aos produtores 
              rurais se tornam cada vez mais vitais. O <strong>Programa de Garantia da Atividade 
              Agropecuária (Proagro)</strong> é um seguro que indeniza o produtor que tiver 
              perdas em suas lavouras por fenômenos naturais, como secas e enchentes, ou por 
              pragas e doenças.
            </p>

            <p>
              Dentro do Proagro, existe o <strong>Proagro Mais</strong>, uma modalidade voltada 
              especificamente para agricultores familiares, pequenos e médios produtores, com o 
              objetivo de cobrir os custos de custeio da produção. Essa vertente é fundamental, 
              pois esses produtores são frequentemente os mais vulneráveis aos impactos de 
              eventos climáticos extremos, possuindo menor capacidade de investimento em 
              tecnologias de mitigação de risco.
            </p>

            <p>
              A ampliação e o fortalecimento de programas como o Proagro e o Proagro Mais são 
              essenciais para garantir a segurança alimentar e a resiliência da agricultura 
              familiar brasileira frente aos desafios impostos pelas mudanças climáticas.
            </p>
          </article>

          <div className="section-divider" />

          {/* ARTIGO 4: CONEEAGRI */}
          <article id="coneeagri-2025" className="newsletter-article">
            <h2 className="article-title">
              CONEEAGRI 2025: O Encontro Que Une o Agro com Ciência
            </h2>
            
            <h3 className="article-subtitle">
              A Universidade de Pelotas (UFPel) se prepara para o maior congresso estudantil 
              da Engenharia Agrícola, Engenharia Agrícola e Ambiental e Engenharia de Biossistemas!
            </h3>

            <div className="article-image">
              <img 
                src={imagem4} 
                alt="CONEEAGRI 2025 - Congresso Estudantil de Engenharia Agrícola" 
              />
            </div>

            <p>
              O XXXVII CONEEAGRI e o II ENPEAG se aproximam, prometendo reunir estudantes, 
              professores, pesquisadores e profissionais de todo o país em uma experiência 
              imersiva no universo da engenharia agrícola. O evento será realizado de{" "}
              <strong>27 a 30 de outubro de 2025</strong>, no campus de Pelotas, na 
              Universidade Federal de Pelotas (UFPel).
            </p>

            <h4>Programação Diversificada</h4>
            <p>
              A programação será pautada por debates sobre inovação, sustentabilidade, inclusão 
              e o futuro das profissões no agro. Estão previstas:
            </p>

            <ul>
              <li>Palestras com especialistas renomados</li>
              <li>Minicursos práticos e teóricos</li>
              <li>Visitas técnicas a propriedades e empresas</li>
              <li>Mostra científica com apresentação de trabalhos</li>
              <li>Feira de estágios e oportunidades profissionais</li>
              <li>Painéis sobre tendências do agronegócio</li>
            </ul>

            <h4>Fortalecimento do Movimento Estudantil</h4>
            <p>
              O CONEEAGRI é também um espaço de fortalecimento do movimento estudantil, 
              permitindo a articulação entre centros e diretórios acadêmicos, além da discussão 
              de pautas importantes como currículo, políticas públicas e representatividade da 
              engenharia agrícola nos diferentes espaços de decisão.
            </p>

            <div className="info-box">
              <p>
                🎓 <strong>Estrutura Acessível:</strong> A organização tem buscado garantir 
                estrutura acessível, alojamento solidário, alimentação a preços populares e uma 
                experiência acolhedora para todos os participantes.
              </p>
            </div>

            <p>
              As inscrições estarão abertas em breve, com submissão de trabalhos científicos. 
              Siga as redes sociais do{" "}
              <Link 
                to="https://www.instagram.com/coneeagri/?hl=en" 
                target="_blank"
                rel="noopener noreferrer"
                className="external-link"
              >
                CONEEAGRI
              </Link>{" "}
              para ficar por dentro de todas as novidades e não perder os prazos.
            </p>

            <p>
              Mais do que um congresso técnico, o CONEEAGRI é um espaço de encontro, 
              aprendizado, troca de vivências e fortalecimento da identidade da engenharia 
              agrícola. Uma oportunidade única de fazer parte da história e contribuir com os 
              rumos do agro brasileiro.
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