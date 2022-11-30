import React from "react"
import ReactDOM from "react-dom/client"
import "../src/styles/main.scss"

import { BrowserRouter, Routes, Route } from "react-router-dom"

import Accueil from "./pages/Accueil"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Accueil />}></Route>
        {/* <Route path="/user/:userId" element={<User />}></Route> */}
        {/* <Route path="*" element></Route> */}
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
)
