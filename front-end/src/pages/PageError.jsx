import React from "react";
import { NavLink } from "react-router-dom";

const PageError = () => {
  return (
    <div className="error-message">
      Désolé, la page que vous recherchez n'existe pas
      <NavLink to={"/index"}>
        <p>retour à l'accueil</p>
      </NavLink>
    </div>
  );
};

export default PageError;
