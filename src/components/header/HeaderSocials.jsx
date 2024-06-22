import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa"; // Importa el icono de WhatsApp

const HeaderSocials = () => {
  return (
    <div className="header__socials">
      <a
        href="https://www.linkedin.com/in/tamara-pamela-tinte-maizares74ab741b6/"
        target="_blank"
        rel="noreferrer"
      >
        <BsLinkedin />
      </a>
      <a href="https://wa.me/+5493884639286" target="_blank" rel="noreferrer">
        <FaWhatsapp />
      </a>{" "}
      {/* Reemplaza el enlace por tu número de WhatsApp */}
    </div>
  );
};

export default HeaderSocials;
