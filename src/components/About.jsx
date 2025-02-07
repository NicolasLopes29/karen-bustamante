import React from "react";
import "./About.css";
import karenFoto from "../assets/karen-foto.jpeg"; 

const About = () => {
  return (
    <div className="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="about-title">Sobre Mim</h2>
          <div className="about-image">
          <img className="karen-foto" src={karenFoto} alt="Karen Bustamante" />
        </div>
          <p className="about-description">
            Olá! Meu nome é Karen Bustamante e sou psicanalista.
            Acredito que a terapia é um espaço
            seguro e acolhedor para que você possa expressar suas emoções e
            sentimentos mais profundos. Estou aqui para te ajudar a superar
            momentos difíceis e a encontrar forças para seguir em frente.
          </p>
        </div>
        
      </div>
    </div>
  );
}

export default About;