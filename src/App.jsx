import React, { useEffect } from "react"
import "./App.css"
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import Footer from "./components/Footer"
import About from "./components/About"
import Method from "./components/Method"
import FAQ from "./components/FAQ"
import Hero2 from "./components/Hero2"

function App() {
  useEffect(() => {
    // Progress bar
    function updateProgressBar() {
      const progressBar = document.querySelector('.progress-bar');
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      const progress = (window.pageYOffset / totalHeight) * 100;
      progressBar.style.width = progress + '%';
    }

    updateProgressBar();
    window.addEventListener('scroll', updateProgressBar);
    window.addEventListener('resize', updateProgressBar);

    // Progress circle
    function updateProgressCircle() {
      const progressElement = document.querySelector('.progress-circle-bar');
      const scrollToTopElement = document.querySelector('.scroll-to-top');
      const totalHeight = document.body.scrollHeight - window.innerHeight;
      let progress = (window.pageYOffset / totalHeight) * 283;
      progress = Math.min(progress, 283);
      progressElement.style.strokeDashoffset = 283 - progress;

      if (window.innerHeight + window.pageYOffset >= document.body.offsetHeight) {
        scrollToTopElement.style.opacity = '1';
      } else {
        scrollToTopElement.style.opacity = '0';
      }
    }

    function scrollToTop() {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    const scrollToTopElement = document.querySelector('.scroll-to-top');
    scrollToTopElement.addEventListener('click', scrollToTop);

    updateProgressCircle();
    window.addEventListener('scroll', updateProgressCircle);
    window.addEventListener('resize', updateProgressCircle);

    return () => {
      window.removeEventListener('scroll', updateProgressBar);
      window.removeEventListener('resize', updateProgressBar);
      window.removeEventListener('scroll', updateProgressCircle);
      window.removeEventListener('resize', updateProgressCircle);
    };
  }, []);

  return (
    <div className="app">
      <Navbar />
      <section id="inicio">
        <Hero />
      </section>
      <section id="metodologia">
        <Method />
      </section>
      <section id="sobre-mim">
        <About />
      </section>
      <section id="especialidades">
        <Hero2 />
      </section>
      <section id="faq">
        <FAQ />
      </section>
      <Footer />

      {/* Progress bar */}
      <div className="progress-bar-container">
        <div className="progress-bar"></div>
      </div>

      {/* Progress circle */}
      <div className="progress-circle-container">
        <svg className="progress-circle" viewBox="0 0 100 100">
          <circle className="progress-background" cx="50" cy="50" r="45"></circle>
          <circle className="progress-circle-bar" cx="50" cy="50" r="45"></circle>
        </svg>
        <div className="scroll-to-top">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 19V5M5 12l7-7 7 7" />
          </svg>
        </div>
      </div>
    </div>
  )
}

export default App