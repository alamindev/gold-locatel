const Functional = () => {
  return (
    <section className="lg-functional-area" id="locatel">
      <div className="lg-functional-heading">
        <h2 data-aos="fade-up">¿Cómo Funciona Locatel ATIEMPO?</h2>
      </div>

      <div className="lg-plans-listing" data-aos="fade-up" data-aos-delay="400">
        <div className="container-functional">
          <div className="lg-plans-listing-content">
            <div className="single-lg-plans-listing">
              <span>1</span>
              <div>
                <p className="title">Regístrate: </p>
                <p>Completa el formulario de afiliación en línea.</p>
              </div>
            </div>

            <div className="single-lg-plans-listing">
              <span>2</span>
              <div>
                <p className="title">Descarga la App: </p>
                <p>Disponible en Google Play y App Store.</p>
              </div>
            </div>

            <div className="single-lg-plans-listing">
              <span>3</span>
              <p>
                Inicia sesión y solicita consultas médicas en cualquier momento.
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="lg-functional-content">
          <div
            className="lg-functional-video-content"
            data-aos="fade-up"
            data-aos-delay="500"
          >
            <video width="600" controls>
              <source src="/videos/video.mp4" type="video/mp4" />
              Your browser does not support the video tag.
            </video>
          </div>
          <p data-aos="fade-up" data-aos-delay="600">
            El acceso a Locatel ATIEMPO requiere una suscripción a Locatel Gold.
            Si eres miembro Gold, puedes inscribir a tus familiares de primer
            grado de consanguinidad. Los menores de edad solo pueden ser
            registrados por un adulto afiliado a Locatel Gold
          </p>
          <div
            className="lg-functional-buttons"
            data-aos="fade-up"
            data-aos-delay="700"
          >
            <a href="#">
              <img src="/home-two/gp.png" alt="Image" />
            </a>
            <a href="#">
              <img src="/home-two/as.png" alt="Image" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Functional;
