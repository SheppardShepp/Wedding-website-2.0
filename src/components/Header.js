import React from "react";
import Menu from "./Menu";

function Header(props) {
  if (props.origin === "home") {
    return (
      <header>
        <div className="headerSize">
          <h1>Mariage de Nadège et Damien</h1>
          <div className="blocIntial">
            <div className="blocIntial_position"></div>
          </div>
          <Menu />
        </div>
      </header>
    );
  } else if (props.origin === "about") {
    return (
      <header>
        <div className="headerSize">
          <p>Mariage de Nadège et Damien</p>
          <Menu />
        </div>
      </header>
    );
  }
}

export default Header;
