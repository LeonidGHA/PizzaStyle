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
  },
});

// extraReducers: (builder) => {
//   builder.addCase(registrationUser.pending, (state) => {
//     state.isLoading = true;
//     state.error = null;
//   });
//   builder.addCase(registrationUser.fulfilled, (state, { payload }) => {
//     state.user = {
//       ...payload,
//     };
//     state.isLoading = false;
//     state.isLogIn = true;
//     state.error = null;
//   });
//   builder.addCase(registrationUser.rejected, (state, { payload }) => {
//     state.isLoading = false;
//     state.isLogIn = false;
//     state.error = payload;
//   });
// },

export const {
  cartAddPizza,
  cartIncrementPizza,
  cartDecrementPizza,
  cartRemovePizza,
} = cartSlice.actions;
export default cartSlice.reducer;
