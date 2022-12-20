import "./style.scss"
import axios from "axios"
import { useSelector, useDispatch } from "react-redux"
import {
  updateFirstName,
  updateLastName,
  setLightMode,
  // clearLightMode,
} from "../../feature/loginSlice"
import { useState } from "react"

const Header = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  const dispatch = useDispatch()
  // utiliser use selector pour voir si lightmode est true
  const firstNameStore = useSelector((state) => state.login.firstName)
  const lastNameStore = useSelector((state) => state.login.lastName)
  const isLightModeStore = useSelector((state) => state.login.lightMode)
  // {
  //   isLightModeStore ? editNameStyle() : removeEditNameStyle()
  // }

  const firstNameField = document.getElementById("userFirstName")
  const lastNameField = document.getElementById("userLastName")
  const main = document.querySelector("main")
  const header = document.querySelector(".header")
  const h1 = document.querySelector("h1")
  const h1Span = document.querySelector("h1 span")
  const modal = document.querySelector(".modal")
  const editButton = document.querySelector(".edit-button")
  const transactionButton = document.querySelectorAll(".transaction-button")
  const transactionButtonEdit = document.querySelectorAll(
    ".transaction-button-edit"
  )

  const editNameStyle = () => {
    main.classList.add("bg-light")
    header.classList.add("bg-light")
    h1.classList.add("bg-light")
    h1Span.classList.add("hide")
    modal.classList.remove("hide")
    editButton.classList.add("hide")
    transactionButton.forEach((btn) => {
      btn.classList.add("transaction-button-edit")
    })
  }

  const removeEditNameStyle = () => {
    main.classList.remove("bg-light")
    header.classList.remove("bg-light")
    h1.classList.remove("bg-light")
    h1Span.classList.remove("hide")
    modal.classList.add("hide")
    editButton.classList.remove("hide")
    transactionButtonEdit.forEach((btn) => {
      btn.classList.remove("transaction-button-edit")
    })
  }

  const editName = (e) => {
    e.preventDefault()
    dispatch(setLightMode(true))

    editNameStyle()
  }

  const editNameCancel = (e) => {
    e.preventDefault()
    dispatch(setLightMode(false))

    removeEditNameStyle()
    firstNameField.value = ""
    lastNameField.value = ""
  }

  const editNameSave = (e) => {
    e.preventDefault()
    dispatch(setLightMode(false))

    if ((firstNameField.value && lastNameField.value) === "") {
      alert("Firstname and name fields must be filled out")
      return false
    }
    const token = window.localStorage.getItem("token")

    removeEditNameStyle()
    firstNameField.value = ""
    lastNameField.value = ""

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
        dispatch(updateLastName(lastName))
        dispatch(updateFirstName(firstName))
      })
      .catch((error) => console.log("erreur dans l'API page User", error))
  }

  return (
    <div className="header">
      <h1>
        Welcome back
        <br /> <span>{firstNameStore}</span>
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
                onChange={(e) => setFirstName(e.target.value)}
                placeholder={firstNameStore}
              />
            </label>
            <label htmlFor="userLastName">
              <input
                required
                id="userLastName"
                onChange={(e) => setLastName(e.target.value)}
                placeholder={lastNameStore}
              />
            </label>
          </div>
          <div className="modal-btn">
            <button
              id="submit-form"
              type="submit"
              value="submit"
              onClick={editNameSave}
            >
              Save
            </button>
            <button
              id="cancel"
              type="submit"
              value="cancel"
              onClick={editNameCancel}
            >
              Cancel
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Header
