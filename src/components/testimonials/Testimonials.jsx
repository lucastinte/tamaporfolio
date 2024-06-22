import React from "react";
import { Pagination } from "swiper";

import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "./testimonials.css";

// Import the Tango logo and certification images
import TangoLogo from "../../assets/tango-logo.png";
import cert1 from "../../assets/cert1.png";
import cert2 from "../../assets/cert2.png";
import cert3 from "../../assets/cert3.png";

const Testimonials = () => {
  const certifications = [
    {
      title: "Examen Professional | Axoft Argentina Tango Software | 2023",
      link: "https://tangouniversity.axoft.com/badges/badge.php?hash=039a4abaf35911ed48eafd8deb362b5296afba75",
    },
    {
      title:
        "Circuitos Administrativos | Axoft Argentina Tango Software | 2023",
      link: "https://tangouniversity.axoft.com/badges/badge.php?hash=6cc23fc0544888bd47fe77c369a67aa81ea49e6e",
    },
    {
      title: "Tour Delta + Instalación | Axoft Argentina Tango Software | 2023",
      link: "https://tangouniversity.axoft.com/badges/badge.php?hash=4e8178bfc99a6e6e50f74e47f86eafbac2adc6f9",
    },
    {
      title: "Contabilidad | Axoft Argentina Tango Software | 2023",
      link: "https://tangouniversity.axoft.com/badges/badge.php?hash=bdb07af3a28cfc253a31b187a29a9d24d59b9d54",
    },
    {
      title: "Gestión operatoria | Axoft Argentina Tango Software | 2023",
      link: "https://tangouniversity.axoft.com/badges/badge.php?hash=b3c1af36a326653c63e22fd28e316841b0fdce1a",
    },
    {
      title: "Gestión puesta en marcha | Axoft Argentina Tango Software | 2023",
      link: "https://tangouniversity.axoft.com/badges/badge.php?hash=18db9256861d45878e6f126e98e17ecc2edb4756",
    },
    {
      title:
        "Liquidador de IVA e IIBB Delta | Axoft Argentina Tango Software | 2022",
      link: "https://tangouniversity.axoft.com/badges/badge.php?hash=9b2f13899db991a4f5549a86304a961fd697469f",
    },
    {
      title: "Sueldos | Axoft Argentina Tango Software | 2022",
      link: "https://tangouniversity.axoft.com/badges/badge.php?hash=6347b8ac55e0c2a048c83d20870b406a6d462aef",
    },
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
        <SwiperSlide className="testimonial">
          <div className="client__avatar">
            <img
              src={TangoLogo}
              alt="Tango Software Logo"
              style={{ width: "100px", height: "100px" }}
            />
          </div>
          <h5 className="client__name">Tango Software</h5>
          <div className="client__review">
            {certifications.map((cert, index) => (
              <div key={index}>
                <a href={cert.link} target="_blank" rel="noreferrer">
                  {cert.title}
                </a>
              </div>
            ))}
          </div>
        </SwiperSlide>
        <SwiperSlide className="testimonial full-image-slide">
          <img src={cert1} alt="Certification Image 1" className="full-image" />
        </SwiperSlide>
        <SwiperSlide className="testimonial full-image-slide">
          <img src={cert2} alt="Certification Image 2" className="full-image" />
        </SwiperSlide>
        <SwiperSlide className="testimonial full-image-slide">
          <img src={cert3} alt="Certification Image 3" className="full-image" />
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Testimonials;
