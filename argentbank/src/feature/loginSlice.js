import { createSlice } from "@reduxjs/toolkit"

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    isConnected: false,
    firstName: null,
    lastName: null,
  },
  reducers: {
    login: (state) => {
      state.isConnected = true
    },
    logout: (state) => {
      state.isConnected = false
    },
    updateFirstName: (state, action) => {
      state.firstName = action.payload
    },
    updateLastName: (state, action) => {
      state.lastName = ""
    },
    // update first/last avec action payload
  },
})

export const { login, logout, updateFirstName, updateLastName } =
  loginSlice.actions

export default loginSlice.reducer
