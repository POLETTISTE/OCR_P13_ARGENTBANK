import "./style.scss"
import Nav from "../Nav/index"
import Footer from "../Footer/index"
import PageAccueil from "../../pages/PageAccueil"
import PageSignIn from "../../pages/PageSignIn"
import PageUser from "../../pages/PageUser"

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"
import { useSelector } from "react-redux"

const App = () => {
  const isConnected = useSelector((state) => state.login.isConnected)

  const ProtectedRoute = ({ children }) => {
    if (!isConnected) {
      return <Navigate to="/" replace />
    }
    return children
  }
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<PageAccueil />}></Route>
          <Route exact path="/index" element={<PageAccueil />}></Route>
          <Route exact path="/login" element={<PageSignIn />}></Route>
          <Route
            exact
            path="/profile"
            element={
              <ProtectedRoute>
                <PageUser />
              </ProtectedRoute>
            }
          ></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  )
}

export default App
