import { useState } from "react"
import "./FAQ.css"

const faqData = [
  {
    question: "Qual é a sua metodologia de trabalho?",
    answer:
      "Minha metodologia é personalizada para cada paciente, combinando diferentes abordagens terapêuticas de acordo com as necessidades individuais. O objetivo é proporcionar um atendimento acolhedor e eficaz.",
  },
  {
    question: "Como funciona a escuta ativa?",
    answer:
      "A escuta ativa envolve ouvir atentamente o que você está dizendo, não apenas as palavras, mas também as emoções e sentimentos por trás delas. Isso cria um ambiente seguro e acolhedor, onde suas experiências são validadas e respeitadas.",
  },
  {
    question: "Você oferece suporte via WhatsApp além das sessões?",
    answer:
      "Sim, ofereço suporte via WhatsApp para situações específicas e emergenciais, sempre mantendo o profissionalismo e os limites terapêuticos necessários para garantir um atendimento de qualidade.",
  },
]

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null)

  const toggleQuestion = (index) => {
    setOpenIndex(openIndex === index ? null : index)
  }

  return (
    <div className="faq">
      <h1 className="faq-title">Perguntas Frequentes</h1>
      <div className="faq-container">
        {faqData.map((item, index) => (
          <div key={index} className="faq-item">
            <button className="faq-question" onClick={() => toggleQuestion(index)} aria-expanded={openIndex === index}>
              {item.question}
              <span className="faq-icon">{openIndex === index ? "×" : "+"}</span>
            </button>
            {openIndex === index && <div className="faq-answer">{item.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  )
}

export default FAQ