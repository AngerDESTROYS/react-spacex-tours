import styled from "styled-components";

export const CardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 411px;
  height: 572px;
  border: 1px solid #d3eaff;
`;

export const CardImage = styled.img`
  width: 100%;
  height: 296px;
  object-fit: cover;
  margin-bottom: 32px;
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0;
  padding: 0;
  justify-content: center;
  align-items: center;
`;

export const TourTitle = styled.h2`
  margin: 0;
  padding: 0;
  font-size: 1.5rem;
  margin-bottom: 8px;
  text-transform: uppercase;
  font-family: "Syne", sans-serif;
`;

export const TourDescription = styled.p`
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

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: auto 24px 32px;
`;

export const BuyButton = styled.button`
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

export const ActionButton = styled.button`
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

export const RemoveFromFavoritesButton = styled(ActionButton)``;

export const FavButton = styled(ActionButton)``;

export const FavImg = styled.img``;
export const BinImg = styled.img``;
