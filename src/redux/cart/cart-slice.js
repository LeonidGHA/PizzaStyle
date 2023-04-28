import { createSlice } from "@reduxjs/toolkit";
// import { logInUser, registrationUser, logOutUser } from "./cart-operations";

const initialState = {
  chosen: [],
  total: null,
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    cartUpdate: (state, { payload }) => {
      state.user = {
        ...payload,
      };
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

export const { cartUpdate } = cartSlice.actions;
export default cartSlice.reducer;
