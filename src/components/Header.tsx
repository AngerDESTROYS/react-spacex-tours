import React from "react";
import styled from "styled-components";
import logo from "../imgs/logo.svg";
import fav from "../imgs/Favourites.svg";
import { NavLink } from "react-router-dom";

const HeaderWrapper = styled.header`
  position: fixed;
  height: 80px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  display: flex;
  align-items: center;
  color: white;
  background: rgba(30, 30, 30, 0.48);
`;

const Logo = styled(NavLink)`
  width: 229px;
  height: 42px;
  top: 19px;
  left: 80px;
  background: url(${logo}) no-repeat;
  mix-blend-mode: screen;
  position: fixed;
  z-index: 2000;
`;

const Navigation = styled.nav`
  position: fixed;
  left: 43%;
  font-family: "LatoMenu";
  text-transform: uppercase;
  font-size: 16px;
  font-weight: 500;
  line-height: 19px;
  letter-spacing: 0em;
  text-align: center;

  ul {
    list-style: none;
    display: flex;
    margin: 0;
    padding: 0;

    li {
      margin-right: 20px;
      a {
        text-decoration: none;
        color: rgba(255, 255, 255, 1);

        &:hover {
          text-decoration: underline;
        }
        &.active {
          &:before {
            content: "";
            position: absolute;
            bottom: -4px;
            left: 0;
            width: 50px;
            height: 1px;
            background-color: rgba(255, 255, 255, 1);
          }
        }
      }
    }
  }
`;

const Actions = styled.div`
  display: flex;
  margin-left: auto;
  margin-right: 80px;
  button {
    margin-left: 10px;
    padding: 8px 16px;
    background-color: #007bff;
    color: white;
    border: none;
    cursor: pointer;

    &:hover {
      background-color: #0056b3;
    }
  }
`;

const FavButton = styled(NavLink)`
  display: flex;
  margin-right: 16px;
  padding: 8px 16px;
  background: rgba(236, 236, 236, 1);
  justify-content: center;
  color: #1e1e1e;
  text-decoration: none;

  &:hover {
    background: #a3d7ff;
  }
  &.active {
    text-decoration: underline;
    background: rgba(221, 55, 125, 1);
  }
`;

const SignButton = styled(NavLink)`
  width: 163px;
  height: 53px;
  background: rgba(211, 234, 255, 1);
  color: #000000;
  display: flex;
  justify-content: center;
  align-items: center;
  text-decoration: none;
  font-family: Syne;
  font-size: 24px;
  font-weight: 600;
  line-height: 29px;
  letter-spacing: 0em;
  text-align: center;
  text-transform: uppercase;

  &:hover {
    background: #0056b3;
  }
`;

const Header = () => {
  return (
    <>
      <Logo to="/"/>

      <HeaderWrapper>
        <Navigation>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/tours">Tours</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
            <li>
              <NavLink to="/help">Help</NavLink>
            </li>
          </ul>
        </Navigation>

        <Actions>
          <FavButton to="/favourites">
            <img src={fav} alt="favourites" />
          </FavButton>
          <SignButton to="/">Sign in</SignButton>
        </Actions>
      </HeaderWrapper>
    </>
  );
};

export default Header;
