import React from "react";
import "../../Styles/ContactosMinimal.css";

const ContactosMinimal = () => {
  return (
    <section className="contact-banner">
      <div className="contact-content">
        <h2>Vamos Conversar?</h2>
        <p>Fale connosco diretamente pelo WhatsApp.</p>

        <a
          href="https://wa.link/wykkhx"
          target="_blank"
          rel="noopener noreferrer"
          className="cta-whatsapp"
        >
          Falar no WhatsApp
        </a>
      </div>
    </section>
  );
};

export default ContactosMinimal;
