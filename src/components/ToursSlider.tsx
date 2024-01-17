import React, { useState } from "react";
import { useQuery, gql } from "@apollo/client";
import SwiperCore, { Navigation, Pagination, Autoplay } from "swiper";
import { SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import TourCard from "./TourCard";
import img1 from "../imgs/img1.png";
import img2 from "../imgs/img2.png";
import img3 from "../imgs/img3.png";
import arrow from "../imgs/arrow-left.svg";
import { ButtonContainer, Next, Previous, SliderButtonNext, SliderButtonPrevious, SliderContainer, SliderHeader, SliderName, ToursSwiper } from "../styles/ToursSliderStyles";

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

  return (
    <SliderContainer>
      <SliderHeader>
        <SliderName>popular tours</SliderName>
        <ButtonContainer className="slider_buttons">
          <SliderButtonPrevious
            type="button"
            className={`slider_button_left ${
              currentSlide === 0 ? "disabled" : ""
            } uniqueSliderId-left`}
            aria-label="Previous"
            disabled={currentSlide === 0}
            onClick={() => setCurrentSlide(currentSlide - 1)}
          >
            <Previous src={arrow} alt="Previous" />
          </SliderButtonPrevious>

          <SliderButtonNext
            type="button"
            className={`slider_button_right ${
              currentSlide === (tourData.length - 3) ? "disabled" : ""
            } uniqueSliderId-right`}
            aria-label="Next"
            disabled={currentSlide === tourData.length - 3}
            onClick={() => {
              setCurrentSlide(currentSlide + 1);
              console.log(currentSlide, tourData.length, currentSlide === tourData.length - 3);
            }}
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
            <SwiperSlide key={tour.id}>
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