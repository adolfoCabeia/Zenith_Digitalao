import React from "react";
import { ArrowRight,ArrowDown,ChevronDown } from "lucide-react";
import { assets } from "../../assets/assets";


const Hero = () => {
    return (
        <section className="hero">
            <section className="container">
                <div className="txt">
                    <h4>CRIAMOS, IMPULSIONAMOS E ENSINAMOS O FUTURO DIGITAL.</h4>
                    <h1>Zenith Digital:</h1>
                    <h1>O ponto máximo</h1>
                    <h1>da inovação</h1>
                    <h4>Soluções completas para marcas e mentes que querem brilhar no digital.</h4>

                    <div className="btn">
                        <button>Conhecer nossos serviços</button>
                        <button>
                            Ver cursos <ArrowRight />
                        </button>
                    </div>
                </div>

                <div className="img">
                    <img src={assets.Glass} alt="Imagem Hero" />
                </div>
            </section>
        </section>
    );
};

export default Hero;
