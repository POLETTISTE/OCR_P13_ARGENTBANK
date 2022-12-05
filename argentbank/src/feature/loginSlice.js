import { createSlice } from "@reduxjs/toolkit"
const axios = require("axios")

const API_URL = "http://localhost:3001/api/v1/user/login"

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

export const loginAsync = (data) => async (dispatch) => {
  try {
    // console.log(data);
    const response = await axios.post(API_URL, data)
    // console.log(response);
    dispatch(showLogin(response.data))
  } catch (err) {
    throw new Error(err)
  }
}

export const { login } = loginSlice.actions
export const showLogin = (state) => state.login.data
export default loginSlice.reducer
