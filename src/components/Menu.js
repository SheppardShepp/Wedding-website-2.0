import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Squash as Hamburger } from "hamburger-react";

function Menu() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div className="menu">
        <div className="menu_buttonToggle">
          <Hamburger
            toggled={open}
            toggle={setOpen}
            size={30}
            color="#010731"
            rounded
            hideOutline={false}
          />
          <div className={open ? " menu-active" : " menu-inactive"}>
            <Link to="/">Accueil</Link>
            <span></span>
            <Link to="/Confirmation">Confirmation</Link>
            <span></span>
            <Link to="/Contact">Contact</Link>
          </div>
        </div>
        <div className="menu_link">
          <Link to="/">Accueil</Link>
          <Link to="/Confirmation">Confirmation</Link>
          <Link to="/Contact">Contact</Link>
        </div>
      </div>
    </>
  );
}
export default Menu;
