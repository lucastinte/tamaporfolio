import React from "react";
import CTA from "./CTA";
import HeaderSocials from "./HeaderSocials";
import { FaArrowRight } from "react-icons/fa"; // Importa el icono de flecha hacia abajo
import "./header.css";

const Header = () => {
  return (
    <header id="home">
      <div className="container header__container">
        <h1>TAMARA TINTE</h1>
        <h5 className="text-light">AUXILIAR CONTABLE</h5>
        <CTA />
        <a href="#contact" className="scroll__down">
          <FaArrowRight /> {/* Aquí se coloca el icono de flecha */}
        </a>
        <HeaderSocials />
      </div>
    </header>
  );
};

export default Header;
