import "./style.scss"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleUser } from "@fortawesome/free-solid-svg-icons"

import { useState } from "react"
import { useNavigate } from "react-router-dom"
import { useDispatch } from "react-redux"

import { login, setRememberMe } from "../../feature/loginSlice"

import axios from "axios"

const Form = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()

  const [userEmail, setUserEmail] = useState("")
  const [userPassword, setUserPassword] = useState("")

  const onSubmit = (e) => {
    e.preventDefault()
    axios
      .post("http://localhost:3001/api/v1/user/login", {
        email: `${userEmail}`,
        password: `${userPassword}`,
      })

      .then((res) => {
        dispatch(login())

        localStorage.setItem("token", res.data.body.token)

        navigate("/profile")
      })
      .catch((error) => console.log("erreur dans l'API Form", error))
  }

  return (
    <section className="sign-in-content">
      <FontAwesomeIcon icon={faCircleUser} className="sign-in-icon" />
      <h1>Sign In</h1>
      <form onSubmit={onSubmit}>
        <div className="input-wrapper">
          <label htmlFor="userEmail">
            Username
            <input
              id="userEmail"
              onChange={(e) => setUserEmail(e.target.value)}
              value={userEmail}
            />
          </label>
        </div>
        <div className="input-wrapper">
          <label htmlFor="userPassword">
            Password
            <input
              id="userPassword"
              onChange={(e) => setUserPassword(e.target.value)}
              value={userPassword}
            />
          </label>
        </div>
        <div className="input-remember">
          <label htmlFor="remember-me">
            Remember me
            <input
              type="checkbox"
              onChange={(e) => dispatch(setRememberMe(e.target.value))}
              //

              //rajouter on select setusertoken(tokern.value) dans le local storage
            />
          </label>
        </div>
        <button type="submit" value="submit" className="sign-in-button">
          Sign In
        </button>
      </form>
    </section>
  )
}

export default Form
