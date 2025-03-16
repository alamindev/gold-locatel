import React from "react";
import Empieza from "../components/Empieza";
import AdditionalBenefit from "../components/Home/AdditionalBenefit";
import ElegirLocatel from "../components/Home/ElegirLocatel";
import Faq from "../components/Home/Faq";
import Hero from "../components/Home/Hero";
import InfoTable from "../components/Home/InfoTable";
import LocatelGold from "../components/Home/LocatelGold";
import WhyChooseLocatel from "../components/Home/WhyChooseLocatel";

export default function Home() {
  return (
    <div className="main--wrapper">
      <Hero />
      <LocatelGold />
      <WhyChooseLocatel />
      <ElegirLocatel />
      <InfoTable />
      <Faq />
      <AdditionalBenefit />
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
    </div>
  );
}
