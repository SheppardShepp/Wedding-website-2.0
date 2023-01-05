import React from "react";
import Carousel from "./Carrousel";
import Slider from "./slider";

import ImgMairie from "../data/librairie.json";
import Sliders from "../data/librairieSlider.json";

function Mairie(props) {
  return (
    <>
      <h2>{props.title}</h2>
      <div className="intro">
        <p>
          Nous vous donnons donc rendez-vous pour notre passage devant la
          Mairesse de notre commune pour 16h30 le 27 mai 2023. Nous nous
          rendrons ensuite au domaine pour le reste des festivité situé a 20min
          de là. Les informations son ci-dessous.
        </p>
        <p>
          Il y a 3 parkings à proximité de la mairie dont je vous ai fait le
          détail. Il y en a un accolé de la mairie de 10 places, un autre devant
          la salle des fetes de 16 places (a 50 m environ), et le dernier ce
          situe derriere la salle des fetes sur le terrain communale. La voiries
          de la commune venant d'etre refait en 2022, celle ci reste tres
          attentive au stationnement sur les trottoirs. Et accessoirement
          j'aimrerai faire bonne impression.
        </p>
      </div>
      <section className="carousel">
        <Carousel pictures={ImgMairie.pictures} legend={ImgMairie.legends} />
      </section>

      <div className="lightbox">
        <Slider datas={Sliders} />
      </div>
    </>
  );
}

export default Mairie;
