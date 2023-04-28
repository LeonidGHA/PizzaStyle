// import { createAsyncThunk } from "@reduxjs/toolkit";

// import {
//   logInFB,
//   logOutFb,
//   registrationFB,
// } from "@/shared/requestFirebase/auth/auth";

// export const logInUser = createAsyncThunk(
//   "auth/logIn",
//   async (data, { rejectWithValue }) => {
//     try {
//       const result = await logInFB(data);
//       return result;
//     } catch (error) {
//       // console.log(error.code);

//       return rejectWithValue(error.code);
//     }
//   }
// );
// export const logOutUser = createAsyncThunk(
//   "auth/logOut",
//   async (_, { rejectWithValue }) => {
//     try {
//       await logOutFb();
//     } catch (error) {
//       console.log(error.response.data.message);
//       return rejectWithValue(error.message);
//     }
//   }
// );

// export const registrationUser = createAsyncThunk(
//   "auth/registration",
//   async (data, { rejectWithValue }) => {
//     try {
//       const result = await registrationFB(data);
//       return result;
//     } catch (error) {
//       return rejectWithValue(error.code);
//     }
//   }
// );
