import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { MdOutlineEmail } from "react-icons/md";
import "./contact.css";

const Contact = () => {
  const [message, setMessage] = useState(false);
  const formRef = useRef();
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage(true);
    emailjs
      .sendForm(
        "service_2wmjbul",
        "template_t19ut2h",
        formRef.current,
        "-39SaYyP_sBygaNw1"
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );

    e.target.reset();
  };
  return (
    <section id="contact">
      <h5>Con un click</h5>
      <h2>Contactame</h2>
      <div className="container contact__container">
        <div className="contact__options">
          <article className="contact__option">
            <MdOutlineEmail className="contact__option-icon" />
            <h4>Email</h4>
            <h5>tamimaizares18@gmail.com</h5>
            <a href="mailto:merigogichashvili13@gmail.com">Enviar un Mensaje</a>
          </article>
        </div>
        <form ref={formRef} onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Nombre Completo"
            name="user_name"
            required
          />
          <input
            type="text"
            placeholder="Tu email"
            name="user_email"
            required
          />
          <textarea
            placeholder="Tu mensaje"
            rows="7"
            name="message"
            required
          ></textarea>
          <button type="submit" className="btn btn-primary">
            Enviar Mensaje
          </button>
          {message && <span>Gracias, responderé lo antes posible.</span>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
