import styled from "styled-components";

export const ScrollWrapper = styled.button`
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

export const ScrollImg = styled.img`
  width: 20px;
  height: 40px;
  object-fit: contain;
`;

export const ScrollName = styled.p`
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
