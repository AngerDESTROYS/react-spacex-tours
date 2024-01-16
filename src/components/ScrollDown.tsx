import React from "react";
import styled from "styled-components";
import arrow from "../imgs/ArrowDown.svg";

const ScrollWrapper = styled.button`
  width: 231px;
  height: 40px;
  position: absolute;
  bottom: 50px;
  left: 51%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  cursor: pointer;
  z-index: 12;
  background: none;
  border: none;
`;

const ScrollImg = styled.img`
  width: 20px;
  height: 40px; 
  object-fit: contain;
`;

const ScrollName = styled.p`
  font-family: "Lato", sans-serif;
  width: 183px;
  font-size: 32px;
  font-weight: 300;
  line-height: 38px;
  letter-spacing: 0em;
  text-align: center;
  color: white;
  white-space: nowrap;
`;

const ScrollDown = () => {
  const handleScrollDown = () => {
    const yOffset = window.innerHeight;
    window.scroll({
      top: yOffset,
      left: 0,
      behavior: "smooth",
    });
  };

  return (
    <ScrollWrapper onClick={handleScrollDown}>
      <ScrollName>Explore tours</ScrollName>
      <ScrollImg src={arrow} alt="Scroll down" />
    </ScrollWrapper>
  );
};

export default ScrollDown;
