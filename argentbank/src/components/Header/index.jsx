import "./style.scss"
import axios from "axios"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import { login, updateFirstName } from "../../feature/loginSlice"
import { useState } from "react"

const Header = () => {
  const dispatch = useDispatch()
  const firstNameStore = useSelector((state) => state.login.firstName)
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const modal = document.querySelector(".modal")

  const editName = () => {
    console.log("modale")
    modal.classList.remove("hide")

    console.log(modal)
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
        },
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        dispatch(updateFirstName(firstName))

        console.log(res)
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
          <label htmlFor="username">
            Username
            <input
              id="username"
              onChange={(e) => setFirstName(e.target.value)}
              placeholder=""
              // value="{firstNameStore}"
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
