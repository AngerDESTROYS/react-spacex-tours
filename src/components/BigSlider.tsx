import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import SwiperCore, { Pagination, EffectFade, Autoplay } from "swiper";
import styled from "styled-components";
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";
import "swiper/css/effect-fade";
import ScrollDown from "./ScrollDown";

SwiperCore.use([Pagination, EffectFade, Autoplay]);

const CustomSwiperContainer = styled.div`
  width: 100%;
  height: 980px;
  position: relative;
`;
const CustomBlackDiv = styled.div`
  background-color: black;
  width: 100%;
  height: 980px;
  position: absolute;
  z-index: 10;
  opacity: 48%;
`;
const UpperHeader = styled.p`
  position: fixed;
  top: 28%;
  left: 52%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  color: white;
  font-family: "SyneBold", sans-serif;
  font-size: 48px;
  font-weight: 800;
  line-height: 58px;
  text-transform: uppercase;
  width: 1107px;
  height: 58px;
`;

const LowerHeader = styled.p`
  position: fixed;
  top: 17%;
  left: 52%;
  transform: translate(-50%, -50%);
  z-index: 1000;
  color: white;
  font-family: "SyneBold", sans-serif;
  font-size: 310px;
  font-weight: 800;
  line-height: 372px;
  letter-spacing: 0em;
  text-transform: uppercase;
  width: 1107px;
  height: 372px;
`;
const CustomSwiper = styled(Swiper)`
  position: relative;
  width: 100%;
  height: 100%;

  .swiper-container {
    background-color: rgba(0, 0, 0, 0.48);
    color: white;
    width: 100%;
    height: 100%;
    align-items: center;
  }
  .swiper-slide img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    z-index: 1;
  }

  .swiper-pagination-bullet-active {
    width: 20px;
    background-color: white !important;
  }

  .custom-bullet {
    position: relative;
    color: white;
    width: 12px;
    height: 12px;
    margin: 0 50px;
  }

  .custom-bullet::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 24px;
    height: 24px;
    border: 2px solid white;
    border-radius: 50%;
  }

  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background-color: transparent;
    margin: 0 16px !important;
  }

  .swiper-pagination {
    bottom: 50%;
    text-align: center;
  }
`;

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
