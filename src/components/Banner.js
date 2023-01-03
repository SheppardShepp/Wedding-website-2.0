import React from "react";
import Timer from "../components/Timer";
import { Link } from "react-router-dom";

function Banner(props) {
  let addClass = "banner";
  if (props.addClass) {
    addClass += " imgTimer";
  } else if (props.addClass02) {
    addClass += " imgDomaine";
  } else if (props.addClass03) {
    addClass += " imgInfo";
  }

  if (props.origin === "Home") {
    return (
      <section className="testZIndex">
        <div className={addClass}></div>
        <div className="banner_black"></div>
        <div className="banner_compeur">
          <h2>{props.title}</h2>

          <Timer />
          <Link to="/Contact" className="button">
            <p>Contact</p>
          </Link>
        </div>
      </section>
    );
  } else if (props.origin === "Separation") {
    return (
      <section className="testZIndex">
        <div className={addClass}></div>
        <div className="banner_black"></div>
        <div className="banner_compeur">
          <h2>{props.title}</h2>
        </div>
      </section>
    );
  }
}

export default Banner;
