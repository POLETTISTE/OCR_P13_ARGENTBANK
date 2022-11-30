import "./style.scss"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCircleUser } from "@fortawesome/free-solid-svg-icons"
import { useForm } from "react-hook-form"

const Form = () => {
  const { register, handleSubmit } = useForm()
  const onSubmit = (data) => console.log(data)

  return (
    <section className="sign-in-content">
      <FontAwesomeIcon icon={faCircleUser} className="sign-in-icon" />
      <h1>Sign In</h1>

      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="input-wrapper">
          <label htmlFor="Username">
            Username
            <input
              {...register("Username", { required: true, maxLength: 20 })}
            />
          </label>
        </div>
        <div className="input-wrapper">
          <label htmlFor="Password">
            Password
            <input {...register("Password", { required: true })} />
          </label>
        </div>
        <div className="input-remember">
          <label htmlFor="Remember me">
            Remember me
            <input type="checkbox" {...register("Remember me")} />
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
