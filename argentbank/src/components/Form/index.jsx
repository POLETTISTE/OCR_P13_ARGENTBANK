import "./style.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleUser } from "@fortawesome/free-solid-svg-icons"
import { useForm } from "react-hook-form"
import { useEffect, useState } from "react"
import axios from "axios"

const Form = () => {
  const [userData, setUserData] = useState([])
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)

  useEffect(() => {
    axios
      .get("http://localhost:3001/api/v1/user/login")
      .then((res) => setUserData(res.data))
  }, [])

  console.log(res.data)
  return (
    <section className="sign-in-content">
      <FontAwesomeIcon icon={faCircleUser} className="sign-in-icon" />
      <h1>Sign In</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-wrapper">
          <label htmlFor="username">
            Username
            <input {...register("username", { required: true })} />
          </label>
        </div>
        <div className="input-wrapper">
          <label htmlFor="password">
            Password
            <input {...register("password", { required: true })} />
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
