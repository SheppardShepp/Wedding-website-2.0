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
        <div className="banner_timer">
          <h1>{props.title}</h1>
          <Link to="/Confirmation" className="button">
            <p>Confirmation</p>
          </Link>
        </div>
      </section>
    );
  } else if (props.origin === "Separation") {
    return (
      <section className="banner">
        <div className={addClass}></div>
        <div className="banner_black"></div>
        <div className="banner_timer">
          <h1>{props.title}</h1>
        </div>
      </section>
    );
  }
}

export default Banner;
