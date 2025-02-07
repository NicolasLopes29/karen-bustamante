import React from "react"
import "./Hero.css"

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Você não está sozinho no seu <strong>processo de luto</strong></h1>
        <p className="hero-description">
          Estou aqui para oferecer um espaço seguro e acolhedor, onde você pode expressar suas emoções livremente e encontrar forças para seguir em frente.
        </p>
        <a href="https://wa.me/5511998085903?text=Olá,%20vim%20através%20do%20site,%20gostaria%20de%20ter%20mais%20informações%20sobre%20o%20seu%20trabalho." className="hero-button">
          Saiba como posso te ajudar ⭢
        </a>
      </div>
    </div>
  )
}

export default Hero