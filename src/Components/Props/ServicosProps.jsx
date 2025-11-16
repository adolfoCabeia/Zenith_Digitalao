// ServicosZenith.jsx
import React, { useEffect, useRef, useState } from "react";
import "../../Styles/Servicos-zenith.css";
import * as Icons from "lucide-react";
import { useNavigate } from "react-router-dom";

const ServicosZenith = ({
    data = [],
    title = "Serviços & Portfólio",
    subtitle = "Marketing Digital, Formação Profissional e Soluções Tecnológicas pensadas para resultados.",
    filters = ["all", "Marketing", "Formação", "Tecnologia"],
    showFilters = true,
    btnVer = "Ver serviço",
    btnProposta = "Solicitar proposta",
}) => {
    const [filter, setFilter] = useState("all");
    const containerRef = useRef(null);
    const navigate = useNavigate()

    useEffect(() => {
        const node = containerRef.current;
        if (!node) return;
        const items = node.querySelectorAll(".reveal");

        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((e) => {
                    if (e.isIntersecting) {
                        e.target.classList.add("is-visible");
                        observer.unobserve(e.target);
                    }
                });
            },
            { threshold: 0.12 }
        );

        items.forEach((el) => observer.observe(el));
        return () => observer.disconnect();
    }, []);

    const filteredServices =
        filter === "all" ? data : data.filter((s) => s.tag === filter);

    return (
        <section
            className="zenith-section container"
            aria-labelledby="zenith-servicos-title"
            ref={containerRef}
        >
            <div className="zenith-hero reveal">
                <div className="headline">
                    <h2 id="zenith-servicos-title">{title}</h2>
                    <p className="lead">{subtitle}</p>
                </div>

                {showFilters && (
                    <div className="filters" role="tablist" aria-label="Filtrar serviços">
                        {filters.map((f) => (
                            <button
                                key={f}
                                className={`chip ${filter === f ? "active" : ""}`}
                                onClick={() => setFilter(f)}
                            >
                                {f === "all" ? "Todos" : f}
                            </button>
                        ))}
                    </div>
                )}
            </div>

            <div className="grid-wrapper">
                <div className="services-grid reveal" aria-live="polite">
                    {filteredServices.map((s) => {
                        const IconComponent = Icons[s.icon];

                        return (
                            <article
                                key={s.id}
                                className="card service-card"
                                aria-labelledby={`s-${s.id}-title`}
                            >
                                <div className="icon-wrap" aria-hidden>
                                    <div className="icon-aura" />
                                    <div className="icon">
                                        <IconComponent size={36} />
                                    </div>
                                </div>

                                <div className="card-body">
                                    <span className="tag">{s.tag}</span>
                                    <h3 id={`s-${s.id}-title`}>{s.title}</h3>
                                    <p className="muted">{s.short}</p>

                                    <ul className="highlights" aria-hidden>
                                        {s.highlights.map((h, i) => (
                                            <li key={i}>{h}</li>
                                        ))}
                                    </ul>

                                    <div className="card-actions">
                                        <button className="btn ghost" onClick={() => navigate(`/servicos/detalhes/${s.slug}`)}>{btnVer}</button>

                                        <button
                                            className="btn primary"
                                            onClick={() => {
                                                if (s.tag === "Formação") {
                                                    navigate(`/servicos/inscricao/${s.slug}`);
                                                } else {
                                                    window.open("https://wa.link/wykkhx", "_blank");
                                                }
                                            }}
                                        >
                                            {s.tag === "Formação" ? "Inscrever-se" : "Solicitar proposta"}
                                        </button>
                                    </div>
                                </div>
                            </article>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default ServicosZenith;
