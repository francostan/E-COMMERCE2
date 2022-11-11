import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user";
import productsReducer from "./products";
import favoritesReducer from "./favorites";
import subTotalReducer from "./subtotal";

export default configureStore({
  reducer: {
    user: userReducer,
    products: productsReducer,
    favorites: favoritesReducer,
    subtotal: subTotalReducer,
  },
});
