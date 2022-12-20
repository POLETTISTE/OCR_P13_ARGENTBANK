import { createSlice } from "@reduxjs/toolkit"

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    isConnected: false,
    rememberMe: false,
    firstName: "",
    lastName: "",
    lightMode: false,
  },
  reducers: {
    login: (state) => {
      state.isConnected = true
    },

    setRememberMe: (state) => {
      state.rememberMe = true
    },

    updateFirstName: (state, action) => {
      state.firstName = action.payload
    },
    updateLastName: (state, action) => {
      state.lastName = action.payload
    },
    setLightMode: (state) => {
      state.lightMode = true
    },
  },
})

export const {
  login,
  setRememberMe,
  updateFirstName,
  updateLastName,
  setLightMode,
} = loginSlice.actions

export default loginSlice.reducer
