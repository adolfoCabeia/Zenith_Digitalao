import React from "react";
import "../../Styles/NewsletterMinimal.css";

const NewsletterMinimal = () => {
  return (
    <section className="newsletter-fw">
      <div className="content">
        <h2>Fique por Dentro</h2>
        <p>Receba novidades sobre tecnologia, marketing e nossos cursos.</p>

        <form className="newsletter-form-fw">
          <input
            type="email"
            placeholder="Seu melhor e-mail"
            required
          />

          <button type="submit">
            Inscrever-se
          </button>
        </form>
      </div>
    </section>
  );
};

export default NewsletterMinimal;
