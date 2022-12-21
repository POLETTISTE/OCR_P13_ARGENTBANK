import { configureStore } from "@reduxjs/toolkit"
import loginReducer from "../src/feature/loginSlice"

const store = configureStore({
  reducer: {
    login: loginReducer,
  },
})

export default store
