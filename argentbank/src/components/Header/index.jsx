import "./style.scss"
import axios from "axios"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { updateFirstName, updateLastName } from "../../feature/loginSlice"
import { useState } from "react"

const Header = () => {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  const dispatch = useDispatch()
  const firstNameStore = useSelector((state) => state.login.firstName)
  const lastNameStore = useSelector((state) => state.login.lastName)

  const modal = document.querySelector(".modal")
  const editButton = document.querySelector(".edit-button")
  const firstNameField = document.getElementById("userFirstName")
  const lastNameField = document.getElementById("userLastName")
  const h1Span = document.querySelector("h1 span")

  const editName = (e) => {
    e.preventDefault()
    h1Span.classList.add("hide")

    modal.classList.remove("hide")
    editButton.classList.add("hide")
  }

  const editNameCancel = (e) => {
    e.preventDefault()
    h1Span.classList.remove("hide")

    firstNameField.value = ""
    lastNameField.value = ""
    modal.classList.add("hide")
    editButton.classList.remove("hide")
  }

  const editNameSave = (e) => {
    e.preventDefault()
    // console.log("validation changements")
    if ((firstNameField.value && lastNameField.value) === "") {
      alert("Firstname and name fields must be filled out")
      return false
    }
    const token = window.localStorage.getItem("token")
    h1Span.classList.remove("hide")

    firstNameField.value = ""
    lastNameField.value = ""
    modal.classList.add("hide")
    editButton.classList.remove("hide")

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
        console.log(res)
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
        <form>
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
              id="submit"
              type="submit"
              value="submit"
              className=""
              onClick={editNameSave}
            >
              Save
            </button>
            <button
              type="submit"
              value="cancel"
              className=""
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
