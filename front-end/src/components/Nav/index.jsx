import "./style.scss";
import logo from "../../img/argentBankLogo.png";
import { NavLink } from "react-router-dom";
import SignIn from "../SignIn";
import SignOut from "../SignOut";
import { useSelector, useDispatch } from "react-redux";
import { editedNameFalse } from "../../feature/loginSlice";

const Nav = () => {
  const isConnected = useSelector((state) => state.login.isConnected);
  const dispatch = useDispatch();

  const resetEditState = () => {
    dispatch(editedNameFalse(false));
  };
  return (
    <nav className="main-nav">
      <NavLink to={"/index"} className="main-nav-logo" onClick={resetEditState}>
        <img
          src={logo}
          alt="Argent Bank Logo"
          className="main-nav-logo-image"
        />
        <h2 className="sr-only">Argent Bank</h2>
      </NavLink>
      {isConnected ? <SignOut /> : <SignIn />}
    </nav>
  );
};

export default Nav;
