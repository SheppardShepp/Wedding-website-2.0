import React from "react";

import MyCarousel from "../components/Carousel";
// import Slider from "./Slider";
// import Slider2 from "./Slider2";

import ImgMairie from "../data/librairie.json";
// import Sliders from "../data/librairieSlider.json";

function Mairie(props) {
  return (
    <>
      <div className="bloc-1">
        <div className="bloc-1_text">
          <h2>{props.title}</h2>
          <p>
            Nous vous donnons donc rendez-vous pour notre passage devant la
            Mairesse de notre commune de Cuy Saint Fiacre au 4 rue Roger
            Cressent (76220) pour 16h30 le 27 Mai 2023. Nous nous rendrons
            ensuite au domaine pour le reste des festivités situé à 15-20 min de
            là. Les informations sur celui-ci ce trouve dans la section un peu
            plus bas.
          </p>
          <p>
            Il y a 3 parkings à proximité de la mairie dont je vous ai fait le
            détail. Il y en a:
          </p>
          <ul>
            <li>un accolé de la mairie de 10 places,</li>
            <li>
              un autre devant la salle des fetes de 16 places (a 50 m environ),
            </li>
            <li>
              et le dernier ce situe derriere la salle des fetes sur le terrain
              communale.
            </li>
          </ul>
          <p>
            La voiries de la commune venant d'etre refait en 2022, celle ci
            reste tres attentive au stationnement sur les trottoirs. Et
            accessoirement nous aimrerions faire bonne impression.
          </p>
        </div>
        <div className="sectionCarousel">
          <MyCarousel
            pictures={ImgMairie.pictures}
            legend={ImgMairie.legends}
          />
        </div>
      </div>

      {/* <section className="test-carousel">
        // <Slider2 pictures={ImgMairie.pictures} />
        <Slider2 />
      </section> */}

      {/* <div className="lightbox">
        <Slider datas={Sliders} />
      </div> */}
      <div className="bloc-2">
        <iframe
          title="Position googleMaps"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d25285.122974011963!2d1.6506062229919236!3d49.51135686832444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47e723531082cf83%3A0xf89364a5c83342c5!2s76220%20Cuy-Saint-Fiacre!5e1!3m2!1sfr!2sfr!4v1673255918861!5m2!1sfr!2sfr"
          className="myMaps"
          loading="lazy"
        ></iframe>
        <div className="bloc-1_text">
          <h3>{props.titleH3}</h3>
          <p>
            Notre commune ce trouve à 4 km de Gournay en Bray dans la Seine
            Maritime(76), sur l'axe principale Beauvais-Rouen via la RN31.
          </p>
          <p>
            Nous sommes a 45 min de Beauvais ou débouche l'autoroute A16 et a
            50min de Rouen ou débouche les autoroute A13 et A28.
          </p>

          <h4>{props.titleH4}</h4>

          <a
            href="https://tourismedes4rivieresenbray.com/cuy-saint-fiacre"
            target="_blank"
            rel="noreferrer"
          >
            Lien de la mairie
          </a>
        </div>
      </div>
    </>
  );
}

export default Mairie;
