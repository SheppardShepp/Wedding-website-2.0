import React from "react";

import Banner from "../components/Banner";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Mairie from "../components/Mairie";
import Domaine from "../components/Domaine";
import Info from "../components/Info";

function Home() {
  return (
    <>
      <Header origin="home" />
      <main>
        <Banner title="Avant le passage à la mairie" addClass origin="Home" />
        <section className="bloc">
          <Mairie />
        </section>
        <Banner
          title="Festivité au domaine de l'étoile de forges"
          addClass02
          origin="Separation"
        />
        <section className="bloc">
          <Domaine />
        </section>
        <Banner title="Infos pratique" addClass03 origin="Separation" />
        <section className="bloc">
          <Info />
        </section>
      </main>
      <Footer />
    </>
  );
}

export default Home;
