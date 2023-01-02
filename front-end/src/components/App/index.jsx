import "./style.scss";
import Nav from "../Nav/index";
import Footer from "../Footer/index";
import PageAccueil from "../../pages/PageAccueil";
import PageSignIn from "../../pages/PageSignIn";
import PageUser from "../../pages/PageUser";
import PageError from "../../pages/PageError";

import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useSelector } from "react-redux";
import PropTypes from "prop-types";

const App = () => {
  const isConnected = useSelector((state) => state.login.isConnected);

  /**
   * Represents Protected route.
   * @constructor
   * @param {component} children - The child component which is protected (pageUser component).
   */
  const ProtectedRoute = ({ children }) => {
    if (!isConnected) {
      return <Navigate to="/" replace />;
    }
    return children;
  };

  //children must be a component (page user)
  ProtectedRoute.propTypes = {
    children: PropTypes.element.isRequired,
  };

  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route exact path="/" element={<PageAccueil />}></Route>
          <Route exact path="/index" element={<PageAccueil />}></Route>
          <Route exact path="/login" element={<PageSignIn />}></Route>
          <Route path="*" element={<PageError />}></Route>

          <Route
            exact
            path="/profile"
            element={
              <ProtectedRoute>
                <PageUser />
              </ProtectedRoute>
            }></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
