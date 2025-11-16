import React from "react";
import { useParams, Link } from "react-router-dom";
import { servicos } from "../../assets/assets";
import * as Icons from "lucide-react";
import '../../Styles/ServiceDetail.css'

const ServicosDetalhes = () => {
    const { slug } = useParams();
    const service = servicos.find((s) => s.slug === slug);

    if (!service) {
        return (
            <div className="detail-wrapper">
                <h2>Serviço não encontrado</h2>
                <Link to="/" className="back-button">Voltar ao início</Link>
            </div>
        );
    }

    const Icon = Icons[service.icon];

    return (
        <section className="detail-wrapper">
            <div className="detail-header">
                <div className="icon-circle">
                    <Icon size={40} />
                </div>

                <h1>{service.title}</h1>
                <span className="tag">{service.tag}</span>

                <p className="short-desc">{service.short}</p>
            </div>

            {/* Destaques */}
            <div className="detail-section">
                <h2>Principais Destaques</h2>
                <ul className="detail-list">
                    {service.highlights.map((h, i) => (
                        <li key={i}>{h}</li>
                    ))}
                </ul>
            </div>

            {/* Como Funciona */}
            <div className="detail-section">
                <h2>Como Funciona</h2>
                <p>
                    Nós analisamos sua necessidade, construímos uma estratégia personalizada
                    e entregamos soluções focadas em resultados. Trabalhamos com metodologia
                    moderna, comunicação clara e total transparência em cada etapa do projeto.
                </p>
            </div>

            {/* O que você recebe */}
            <div className="detail-section">
                <h2>O que você recebe</h2>
                <ul className="detail-list">
                    <li>Atendimento personalizado</li>
                    <li>Acompanhamento contínuo</li>
                    <li>Suporte pós-entrega</li>
                    <li>Relatórios de desempenho (quando aplicável)</li>
                </ul>
            </div>

            {/* Preços */}
            <div className="detail-section">
                <h2>Planos & Preços</h2>

                <p className="price-start">
                    Preço base: <strong>{service.price}</strong>
                </p>

                <div className="plans-grid">
                    {service.plans.map((p, i) => (
                        <div className="plan-card" key={i}>
                            <h3>{p.nome}</h3>
                            <p className="plan-price">{p.preco}</p>
                            <p className="plan-desc">{p.descricao}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="cta-box">
                <h3>Gostou deste serviço?</h3>
                <p>Fale conosco agora mesmo e receba uma proposta personalizada.</p>

                <a
                    href="https://wa.link/wykkhx"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-button"
                >
                    Solicitar Proposta
                </a>
            </div>

            <Link to="/#servicos" className="back-button">
                ← Voltar aos serviços
            </Link>
        </section>
    );
};

export default ServicosDetalhes