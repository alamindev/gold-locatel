import React from "react";

const Beneficios = () => {
  return (
    <section className="lg-beneficios-area" id="beneficios">
      <div className="container">
        <div className="lg-beneficios-heading">
          <h2 data-aos="fade-up">Beneficios de Locatel ATIEMPO</h2>
          <img
            data-aos="fade-up"
            data-aos-delay="400"
            src="/home-two/vsm.png"
            alt="image"
          />
          <p data-aos="fade-up" data-aos-delay="600">
            Locatel A Tiempo es una membresía diseñada para que tus familiares
            accedan a consultas médicas ilimitadas 24/7 desde cualquier lugar.
            Con un equipo de especialistas siempre disponibles, este servicio de
            telemedicina les permite recibir atención médica sin esperas, con la
            comodidad y seguridad que merecen.
          </p>
        </div>

        <div
          className="lg-beneficios-content"
          data-aos="fade-up"
          data-aos-delay="800"
        >
          {/* single item */}
          <div className="lg-single-beneficios-content">
            <img src="/home-two/icons/i1.png" alt="Icon" />
            <div>
              <h3 className="title">Consultas Médicas Ilimitadas 24/7: </h3>
              <p className="description">
                Acceso a médicos certificados en cualquier momento.
              </p>
            </div>
          </div>
          {/* single item */}

          {/* single item */}
          <div className="lg-single-beneficios-content">
            <img src="/home-two/icons/i2.png" alt="Icon" />
            <div>
              <h3 className="title">Recordatorios Personalizados: </h3>
              <p className="description">
                Alertas para toma de medicamentos y citas médicas.
              </p>
            </div>
          </div>
          {/* single item */}

          {/* single item */}
          <div className="lg-single-beneficios-content">
            <img src="/home-two/icons/i3.png" alt="Icon" />
            <div>
              <h3 className="title">Especialidades Disponibles: </h3>
              <p className="description">
                Pediatría, Medicina Interna, Nutrición y más.
              </p>
            </div>
          </div>
          {/* single item */}

          {/* single item */}
          <div className="lg-single-beneficios-content">
            <img src="/home-two/icons/i4.png" alt="Icon" />
            <div>
              <h3 className="title">Integración Familiar:</h3>
              <p className="description">
                Sincronización de cuentas para manejo integral de la salud
                familiar.
              </p>
            </div>
          </div>
          {/* single item */}

          {/* single item */}
          <div className="lg-single-beneficios-content">
            <img src="/home-two/icons/i5.png" alt="Icon" />
            <div>
              <h3 className="title">Historial Médico Digital:</h3>
              <p className="description">
                Consulta y gestión del historial médico en línea.
              </p>
            </div>
          </div>
          {/* single item */}
        </div>
      </div>
    </section>
  );
};

export default Beneficios;
