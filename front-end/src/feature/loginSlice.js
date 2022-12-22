import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    isConnected: false,
    rememberMe: false,
    firstName: "",
    lastName: "",
  },
  reducers: {
    login: (state) => {
      state.isConnected = true;
    },
    logout: (state) => {
      state.isConnected = false;
    },

    setRememberMe: (state) => {
      state.rememberMe = true;
    },

    updateFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    updateLastName: (state, action) => {
      state.lastName = action.payload;
    },
  },
});

export const { login, logout, setRememberMe, updateFirstName, updateLastName } =
  loginSlice.actions;

export default loginSlice.reducer;
