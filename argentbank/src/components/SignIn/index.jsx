import "./style.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleUser } from "@fortawesome/free-solid-svg-icons"

const SignIn = () => {
  return (
    <div>
      <a className="main-nav-item" href="./login">
        <FontAwesomeIcon icon={faCircleUser} className="main-nav-item-icon" />
        Sign In
      </a>
    </div>
  )
}

export default SignIn
