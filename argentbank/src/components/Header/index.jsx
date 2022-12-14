import "./style.scss"
import { useSelector } from "react-redux"

const Header = () => {
  //recuperer donnees utilisateur et afficher dans nav et header
  const firstName = useSelector((state) => state.login.firstName)

  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {firstName}
      </h1>
      <button className="edit-button">Edit Name</button>
    </div>
  )
}

export default Header
