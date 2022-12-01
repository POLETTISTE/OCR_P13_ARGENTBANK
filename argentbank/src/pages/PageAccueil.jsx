import { Fragment } from "react"
import Hero from "../components/Hero"
import Features from "../components/Features"

const Accueil = () => {
  return (
    <Fragment>
      {/* <Nav /> */}
      <main>
        <Hero />
        <Features />
      </main>
      {/* <Footer /> */}
    </Fragment>
  )
}

export default Accueil
