import { createSlice } from "@reduxjs/toolkit"

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    isConnected: false,
    rememberMe: false,
    // email:null,
    // password:null,
    firstName: "",
    lastName: "",
  },
  reducers: {
    login: (state) => {
      state.isConnected = true
    },
    logout: (state) => {
      state.isConnected = false
    },
    setRememberMe: (state) => {
      state.rememberMe = true
    },
    clearRememberMe: (state) => {
      state.rememberMe = false
    },

    updateFirstName: (state, action) => {
      state.firstName = action.payload
    },
    updateLastName: (state, action) => {
      state.lastName = action.payload
    },
  },
})

export const {
  login,
  logout,
  setRememberMe,
  clearRememberMe,
  updateFirstName,
  updateLastName,
} = loginSlice.actions

export default loginSlice.reducer
