const sectionData = [
  {
    id: 101,
    image: "/home/wh1.png",
    title: "Salud sin límites, sin esperas",
    description:
      "Accede a consultas médicas ilimitadas 24/7, sin largas filas ni demoras. Desde donde estés, un especialista estará disponible para ti.",
  },
  {
    id: 102,
    image: "/home/wh2.png",
    title: "Beneficios exclusivos en cada compra",
    description:
      "Disfruta de descuentos en tiendas Locatel, laboratorios clínicos y el alquiler de equipos médicos sin depósito en garantía.",
  },
  {
    id: 103,
    image: "/home/wh3.png",
    title: "Más bienestar, más tranquilidad",
    description:
      "Desde asesoría nutricional hasta asistencia médica en viajes, Locatel Gold te ofrece un respaldo integral para que vivas con total confianza.",
  },
];

const WhyChooseLocatel = () => {
  return (
    <section className="why-choose-locatel-area" id="beneficios">
      <div className="why-choose-lifemiles">
        <p>
          Próximamente: Alianza con{" "}
          <img src="/home/lifemiles.png" alt="lifemiles" />
        </p>
      </div>
      <div className="why-choose-loctel">
        <div className="container">
          <div className="why-choose-content">
            <div className="why-choose-text-content">
              <h2 data-aos="fade-up">¿Por qué elegir Locatel Gold?</h2>
              <p className="subtitle" data-aos="fade-up">
                Más que una membresía, un nuevo nivel de bienestar
              </p>
              <p
                className="description"
                data-aos="fade-up"
                data-aos-delay="500"
              >
                Locatel Gold es la suscripción que te brinda tranquilidad con
                acceso ilimitado a servicios médicos, descuentos en productos de
                salud y asistencia personalizada para que tú y tu familia vivan
                mejor.
              </p>
            </div>

            <div className="cards-container">
              {sectionData.map((item) => (
                <div
                  key={item.id}
                  className="card"
                  data-aos="fade-up"
                  data-aos-delay="700"
                >
                  <div className="image-container">
                    <img src={item.image} alt={item.title} />
                  </div>
                  <div className="card-text-container">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="why-choose-alert">
              <div className="button">
                <a href="#" data-aos="fade-up" data-aos-delay="800">
                  Hazte miembro de Locatel Gold hoy y empieza a disfrutar de sus
                  beneficios
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyChooseLocatel;
