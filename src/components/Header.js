import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header(props) {
  if (props.origin === "home") {
    return (
      <header>
        <h1>Mariage de Nadège et Damien</h1>
        <div className="initial"></div>
        <div>
          <Link to="/Contact">Contact</Link>
        </div>
      </header>
    );
  } else if (props.origin === "contact") {
    return (
      <header>
        <h1>Mariage de Nadège et Damien</h1>
        <div>
          <Link to="/">Accueil</Link>
        </div>
      </header>
    );
  } else if (props.origin === "about") {
    return (
      <header>
        <h1>Mariage de Nadège et Damien</h1>
        <div>
          <Link to="/">Accueil</Link>
          <Link to="/Contact">Contact</Link>
          <FontAwesomeIcon icon={faBars} />
        </div>
      </header>
    );
  }
}

export default Header;
