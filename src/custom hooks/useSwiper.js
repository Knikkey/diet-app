import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export default function useSwiper({
  settings: { spaceBetween, slidesPerView, onslideChange, onSwiper },
  slides,
}) {
  return (
    <Swiper
      spaceBetween={spaceBetween}
      slidesPerView={slidesPerView}
      onslideChange={onslideChange}
      onSwiper={onSwiper}
    >
      {slides.map((slide) => {
        return <SwiperSlide>{slide}</SwiperSlide>;
      })}
    </Swiper>
  );
}
