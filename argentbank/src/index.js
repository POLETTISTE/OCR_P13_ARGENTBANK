import React from "react"
import ReactDOM from "react-dom/client"
import "../src/styles/main.scss"

import { BrowserRouter, Routes, Route } from "react-router-dom"

import PageAccueil from "./pages/PageAccueil"
import PageSignIn from "./pages/PageSignIn"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    {/* nav */}
    {/* main */}
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<PageAccueil />}></Route>
        <Route exact path="/index" element={<PageAccueil />}></Route>
        <Route exact path="/sign-in" element={<PageSignIn />}></Route>
        {/* <Route path="/user/:userId" element={<User />}></Route> */}
        {/* <Route path="*" element></Route> */}
      </Routes>
    </BrowserRouter>
    {/* main */}
    {/* footer */}
  </React.StrictMode>
)
