import React from "react";
import { ScrollWrapper, ScrollImg, ScrollName } from "../styles/ScrollDownStyles";
import arrow from "../imgs/ArrowDown.svg";

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