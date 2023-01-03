import React from "react";
import { Link } from "react-router-dom";

import Header from "../components/Header";

//fonction qui retourne la page 404
function Found() {
  return (
    <section>
      <Header origin="about" />
      <div>
        <p>404</p>
        <h1>Oups! La page que vous demandez n'existe pas.</h1>
        <div>
          <Link to="/">Retourner sur la page d’accueil</Link>
        </div>
        <div>
          <Link to="/Contact">Retourner sur la page Contact</Link>
        </div>
      </div>
    </section>
  );
}

export default Found;
