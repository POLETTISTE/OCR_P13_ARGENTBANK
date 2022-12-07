import Account from "../components/Account"
import Header from "../components/Header"

const PageUser = () => {
  console.log(window.localStorage.getItem("token"))

  return (
    <main className="main bg-dark">
      <Header />
      <Account />
    </main>
  )
}

export default PageUser
