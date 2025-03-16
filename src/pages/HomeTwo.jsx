import React from "react";
import Empieza from "../components/Empieza";
import Beneficios from "../components/HomeTwo/Beneficios";
import Faq from "../components/HomeTwo/Faq";
import Functional from "../components/HomeTwo/Functional";
import Hero from "../components/HomeTwo/Hero";
import InfoTable from "../components/HomeTwo/InfoTable";

export default function HomeTwo() {
  return (
    <>
      <Hero />
      <Beneficios />
      <Functional />
      <InfoTable />

      <Faq />
      <Empieza />
      <div className="lg-hero-bottom-area">
        <div className="container">
          <div className="lg-hero-bottom-content">
            <div className="lg-hero-bottom-left-content">
              <p>LOCATEL GOLD</p>
              <p>Salud y bienestar sin límites. </p>
            </div>
            <div className="lg-hero-bottom-right-content">
              <div className="button">
                <a href="#">¡Afiliate a Locatel Gold!</a>
              </div>
              <div className="button">
                <a href="#">Conoce los beneficios</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
