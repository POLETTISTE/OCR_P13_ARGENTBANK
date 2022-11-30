import React from "react"
import ReactDOM from "react-dom/client"
import "../src/styles/main.scss"

import Accueil from "./pages/Accueil"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <Accueil />
  </React.StrictMode>
)
