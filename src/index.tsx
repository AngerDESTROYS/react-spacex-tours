import React from "react";
import ReactDOM from "react-dom/client";
import { HashRouter as Router } from "react-router-dom";
import App from "./App";
import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";
import { RecoilRoot } from "recoil";
import GlobalStyle from "./styles/GlobalStyles";

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
