// InscricaoCurso.jsx
import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import '../../Styles/Inscrito.css'

const cursosDisponiveis = [
  { slug: "curso-de-programacao-front-end", nome: "Curso de Programação Front-End" },
  { slug: "curso-de-marketing-digital", nome: "Curso de Marketing Digital" },
  { slug: "curso-de-design-uiux", nome: "Curso de Design UI/UX" },
];

const ServicosInscrincao = () => {
  const { slug } = useParams();
  const [cursoSelecionado, setCursoSelecionado] = useState("");
  const [formData, setFormData] = useState({
    nome: "",
    email: "",
    telefone: "",
    idade: "",
    comentario: "",
  });

  useEffect(() => {
    const curso = cursosDisponiveis.find(c => c.slug === slug);
    if (curso) {
      setCursoSelecionado(curso.nome);
    }
  }, [slug]);

  const handleChange = (e) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Dados do formulário:", { curso: cursoSelecionado, ...formData });
    // Aqui você pode enviar para o backend via fetch/axios
    alert("Inscrição enviada com sucesso!");
    // reset do formulário (opcional)
    setFormData({ nome: "", email: "", telefone: "", idade: "", comentario: "" });
  };

  return (
    <div className="inscricao-container">
     <form onSubmit={handleSubmit} className="inscricao-form">
  <h2>Inscrição para o curso: {cursoSelecionado}</h2>

  <label>
    Nome completo:
    <input type="text" name="nome" value={formData.nome} onChange={handleChange} required />
  </label>

  <label>
    Email:
    <input type="email" name="email" value={formData.email} onChange={handleChange} required />
  </label>

  <label>
    Telefone:
    <input type="tel" name="telefone" value={formData.telefone} onChange={handleChange} required />
  </label>

  <label>
    Curso:
    <select value={cursoSelecionado} disabled>
      <option>{cursoSelecionado}</option>
    </select>
  </label>

  <label>
    Upload de arquivos (PDF):
    <input type="file" name="arquivo" accept=".pdf" onChange={handleChange} />
  </label>

  <label>
    Data de início:
    <input type="date" name="dataInicio" value={formData.dataInicio} onChange={handleChange} required />
  </label>

  <label>
    Data de fim:
    <input type="date" name="dataFim" value={formData.dataFim} onChange={handleChange} required />
  </label>

  <label>
    Dias da semana:
    <select name="dias" value={formData.dias} onChange={handleChange}>
      <option value="seg_qua_sex">Segunda, Quarta, Sexta</option>
      <option value="ter_qui_sab">Terça, Quinta, Sábado</option>
      <option value="sab_dom">Sábado, Domingo</option>
      <option value="online">Aula On-line</option>
    </select>
  </label>

  <label>
    Nível acadêmico:
    <select name="nivel" value={formData.nivel} onChange={handleChange}>
      <option value="universitario">Universitário</option>
      <option value="tecnico">Técnico Médio</option>
      <option value="outro">Outro</option>
    </select>
  </label>

  <label>
    Experiência prévia:
    <div className="radio-group">
      <label>
        <input type="radio" name="experiencia" value="zero" onChange={handleChange} checked={formData.experiencia === "zero"} />
        Começando do zero
      </label>
      <label>
        <input type="radio" name="experiencia" value="conhecimento" onChange={handleChange} checked={formData.experiencia === "conhecimento"} />
        Já possui conhecimento
      </label>
    </div>
  </label>

  <label>
    Endereço para aula ao domicílio:
    <input type="text" name="endereco" value={formData.endereco} onChange={handleChange} required />
  </label>

  <label>
    Horário preferido:
    <input type="text" name="horario" value={formData.horario} onChange={handleChange} />
  </label>

  <label>
    Comentário adicional:
    <textarea name="comentario" value={formData.comentario} onChange={handleChange}></textarea>
  </label>

  <button type="submit" className="btn primary">Enviar Inscrição</button>
</form>

    </div>
  );
};

export default ServicosInscrincao;
