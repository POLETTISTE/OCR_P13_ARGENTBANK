import { createSlice } from "@reduxjs/toolkit"

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    isConnected: false,
    updateFirstName: "",
    updateLastName: "",
  },
  reducers: {
    login: (state) => {
      state.isConnected = true
    },
    logout: (state) => {
      state.isConnected = false
    },
    firstName: (state) => {
      state.updateFirstName = ""
    },
    lastName: (state) => {
      state.updateLastName = ""
    },
    // update first/last avec action payload
  },
})

export const { login, logout } = loginSlice.actions
export default loginSlice.reducer
