import { createSlice } from "@reduxjs/toolkit";

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    isConnected: false,
    firstName: "",
    lastName: "",
    editedName: false,
  },
  reducers: {
    login: (state) => {
      state.isConnected = true;
    },
    logout: (state) => {
      state.isConnected = false;
    },
    updateFirstName: (state, action) => {
      state.firstName = action.payload;
    },
    updateLastName: (state, action) => {
      state.lastName = action.payload;
    },
    editedNameTrue: (state) => {
      state.editedName = true;
    },
    editedNameFalse: (state) => {
      state.editedName = false;
    },
  },
});

export const {
  login,
  logout,
  setRememberMe,
  updateFirstName,
  updateLastName,
  editedNameTrue,
  editedNameFalse,
} = loginSlice.actions;

export default loginSlice.reducer;
