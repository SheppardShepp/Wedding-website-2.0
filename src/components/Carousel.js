import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

function Carousel(props) {
  // je configure le statut de mes chevrons sur 0
  let [slid, setSlid] = useState(0);

  //parametrage de mes chevrons
  const previousSlide = () => {
    slid + 1 <= 1 ? setSlid(props.pictures.length - 1) : setSlid(slid - 1);
  };
  const nextSlide = () => {
    slid + 1 >= props.pictures.length ? setSlid(0) : setSlid(slid + 1);
  };

  return (
    <>
      <div className="sectionCarousel">
        <img
          src={props.pictures[slid]}
          className="sectionCarousel_size"
          alt="Aperçue Logement"
        />
        <div className="sectionCarousel_backBlack"></div>
        {props.pictures.length !== 1 && (
          <>
            <div className="sectionCarousel_chevron">
              <FontAwesomeIcon
                icon={faChevronLeft}
                onClick={previousSlide}
                className="chevron"
              />
              <FontAwesomeIcon
                icon={faChevronRight}
                onClick={nextSlide}
                className="chevron"
              />
            </div>
            <div className="sectionCarousel_compteur">
              <p>{props.legend[slid]}</p>
              <p>
                {slid + 1}/{props.pictures.length}
              </p>
            </div>
          </>
        )}
      </div>
    </>
  );
}

export default Carousel;
