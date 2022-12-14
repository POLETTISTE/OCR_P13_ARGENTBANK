import "./style.scss"
import axios from "axios"
import { useDispatch, useSelector } from "react-redux"
import { useEffect } from "react"

const Header = () => {
  const dispatch = useDispatch()

  const firstName = useSelector((state) => state.login.firstName)

  const editName = () => {
    console.log("modale")
    const modal = document.querySelector(".modal")
    modal.classList.remove("hide")

    console.log(modal)
  }

  const editNameValidation = () => {
    const token = window.localStorage.getItem("token")
    axios
      .put(
        "http://localhost:3001/api/v1/user/profile",

        {
          //enregistre prenom
        },
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        // dispatch(updateFirstName(res.data.body.firstName))
        console.log(res)
      })
      .catch((error) => console.log("erreur dans l'API page User", error))
  }

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {firstName}
      </h1>
      <button className="edit-button" onClick={editName}>
        Edit Name
      </button>
      <div className="modal hide">ICI EST LA MODALE POUR MODIFIER</div>
    </div>
  )
}

export default Header
