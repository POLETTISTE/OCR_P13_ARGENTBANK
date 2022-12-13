import "./style.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleUser, faSignOut } from "@fortawesome/free-solid-svg-icons"

const SignOut = ({ firstName }) => {
  return (
    <div>
      <a className="main-nav-item" href="./user">
        <FontAwesomeIcon icon={faCircleUser} className="main-nav-item-icon" />
        {firstName}
      </a>
      <a className="main-nav-item" href="./sign-in">
        <FontAwesomeIcon icon={faSignOut} className="main-nav-item-icon" />
        Sign Out
      </a>
    </div>
  )
}

export default SignOut
