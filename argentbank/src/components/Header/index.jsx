import "./style.scss"
import logo from "../../img/argentBankLogo.png"
import { Link } from "react-router-dom"
import SignIn from "../SignIn"

const Header = () => {
  return (
    <nav className="main-nav">
      <Link to={`/`} className="main-nav-logo">
        <img
          src={logo}
          alt="Argent Bank Logo"
          className="main-nav-logo-image"
        />

        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <SignIn />
      {/* <div>
        <a className="main-nav-item" href="./sign-in.html">
          <FontAwesomeIcon icon={faCircleUser} className="main-nav-item-icon" />
          Sign In
        </a>
      </div> */}
    </nav>
  )
}

export default Header
