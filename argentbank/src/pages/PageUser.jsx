import Account from "../components/Account"
import Header from "../components/Header"
import axios from "axios"

import { useEffect } from "react"
import { useDispatch } from "react-redux"
import { updateFirstName } from "../feature/loginSlice"

const PageUser = () => {
  const dispatch = useDispatch()

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
        console.log(res.data)
        dispatch(updateFirstName(res.data.body.firstName))
      })
      .catch((error) => console.log("erreur dans l'API page User", error))
  }, [dispatch])

  return (
    <main className="main bg-dark">
      <Header />
      <Account />
    </main>
  )
}

export default PageUser
