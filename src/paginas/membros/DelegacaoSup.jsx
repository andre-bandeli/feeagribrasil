import React from "react";
import Header from "../../componentes/header/Header";
import Footer from "../../componentes/footer/Footer";
import "../../styles/auxiliar.scss";

export default function DelegacaoSup() {
  return (
    <div>
      <Header />
      <div className="auxiliar">
        <div className="container2">
          <h2>Torne-se delegado da FEEAGRI</h2>
          <p>
            A Federação Brasileira dos Estudantes de Engenharia Agrícola e
            Engenharia Agrícola e Ambiental (FEEAGRI) convida estudantes de
            Engenharia Agrícola, Engenharia Agrícola e Ambiental e Engenharia de
            Biossistemas a se tornarem delegados representantes de suas
            instituições de ensino superior.
          </p>
          <p>
            Os delegados desempenham um papel essencial na construção e
            fortalecimento da FEEAGRI, promovendo a integração entre estudantes
            e contribuindo para a disseminação de conhecimentos e oportunidades
            na área.
          </p>
          <p>
            Podem se candidatar estudantes regularmente matriculados, que tenham
            um bom relacionamento com a comunidade acadêmica e interesse em
            representar sua instituição dentro da federação.
          </p>
          <p>
            As indicações devem ser feitas até{" "}
            <strong>25 de abril de 2025</strong> através do formulário
            disponível no link:{" "}
            <a
              href="https://forms.gle/Uah9bc4MpbCrfZqd6"
              target="_blank"
              rel="noopener noreferrer"
            >
              Clique aqui para se inscrever
            </a>
            .
          </p>
          <p>
            Os delegados selecionados serão anunciados no dia{" "}
            <strong>28 de abril de 2025</strong> pelas redes sociais da FEEAGRI.
          </p>
          <p>
            Para mais informações, entre em contato pelo e-mail:{" "}
            <strong>feeagri.brasil@gmail.com</strong>
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
