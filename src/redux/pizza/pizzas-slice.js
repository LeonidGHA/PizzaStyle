import { createSlice } from "@reduxjs/toolkit";
import { getPizzas } from "./pizzas-operations";

const initialState = {
  allPizzas: [],
  isLoading: true,
  error: null,
};

const pizzasSlise = createSlice({
  name: "pizzas",
  initialState,
  extraReducers: (builder) => {
    builder.addCase(getPizzas.pending, (state) => {
      state.isLoading = true;
      state.error = null;
    });
    builder.addCase(getPizzas.fulfilled, (state, { payload }) => {
      state.allPizzas = [...state.allPizzas, ...payload];
      state.isLoading = false;
      state.error = null;
    });
    builder.addCase(getPizzas.rejected, (state, { payload }) => {
      state.isLoading = false;
      state.error = payload;
    });
  },
});

export default pizzasSlise.reducer;
