import { Fragment } from "react"
import Nav from "../components/Nav"
import Hero from "../components/Hero"
import Features from "../components/Features"
import Footer from "../components/Footer"

const Accueil = () => {
  return (
    <Fragment>
      <Nav />
      <main>
        <Hero />
        <Features />
      </main>
      <Footer />
    </Fragment>
  )
}

export default Accueil
