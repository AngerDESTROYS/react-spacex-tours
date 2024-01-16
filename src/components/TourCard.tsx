import React from "react";
import styled from "styled-components";
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

const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 411px;
  height: 572px;
  border: 1px solid #d3eaff;
`;

const CardImage = styled.img`
  width: 100%;
  height: 296px;
  object-fit: cover;
  margin-bottom: 32px;
`;

const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: center;
`;

const TourTitle = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 1.5rem;
  margin-bottom: 8px;
  text-transform: uppercase;
  font-family: "Syne", sans-serif;
`;

const TourDescription = styled.p`
  box-sizing: border-box;
  color: #666;
  margin: 0 32px;
  width: 347px;
  padding: 0;
  font-family: Lato;
  font-size: 24px;
  font-weight: 300;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: center;
  min-height: 58px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  white-space: normal;
  -webkit-line-clamp: 3;
  overflow: hidden;
  text-overflow: ellipsis;
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto 24px 32px;
`;

const BuyButton = styled.button`
  width: 278px;
  height: 53px;
  padding: 12px, 0px, 12px, 0px;
  gap: 10px;
  color: #000000;
  background-color: #d3eaff;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;
  font-family: Syne;
  font-size: 24px;
  font-weight: 600;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: center;

  &:hover {
    background-color: #0056b3;
  }
`;

const ActionButton = styled.button`
  width: 53px;
  height: 53px;
  gap: 10px;
  background-color: #ececec;
  color: white;
  border: none;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #0056b3;
  }
`;

const RemoveFromFavoritesButton = styled(ActionButton)``;

const FavButton = styled(ActionButton)``;

const FavImg = styled.img``;
const BinImg = styled.img``;

const TourCard: React.FC<TourCardProps> = ({ title, image, description, id }) => {
  const [favorites, setFavorites] = useRecoilState(favoritesState);
  const isTourInFavorites = favorites.some((tour) => tour.id === id);

  const handleAddToFavorites = () => {
    if (!isTourInFavorites) {
      setFavorites([...favorites, { title, image, description, id }]);
    }
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
