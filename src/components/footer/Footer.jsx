import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { FaWhatsapp } from "react-icons/fa";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <a href="#home" className="footer__logo">
        Tamara Tinte
      </a>
      <ul className="permalinks">
        <li>
          <a href="#home">Incio</a>
        </li>
        <li>
          <a href="#about">Sobre Mi</a>
        </li>
        <li>
          <a href="#experience">Skills</a>
        </li>
        <li>
          <a href="#portfolio">Experiencia</a>
        </li>
        <li>
          <a href="#testimonials">Certificados</a>
        </li>
        <li>
          <a href="#contact">Contacto</a>
        </li>
      </ul>
      <div className="footer__socials">
        <a
          href="https://www.https://www.linkedin.com/in/tamara-pamela-tinte-maizares-74ab741b6/"
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
      <div className="footer__copyright">
        <small></small>
      </div>
    </footer>
  );
};

export default Footer;
