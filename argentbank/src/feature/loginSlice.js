import { createSlice } from "@reduxjs/toolkit"

export const loginSlice = createSlice({
  name: "login",
  initialState: {
    data: [],
  },
  reducers: {
    setLoginData: (state, action) => {
      state.data.push(action.payload)
    },
  },
})

export const { setLoginData } = loginSlice.actions
export default loginSlice.reducer
