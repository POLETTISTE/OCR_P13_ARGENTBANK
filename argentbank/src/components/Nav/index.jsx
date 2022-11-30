import "./style.scss"
import logo from "../../img/argentBankLogo.png"
import { Link } from "react-router-dom"
import SignIn from "../SignIn"

const Nav = () => {
  return (
    <nav className="main-nav">
      <Link to={`/index`} className="main-nav-logo">
        <img
          src={logo}
          alt="Argent Bank Logo"
          className="main-nav-logo-image"
        />

        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      {/* if current page is home */}
      <SignIn />

      {/* if current page is user */}
    </nav>
  )
}

export default Nav
