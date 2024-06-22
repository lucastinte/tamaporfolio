import React from "react";
import { BsLinkedin } from "react-icons/bs";
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./testimonials.css";

const Testimonials = () => {
  const testimonials = [
    {
      id: 1,
      link: "https://www.linkedin.com/in/tamara-pamela-tinte-maizares-74ab741b6/",
      name: "TANGO UNIVERSITY",
      role: "Estudiante de Contador Público",
      test: "Examen Professional | Axoft Argentina Tango Software | 2023. Circuitos Administrativos | Axoft Argentina Tango Software | 2023. Tour Delta + Instalación | Axoft Argentina Tango Software | 2023. Contabilidad | Axoft Argentina Tango Software | 2023. Gestión operatoria | Axoft Argentina Tango Software | 2023. Gestión puesta en marcha | Axoft Argentina Tango Software | 2023. Liquidador de IVA e IIBB Delta | Axoft Argentina Tango Software | 2022. Sueldos | Axoft Argentina Tango Software | 2022.",
    },
    // Puedes añadir más testimonios o información aquí si es necesario
  ];

  return (
    <section id="testimonials">
      <h2>Certificaciones</h2>
      <Swiper
        className="container testimonials__container"
        modules={[Pagination]}
        spaceBetween={40}
        slidesPerView={1}
        pagination={{ clickable: true }}
      >
        {testimonials.map((test) => (
          <SwiperSlide className="testimonial" key={test.id}>
            <div className="client__avatar">
              <a href={test.link}>
                <BsLinkedin />
              </a>
            </div>
            <h5 className="client__name">{test.name}</h5>
            <small className="client__review">{test.test}</small>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default Testimonials;
