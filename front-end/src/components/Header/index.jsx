import "./style.scss";
import { useState } from "react";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import {
  updateFirstName,
  updateLastName,
  editedNameTrue,
  editedNameFalse,
} from "../../feature/loginSlice";

const Header = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const dispatch = useDispatch();

  const firstNameStore = useSelector((state) => state.login.firstName);
  const lastNameStore = useSelector((state) => state.login.lastName);
  const editedNameStore = useSelector((state) => state.login.editedName);

  const editName = (e) => {
    e.preventDefault();
    dispatch(editedNameTrue());
  };

  const editNameCancel = (e) => {
    e.preventDefault();
    dispatch(editedNameFalse());
  };

  const editNameSave = (e) => {
    e.preventDefault();

    if (firstName === "" || lastName === "") {
      alert("Firstname and name fields must be filled out");

      return false;
    }
    dispatch(editedNameFalse());

    const token = window.localStorage.getItem("token");

    axios
      .put(
        "http://localhost:3001/api/v1/user/profile",

        {
          firstName: firstName,
          lastName: lastName,
        },
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        dispatch(updateFirstName(firstName));
        dispatch(updateLastName(lastName));
      })
      .catch((error) => console.log("erreur dans l'API page User", error));
  };

  return (
    <div className={editedNameStore ? "header-black bg-light" : "header"}>
      <h1 className={editedNameStore ? "bg-light" : ""}>
        Welcome back
        <br />
        <span className={editedNameStore ? "hide" : ""}>
          {firstNameStore + " " + lastNameStore}
        </span>
      </h1>
      <button
        className={editedNameStore ? "edit-button hide" : "edit-button "}
        onClick={editName}>
        Edit Name
      </button>
      <div className={editedNameStore ? "modal " : "modal hide "}>
        <form className="modal-form">
          <div className="modal-user-infos">
            <label htmlFor="userFirstName">
              <input
                required
                id="userFirstName"
                placeholder={firstNameStore}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>
            <label htmlFor="userLastName">
              <input
                required
                id="userLastName"
                placeholder={lastNameStore}
                onChange={(e) => setLastName(e.target.value)}
              />
            </label>
          </div>
          <div className="modal-btn">
            <button
              id="submit-form"
              type="submit"
              value="submit"
              onClick={editNameSave}>
              Save
            </button>
            <button
              id="cancel"
              type="submit"
              value="cancel"
              onClick={editNameCancel}>
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Header;
