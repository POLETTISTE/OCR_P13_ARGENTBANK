import Account from "../components/Account"
import Header from "../components/Header"
import axios from "axios"
import { useState } from "react"
import { useEffect } from "react"

const PageUser = () => {
  const [data, setData] = useState("")
  const [firstName, setFirstName] = useState("")

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
        setData(res)
        setFirstName(res.data.body.firstName)
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
