import React from "react";

import Banner from "../components/Banner";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Mairie from "../Bloc information/Mairie";
import Domaine from "../Bloc information/Domaine";
import Info from "../Bloc information/Info";

function Home() {
  return (
    <>
      <Header origin="home" />
      <main>
        <Banner title="Avant le passage à la mairie" addClass origin="Home" />
        <section className="bloc">
          <Mairie
            title="La Mairie de Cuy Saint Fiacre"
            titleH3="Les accès"
            titleH4="Coordonée de la mairie"
          />
        </section>
        <Banner
          title="Festivité au domaine de l'étoile de forges"
          addClass02
          origin="Domaine"
        />
        <section className="bloc">
          <Domaine title="Le Domaine de l'Étoile de Forges" />
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
