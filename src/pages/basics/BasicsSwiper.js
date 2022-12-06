// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Slide1 from "./Slide1";
import Slide2 from "./Slide2";
import Slide3 from "./Slide3";
import Slide4 from "./Slide4";

// Import Swiper styles
import "swiper/css";

export default function BasicsSwiper() {
  return (
    <Swiper
      spaceBetween={10}
      slidesPerView={1}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide>{Slide2}</SwiperSlide>
      <SwiperSlide>{Slide1}</SwiperSlide>
      <SwiperSlide>{Slide3}</SwiperSlide>
      <SwiperSlide>{Slide4}</SwiperSlide>
      ...
    </Swiper>
  );
}
