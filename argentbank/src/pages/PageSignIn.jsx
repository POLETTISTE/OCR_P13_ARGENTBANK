import { Fragment } from "react"

import Nav from "../components/Nav"
import Form from "../components/Form"
import Footer from "../components/Footer"

const PageSignIn = () => {
  return (
    <Fragment>
      <Nav />
      <main className="main bg-dark">
        <Form />
      </main>
      <Footer />
    </Fragment>
  )
}

export default PageSignIn
