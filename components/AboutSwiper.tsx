"use client";

import { Autoplay, EffectFade } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

import Image from "next/image";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/effect-fade";

const AboutSwiper = () => {
  return (
    <Swiper
      modules={[Autoplay, EffectFade]}
      slidesPerView={1}
      loop={true}
      autoplay={{ delay: 5000, disableOnInteraction: false }}
      className="text-center"
      effect="fade"
    >
      <SwiperSlide>
        <div className="relative h-[60vh] lg:h-[80vh] overflow-hidden">
          <Image
            objectFit="cover"
            alt="Colorado Photo"
            src="/colorado.jpg"
            fill={true}
            className="rounded-lg"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relativeh-[60vh] lg:h-[80vh] overflow-hidden">
          <Image
            objectFit="cover"
            alt="Family Photo"
            fill={true}
            src="/family.jpg"
            className="rounded-lg"
          />
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className="relative h-[60vh] lg:h-[80vh] overflow-hidden">
          <Image
            objectFit="cover"
            alt="Office Photo"
            fill={true}
            src="/office.jpg"
            className="rounded-lg"
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};

export default AboutSwiper;
