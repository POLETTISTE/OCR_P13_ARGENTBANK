import "./style.scss"

const Header = ({ firstName }) => {
  //recuperer donnees utilisateur et afficher dans nav et header

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
