import React from "react";
import Timer from "../components/Timer";
import { Link } from "react-router-dom";

function Banner(props) {
  let addClass = "banner_Img";
  if (props.addClass) {
    addClass += " imgTimer";
  } else if (props.addClass02) {
    addClass += " imgDomaine";
  } else if (props.addClass03) {
    addClass += " imgInfo";
  }

  if (props.origin === "Home") {
    return (
      <section className="banner">
        <div className={addClass}></div>
        <div className="banner_black"></div>
        <div className="banner_timer">
          <Timer />
        </div>
      </section>
    );
  } else if (props.origin === "Domaine") {
    return (
      <section className="banner">
        <div className={addClass}></div>
        <div className="banner_black"></div>
        <div className="banner_domain">
          <h2>{props.title}</h2>
          <div className="banner_domain_bloc">
            <p className="banner_domain_bloc_text">
              Afin de nous organiser avec les prestataires,
              <em>
                Merci de nous faire votre retour avant le <em className="number"> 1er</em> Mars.
              </em>
              <br />
              Sois par téléphone/sms, les reseaux sociaux ou en cliquant sur le bouton ci-dessous.
            </p>
            <div className="btnConfirm">
              <Link
                to="/Confirmation"
                className="btnBanner">
                Confirmation
              </Link>
            </div>
          </div>
        </div>
      </section>
    );
  } else if (props.origin === "Separation") {
    return (
      <section className="banner">
        <div className={addClass}></div>
        <div className="banner_black"></div>
        <div className="banner_timer">
          <h2>{props.title}</h2>
        </div>
      </section>
    );
  }
}

export default Banner;
