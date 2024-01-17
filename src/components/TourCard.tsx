import React from "react";
import {
  CardWrapper,
  CardImage,
  CardContent,
  TourTitle,
  TourDescription,
  ButtonWrapper,
  BuyButton,
  RemoveFromFavoritesButton,
  FavButton,
  FavImg,
  BinImg,
} from "../styles/TourCardStyles";
import fav from "../imgs/Favourites.svg";
import bin from "../imgs/Delete.svg";
import { useRecoilState } from "recoil";
import { favoritesState } from "../recoilState";

interface TourCardProps {
  title: string;
  image: string;
  description: string;
  id: string;
}

const TourCard: React.FC<TourCardProps> = ({ title, image, description, id }) => {
  const [favorites, setFavorites] = useRecoilState(favoritesState);
  const isTourInFavorites = favorites.some((tour) => tour.id === id);

  const handleAddToFavorites = () => {
    if (!isTourInFavorites) {
      setFavorites([...favorites, { title, image, description, id }]);
    }
    console.log(favorites)
  };

  const handleRemoveFromFavorites = () => {
    const updatedFavorites = favorites.filter((tour) => tour.id !== id);
    setFavorites(updatedFavorites);
  };

  return (
    <CardWrapper key={id}>
      <CardImage src={image} alt={title} />
      <CardContent>
        <TourTitle>{title}</TourTitle>
        <TourDescription>{description}</TourDescription>
      </CardContent>
      <ButtonWrapper>
        <BuyButton>BUY</BuyButton>
        {isTourInFavorites ? (
          <RemoveFromFavoritesButton onClick={handleRemoveFromFavorites}>
            <BinImg src={bin} />
          </RemoveFromFavoritesButton>
        ) : (
          <FavButton onClick={handleAddToFavorites}>
            <FavImg src={fav} />
          </FavButton>
        )}
      </ButtonWrapper>
    </CardWrapper>
  );
};

export default TourCard;
