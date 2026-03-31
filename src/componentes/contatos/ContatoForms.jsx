import React, { useState } from "react";
import "./ContatoForm.scss";

const ContatoForms = () => {
  const [formData, setFormData] = useState({
    email: "",
    telefone: "",
    mensagem: "",
  });
  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await fetch(
        "https://apifeeagri-production.up.railway.app/newsletter/subscribe/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const data = await response.json();

      if (response.ok) {
        setStatus({ type: "success", message: data.message });
        setFormData({ email: "", telefone: "", mensagem: "" });
        setTimeout(() => setStatus({ type: "", message: "" }), 3000);
      } else {
        setStatus({ type: "error", message: data.message || "Erro ao enviar" });
      }
    } catch (error) {
      setStatus({ type: "error", message: "Erro de conexão" });
    }
  };

  return (
    <div className="contato-section">
      <h2>Entre em Contato</h2>
      <p className="desktop">
        Tem alguma dúvida, sugestão ou gostaria de saber mais sobre nossas
        atividades?
      </p>
      <p className="mobile">
        Tem alguma dúvida, sugestão ou gostaria de saber mais sobre nossas
        atividades?...
      </p>

      <div className="contato-content">
        <div className="contato-form">
          <h3>Envie uma mensagem</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="telefone">Telefone</label>
              <input
                type="tel"
                id="telefone"
                name="telefone"
                value={formData.telefone}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="mensagem">Mensagem</label>
              <textarea
                id="mensagem"
                name="mensagem"
                rows="5"
                value={formData.mensagem}
                onChange={handleChange}
                required
              ></textarea>
            </div>

            <button type="submit" className="button_primary">
              Enviar
            </button>
          </form>

          {status && (
            <div className={`status-message ${status.type}`}>
              {status.message}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ContatoForms;