import { useState } from "react";
import Accordion from "../Accordion/Accordion";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0); // Default open item is the first

  const items = [
    {
      title: "¿Qué es Locatel A Tiempo?",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugiat, autem similique eos dignissimos, fuga perferendis ut sint deserunt eius, veritatis dicta? Porro architecto reiciendis consectetur voluptatum provident veritatis dignissimos. ",
    },
    {
      title: "¿Qué especialidades médicas están disponibles?",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugiat, autem similique eos dignissimos, fuga perferendis ut sint deserunt eius, veritatis dicta? Porro architecto reiciendis consectetur voluptatum provident veritatis dignissimos.",
    },
    {
      title: "¿Cómo accedo al servicio?",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugiat, autem similique eos dignissimos, fuga perferendis ut sint deserunt eius, veritatis dicta? Porro architecto reiciendis consectetur voluptatum provident veritatis dignissimos.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open/close behavior
  };

  return (
    <section className="faq--section faq-two">
      <div className="container">
        <div className="faq--header">
          <h2 data-aos="fade-up">Preguntas Frecuentes</h2>
          <p data-aos="fade-up" data-aos-delay="400">
            Resolvemos tus dudas sobre Locatel Gold
          </p>
        </div>
        <div className="faq-container" data-aos="fade-up" data-aos-delay="600">
          {items.map((item, index) => (
            <Accordion
              key={index}
              title={item.title}
              content={item.content}
              isOpen={openIndex === index}
              onToggle={() => handleToggle(index)}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Faq;
