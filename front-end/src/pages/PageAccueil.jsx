import { Fragment } from "react"
import Hero from "../components/Hero"
import Features from "../components/Features"

const Accueil = () => {
  return (
    <Fragment>
      <main>
        <Hero />
        <Features />
      </main>
    </Fragment>
  )
}

export default Accueil
