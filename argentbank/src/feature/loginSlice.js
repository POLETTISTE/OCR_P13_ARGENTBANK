import { createSlice } from "@reduxjs/toolkit"

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    data: [],
  },
  reducers: {
    login: (state, action) => {
      state.data.push(action.payload)
    },
  },
})

export const { login } = loginSlice.actions
export default loginSlice.reducer
