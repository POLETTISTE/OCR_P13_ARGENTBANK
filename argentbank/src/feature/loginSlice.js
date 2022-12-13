import { createSlice } from "@reduxjs/toolkit"

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    isConnected: false,
  },
  reducers: {
    login: (state) => {
      state.isConnected = true
    },
    logout: (state) => {
      state.isConnected = false
    },
    // update first/last avec action payload
  },
})

export const { login, logout } = loginSlice.actions
export default loginSlice.reducer
