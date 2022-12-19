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
        <h2 className="sr-only">Argent Bank</h2>
      </NavLink>
      {isConnected ? <SignOut /> : <SignIn />}
    </nav>
  )
}

export default Nav
