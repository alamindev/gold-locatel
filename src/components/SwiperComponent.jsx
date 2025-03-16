import React from "react";
import "swiper/css";
import "swiper/css/effect-fade";
import { Autoplay, EffectFade, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const SwiperComponent = ({ children }) => {
  return (
    <Swiper
      key={children.length} // Ensures re-render when children change
      modules={[Pagination, Autoplay, EffectFade]}
      spaceBetween={10}
      slidesPerView={1}
      loop={true}
      loopFillGroupWithBlank={true}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      effect="fade"
      fadeEffect={{ crossFade: true }} // Enables smooth fade transition
      pagination={{ clickable: true }}
    >
      {React.Children.map(children, (child, index) => (
        <SwiperSlide key={index}>{child}</SwiperSlide>
      ))}
    </Swiper>
  );
};

export default SwiperComponent;
