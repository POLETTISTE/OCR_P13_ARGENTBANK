import Account from "../components/Account"
import Header from "../components/Header"
import axios from "axios"

import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { updateFirstName } from "../feature/loginSlice"

const PageUser = () => {
  const dispatch = useDispatch()
  const firstName = useSelector((state) => state.login.firstName)

  useEffect(() => {
    const token = window.localStorage.getItem("token")
    axios
      .post(
        "http://localhost:3001/api/v1/user/profile",

        {},
        {
          headers: {
            accept: "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((res) => {
        dispatch(updateFirstName(res.data.body.firstName))
        // setData(res)
        // setFirstName(res.data.body.firstName)
      })
      .catch((error) => console.log("erreur dans l'API", error))
  }, [])

  return (
    <main className="main bg-dark">
      <Header firstName={`${firstName}`} />
      <Account />
    </main>
  )
}

export default PageUser
