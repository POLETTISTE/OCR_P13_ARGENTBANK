import "./style.scss"
import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleUser } from "@fortawesome/free-solid-svg-icons"
import { useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { login } from "../../feature/loginSlice"
import axios from "axios"

const Form = () => {
  const dispatch = useDispatch()

  const [userEmail, setUserEmail] = useState("")
  const [userPassword, setUserPassword] = useState("")
  const navigate = useNavigate()

  const onSubmit = () => {
    axios
      .post("http://localhost:3001/api/v1/user/login", {
        email: `${userEmail}`,
        password: `${userPassword}`,
      })

      .then((res) => {
        dispatch(login())
        localStorage.setItem("token", res.data.body.token)
        navigate("/user")
      })
  }

  return (
    <section className="sign-in-content">
      <FontAwesomeIcon icon={faCircleUser} className="sign-in-icon" />
      <h1>Sign In</h1>
      <form onSubmit={onSubmit}>
        <div className="input-wrapper">
          <label for="username">
            Username
            <input
              id="username"
              onChange={(e) => setUserEmail(e.target.value)}
              value={userEmail}
            />
          </label>
        </div>
        <div className="input-wrapper">
          <label for="email">
            Password
            <input
              id="password"
              onChange={(e) => setUserPassword(e.target.value)}
              value={userPassword}
            />
          </label>
        </div>
        <div className="input-remember">
          <label for="remember-me">
            Remember me
            <input type="checkbox" />
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
