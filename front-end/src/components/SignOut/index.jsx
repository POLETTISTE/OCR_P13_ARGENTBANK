import "./style.scss";
import { Link } from "react-router-dom";
import { logout } from "../../feature/loginSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";

const SignOut = () => {
  const firstName = useSelector((state) => state.login.firstName);
  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <div>
      <Link to="/profile">
        <FontAwesomeIcon
          icon={faCircleUser}
          className="main-nav-item-icon icon-user"
        />
        {firstName}
      </Link>

      <Link onClick={onLogout} to="/login">
        <FontAwesomeIcon icon={faSignOut} className="main-nav-item-icon" />
        Sign Out
      </Link>
    </div>
  );
};

export default SignOut;
