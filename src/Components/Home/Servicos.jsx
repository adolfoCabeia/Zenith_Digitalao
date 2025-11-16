import React from "react";
import { servicos } from "../../assets/assets";
import ServicosZenith from "../Props/ServicosProps";

const Servicos = () => {
  return (
    <ServicosZenith
      data={servicos}
      title="Nossos Serviços"
      subtitle="Escolha um serviço e veja como podemos ajudar sua marca."
      btnVer="Ver detalhes"
      btnProposta="Pedir orçamento"
    />
  );
};

export default Servicos;
