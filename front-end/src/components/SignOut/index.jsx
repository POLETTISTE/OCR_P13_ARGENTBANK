import "./style.scss";
import { NavLink } from "react-router-dom";
import { logout } from "../../feature/loginSlice";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleUser, faSignOut } from "@fortawesome/free-solid-svg-icons";
import { useSelector, useDispatch } from "react-redux";

const SignOut = () => {
  const firstName = useSelector((state) => state.login.firstName);
  const editedNameStore = useSelector((state) => state.login.editedName);

  const dispatch = useDispatch();

  const onLogout = () => {
    dispatch(logout());
  };
  return (
    <div className="main-nav-items">
      <NavLink to="/profile">
        <FontAwesomeIcon
          icon={faCircleUser}
          className={
            editedNameStore
              ? "main-nav-item-icon icon-user icon-user-update-infos"
              : "main-nav-item-icon icon-user"
          }
        />
        {firstName}
      </NavLink>

      <NavLink onClick={onLogout} to="/login">
        <FontAwesomeIcon icon={faSignOut} className="main-nav-item-icon" />
        <span>Sign Out</span>
      </NavLink>
    </div>
  );
};

export default SignOut;
