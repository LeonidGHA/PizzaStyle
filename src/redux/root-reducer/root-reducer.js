import { combineReducers } from "@reduxjs/toolkit";

import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import cartSlice from "../cart/cart-slice";
import pizzasSlice from "../pizza/pizzas-slice";

const persistConfig = {
  key: "cart",
  storage,
};

const persistedReducer = persistReducer(persistConfig, cartSlice);

export const rootReducer = combineReducers({
  cart: persistedReducer,
  pizzas: pizzasSlice,
});
