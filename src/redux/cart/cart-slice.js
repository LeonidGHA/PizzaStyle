import { createSlice } from "@reduxjs/toolkit";
// import { logInUser, registrationUser, logOutUser } from "./cart-operations";

const initialState = {
  chosen: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartAddPizza: (state, { payload }) => {
      state.chosen = [...state.chosen, payload];
    },
    cartIncrementPizza: (state, { payload }) => {
      state.chosen = payload;
    },
    cartDecrementPizza: (state, { payload }) => {
      state.chosen = payload;
    },
    cartRemovePizza: (state, { payload }) => {
      state.chosen = payload;
    },
    cartClearPizza: (state) => {
      state.chosen = initialState.chosen;
    },
  },
});

export const {
  cartAddPizza,
  cartIncrementPizza,
  cartDecrementPizza,
  cartRemovePizza,
  cartClearPizza,
} = cartSlice.actions;
export default cartSlice.reducer;
