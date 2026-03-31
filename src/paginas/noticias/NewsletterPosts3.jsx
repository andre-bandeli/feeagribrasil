import React from "react";
import Header from "../../componentes/header/Header";
import Footer from "../../componentes/footer/Footer";
import "../../styles/auxiliar.scss";
import logo from '../../assets/logo_colored.png';
import imagem_iot from '../../assets/iot.png';
import arduino from '../../assets/arduino.png';
import sensor from '../../assets/sensor.png';
import rest from '../../assets/rest.png';

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
            
            <div className="edition-badge">Newsletter #3</div>
            
            <p className="introduction">
              Fique por dentro das transformações que estão moldando o futuro da 
              agricultura brasileira. Nesta edição, abordamos temas que unem tecnologia, 
              sustentabilidade e inovação: agricultura 4.0 e 5.0, big data, IoT e um exemplo prático do ecossistema completo de um projeto de IoT.
            </p>
          </header>

          {/* ÍNDICE ATUALIZADO */}
          <nav className="table-of-contents">
            <h3>Nesta Edição</h3>
            <ul>
              <li>
                <a href="#agri-4-5">
                  Agricultura 4.0 e 5.0: A Evolução da Conectividade no Campo
                </a>
              </li>
              <li>
                <a href="#iot-automation">
                  Estudo de Caso IoT: Automação de Irrigação em Tempo Real
                </a>
              </li>
            </ul>
          </nav>

          {/* DIVISOR */}
          <div className="section-divider" />

          {/* SEÇÃO: AGRICULTURA 4.0 e 5.0 */}
          <article id="agri-4-5" className="newsletter-article">
            <h2 className="article-title">
              Agricultura 4.0 e 5.0: A Evolução da Conectividade no Campo
            </h2>
            
            <h3 className="article-subtitle">
              Do Big Data à Personalização: Entendendo as Gerações da Agricultura Digital
            </h3>

            <p>
              A transformação digital no agronegócio brasileiro não é linear, mas evolutiva. 
              Compreender as diferenças entre Agricultura 4.0 e 5.0 é essencial para posicionar 
              corretamente investimentos tecnológicos e estratégias de inovação nas propriedades rurais.
            </p>

            <h4>Agricultura 4.0: A Era da Conectividade e do Big Data</h4>
            
            <p>
              A <strong>Agricultura 4.0</strong>, também conhecida como Agricultura Digital, 
              representa a consolidação da revolução tecnológica no campo. Seu alicerce está na 
              integração convergente de tecnologias habilitadoras:
            </p>

            <ul>
              <li>
                <strong>Internet das Coisas (IoT):</strong> Redes de sensores conectados que 
                monitoram continuamente parâmetros como umidade do solo, temperatura, pH, 
                condutividade elétrica, e presença de pragas. No Brasil, estima-se que existam 
                mais de 1 milhão de dispositivos IoT operando em fazendas.
              </li>
              <li>
                <strong>Inteligência Artificial e Machine Learning:</strong> Algoritmos que 
                processam dados históricos e em tempo real para predição de safras, detecção 
                precoce de doenças, otimização de rotas de pulverização, e recomendação de 
                manejo variável. Sistemas de visão computacional identificam estresse hídrico 
                antes que seja visível ao olho humano.
              </li>
              <li>
                <strong>Drones e Sensoriamento Remoto:</strong> Aeronaves não tripuladas equipadas 
                com câmeras multiespectrais e térmicas geram índices de vegetação (NDVI, NDRE) 
                para mapeamento de vigor vegetativo, contagem de plantas, e pulverização de precisão.
              </li>
              <li>
                <strong>Máquinas Autônomas:</strong> Tratores com piloto automático (RTK/GNSS), 
                colheitadeiras com sensores de produtividade integrados, e robôs para capina 
                seletiva reduzem custos operacionais e aumentam a janela de plantio.
              </li>
              <li>
                <strong>Plataformas de Big Data:</strong> Softwares de gestão agrícola (FMIS - 
                Farm Management Information Systems) centralizam dados de múltiplas fontes, 
                gerando dashboards com KPIs operacionais e financeiros em tempo real.
              </li>
            </ul>

            <p>
              <strong>Objetivo Central:</strong> Maximizar a eficiência técnica e econômica 
              através da aplicação precisa de insumos (fertilizantes, defensivos, água) apenas 
              onde e quando necessário, reduzindo desperdícios e impactos ambientais. O foco 
              é na <em>otimização orientada por dados</em>.
            </p>

            <p>
              <strong>Desafios no Brasil:</strong> Conectividade limitada em áreas rurais 
              (apenas 48% das propriedades têm acesso à internet de qualidade), custo inicial 
              elevado de tecnologias, necessidade de capacitação técnica, e integração com 
              sistemas legados ainda predominantemente analógicos.
            </p>

            <h4>Agricultura 5.0: Foco no Humano, Sustentabilidade e Resiliência</h4>
            
            <p>
              A <strong>Agricultura 5.0</strong> não substitui a 4.0, mas a transcende. Originada 
              no Japão como resposta aos desafios de envelhecimento populacional e escassez de mão 
              de obra, esta abordagem reconhece que tecnologia sem propósito humanístico é 
              insuficiente para a sustentabilidade de longo prazo.
            </p>

            <p>
              <strong>Pilares Fundamentais:</strong>
            </p>

            <ul>
              <li>
                <strong>Colaboração Homem-Máquina (Cobots):</strong> Robôs colaborativos que 
                auxiliam (não substituem) o trabalhador rural em tarefas repetitivas ou 
                fisicamente demandantes. Exoesqueletos para colheita, assistentes virtuais 
                com IA para diagnóstico de problemas, e interfaces intuitivas que reduzem a 
                curva de aprendizado tecnológico.
              </li>
              <li>
                <strong>Personalização em Escala:</strong> Enquanto a 4.0 personaliza o manejo 
                por talhão, a 5.0 leva isso ao nível de cada planta individual. Sistemas de 
                visão computacional em tempo real ajustam nutrição foliar ou aplicação de 
                defensivos planta por planta, respeitando variabilidade genética e microclimática.
              </li>
              <li>
                <strong>Sustentabilidade Holística:</strong> Integração de métricas ambientais 
                (pegada de carbono, biodiversidade, saúde do solo), sociais (bem-estar do 
                trabalhador, segurança alimentar da comunidade) e econômicas (rentabilidade 
                multigeracional). Blockchain para rastreabilidade e certificação de práticas 
                sustentáveis.
              </li>
              <li>
                <strong>Resiliência Climática:</strong> Modelos preditivos que integram dados 
                meteorológicos, genômicos e fenológicos para antecipar estresses abióticos 
                (seca, geada, calor extremo) e recomendar ajustes proativos. Sistemas de 
                irrigação que não apenas reagem à umidade atual, mas projetam necessidade 
                hídrica futura baseada em previsões climáticas.
              </li>
              <li>
                <strong>Economia Circular:</strong> Aproveitamento de resíduos orgânicos da 
                propriedade para biodigestão (geração de energia), compostagem automatizada, 
                e reintegração de nutrientes ao solo, fechando ciclos biogeoquímicos.
              </li>
            </ul>

            <p>
              <strong>Diferença Essencial:</strong> A Agricultura 4.0 pergunta "como produzir 
              mais com menos?", enquanto a 5.0 questiona "como produzir de forma regenerativa, 
              justa e adaptável?". A tecnologia deixa de ser fim e volta a ser meio para um 
              sistema agrícola verdadeiramente sustentável.
            </p>

            <div className="insight-box">
              <p>
                <strong>💡 Perspectiva Brasileira:</strong> O Brasil está simultaneamente 
                implementando ambas as gerações. Enquanto grandes produtores de grãos no 
                Centro-Oeste adotam soluções 4.0 em larga escala, iniciativas de agricultura 
                familiar no Sul e projetos de agrofloresta regenerativa já incorporam 
                princípios da 5.0, demonstrando que a transição não é cronológica, mas 
                contextual às realidades de cada sistema produtivo.
              </p>
            </div>

            <h4>Tecnologias Emergentes na Transição 4.0 → 5.0</h4>
            
            <ul>
              <li>
                <strong>Gêmeos Digitais (Digital Twins):</strong> Réplicas virtuais da fazenda 
                que simulam cenários futuros, testando estratégias de manejo antes da aplicação real.
              </li>
              <li>
                <strong>Edge Computing:</strong> Processamento de dados diretamente nos 
                dispositivos de campo, reduzindo latência e dependência de conectividade constante.
              </li>
              <li>
                <strong>Biossensores e Nanotecnologia:</strong> Sensores implantáveis em plantas 
                que monitoram estresse hídrico e nutricional em tempo real ao nível celular.
              </li>
              <li>
                <strong>Swarm Intelligence:</strong> Enxames de micro-drones ou robôs terrestres 
                que colaboram autonomamente em tarefas como polinização assistida ou monitoramento 
                distribuído.
              </li>
            </ul>

            <p>
              A evolução para a Agricultura 5.0 não exige abandono das tecnologias 4.0, mas 
              sua reorientação para objetivos mais amplos que produtividade isolada. É a 
              convergência entre eficiência tecnológica e sabedoria agronômica ancestral, 
              mediada por ética e responsabilidade intergeracional.
            </p>
          </article>

          {/* DIVISOR */}
          <div className="section-divider" />

          {/* ARTIGO PRINCIPAL (PROJETO PRÁTICO) */}
          <article id="iot-automation" className="newsletter-article">
            <h2 className="article-title">
              Estudo de Caso IoT: Automação de Irrigação em Tempo Real
            </h2>
            
            <h3 className="article-subtitle">
              Como funciona um projeto simples de IoT, desde a concepção do problema, 
              escolha dos sensores, desenvolvimento do código e aplicação.
            </h3>

            <div className="article-image">
              <img 
                src={imagem_iot} 
                alt="Sistema IoT com sensor de umidade e relé atuador para automação de irrigação" 
              />
            </div>

            <p>
              A Engenharia Agrícola há tempos vem incorporando o uso da Internet das Coisas (IoT) em seus processos agroindustriais, 
              transformando a gestão e a tomada de decisão com base em dados coletados em tempo real. Apresentamos, aqui, um exemplo de 
              arquitetura completa de um sistema de automação simplificado que utiliza dados de umidade 
              do solo (em tempo real) para tomar a decisão de <strong>LIGAR</strong> ou{" "}
              <strong>DESLIGAR</strong> a irrigação, fechando o ciclo de controle de forma 
              autônoma, abordando desde a escolha dos sensores até a implementação da camada web.
            </p>

            <h4>1. Camada de Campo: Captura e Calibração</h4>
            <p>
              O processo começa no campo com a seleção dos parâmetros de medição. Para este 
              estudo de caso, focamos no monitoramento da umidade do solo, um dos indicadores 
              mais críticos para a gestão hídrica agrícola.
            </p>

            <p>
              <strong>Sensores mais utilizados na agricultura brasileira:</strong>
            </p>

            <ul>
              <li>
                <strong>Sensores Capacitivos:</strong> Medem a constante dielétrica do solo, 
                sendo mais resistentes à corrosão que sensores resistivos. São amplamente 
                adotados em culturas como café, soja e citros devido à sua durabilidade e 
                menor necessidade de manutenção.
              </li>
              <li>
                <strong>Sensores TDR (Time Domain Reflectometry):</strong> Utilizam a 
                reflexão de ondas eletromagnéticas para determinar o conteúdo volumétrico 
                de água. Comuns em pesquisas e sistemas de irrigação de precisão em 
                culturas de alto valor agregado.
              </li>
              <li>
                <strong>Sensores FDR (Frequency Domain Reflectometry):</strong> Avaliam 
                a frequência de ressonância do solo, oferecendo boa relação custo-benefício 
                e precisão adequada para agricultura de larga escala.
              </li>
              <li>
                <strong>Tensiômetros:</strong> Medem a tensão de água no solo (potencial 
                matricial), sendo tradicionais na agricultura brasileira, especialmente 
                em culturas irrigadas como cana-de-açúcar e hortaliças.
              </li>
            </ul>

            <p>
              <strong>Implementação com Arduino UNO e Sensor Capacitivo:</strong> Utilizando um microcontrolador 
              Arduino UNO integrado a um sensor capacitivo de umidade do solo, o sistema 
              realiza a leitura do sinal analógico bruto (valor ADC entre 0-1023). O código 
              embarcado em C++ executa a rotina de calibração, convertendo o valor elétrico 
              em porcentagem volumétrica de umidade do solo (0-100%). Esta calibração deve 
              ser realizada considerando as características específicas do solo local 
              (textura, densidade, salinidade) para garantir a acurácia agronômica dos 
              dados transmitidos para a camada de processamento em nuvem.
            </p>

            <div className="article-image">
              <img 
                src={arduino} 
                alt="Sistema IoT com sensor de umidade e relé atuador para automação de irrigação" 
              />
            </div>

            <h4>2. Camada de Conectividade: O Elo com a Nuvem</h4>

            <p>
              A transmissão de dados do campo para a nuvem representa um dos principais 
              desafios da IoT agrícola no Brasil, onde a infraestrutura de conectividade 
              rural ainda é limitada em muitas regiões.
            </p>

            <p>
              <strong>Arquitetura de Conectividade:</strong> O Arduino UNO, sendo um 
              microcontrolador sem recursos nativos de rede, utiliza o módulo ESP8266 
              como coprocessador de comunicação wireless. A integração ocorre através 
              de comunicação serial UART (Universal Asynchronous Receiver-Transmitter), 
              tipicamente configurada a 9600 ou 115200 baud, onde o Arduino transmite 
              os dados processados de umidade para o ESP8266.
            </p>

            <p>
              <strong>Protocolo de Transmissão:</strong> O ESP8266 atua como cliente HTTP, 
              encapsulando os dados do sensor em requisições HTTP GET ou POST (mais 
              recomendado para dados sensíveis) e transmitindo via rede Wi-Fi 2.4GHz. 
              Para ambientes de produção, protocolos mais eficientes são preferíveis:
            </p>

            <ul>
              <li>
                <strong>MQTT (Message Queuing Telemetry Transport):</strong> Protocolo 
                leve, ideal para IoT, com menor consumo de energia e largura de banda. 
                Amplamente adotado em sistemas de irrigação automatizada no Brasil.
              </li>
              <li>
                <strong>CoAP (Constrained Application Protocol):</strong> Projetado para 
                dispositivos com recursos limitados, oferece comunicação eficiente em 
                redes instáveis.
              </li>
              <li>
                <strong>LoRaWAN:</strong> Para propriedades rurais sem cobertura Wi-Fi 
                ou celular, permite transmissão de longo alcance (até 15km em campo aberto) 
                com baixíssimo consumo energético, possibilitando operação com baterias 
                ou painéis solares.
              </li>
            </ul>

            <p>
              <strong>Considerações práticas para agricultura brasileira:</strong> A escolha 
              da tecnologia de conectividade deve considerar: distância da área cultivada 
              até o ponto de acesso, disponibilidade de energia elétrica, custo de dados 
              móveis (quando aplicável), e a necessidade de transmissão em tempo real versus 
              leituras periódicas. Em regiões com baixa cobertura celular, soluções híbridas 
              combinando armazenamento local e transmissão intermitente são comuns.
            </p>

            <p>
              <strong>Segurança e confiabilidade:</strong> Implementações profissionais 
              devem incluir autenticação (tokens, certificados TLS/SSL), tratamento de 
              falhas de conexão com buffer local, e confirmação de recebimento (ACK) para 
              garantir integridade dos dados transmitidos.
            </p>

            <div className="article-image">
              <img 
                src={sensor} 
                alt="Sistema IoT com sensor de umidade e relé atuador para automação de irrigação" 
              />
            </div>

          <h4>3. Camada de Nuvem (Back-end Django): O Cérebro da Decisão</h4>

          <p>
            O servidor backend representa o núcleo inteligente do sistema, onde ocorrem 
            o processamento, armazenamento e análise dos dados agronômicos. O framework 
            Django (Python) implementa uma arquitetura MTV (Model-Template-View), 
            variação do padrão MVC adaptada para desenvolvimento web.
          </p>

          <p>
            <strong>Arquitetura do Sistema:</strong>
          </p>

          <ul>
            <li>
              <strong>Views.py (Camada de Controle e API REST):</strong> Define endpoints 
              RESTful que recebem as requisições HTTP/HTTPS dos dispositivos de campo. 
              Implementa validação de dados (verificação de formato, range de valores, 
              autenticação de dispositivos), tratamento de exceções e serialização JSON. 
              Para sistemas agrícolas, é crítico validar timestamps para detectar falhas 
              de sincronização e implementar rate limiting para prevenir sobrecarga do 
              servidor durante transmissões massivas.
            </li>
            <li>
              <strong>Models.py (Camada de Dados e ORM):</strong> Define os modelos de 
              dados que representam leituras de sensores, dispositivos, áreas de cultivo 
              e configurações de irrigação. O Django ORM (Object-Relational Mapping) 
              abstrai as operações de banco de dados, permitindo queries eficientes. 
              Para agricultura de precisão, o modelo deve armazenar: timestamp, valor de 
              umidade, ID do sensor, coordenadas geográficas, temperatura do solo (quando 
              disponível) e metadados de calibração. A escolha do banco de dados 
              (PostgreSQL com extensão PostGIS para dados geoespaciais, ou TimescaleDB 
              para séries temporais) impacta diretamente a performance de consultas 
              históricas.
            </li>
            <li>
              <strong>Templates/Dashboard (Camada de Apresentação):</strong> Interface 
              web responsiva que consome a API via JavaScript (fetch/axios) e renderiza 
              visualizações interativas usando bibliotecas como Chart.js, Plotly ou D3.js. 
              O dashboard deve exibir: séries temporais de umidade, mapas de calor da 
              propriedade, alertas em tempo real, previsões baseadas em tendências, e 
              histórico de acionamentos de irrigação. Para propriedades com múltiplos 
              sensores, a agregação espacial e temporal é essencial.
            </li>
          </ul>

          <p>
            <strong>Motor de Decisão Agronômica:</strong> O sistema implementa lógica de 
            negócio que transcende simples comparações de threshold:
          </p>

          <ul>
            <li>
              <strong>Análise de Limiares Dinâmicos:</strong> Em vez de um valor fixo, 
              o sistema considera múltiplos fatores: estágio fenológico da cultura 
              (germinação requer mais umidade que maturação), tipo de solo (argiloso 
              retém mais água que arenoso), evapotranspiração estimada (ETo), e 
              previsão meteorológica integrada via APIs externas.
            </li>
            <li>
              <strong>Algoritmos de Suporte à Decisão:</strong> Implementação de modelos 
              como balanço hídrico do solo, cálculo de déficit hídrico, e detecção de 
              anomalias (falhas de sensor, outliers). Para casos avançados, integração 
              com machine learning para predição de necessidade hídrica baseada em 
              histórico e padrões climáticos.
            </li>
            <li>
              <strong>Geração de Comandos de Atuação:</strong> Quando as condições 
              atingem os critérios estabelecidos, o sistema gera comandos de ação: 
              acionamento de válvulas solenoides, ajuste de vazão de irrigação, ou 
              notificações para o operador via webhook, e-mail ou SMS. O sistema mantém 
              registro (log) de todas as decisões e ações para auditoria e otimização.
            </li>
          </ul>

          <p>
            <strong>Escalabilidade e Performance:</strong> Para fazendas com centenas 
            de sensores, a arquitetura deve utilizar: filas de mensagens assíncronas 
            (Celery + Redis/RabbitMQ) para processar dados sem bloquear requisições, 
            caching (Redis/Memcached) para reduzir carga no banco de dados, e 
            containerização (Docker/Kubernetes) para facilitar deploy e escalonamento 
            horizontal. A implementação de índices adequados no banco de dados e 
            estratégias de particionamento de dados históricos são essenciais para 
            manter consultas rápidas mesmo com milhões de registros.
          </p>

          <p>
            <strong>Integração com Sistemas Legados:</strong> Na agricultura brasileira, 
            é comum a necessidade de integração com sistemas ERP agrícolas, plataformas 
            de gestão de fazenda, ou exportação de dados para softwares de análise 
            agronômica especializados. A API deve fornecer endpoints de exportação em 
            formatos padrão (CSV, GeoJSON, Shapefile).
          </p>

                      <div className="article-image">
              <img 
                src={rest} 
                alt="Sistema IoT com rest de umidade e relé atuador para automação de irrigação" 
              />
            </div>

        <h4>4. Camada de Atuação: Fechando o Ciclo de Controle</h4>

        <p>
          A verdadeira transformação digital na agricultura ocorre quando dados se 
          convertem em ações físicas automáticas. Esta camada implementa o controle 
          de malha fechada (closed-loop control), onde o sistema não apenas monitora, 
          mas ativamente intervém no ambiente de cultivo.
        </p>

        <p>
          <strong>Arquitetura de Comando e Controle:</strong>
        </p>

        <ul>
          <li>
            <strong>Protocolo de Comunicação Bidirecional:</strong> O servidor Django 
            envia comandos de atuação através de diferentes estratégias: polling 
            (o dispositivo consulta periodicamente o servidor por novos comandos), 
            push via MQTT (o servidor publica comandos em tópicos que os dispositivos 
            assinam), ou webhooks (o servidor notifica endpoints dos dispositivos). 
            MQTT é amplamente preferido em IoT agrícola pela eficiência, suporte a 
            QoS (Quality of Service) e capacidade de operar em redes intermitentes.
          </li>
          <li>
            <strong>Processamento Local do Comando:</strong> O microcontrolador 
            (Arduino/ESP8266 ou ESP32) recebe o comando, realiza validações de 
            segurança (verificação de autenticidade, timestamp para evitar comandos 
            defasados), e interpreta a instrução. Comandos típicos incluem não apenas 
            binários (LIGAR/DESLIGAR), mas também modulados: tempo de acionamento 
            (irrigar por X minutos), intensidade (ajuste de vazão), e condições 
            (irrigar SE umidade &lt; Y%).
          </li>
          <li>
            <strong>Interface de Potência - Módulo Relé:</strong> O relé eletromecânico 
            ou de estado sólido (SSR) atua como interruptor controlado digitalmente, 
            fornecendo isolamento galvânico essencial entre o circuito de baixa tensão 
            (5V DC do microcontrolador) e o circuito de potência (110V/220V AC ou 24V DC 
            em sistemas industriais). Para aplicações agrícolas, relés devem suportar: 
            correntes de partida elevadas de motobombas (inrush current pode ser 6-8x 
            a corrente nominal), operação em ambientes com alta umidade e temperatura, 
            e vida útil adequada para ciclos frequentes.
          </li>
        </ul>

        <p>
          <strong>Dispositivos de Atuação na Agricultura Brasileira:</strong>
        </p>

        <ul>
          <li>
            <strong>Válvulas Solenoides:</strong> Mais comuns em sistemas de irrigação 
            localizada (gotejamento, microaspersão). Operam tipicamente em 24V AC/DC, 
            com tempos de resposta rápidos (milissegundos). Ideais para controle 
            setorizado, permitindo irrigação diferenciada por talhão conforme 
            necessidade específica.
          </li>
          <li>
            <strong>Motobombas:</strong> Para sistemas de irrigação por aspersão ou 
            pivô central. Requerem contatores ou soft-starters para proteção do motor 
            e redução do pico de corrente na partida. O acionamento direto via relé 
            é adequado apenas para bombas de pequena potência (&lt;1 CV).
          </li>
          <li>
            <strong>Inversores de Frequência:</strong> Em sistemas avançados, permitem 
            controle de vazão variável ajustando a rotação da bomba, otimizando consumo 
            energético. A comunicação pode ocorrer via Modbus RTU/TCP.
          </li>
          <li>
            <strong>Atuadores Lineares:</strong> Utilizados em estufas automatizadas 
            para abertura/fechamento de janelas, cortinas térmicas, ou ajuste de 
            sombreamento conforme condições ambientais.
          </li>
        </ul>

        <p>
          <strong>Lógica de Segurança e Redundância:</strong> Sistemas profissionais 
          implementam múltiplas camadas de proteção:
        </p>

        <ul>
          <li>
            <strong>Watchdog Timer:</strong> Reinicia o microcontrolador se o firmware 
            travar, evitando irrigação contínua por falha de software.
          </li>
          <li>
            <strong>Timeout de Acionamento:</strong> Limite máximo de operação contínua 
            (ex: desligar automaticamente após 2 horas), prevenindo desperdício por 
            falha de comando de desligamento.
          </li>
          <li>
            <strong>Modo Fail-Safe:</strong> Comportamento padrão em caso de perda de 
            comunicação. Para irrigação, geralmente é desligar; para climatização de 
            estufas, pode ser manter estado atual.
          </li>
          <li>
            <strong>Sensores de Fluxo e Pressão:</strong> Monitoram se a irrigação está 
            efetivamente ocorrendo, detectando problemas como tubulações entupidas, 
            vazamentos ou bombas danificadas.
          </li>
          <li>
            <strong>Confirmação de Execução:</strong> O dispositivo reporta de volta ao 
            servidor o status de execução do comando (sucesso, falha, em progresso), 
            criando rastreabilidade completa.
          </li>
        </ul>

        <p>
          <strong>Otimização de Recursos:</strong> A automação inteligente resulta em 
          economias mensuráveis: redução de 30-50% no consumo de água comparado à 
          irrigação por tempo fixo, economia de energia operando bombas apenas quando 
          necessário e em horários de tarifa reduzida (quando integrado com dados da 
          concessionária), e redução de mão de obra para manobras manuais. Além disso, 
          a precisão na aplicação de água melhora a produtividade das culturas, reduz 
          lixiviação de nutrientes e doenças relacionadas ao excesso hídrico.
        </p>

        <p>
          <strong>Conformidade e Normas:</strong> Instalações elétricas em ambientes 
          agrícolas devem seguir a NBR 5410 (instalações elétricas de baixa tensão) 
          e NBR 5419 (proteção contra descargas atmosféricas). Sistemas com grau de 
          proteção IP adequado (IP65 ou superior) são essenciais para operação em 
          campo aberto.
        </p>

            {/* INFO BOX - OPCIONAL */}
            <div className="info-box">
              <p>
                💡 <strong>Dica Técnica:</strong> A implementação de sistemas IoT na agricultura 
                pode reduzir o consumo de água em até 40% e aumentar a produtividade em 25%, 
                segundo estudos recentes do setor.
              </p>
            </div>

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