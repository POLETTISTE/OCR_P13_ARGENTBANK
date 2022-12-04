import "./style.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleUser } from "@fortawesome/free-solid-svg-icons"
import { useForm } from "react-hook-form"
import { useEffect, useState } from "react"
import axios from "axios"

const Form = () => {
  // const inputMail = document.getElementById("username")
  // const inputPassword = document.getElementById("password")

  const [userEmail, setUserEmail] = useState(null)
  const [userPassword, setUserPassword] = useState(null)
  const [userToken, setUserToken] = useState(null)

  const { register, handleSubmit } = useForm()

  const onSubmit = () => {
    setUserEmail(document.getElementById("username").value)
    setUserPassword(document.getElementById("password").value)
  }

  useEffect(() => {
    axios
      .post("http://localhost:3001/api/v1/user/login", {
        email: `${userEmail}`,
        password: `${userPassword}`,
      })
      .then((res) => setUserToken(res.data.body.token))

    if (userToken) {
      console.log("we have a token")
    } else {
      console.log("we don't have a token")
    }
  }, [onSubmit, userEmail, userPassword, userToken])

  return (
    <section className="sign-in-content">
      <FontAwesomeIcon icon={faCircleUser} className="sign-in-icon" />
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-wrapper">
          <label htmlFor="username">
            Username
            <input
              id="username"
              {...register("username", { required: true })}
            />
          </label>
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">
            Password
            <input
              id="password"
              {...register("password", { required: true })}
            />
          </label>
        </div>
        <div className="input-remember">
          <label htmlFor="remember-me">
            Remember me
            <input type="checkbox" {...register("remember-me")} />
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
