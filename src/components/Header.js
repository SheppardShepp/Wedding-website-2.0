import React from "react";
import Menu from "./Menu";

function Header(props) {
  if (props.origin === "home") {
    return (
      <header>
        <p>Mariage de Nadège et Damien</p>
        <div className="blocIntial">
          <div className="blocIntial_position"></div>
        </div>
        <Menu />
      </header>
    );
  } else if (props.origin === "about") {
    return (
      <header>
        <p>Mariage de Nadège et Damien</p>
        <Menu />
      </header>
    );
  }
}

export default Header;
