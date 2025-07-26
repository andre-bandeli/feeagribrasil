import React from "react";
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
import "../styles/auxiliar.scss";
import imagem from '../assets/combustivel.jpeg';
import imagem2 from '../assets/ml_agro.jpg';
import imagem3 from '../assets/clima.jpg';
import imagem4 from '../assets/coneeagri.jpg';
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
          <h2 className="custom"><strong>Newsletter #2</strong></h2>
          <p>Fique por dentro das transformações que estão moldando o futuro da agricultura brasileira. Nesta edição, abordamos temas que unem tecnologia, sustentabilidade e inovação: uso de combustíveis e eficiência energética na mecanização agrícola, machine learning como ferramenta decisória no agro, os impactos já sentidos das mudanças climáticas na produção rural e as novidades sobre o maior congresso estudantil da área: o CONEEAGRI 2025 na UFPel.</p>

          <div className="resume">
            <h2>Resumo da Edição</h2>
            <ul>
              <li><p>Eficiência energética e combustíveis na mecanização agrícola</p></li>
              <li><p>Aplicações de machine learning no agro</p></li>
              <li><p>Mudanças climáticas e impactos reais no campo</p></li>
              <li><p>O que esperar do CONEEAGRI 2025</p></li>
            </ul>
          </div>

          <div className="sep" />

          <div className="container">
            <div className="conteudo">
              <h2>Combustíveis e Eficiência Energética na Mecanização Agrícola</h2>
              <h3>Avanços tecnológicos e boas práticas para um agro mais eficiente e sustentável</h3>
              <div className="imagem-container">
                <img src={imagem} alt="Combustíveis agrícolas" />
                <img className="logo" src={logo_branco} alt="Logo FEEAGRI" />
              </div>
              <p>O uso de combustíveis na mecanização agrícola representa uma das maiores fatias do custo operacional nas propriedades rurais. Tratores, colheitadeiras, pulverizadores e outros implementos consomem volumes significativos de diesel, impactando diretamente a rentabilidade do produtor e contribuindo para a emissão de gases de efeito estufa. Por isso, discutir eficiência energética em motores agrícolas não é apenas uma questão técnica, mas também ambiental e econômica.</p>
              <p>Com o avanço da tecnologia, novos motores agrícolas estão sendo desenvolvidos com maior eficiência térmica, controle eletrônico de injeção e sistemas inteligentes de gerenciamento do torque. Essas inovações reduzem o consumo de combustível por hectare e aumentam a durabilidade dos equipamentos. Entretanto, para que esses benefícios sejam alcançados, é fundamental que o operador esteja capacitado para utilizar as máquinas dentro dos parâmetros recomendados.</p>
              <p>Além da tecnologia embarcada, práticas como o planejamento de rotas, calibração de pneus, manutenção preventiva e uso adequado da TDP (tomada de potência) são fundamentais para otimizar o uso do combustível. Estudos apontam que uma má regulagem pode elevar em até 20% o consumo de diesel, o que representa prejuízos consideráveis ao longo da safra.</p>
              <p>O uso de biocombustíveis, como o biodiesel, vem ganhando destaque como alternativa viável ao diesel convencional. No Brasil, a mistura obrigatória já atinge 12% de biodiesel (B12) e há planos de expansão. Apesar de sua origem renovável, é essencial que o biodiesel seja produzido de forma sustentável, evitando conflitos com a produção de alimentos ou desmatamento.</p>
              <p>Portanto, aliar conhecimento técnico, inovação em motores e boas práticas de operação é o caminho para uma mecanização agrícola mais sustentável, eficiente e alinhada com os desafios do século XXI.</p>
            </div>

            <div className="conteudo">
              <h2>Machine Learning e Agricultura: Decisões Guiadas por Dados</h2>
              <h3>Como a inteligência artificial está moldando o futuro da agricultura de precisão</h3>
              <div className="imagem-container">
                <img src={imagem2} alt="Machine Learning no Agro" />
                <img className="logo" src={logo_branco} alt="Logo FEEAGRI" />
              </div>
              <p>Machine learning (aprendizado de máquina) tem se consolidado como uma das ferramentas mais poderosas da agricultura digital. Trata-se de uma técnica da inteligência artificial que permite que sistemas aprendam a partir de dados e tomem decisões sem serem explicitamente programados. No agro, seu uso já está presente em previsões climáticas, recomendações agronômicas e análise de imagens de satélite e drones.</p>
              <p>Na prática, algoritmos de machine learning podem ser aplicados para prever o rendimento de safras, identificar doenças em plantas, classificar tipos de solo e até estimar a necessidade hídrica de culturas específicas. Essas análises são feitas com base em um grande volume de dados coletados por sensores, estações meteorológicas e imagens multiespectrais.</p>
              <p>Entre os modelos mais utilizados estão Random Forest, XGBoost, regressão logística e redes neurais artificiais. A escolha do algoritmo depende do tipo de dado, do objetivo da predição e da complexidade do problema. Entretanto, de nada adianta a melhor técnica se os dados utilizados forem incompletos ou imprecisos.</p>
              <p>O desafio no campo está justamente na coleta e organização dos dados. Muitos produtores ainda não adotaram sistemas integrados de monitoramento, o que dificulta a aplicação de modelos robustos. Além disso, é necessário que engenheiros e técnicos estejam capacitados para interpretar os resultados dos modelos e transformá-los em ações práticas e eficazes.</p>
              <p>O futuro aponta para fazendas cada vez mais conectadas, com decisões orientadas por inteligência artificial e maior precisão no uso de insumos. Machine learning não substitui o conhecimento humano, mas o potencializa, oferecendo análises rápidas, personalizadas e com base em evidências.</p>
            </div>

            <div className="conteudo">
              <h2>Mudanças Climáticas e Agricultura: Uma Realidade Incontornável</h2>
              <h3>Como eventos climáticos extremos já estão afetando o agro brasileiro</h3>
              <div className="imagem-container">
                <img src={imagem3} alt="Mudanças Climáticas" />
                <img className="logo" src={logo_branco} alt="Logo FEEAGRI" />
              </div>
              <p>As mudanças climáticas deixaram de ser uma previsão para o futuro e se tornaram uma realidade presente no cotidiano do produtor rural. O aumento na frequência e intensidade de eventos extremos como secas, chuvas torrenciais, geadas e ondas de calor vem impactando diretamente a produtividade agrícola e a segurança alimentar.</p>
              <p>Esses fenômenos provocam desde perdas de safra até prejuízos logísticos, além de favorecerem o surgimento de pragas e doenças em regiões antes pouco afetadas. O estado do Rio Grande do Sul, por exemplo, enfrentou em 2024 uma das maiores enchentes de sua história, com consequências severas para a produção agropecuária.</p>
              <p>A adaptação a esse novo cenário exige investimentos em tecnologia, planejamento e políticas públicas. Zoneamentos agrícolas mais precisos, cultivares mais resistentes, irrigação inteligente e sistemas de alerta precoce são ferramentas essenciais para mitigar os riscos climáticos.</p>
              <p>Do ponto de vista ambiental, a agricultura pode e deve ser parte da solução. Práticas conservacionistas, sequestro de carbono no solo, integração lavoura-pecuária-floresta e uso de energias renováveis contribuem para reduzir a pegada de carbono da produção rural.</p>
              <p>O engenheiro agrícola ocupa um papel estratégico nesse processo, conectando ciência, tecnologia e práticas sustentáveis para garantir a resiliência do sistema agroalimentar. A mudança climática é global, mas as respostas precisam começar no campo.</p>
            </div>

            <div className="conteudo">
              <h2>CONAEAGRI 2025: O Encontro Que Une o Agro com Ciência</h2>
              <h3>A Universidade de Pelotas (UFPel) se prepara para o maior congresso estudantil da Engenharia Agrícola, Engenharia Agrícola e Ambiental e Engenharia de Biossistemas!</h3>
              <div className="imagem-container">
                <img src={imagem4} alt="CONEEAGRI 2025" />
                <img className="logo" src={logo_branco} alt="Logo FEEAGRI" />
              </div>
              <p>O XXXVII CONEEAGRI e o II ENPEAG se aproximam, prometendo reunir estudantes, professores, pesquisadores e profissionais de todo o país em uma experiência imersiva no universo da engenharia agrícola. O evento será realizado de 27 a 30 de outubro de 2025, no campus de Pelotas, na Universidade Federal de Pelotas (UFPel).</p>
              <p>A programação será pautada por debates sobre inovação, sustentabilidade, inclusão e o futuro das profissões no agro. Estão previstas palestras, minicursos, visitas técnicas, mostra científica, feira de estágios e painéis com especialistas renomados.</p>
              <p>O CONEEAGRI é também um espaço de fortalecimento do movimento estudantil, permitindo a articulação entre centros e diretórios acadêmicos, além da discussão de pautas importantes como currículo, políticas públicas e representatividade da engenharia agrícola nos diferentes espaços de decisão.</p>
              <p>A organização do evento tem buscado garantir estrutura acessível, alojamento solidário, alimentação a preços populares e uma experiência acolhedora para todos os participantes. As inscrições estão abertas e as vagas são limitadas, com descontos para grupos e possibilidade de submissão de trabalhos científicos.</p>
              <p>Mais do que um congresso técnico, o CONEEAGRI é um espaço de encontro, aprendizado, troca de vivências e fortalecimento da identidade da engenharia agrícola. Uma oportunidade única de fazer parte da história e contribuir com os rumos do agro brasileiro.</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
