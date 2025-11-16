import React from "react";
import { Users, Lightbulb, Monitor } from "lucide-react";

const DetalhesHome = () => {
  const about = [
    {
      icon: <Users size={40} />,
      title: "Quem somos nós?",
      text: "A Zenith Digital é uma empresa especializada em Marketing Digital e Formação Profissional, dedicada a transformar pessoas e negócios através da tecnologia."
    },
    {
      icon: <Lightbulb size={40} />,
      title: "Nossa Filosofia",
      text: "Acreditamos no poder da inovação, estratégia e conhecimento. Trabalhamos com transparência e foco em resultados reais para nossos clientes e estudantes."
    },
    {
      icon: <Monitor size={40} />,
      title: "Como trabalhamos?",
      text: "Unimos criatividade, análise de dados e tecnologias atualizadas para oferecer soluções modernas e processos eficientes em marketing e formação."
    }
  ];

  return (
    <section className="container">
      <h2 className="titulo">A Casa do Futuro Digital</h2>
      <p className="subtitulo">conheça os nossos métodos</p>

      <div className="cards-wrapper">
        {about.map((item, index) => (
          <div key={index} className="card">
            <div className="icon">{item.icon}</div>
            <h3>{item.title}</h3>
            <p>{item.text}</p>
          </div>
        ))}
      </div>

      {/* <div className="btn-wrapper">
        <button className="btn-saber-mais">
          Saber mais sobre nós
        </button>
      </div> */}
    </section>
  );
};

export default DetalhesHome;
