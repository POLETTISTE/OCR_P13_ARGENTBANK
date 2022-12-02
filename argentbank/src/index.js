import "../src/styles/main.scss"
import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import store from "./app/store"

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Nav from "./components/Nav"
import Footer from "./components/Footer"
import PageAccueil from "./pages/PageAccueil"
import PageSignIn from "./pages/PageSignIn"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    {/* provider ici */}
    <Provider store={store}>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<PageAccueil />}></Route>
          <Route exact path="/index" element={<PageAccueil />}></Route>
          <Route exact path="/sign-in" element={<PageSignIn />}></Route>
          {/* <Route path="/user/:userId" element={<User />}></Route> */}
          {/* <Route path="*" element></Route> */}
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
)
