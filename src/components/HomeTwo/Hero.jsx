import { IoMdStar } from "react-icons/io";

const Hero = () => {
  return (
    <section className="lg-hero-area">
      {/*===== Start Hero Slide Area =====*/}
      <div className="lg-hero-slide-area">
        <div className="container">
          <div className="lg-hero-slide-content">
            <div className="lg-hero-left-slide" data-aos="fade-right">
              <h1 className="font-gotham">
                Atención Médica 24/7 para tus Seres Queridos
              </h1>
              <p className="font-gotham">
                Con Locatel ATIEMPO, tus familiares acceden a consultas médicas
                ilimitadas desde la comodidad de su hogar.
              </p>
              <div className="button">
                <a href="#">Afíliate Ahora</a>
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
            <div className="lg-hero-right-slide" data-aos="fade-left">
              <img src="/home-two/hero.png" alt="Image" />
            </div>
          </div>
        </div>
      </div>
      {/*===== End Hero Slide Area =====*/}
    </section>
  );
};

export default Hero;
