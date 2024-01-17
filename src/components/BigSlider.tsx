import React from "react";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import {
  CustomSwiperContainer,
  CustomBlackDiv,
  UpperHeader,
  LowerHeader,
  CustomSwiper,
} from "../styles/BigSliderStyles";
import SwiperCore, { Pagination, EffectFade, Autoplay } from "swiper";
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";
import "swiper/css/effect-fade";
import ScrollDown from "./ScrollDown";

SwiperCore.use([Pagination, EffectFade, Autoplay]);

const renderBullet = (index: number, className: string) => {
  return `<span class="custom-bullet ${className}"></span>`;
};

export default function BigSlider() {
  return (
    <CustomSwiperContainer>
      <CustomSwiper
        slidesPerView={1}
        pagination={{ clickable: true, renderBullet }}
        effect="fade"
        autoplay={{ delay: 3000 }}
      >
        {[img1, img2, img3].map((img, index) => (
          <SwiperSlide key={index}>
            <UpperHeader>The space is waiting for</UpperHeader>
            <LowerHeader>YOU</LowerHeader>
            <ScrollDown />
            <CustomBlackDiv />
            <img src={img} alt={`Slide ${index + 1}`} />
          </SwiperSlide>
        ))}
      </CustomSwiper>
    </CustomSwiperContainer>
  );
}
