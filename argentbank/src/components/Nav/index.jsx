import "./style.scss"
import logo from "../../img/argentBankLogo.png"
import { NavLink } from "react-router-dom"
// import { logout } from "../../feature/loginSlice"

import SignIn from "../SignIn"
import SignOut from "../SignOut"
import { useSelector } from "react-redux"

const Nav = () => {
  const isConnected = useSelector((state) => state.login.isConnected)

  return (
    <nav className="main-nav">
      <NavLink to={"/index"} className="main-nav-logo">
        <img
          src={logo}
          alt="Argent Bank Logo"
          className="main-nav-logo-image"
        />

        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      {/* a modifier avec redux dispatch pour le prenom */}
      {isConnected ? <SignOut name="name" /> : <SignIn />}
      {/* {isConnected ? <SignOut firstName={`${firstName}`} /> : <SignIn />} */}
    </nav>
  )
}

export default Nav
