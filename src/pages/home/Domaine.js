import React from "react";

function Domaine(props) {
  return (
    <>
      <div className="bloc-1">
        <div className="bloc-1_text">
          <h3>{props.title}</h3>
          <p>
            Suite à notre union à la mairie, nous vous accueillerons au domaine de l'Étoile de
            forges, situé à 15-20 min en voiture de la commune. Celui-ci se trouve au n°1 Le Mont au
            Bec, 76440 Longmesnil. Je vous mets à disposition le lien du site web ainsi qu'une vue
            360° en guise d'aperçu.
          </p>
          <div className="bloc-1_360">
            <a
              target="_blank"
              rel="noreferrer"
              className="btn url"
              href="https://tourismedes4rivieresenbray.com/cuy-saint-fiacre">
              Site web du Domaine de l'Étoile de forges
            </a>
            {/* <div>
              <div className="vue360">
                <div className="vue360_img"></div>
                <div className="vue360_shadow"></div>
                <div className="vue360_ombre">
                  <div className="ombre"></div>
                </div>
              </div>
            </div> */}
          </div>
        </div>

        <div className="bloc-1_1">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d1302.6630990149204!2d1.6197277261273413!3d49.62143579627797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e0!4m5!1s0x47e723531082cf83%3A0xf89364a5c83342c5!2sCuy-Saint-Fiacre!3m2!1d49.513791!2d1.697562!4m3!3m2!1d49.621851799999995!2d1.6208908!5e1!3m2!1sfr!2sfr!4v1673265905353!5m2!1sfr!2sfr"
            className="itinéraire"
            title="Itinéraire au Domaine"
            loading="lazy"
            samesite="None:Secure"></iframe>
        </div>
      </div>

      <div className="bloc-2">
        <a
          href="https://my.matterport.com/show/?m=CfUy4FW9vdu&play=1&lang=fr&hl=2&brand=0&title=0&vr=0"
          target="_blank"
          rel="noreferrer"
          aria-label="Site vue 360°">
          <i className="fa-solid fa-arrows-to-eye"></i>
          <span>Vue 360°</span>
          <div className="vue360">
            <div className="vue360_img"></div>
            <div className="vue360_shadow">Vue 360°</div>
            <div className="vue360_ombre">
              <div className="ombre"></div>
            </div>
          </div>
        </a>
      </div>
    </>
  );
}

export default Domaine;
