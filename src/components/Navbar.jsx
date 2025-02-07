"use client"

import { useState } from "react"
import "./Navbar.css"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  const scrollToSection = (sectionId) => {
    setIsOpen(false) // Close the mobile menu after clicking
    const section = document.getElementById(sectionId)
    if (section) {
      section.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <span>
            Karen Bustamante
            <br />
            <b>Psicanalista</b>
          </span>
        </div>
        <div className="navbar-menu">
          <div className={`navbar-links ${isOpen ? "active" : ""}`}>
            <a onClick={() => scrollToSection("inicio")} className="navbar-link">
              Início
            </a>
            {/* <a onClick={() => scrollToSection("especialidades")} className="navbar-link">
              Especialidades
            </a>  */}
            <a onClick={() => scrollToSection("metodologia")} className="navbar-link">
              Metodologia
            </a>
            <a onClick={() => scrollToSection("sobre-mim")} className="navbar-link">
              Sobre Mim
            </a>
            <a onClick={() => scrollToSection("faq")} className="navbar-link">
              FAQ
            </a>
          </div>
          <button className="navbar-toggle" onClick={() => setIsOpen(!isOpen)}>
            <span className="navbar-toggle-icon"></span>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default Navbar

