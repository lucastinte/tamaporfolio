import React from "react";
import { FaAward } from "react-icons/fa";
import { VscFolderLibrary } from "react-icons/vsc";
import ME from "../../assets/me.png";
import "./intro.css";

const Intro = () => {
  return (
    <section id="about">
      <h2>Acerca de mi </h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about__me-image">
            <img src={ME} alt="me" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="about__icon" />
              <h5>Experiencia</h5>
              <small>+2 Años</small>
            </article>
            <article className="about__card">
              <VscFolderLibrary className="about__icon" />
              <h5>Carrera Profesional</h5>
              <small>+5 Años</small>
            </article>
          </div>
          <p>
            Estudiante de 3° año de la carrera de Contador Público, con 2 años
            de experiencia en un Estudio Contable y 2 años de experiencia en una
            Inmobiliaria, donde pude compatibilizar mis estudios y conocimientos
            con mis tareas laborales y alcanzar un gran nivel de compromiso y
            organización. Mi propósito es seguir desarrollándome e ir
            adquiriendo habilidades y prácticas que permitan contribuir a mi
            avance como futura profesional.
          </p>
          <a href="#contact" className="btn btn-primary">
            Enviar Mail
          </a>
        </div>
      </div>
    </section>
  );
};

export default Intro;
