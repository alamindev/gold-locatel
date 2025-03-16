import { useState } from "react";
import Accordion from "../Accordion/Accordion";

const Faq = () => {
  const [openIndex, setOpenIndex] = useState(0); // Default open item is the first

  const items = [
    {
      title: "¿Cómo funciona Locatel Gold?",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugiat, autem similique eos dignissimos, fuga perferendis ut sint deserunt eius, veritatis dicta? Porro architecto reiciendis consectetur voluptatum provident veritatis dignissimos. ",
    },
    {
      title: "¿Cuántas consultas médicas puedo tener?",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugiat, autem similique eos dignissimos, fuga perferendis ut sint deserunt eius, veritatis dicta? Porro architecto reiciendis consectetur voluptatum provident veritatis dignissimos.",
    },
    {
      title: "¿Puedo afiliar a mis familiares?",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugiat, autem similique eos dignissimos, fuga perferendis ut sint deserunt eius, veritatis dicta? Porro architecto reiciendis consectetur voluptatum provident veritatis dignissimos.",
    },
    {
      title: "¿Cómo accedo a los descuentos en tiendas Locatel?",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugiat, autem similique eos dignissimos, fuga perferendis ut sint deserunt eius, veritatis dicta? Porro architecto reiciendis consectetur voluptatum provident veritatis dignissimos.",
    },
    {
      title: "¿Cómo se acumulan los puntos SoyLocatel?",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugiat, autem similique eos dignissimos, fuga perferendis ut sint deserunt eius, veritatis dicta? Porro architecto reiciendis consectetur voluptatum provident veritatis dignissimos.",
    },
    {
      title: "¿En qué consiste la asistencia médica viajera?",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugiat, autem similique eos dignissimos, fuga perferendis ut sint deserunt eius, veritatis dicta? Porro architecto reiciendis consectetur voluptatum provident veritatis dignissimos.",
    },
    {
      title: "¿Cuáles laboratorios están incluidos en los descuentos?",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugiat, autem similique eos dignissimos, fuga perferendis ut sint deserunt eius, veritatis dicta? Porro architecto reiciendis consectetur voluptatum provident veritatis dignissimos.",
    },
    {
      title: "¿Cómo puedo acceder a los descuentos en laboratorios clínicos?",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugiat, autem similique eos dignissimos, fuga perferendis ut sint deserunt eius, veritatis dicta? Porro architecto reiciendis consectetur voluptatum provident veritatis dignissimos.",
    },
    {
      title: "¿Puedo cambiar mi plan después de contratarlo?",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugiat, autem similique eos dignissimos, fuga perferendis ut sint deserunt eius, veritatis dicta? Porro architecto reiciendis consectetur voluptatum provident veritatis dignissimos..",
    },
    {
      title: "¿Qué tipo de atención incluye el plan Premium?",
      content:
        " Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident fugiat, autem similique eos dignissimos, fuga perferendis ut sint deserunt eius, veritatis dicta? Porro architecto reiciendis consectetur voluptatum provident veritatis dignissimos.",
    },
  ];

  const handleToggle = (index) => {
    setOpenIndex(openIndex === index ? null : index); // Toggle open/close behavior
  };

  return (
    <section className="faq--section">
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
