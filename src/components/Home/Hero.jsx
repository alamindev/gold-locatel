import { IoMdStar } from "react-icons/io";
import SwiperComponent from "../SwiperComponent";

const Hero = () => {
  return (
    <section className="lg-hero-area">
      {/*===== Start Hero Slide Area =====*/}
      <div className="lg-hero-slide-area">
        <div className="container">
          <div className="lg-slider-section">
            <div className="lg-hero-left-slide " data-aos="fade-up">
              <h1 className="font-gotham">
                Salud sin límites <br />
                para ti y tu familia <br />
                Disponible 24/7{" "}
              </h1>
              <p className="font-gotham">
                Accede a consultas médicas ilimitadas, descuentos exclusivos,
                acumulación de puntos y mucho más con Locatel Gold.
              </p>
              <div className="button">
                <a href="#">¡Afíliate a Locatel Gold!</a>
              </div>
              <div className="lg-hero-left-bottom-content">
                <div className="lg-hero-left-btm-img">
                  <img src="/home/Prof1.png" alt="image" />
                  <img src="/home/Prof2.png" alt="image" />
                  <img src="/home/Prof3.png" alt="image" />
                </div>
                <div className="lg-hero-left-btm-content">
                  <ul>
                    <li>
                      <IoMdStar />
                    </li>
                    <li>
                      <IoMdStar />
                    </li>
                    <li>
                      <IoMdStar />
                    </li>
                    <li>
                      <IoMdStar />
                    </li>
                    <li>
                      <IoMdStar />
                    </li>
                  </ul>
                  <p>Más de 2000 usuarios activos</p>
                </div>
              </div>
            </div>
            <SwiperComponent>
              <div className="slider-sub">
                <img src="/home/Foto1.png" alt="Image" />
              </div>
              <div className="slider-sub">
                <img src="/home/Foto2.png" alt="Image" />
              </div>
              <div className="slider-sub">
                <img src="/home/Foto3.png" alt="Image" />
              </div>
            </SwiperComponent>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
