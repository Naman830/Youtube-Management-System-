import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
import SliderImg from "../../../../assets/images/slider.png"
import React, { useRef, useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

import { Autoplay, Navigation } from "swiper/modules";

export default function App() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const [swiperInstance, setSwiperInstance] = useState(null);

  useEffect(() => {
    if (swiperInstance && prevRef.current && nextRef.current) {
      swiperInstance.params.navigation.prevEl = prevRef.current;
      swiperInstance.params.navigation.nextEl = nextRef.current;

      swiperInstance.navigation.destroy();
      swiperInstance.navigation.init();
      swiperInstance.navigation.update();
    }
  }, [swiperInstance]);

  return (
    <div className="slider-wrapper ">
      {/* Header + arrows */}
      <div className="slider-arrowsr flex justify-between items-center mb-5 max-w-7xl mx-auto md:px-5 sm:px-3">
        <h2 className="md:text-3xl sm:text-2xl text-[20px] sm:leading-0 leading-6 font-medium">
          From Idea to Upload
        </h2>

        <div className="flex gap-3">
          <button
            ref={prevRef}
            className="arrow-btn text-[20px] mr-2 text-[var(--gray-color)] hover:text-white transition-all duration-300"
          >
            <FaArrowLeft />
          </button>
          <button
            ref={nextRef}
            className="arrow-btn text-[20px] mr-2 text-white"
          >
            <FaArrowRight />
          </button>
        </div>
      </div>

      <Swiper
        onSwiper={setSwiperInstance}
        slidesPerView={1}
        spaceBetween={12}
        loop
        speed={700}
        autoplay={{
          delay: 900,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        }}
        breakpoints={{
          640: {
            slidesPerView: 2,
            centeredSlides: false,
          },
          1080: {
            slidesPerView: 3,
            centeredSlides: true,
          },
         
        }}
        modules={[Autoplay, Navigation]}
      >
        <SwiperSlide>
          <figure className="slider_image">
            <img src={SliderImg} alt="" className="img" />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <figure className="slider_image">
            <img src={SliderImg} alt="" className="img" />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <figure className="slider_image">
            <img src={SliderImg} alt="" className="img" />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <figure className="slider_image">
            <img src={SliderImg} alt="" className="img" />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <figure className="slider_image">
            <img src={SliderImg} alt="" className="img" />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <figure className="slider_image">
            <img src={SliderImg} alt="" className="img" />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <figure className="slider_image">
            <img src={SliderImg} alt="" className="img" />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <figure className="slider_image">
            <img src={SliderImg} alt="" className="img" />
          </figure>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <figure className="slider_image">
            <img src={SliderImg} alt="" className="img" />
          </figure>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}
