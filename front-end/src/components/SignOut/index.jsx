import "./style.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleUser, faSignOut } from "@fortawesome/free-solid-svg-icons"
import { useSelector } from "react-redux"

const SignOut = () => {
  const firstName = useSelector((state) => state.login.firstName)

  return (
    <div>
      <a className="main-nav-item" href="/profile">
        <FontAwesomeIcon icon={faCircleUser} className="main-nav-item-icon icon-user" />
        {firstName}
      </a>
      <a className="main-nav-item" href="/login">
        <FontAwesomeIcon icon={faSignOut} className="main-nav-item-icon" />
        Sign Out
      </a>
    </div>
  )
}

export default SignOut
