import "./style.scss"
import { Link } from "react-router-dom"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleUser } from "@fortawesome/free-solid-svg-icons"

const Form = () => {
  return (
    <section className="sign-in-content">
      <FontAwesomeIcon icon={faCircleUser} className="sign-in-icon" />
      <h1>Sign In</h1>

      <form>
        <div class="input-wrapper">
          <label for="username">Username</label>
          <input type="text" id="username" />
        </div>
        <div class="input-wrapper">
          <label for="password">Password</label>
          <input type="password" id="password" />
        </div>
        <div class="input-remember">
          <input type="checkbox" id="remember-me" />
          <label for="remember-me">Remember me</label>
        </div>
        <Link to={`./user`}>
          <button className="sign-in-button">Sign In</button>
        </Link>
      </form>
    </section>
  )
}

export default Form
