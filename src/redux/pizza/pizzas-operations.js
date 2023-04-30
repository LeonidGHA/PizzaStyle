import { createAsyncThunk } from "@reduxjs/toolkit";
import servisePizza from "../../services/MockApi/pizzaServise";

export const getPizzas = createAsyncThunk(
  "pizzas/getPizzas",
  async (_, { rejectWithValue }) => {
    try {
      const result = await servisePizza.getAllPizzas();

      return result;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);
