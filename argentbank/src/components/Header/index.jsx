import "./style.scss"
import axios from "axios"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import {
  login,
  updateFirstName,
  updateLastName,
} from "../../feature/loginSlice"
import { useState } from "react"

const Header = () => {
  const dispatch = useDispatch()
  const firstNameStore = useSelector((state) => state.login.firstName)
  const lastNameStore = useSelector((state) => state.login.lastName)

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const modal = document.querySelector(".modal")

  const editName = () => {
    modal.classList.remove("hide")
  }

  const editNameValidation = (e) => {
    e.preventDefault()
    console.log("validation changements")

    const token = window.localStorage.getItem("token")
    modal.classList.add("hide")
    // dispatch(updateFirstName(firstName))

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
        <br />
        {firstNameStore}
      </h1>
      <button className="edit-button" onClick={editName}>
        Edit Name
      </button>
      <div className="modal hide">
        <form>
          <label htmlFor="userFirstName">
            <input
              id="userFirstName"
              onChange={(e) => setFirstName(e.target.value)}
              placeholder={firstNameStore}
              // value="{firstNameStore}"
            />
          </label>
          <label htmlFor="userLastName">
            <input
              id="userLastName"
              onChange={(e) => setLastName(e.target.value)}
              placeholder={lastNameStore}
              // value="{lastNameStore}"
            />
          </label>
          <button
            type="submit"
            value="submit"
            className=""
            onClick={editNameValidation}
          >
            ok
          </button>
        </form>
      </div>
    </div>
  )
}

export default Header
