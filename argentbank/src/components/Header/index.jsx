import "./style.scss"
import logo from "../../img/argentBankLogo.png"
import { Link } from "react-router-dom"

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
      <div>
        <a class="main-nav-item" href="./sign-in.html">
          <i class="fa fa-user-circle"></i>
          Sign In
        </a>
      </div>
    </nav>
  )
}

export default Header
