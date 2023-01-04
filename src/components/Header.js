import React from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

function Header(props) {
  //je dois faire disparaitre ma div "buttonTogle" resolution > a 1024px
  //je dois faire disparaitre ma div "menu"passé la resolutionde 1024 px
  if (props.origin === "home") {
    return (
      <header>
        <p>Mariage de Nadège et Damien</p>
        <div className="blocIntial">
          <div className="blocIntial_position"></div>
        </div>
        <div className="menu">
          <div className="menu_buttonToggle">
            <FontAwesomeIcon icon={faBars} />
          </div>
          <div className="menu_link">
            <Link to="/">Accueil</Link>
            <Link to="/Confirmation">Confirmation</Link>
            <Link to="/Contact">Contact</Link>
          </div>
        </div>
      </header>
    );
  } else if (props.origin === "about") {
    return (
      <header>
        <p>Mariage de Nadège et Damien</p>
        <div className="menu">
          <div className="menu_buttonToggle">
            <FontAwesomeIcon icon={faBars} />
          </div>
          <div className="menu_link">
            <Link to="/">Accueil</Link>
            <Link to="/Confirmation">Confirmation</Link>
            <Link to="/Contact">Contact</Link>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
