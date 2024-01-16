import React from "react";
import { useRecoilState } from "recoil";
import { favoritesState } from "../recoilState";
import TourCard from "../components/TourCard";
import img3 from "../imgs/img3.png";
import styled from "styled-components";

const CustomBlackDiv = styled.div`
  margin: 0;
  padding: 0;
  background-color: black;
  width: 100%;
  height: 440px;
  position: absolute;
  z-index: 10;
  opacity: 64%;
`;

const FavBackground = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
`;
const FavBackgroundContainer = styled.div`
  height: 440px;
`;

const FavTours = styled.div`
  width: 1280px;
  margin: 64px auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const ToursWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  flex-wrap: wrap;
`;

const ClearButton = styled.p`
  margin-top: 16px;
  margin-left: auto;
  padding: 8px 16px;
  color: rgba(85, 107, 132, 1);
  font-family: Lato;
  font-size: 24px;
  font-weight: 300;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: center;
  border: none;
  cursor: pointer;
`;

const UpperHeader = styled.p`
  position: fixed;
  top: 20%;
  left: 37%;
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

const FavoritesPage = () => {
  const [favourites, setFavorites] = useRecoilState(favoritesState);

  const handleClearFavorites = () => {
    setFavorites([]);
  };
  return (
    <div>
      <UpperHeader>Favourites</UpperHeader>
      <CustomBlackDiv />
      <FavBackgroundContainer>
        <FavBackground src={img3} />
      </FavBackgroundContainer>
      <FavTours>
        <ClearButton onClick={handleClearFavorites}>
          Clear All
        </ClearButton>
        <ToursWrapper>
          {favourites.map((tour: { id: any; title: any; image: any; description: any; }) => (
            <TourCard
              id={tour.id}
              title={tour.title}
              image={tour.image}
              description={tour.description}
            />
          ))}
        </ToursWrapper>
      </FavTours>
    </div>
  );
};

export default FavoritesPage;
