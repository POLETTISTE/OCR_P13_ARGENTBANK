import "./style.scss";
import axios from "axios";
import { useSelector, useDispatch } from "react-redux";
import { updateFirstName, updateLastName } from "../../feature/loginSlice";
import { useState, useRef } from "react";

const Header = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  const dispatch = useDispatch();

  const firstNameStore = useSelector((state) => state.login.firstName);
  const lastNameStore = useSelector((state) => state.login.lastName);

  // const firstNameField = document.getElementById("userFirstName");
  const firstNameField = useRef(null);
  // const lastNameField = document.getElementById("userLastName");
  const lastNameField = useRef(null);

  const editNameStyle = () => {
    const main = document.querySelector("main");
    const header = document.querySelector(".header");
    const h1 = document.querySelector("h1");
    const h1Span = document.querySelector("h1 span");
    const modal = document.querySelector(".modal");
    const editButton = document.querySelector(".edit-button");
    const transactionButton = document.querySelectorAll(".transaction-button");
    const iconUser = document.querySelector(".icon-user");
    main.classList.add("bg-light");
    header.classList.add("bg-light");
    h1.classList.add("bg-light");
    h1Span.classList.add("hide");
    modal.classList.remove("hide");
    editButton.classList.add("hide");
    transactionButton.forEach((btn) => {
      btn.classList.add("transaction-button-edit");
    });
    iconUser.classList.add("icon-user-update-infos");
  };

  const removeEditNameStyle = () => {
    const main = document.querySelector("main");
    const header = document.querySelector(".header");
    const h1 = document.querySelector("h1");
    const h1Span = document.querySelector("h1 span");
    const modal = document.querySelector(".modal");
    const editButton = document.querySelector(".edit-button");
    const transactionButton = document.querySelectorAll(".transaction-button");
    const iconUser = document.querySelector(".icon-user");
    main.classList.remove("bg-light");
    header.classList.remove("bg-light");
    h1.classList.remove("bg-light");
    h1Span.classList.remove("hide");
    modal.classList.add("hide");
    editButton.classList.remove("hide");
    transactionButton.forEach((btn) => {
      btn.classList.remove("transaction-button-edit");
    });
    iconUser.classList.remove("icon-user-update-infos");
  };

  const editName = (e) => {
    e.preventDefault();
    editNameStyle();
  };

  const editNameCancel = (e) => {
    e.preventDefault();

    removeEditNameStyle();
  };

  const editNameSave = (e) => {
    e.preventDefault();

    if (
      firstNameField.current.value === "" ||
      lastNameField.current.value === ""
    ) {
      alert("Firstname and name fields must be filled out");
      return false;
    }
    const token = window.localStorage.getItem("token");

    removeEditNameStyle();

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
        dispatch(updateLastName(lastName));
        dispatch(updateFirstName(firstName));
      })
      .catch((error) => console.log("erreur dans l'API page User", error));
  };

  return (
    <div className="header">
      <h1>
        Welcome back
        <br /> <span>{firstNameStore + " " + lastNameStore}</span>
      </h1>
      <button className="edit-button" onClick={editName}>
        Edit Name
      </button>
      <div className="modal hide">
        <form className="modal-form">
          <div className="modal-user-infos">
            <label htmlFor="userFirstName">
              <input
                required
                id="userFirstName"
                ref={firstNameField}
                defaultValue={firstNameStore}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </label>
            <label htmlFor="userLastName">
              <input
                required
                id="userLastName"
                ref={lastNameField}
                defaultValue={lastNameStore}
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
