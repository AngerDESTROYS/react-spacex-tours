import styled from "styled-components";
import { Swiper } from "swiper/react";

export const ToursSwiper = styled(Swiper)`
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 636px;
  .swiper-pagination-bullet-active {
    width: 20px;
    background-color: black !important;
  }

  .custom-bullet {
    position: relative;
    color: black;
    width: 12px;
    height: 12px;
  }

  .custom-bullet::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 24px;
    height: 24px;
    border: 1px solid black;
    border-radius: 50%;
  }

  .swiper-pagination-bullet {
    width: 12px;
    height: 12px;
    background-color: transparent;
    margin: 0 16px !important;
  }

  .swiper-pagination {
    top: 612px;
    z-index: 1000;
  }
`;

export const SliderHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;

export const SliderName = styled.p`
  margin: 0;
  font-family: "SyneBold", sans-serif;
  font-size: 32px;
  font-weight: 800;
  line-height: 38px;
  text-transform: uppercase;
  color: #1e1e1e;
`;

export const SliderContainer = styled.div`
  text-align: center;
  margin: 96px auto;
  display: flex;
  flex-direction: column;
  height: 720px;
  width: 1281px;
`;

export const ButtonContainer = styled.div``;
export const SliderButton = styled.button`
  width: 44px;
  height: 44px;
  background: rgba(236, 236, 236, 1);
  border: none;
  margin-right: 16px;

  &:hover {
    border: black 1px solid;
    cursor: pointer;
  }

  &.disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
`;

export const SliderButtonPrevious = styled(SliderButton)``;

export const SliderButtonNext = styled(SliderButton)`
  margin-right: 0;
`;

export const Next = styled.img`
  transform: rotate(180deg);
`;

export const Previous = styled.img``;