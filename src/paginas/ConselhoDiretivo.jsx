import React from "react";
import Header from "../componentes/Header";
import Footer from "../componentes/Footer";
import "../styles/auxiliar.scss";

export default function ConselhoDiretivo() {
  return (
    <div>
      <Header />
      <div className="auxiliar">
        <div className="container2">
          <h2>Participe das eleições para o Conselho Diretivo da FEEAGRI</h2>

          <p>
            A Federação Brasileira dos Estudantes de Engenharia Agrícola e
            Engenharia Agrícola e Ambiental (FEEAGRI) convida estudantes de
            Engenharia Agrícola, Engenharia Agrícola e Ambiental e Engenharia de
            Biossistemas a formarem chapas e concorrerem à eleição para o
            Conselho Diretivo da FEEAGRI no mandato de{" "}
            <strong>1º de janeiro de 2025 a 31 de dezembro de 2025</strong>.
          </p>

          <h3>📅 Datas importantes:</h3>
          <ul>
            <li>
              <strong>27 de novembro de 2025:</strong> Prazo final para
              inscrição das chapas.
            </li>
            <li>
              <strong>28 de novembro de 2025:</strong> Divulgação das
              candidaturas homologadas.
            </li>
            <li>
              <strong>5 de dezembro de 2025 - 19h:</strong> Realização da
              eleição (formato virtual).
            </li>
          </ul>

          <h3>📌 Quem pode se candidatar?</h3>
          <p>
            Podem se candidatar estudantes regularmente matriculados nos cursos
            de Engenharia Agrícola, Engenharia Agrícola e Ambiental ou
            Engenharia de Biossistemas, que estejam associados à{" "}
            <strong>ABEAG</strong> (Associação Brasileira de Engenharia
            Agrícola) em nível nacional ou regional e com a associação em dia.
          </p>

          <h3>📑 Documentos necessários:</h3>
          <p>
            Para homologar sua candidatura, a chapa deve enviar até o dia{" "}
            <strong>27 de novembro de 2025</strong> um e-mail para{" "}
            <strong>abeagnacional@gmail.com</strong> com os seguintes
            documentos:
          </p>
          <ul>
            <li>Documento de identidade de todos os candidatos;</li>
            <li>Atestados de matrícula atualizados;</li>
            <li>Declaração com os cargos que cada candidato ocupará;</li>
            <li>Comprovante de regularidade com a ABEAG;</li>
            <li>Proposta de candidatura da chapa (formato PDF).</li>
          </ul>
          <p>
            <em>Obs: Apenas um e-mail por chapa deve ser enviado.</em>
          </p>

          <h3>📢 Como será a votação?</h3>
          <p>
            A eleição ocorrerá de forma <strong>virtual</strong> no dia{" "}
            <strong>5 de dezembro de 2025, às 19h (horário de Brasília)</strong>
            . Apenas os delegados oficialmente reconhecidos poderão votar,
            mediante comprovação enviada para{" "}
            <strong>abeagnacional@gmail.com</strong> até o dia{" "}
            <strong>3 de dezembro de 2025</strong>.
          </p>

          <h3>📊 Apuração e resultado:</h3>
          <p>
            A apuração dos votos será realizada logo após o encerramento da
            eleição, em sessão virtual conduzida pela Comissão Eleitoral. Em
            caso de empate, o critério de desempate será o tempo de associação à
            ABEAG. Persistindo o empate, uma nova votação será convocada.
          </p>

          <p>
            📩 Para dúvidas ou mais informações, entre em contato pelo e-mail:{" "}
            <strong>abeagnacional@gmail.com</strong>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
