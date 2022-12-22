import "./style.scss";
import { NavLink } from "react-router-dom";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser } from "@fortawesome/free-solid-svg-icons";

const SignIn = () => {
  return (
    <div>
      <NavLink to="/login">
        <FontAwesomeIcon icon={faCircleUser} className="main-nav-item-icon" />
        <span>Sign In</span>
      </NavLink>
    </div>
  );
};

export default SignIn;
