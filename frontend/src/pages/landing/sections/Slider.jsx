import { FaArrowRight } from "react-icons/fa6";
import { FaArrowLeftLong } from "react-icons/fa6";

import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';

import 'swiper/css';
import 'swiper/css/navigation';

import { Autoplay, Navigation } from 'swiper/modules';

export default function App() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className="slider-wrapper">
      {/* Right-side arrows */}
      <div className="slider-arrows flex items-center justify-center">
        <button ref={prevRef} className="arrow-btn"><FaArrowLeftLong /></button>
        <button ref={nextRef} className="arrow-btn"><FaArrowRight /></button>
      </div>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        loop={true}
        speed={700}                 // smooth premium motion
        autoplay={{
          delay: 1400,              // auto-run
          disableOnInteraction: false,
          pauseOnMouseEnter: true,  // UX win
        }}
        navigation={{
          prevEl: prevRef.current,
          nextEl: nextRef.current,
        }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        modules={[Autoplay, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>Slide 1</SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
    </div>
  );
}
