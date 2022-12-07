import "./style.scss"
import logo from "../../img/argentBankLogo.png"
import { NavLink } from "react-router-dom"
import SignIn from "../SignIn"
import SignOut from "../SignOut"

const pathname = window.location.pathname
console.log(pathname)

const Nav = () => {
  return (
    <nav className="main-nav">
      <NavLink to={`/index`} className="main-nav-logo">
        <img
          src={logo}
          alt="Argent Bank Logo"
          className="main-nav-logo-image"
        />

        <h1 className="sr-only">Argent Bank</h1>
      </NavLink>
      {/* if current page is home */}
      {pathname === "/user" ? <SignOut /> : <SignIn />}
      {/* if current page is user */}
    </nav>
  )
}

export default Nav
