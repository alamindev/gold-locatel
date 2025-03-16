import React from "react";

export default function InfoTable() {
  return (
    <section className="info--table">
      <div className="container mx-auto">
        <div className="info-top-area">
          <div className="info-top-content" data-aos="fade-up">
            {/* single item */}
            <div className="single-info-top-content">
              <img src="/icons/tik.png" alt="tik" />
              <p>Descuentos exclusivos</p>
            </div>
            {/* single item */}

            {/* single item */}
            <div className="single-info-top-content">
              <img src="/icons/tik.png" alt="tik" />
              <p>Envios Expres</p>
            </div>
            {/* single item */}

            {/* single item */}
            <div className="single-info-top-content">
              <img src="/icons/tik.png" alt="tik" />
              <p>Telemedicina 24/7 ilimitada</p>
            </div>
            {/* single item */}
          </div>

          <div
            className="info-top-content"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            {/* single item */}
            <div className="single-info-top-content">
              <img src="/icons/tik.png" alt="tik" />
              <p>Alquiler de equipos médicos sin depósito</p>
            </div>
            {/* single item */}

            {/* single item */}
            <div className="single-info-top-content">
              <img src="/icons/tik.png" alt="tik" />
              <p>Asistencia del viajero </p>
            </div>
            {/* single item */}

            {/* single item */}
            <div className="single-info-top-content">
              <img src="/icons/tik.png" alt="tik" />
              <p>Acumulación de puntos</p>
            </div>
            {/* single item */}
          </div>
        </div>
        {/* Info table content */}
        <div
          className="info-table-content"
          data-aos="fade-up"
          data-aos-delay="600"
        >
          <table className="pricing-table">
            <thead>
              <tr>
                <th>Plan</th>
                <th>Precio regular</th>
                <th>Precio especial</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Trimestral</td>
                <td>$66,150 COP</td>
                <td>$xxxxx</td>
                <td>
                  <div className="button">
                    <a href="#">¡Comprar membresía!</a>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Trimestral</td>
                <td>$66,150 COP</td>
                <td>$xxxxx</td>
                <td>
                  <div className="button">
                    <a href="#">¡Comprar membresía!</a>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Trimestral</td>
                <td>$66,150 COP</td>
                <td>$xxxxx</td>
                <td>
                  <div className="button">
                    <a href="#">¡Comprar membresía!</a>
                  </div>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="subtitle2" data-aos="fade-up" data-aos-delay="700">
          *Aplican condiciones y restricciones
        </p>
      </div>
    </section>
  );
}
