import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import App from "./App.jsx";
import { Provider } from "react-redux";
import store from "./store";
import { FavoritesContextProvider } from "./context/FavoritesContext.js";

const app = (
  <Provider store={store}>
    <FavoritesContextProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </FavoritesContextProvider>
  </Provider>
);

ReactDOM.render(app, document.getElementById("root"));
