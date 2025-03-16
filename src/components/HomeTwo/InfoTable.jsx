import React from "react";

export default function InfoTable() {
  return (
    <section className="info--table hometwo" id="planes">
      <div className="container mx-auto">
        <div className="lg-planesy-heading">
          <h2 data-aos="fade-up">Planes y Tarifas</h2>
          <p data-aos="fade-up" data-aos-delay="400">
            Elige el plan ideal para ti y empieza a disfrutar de Locatel ATIEMPO
          </p>
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
                <td>xxxxxx</td>
                <td>
                  <div className="button">
                    <a href="#">¡Comprar membresía!</a>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Trimestral</td>
                <td>$66,150 COP</td>
                <td>xxxxxx</td>
                <td>
                  <div className="button">
                    <a href="#">¡Comprar membresía!</a>
                  </div>
                </td>
              </tr>
              <tr>
                <td>Trimestral</td>
                <td>$66,150 COP</td>
                <td>xxxxxx</td>
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
      <div
        className="lg-planesy-bottom-text"
        data-aos="fade-up"
        data-aos-delay="800"
      >
        <div className="container">
          <p>
            Todos los planes incluyen acceso ilimitado a consultas médicas,
            asesoría nutricional y gestión del historial médico
          </p>
        </div>
      </div>
    </section>
  );
}
