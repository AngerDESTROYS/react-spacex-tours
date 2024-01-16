import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import App from "./App";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { createGlobalStyle } from "styled-components";
import SyneRegular from "./fonts/Syne/static/Syne-Bold.ttf";
import SyneBold from "./fonts/Syne/static/Syne-ExtraBold.ttf";
import LatoRegular from "./fonts/Lato/Lato-Light.ttf";
import LatoMenu from "./fonts/Lato/Lato-Regular.ttf";
import { RecoilRoot } from "recoil";

const GlobalStyle = createGlobalStyle`
@font-face {
  font-family: 'Syne';
  src: url(${SyneRegular}) format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'LatoMenu';
  src: url(${LatoMenu}) format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'Lato';
  src: url(${LatoRegular}) format('truetype');
  font-weight: normal;
  font-style: normal;
}

@font-face {
  font-family: 'SyneBold';
  src: url(${SyneBold}) format('truetype');
  font-weight: bold;
  font-style: normal;
}
html {
  background:#fff; /* this is needed to make sure the blending works fine (any color will do the trick) */
}
  body {
    position: relative;
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Arial', sans-serif;
  }
`;

const client = new ApolloClient({
  uri: " https://spacex-production.up.railway.app/",
  cache: new InMemoryCache(),
});

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <Router>
      <RecoilRoot>
        <ApolloProvider client={client}>
          <GlobalStyle />
          <App />
        </ApolloProvider>
      </RecoilRoot>
    </Router>
  </React.StrictMode>
);
