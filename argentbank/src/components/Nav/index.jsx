import "./style.scss"
import logo from "../../img/argentBankLogo.png"
import { NavLink } from "react-router-dom"
// import { logout } from "../../feature/loginSlice"

import SignIn from "../SignIn"
import SignOut from "../SignOut"
import { useDispatch, useSelector } from "react-redux"
import store from "../../store"

const Nav = () => {
  const dispatch = useDispatch()
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

      {isConnected ? <SignOut /> : <SignIn />}
    </nav>
  )
}

export default Nav
