import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TourCard from "./TourCard";
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";
import arrow from "../imgs/arrow-left.svg";
import styled from "styled-components";

SwiperCore.use([Navigation, Pagination, Autoplay]);

const GET_ROCKETS = gql`
  query ExampleQuery {
    rockets {
      id
      name
      description
    }
  }
`;

const ToursSwiper = styled(Swiper)`
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

const SliderHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 40px;
`;

const SliderName = styled.p`
  margin: 0;
  font-family: "SyneBold", sans-serif;
  font-size: 32px;
  font-weight: 800;
  line-height: 38px;
  text-transform: uppercase;
  color: #1e1e1e;
`;

const SliderContainer = styled.div`
  text-align: center;
  margin: 96px auto;
  display: flex;
  flex-direction: column;
  height: 720px;
  width: 1281px;
`;

const ButtonContainer = styled.div``;
const SliderButton = styled.button`
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

const SliderButtonPrevious = styled(SliderButton)``;

const SliderButtonNext = styled(SliderButton)`
  margin-right: 0;
`;

const Next = styled.img`
  transform: rotate(180deg);
`;

const Previous = styled.img``;

const tourImages = [img1, img2, img3];

const renderBullet = (index: any, className: string) => {
  return `<span key={${index}} class="custom-bullet ${className}"></span>`;
};

const ToursSlider = () => {
  const { loading, error, data } = useQuery(GET_ROCKETS);
  const [currentSlide, setCurrentSlide] = useState(0);
  const sliderId = "uniqueSliderId";

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const tourData = data.rockets.map(
    (rocket: { id: any; name: any; description: any }, index: number) => ({
      id: rocket.id,
      title: rocket.name,
      description: rocket.description,
      image: tourImages[index % tourImages.length],
    })
  );

  console.log(tourData);

  return (
    <SliderContainer>
      <SliderHeader>
        <SliderName>popular tours</SliderName>
        <ButtonContainer className="slider_buttons">
          <SliderButtonPrevious
            type="button"
            className={`slider_button_left ${
              currentSlide === 0 ? "disabled" : ""
            }`}
            aria-label="Previous"
            disabled={currentSlide === 0}
            onClick={() => setCurrentSlide(currentSlide - 1)}
          >
            <Previous src={arrow} alt="Previous" />
          </SliderButtonPrevious>

          <SliderButtonNext
            type="button"
            className={`slider_button_right ${
              currentSlide === tourData.length - 2 ? "disabled" : ""
            }`}
            aria-label="Next"
            disabled={currentSlide === tourData.length - 1}
            onClick={() => setCurrentSlide(currentSlide + 1)}
          >
            <Next src={arrow} alt="Next" />
          </SliderButtonNext>
        </ButtonContainer>
      </SliderHeader>

      <ToursSwiper
        spaceBetween={24}
        slidesPerView={3}
        navigation={{
          nextEl: `.${sliderId}-right`,
          prevEl: `.${sliderId}-left`,
        }}
        modules={[Navigation]}
        onSlideChange={(swiper) => setCurrentSlide(swiper.activeIndex)}
        pagination={{ clickable: true, renderBullet }}
        autoplay={{ delay: 3000 }}
      >
        {tourData.map(
          (tour: { id: any; title: any; description: any; image: any }) => (
            <SwiperSlide>
              <TourCard
                id={tour.id}
                title={tour.title}
                description={tour.description}
                image={tour.image}
              />
            </SwiperSlide>
          )
        )}
      </ToursSwiper>
    </SliderContainer>
  );
};

export default ToursSlider;
