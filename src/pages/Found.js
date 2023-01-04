import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

//fonction qui retourne la page 404
function Found() {
  return (
    <>
      <Header origin="about" />
      <main className="pageError">
        <p>404</p>
        <h1>Oups! La page que vous demandez n'existe pas.</h1>
      </main>
      <Footer />
    </>
  );
}

export default Found;
