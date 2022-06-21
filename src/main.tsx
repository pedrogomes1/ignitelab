import { StrictMode } from "react";
import { ApolloProvider } from "@apollo/client";
import ReactDOM from "react-dom/client";
import App from "./App";

import { client } from "./lib/apollo";

import "./styles/global.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ApolloProvider client={client}>
      <App />
    </ApolloProvider>
  </StrictMode>
);
