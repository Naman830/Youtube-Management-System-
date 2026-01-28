import { FaArrowRight, FaArrowLeft } from "react-icons/fa6";
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
        if (
            swiperInstance &&
            prevRef.current &&
            nextRef.current
        ) {
            swiperInstance.params.navigation.prevEl = prevRef.current;
            swiperInstance.params.navigation.nextEl = nextRef.current;

            swiperInstance.navigation.destroy();
            swiperInstance.navigation.init();
            swiperInstance.navigation.update();
        }
    }, [swiperInstance]);

    return (
        <div className="slider-wrapper">
            {/* Header + arrows */}
            <div className="slider-arrowsr flex justify-between items-center mb-5 max-w-7xl mx-auto px-5">
                <h2 className="text-3xl font-medium">
                    From Idea to Upload
                </h2>

                <div className="flex gap-3">
                    <button ref={prevRef} className="arrow-btn text-[20px] mr-2 text-[var(--gray-color)] hover:text-white transition-all duration-300">
                        <FaArrowLeft />
                    </button>
                    <button ref={nextRef} className="arrow-btn text-[20px] mr-2 text-white">
                        <FaArrowRight />
                    </button>
                </div>
            </div>

            <Swiper
                onSwiper={setSwiperInstance}
                slidesPerView={1}
                spaceBetween={30}
                loop
                speed={700}
                autoplay={{
                    delay: 1400,
                    disableOnInteraction: false,
                    pauseOnMouseEnter: true,
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
