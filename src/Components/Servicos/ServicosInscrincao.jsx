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
        dataInicio: "",
        dataFim: "",
        horaInicio: "",
        horaFim: "",
        dias: "",
        nivel: "",
        experiencia: "",
        endereco: "",
        arquivo: null,
    });

    useEffect(() => {
        const curso = cursosDisponiveis.find(c => c.slug === slug);
        if (curso) {
            setCursoSelecionado(curso.nome);
        }
    }, [slug]);

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log("Dados do formulário:", { curso: cursoSelecionado, ...formData });
        alert("Inscrição enviada com sucesso!");
        setFormData({
            nome: "",
            email: "",
            telefone: "",
            idade: "",
            comentario: "",
            dataInicio: "",
            dataFim: "",
            horaInicio: "",
            horaFim: "",
            dias: "",
            nivel: "",
            experiencia: "",
            endereco: "",
            arquivo: null,
        });
    };

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        if (name === "arquivo") {
            setFormData(prev => ({ ...prev, arquivo: files[0] }));
            return;
        }

        if (name === "dataInicio") {
            const inicio = new Date(value);
            const fim = new Date(inicio);
            fim.setMonth(fim.getMonth() + 3); 
            setFormData(prev => ({
                ...prev,
                dataInicio: value,
                dataFim: fim.toISOString().split("T")[0],
            }));
            return;
        }

        // Atualiza hora e calcula horaFim
        if (name === "horaInicio") {
            const [h, m] = value.split(":").map(Number);
            if (h < 8 || h > 16) {
                alert("Hora de início deve ser entre 08:00 e 16:00");
                return;
            }
            const horaFim = new Date();
            horaFim.setHours(h + 2, m); 
            const horaFimStr = horaFim.toTimeString().slice(0, 5);
            setFormData(prev => ({
                ...prev,
                horaInicio: value,
                horaFim: horaFimStr,
            }));
            return;
        }
        setFormData(prev => ({ ...prev, [name]: value }));
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
                    <input
                        type="date"
                        name="dataInicio"
                        value={formData.dataInicio}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Data de fim:
                    <input
                        type="date"
                        name="dataFim"
                        value={formData.dataFim}
                        disabled
                        required
                    />
                </label>

                <label>
                    Hora de início:
                    <input
                        type="time"
                        name="horaInicio"
                        value={formData.horaInicio}
                        onChange={handleChange}
                        required
                    />
                </label>

                <label>
                    Hora de fim:
                    <input
                        type="time"
                        name="horaFim"
                        value={formData.horaFim}
                        disabled
                        required
                    />
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
                    Comentário adicional:
                    <textarea name="comentario" value={formData.comentario} onChange={handleChange}></textarea>
                </label>

                <button type="submit" className="btn primary">Enviar Inscrição</button>
            </form>

        </div>
    );
};

export default ServicosInscrincao;
