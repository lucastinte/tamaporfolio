import React from "react";
import IMG1 from "../../assets/imagen1.png";
import IMG2 from "../../assets/imagen2.png";
import IMG4 from "../../assets/imagen3.png";

import "./portfolio.css";

const Portfolio = () => {
  const soloProjects = [
    {
      id: 1,
      title: "Pinto y Asociados-Servicios Inmobiliarios Integrales S. A. S. ",
      img: IMG1,
      description:
        "Asistencia administrativa integral, revisión de documentos y control de archivos, recepción de clientes, cobro y pago correspondientes a alquileres, manejo de páginas web y softwares de gestión inmobiliaria y alquileres, preparación de informes cuatrimestrales, y cumplimiento de obligaciones fiscales relevantes.",
      link: "mailto:inmobiliariaredsii@gmail.com",
      github:
        "https://www.instagram.com/martilleropinto.jujuy/?utm_source=ig_web_button_share_sheet",
      technologies: "Secretaría Administrativa",
    },
    {
      id: 2,
      title: "Cdor. Ignacio Arturo Pinto",
      img: IMG4,
      description:
        "Liquidación y elaboración de declaraciones juradas impositivas nacionales y provinciales, manejo de página de AFIP y softwares contables como Tango y SOS contador, facturación diaria a clientes, gestión de contribuyentes monotributistas, liquidación de sueldos, constitución de sociedades, y asistencia administrativa integral.",
      technologies: "Secretaría Administrativa Contable",
      link: "",
      github: "",
    },
    {
      id: 3,
      title: "Cdor. Paula Carlos",
      img: IMG2,
      description:
        "Elaboración y liquidación de declaraciones juradas fiscales a nivel nacional y provincial, manejo de la plataforma AFIP y programas contables como Tango y SOS Contador, facturación diaria a clientes, gestión de monotributistas, liquidación de salarios, constitución de sociedades, y asistencia administrativa integral.",
      technologies: "Secretaría Administrativa Contable",
      link: "",
      github: "",
    },
  ];

  return (
    <section id="portfolio">
      <h5>Mis Trabajos Recientes</h5>
      <h2>Actividad</h2>

      <div className="container portfolio__container">
        {soloProjects.map((pro) => (
          <article className="portfolio__item" key={pro.id}>
            <div className="portfolio__item-image">
              <img src={pro.img} alt={pro.title} />
            </div>
            <div className="portfolio__item-content">
              <h3>{pro.title}</h3>
              <p>{pro.description}</p>
              <p>{pro.technologies}</p>
            </div>
            <div className="portfolio__item-cta">
              <a
                href={pro.github}
                target="_blank"
                className="btn"
                rel="noreferrer"
              >
                Instagram
              </a>
              <a
                href={pro.link}
                target="_blank"
                className="btn btn-primary"
                rel="noreferrer"
              >
                Email
              </a>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
