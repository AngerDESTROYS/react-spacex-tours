import styled from "styled-components";

export const FavouritesContainer = styled.div`
position: relative;`

export const CustomBlackDiv = styled.div`
  margin: 0;
  padding: 0;
  background-color: black;
  width: 100%;
  height: 440px;
  position: absolute;
  z-index: 10;
  opacity: 64%;
`;

export const FavBackground = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  object-position: top;
`;
export const FavBackgroundContainer = styled.div`
  height: 440px;
  position: relative;
`;

export const FavTours = styled.div`
  width: 1280px;
  margin: 64px auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
export const ToursWrapper = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: row;
  gap: 20px;
  flex-wrap: wrap;
`;

export const ClearButton = styled.p`
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

export const UpperHeader = styled.p`
  position: absolute;
  top: 35%;
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