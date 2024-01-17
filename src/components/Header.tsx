import React from "react";
import fav from "../imgs/Favourites.svg";
import {
  HeaderWrapper,
  Logo,
  Navigation,
  Actions,
  FavButton,
  SignButton,
} from "../styles/HeaderStyles";
import { NavLink } from "react-router-dom";

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
