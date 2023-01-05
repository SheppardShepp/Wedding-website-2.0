import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../sass/component/_slider.scss";

function slider(props) {
  return (
    <>
      <Carousel>
        {props.datas.map((slid) => (
          <div key={slid.id}>
            <img src={slid.pictures} alt="" />
            <div>
              <p className="overlay_title">{slid.title}</p>
            </div>
          </div>
        ))}
      </Carousel>
    </>
  );
}

export default slider;
