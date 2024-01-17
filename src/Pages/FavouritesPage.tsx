import React from "react";
import { useRecoilState } from "recoil";
import { favoritesState } from "../recoilState";
import TourCard from "../components/TourCard";
import img3 from "../imgs/img3.png";
import {
  ClearButton,
  CustomBlackDiv,
  FavBackground,
  FavBackgroundContainer,
  FavTours,
  FavouritesContainer,
  ToursWrapper,
  UpperHeader,
} from "../styles/FavouritesPageStyles";

const FavoritesPage = () => {
  const [favourites, setFavorites] = useRecoilState(favoritesState);

  const handleClearFavorites = () => {
    setFavorites([]);
  };
  return (
    <FavouritesContainer>
      <FavBackgroundContainer>
        <UpperHeader>Favourites</UpperHeader>
        <CustomBlackDiv />
        <FavBackground src={img3} />
      </FavBackgroundContainer>
      <FavTours>
        <ClearButton onClick={handleClearFavorites}>Clear All</ClearButton>
        <ToursWrapper>
          {favourites.map(
            (tour: { id: any; title: any; image: any; description: any }) => (
              <TourCard
                id={tour.id}
                title={tour.title}
                image={tour.image}
                description={tour.description}
              />
            )
          )}
        </ToursWrapper>
      </FavTours>
    </FavouritesContainer>
  );
};

export default FavoritesPage;
