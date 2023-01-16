import React from "react";

function Domaine(props) {
  return (
    <>
      <div className="bloc-1">
        <div className="bloc-1_text">
          <h3>{props.title}</h3>
          <p>
            Suite à notre union à la mairie, nous vous accueillerons au domaine de l'Étoile de
            Forges, situé à 15-20 min en voiture de la commune.
          </p>
          <p> Son adresse:</p>
          <ul>
            <li>n°1 Le Mont au Bec, 76440 Longmesnill</li>
          </ul>
          <p>
            Sous réserve de vos réponses nous avons prévus d'être au maximum 80 personnes sur place.
          </p>
          <p>
            Je vous mets à disposition le lien du site web du Domaine ainsi qu'une vue 360° en guise
            d'aperçu des lieux.
          </p>
          <div className="bloc-1_btnUrl">
            <a
              target="_blank"
              rel="noreferrer"
              className="btn url"
              href="https://www.etoiledeforges.fr/">
              Site web du Domaine de l'Étoile de Forges
            </a>
          </div>
        </div>
        <div className="div360">
          <a
            href="https://my.matterport.com/show/?m=CfUy4FW9vdu&play=1&lang=fr&hl=2&brand=0&title=0&vr=0"
            target="_blank"
            className="url360"
            rel="noreferrer"
            aria-label="Site vue 360°">
            <div className="vue360">
              <div className="vue360_img"></div>
              <div className="vue360_shadow">
                <div>
                  <i className="fa-solid fa-arrows-to-eye"></i>
                  <span className="click360">Vue 360°</span>
                </div>
                <span className="click">Cliquer ici</span>
              </div>
              <div className="vue360_ombre">
                <div className="ombre"></div>
              </div>
            </div>
          </a>
        </div>
      </div>
      <div className="bloc-2">
        <div className="myMaps">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m26!1m12!1m3!1d1302.6630990149204!2d1.6197277261273413!3d49.62143579627797!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!4m11!3e0!4m5!1s0x47e723531082cf83%3A0xf89364a5c83342c5!2sCuy-Saint-Fiacre!3m2!1d49.513791!2d1.697562!4m3!3m2!1d49.621851799999995!2d1.6208908!5e1!3m2!1sfr!2sfr!4v1673265905353!5m2!1sfr!2sfr"
            title="Itinéraire au Domaine"
            loading="lazy"
            samesite="None:Secure"></iframe>
        </div>
        <div className="bloc-2_text">
          <h4>Les Hébergements</h4>
          <p>Nous avons réservé l'ensemble du domaine avec les gites ce trouvant sur place.</p>
          <p>Il y a:</p>
          <ul>
            <li>Le Gite de l'Étoile ( pour 14 personnes )</li>
            <li>La Suite de l'Étoile ( pour les mariés ) </li>
          </ul>
          <p>
            Le domaine possède encore 1 gite que nous n'avons pas réservé, La Villa de l'étoile,
            pour 10-12 personnes qui se trouve à quelques kilomètres du lieu des festivités. Nous
            vous mettons le lien de ce gite pour ceux que cela pourrai intéresser.
          </p>
          <p>
            On vous partage également un lien vers la brochure de l'office de tourisme du Pays de
            qui référencie de la page 96 à 124, tous les hébergements à proximité avec les
            coordonnées (hôtels, chambres d'hôtes, gites, campings, etc.).
          </p>

          <h4>Liens</h4>
          <div className="urlMairie btnMargin">
            <a
              href="https://www.etoiledeforges.fr/gites-pour-groupes/la-villa-de-l-etoile"
              className="btn url"
              target="_blank"
              rel="noreferrer">
              Lien de gite La Villa de l’Étoile
            </a>
            <a
              href="https://fr.forgesleseaux-tourisme.com/media/brochures/guide-touristique-du-pays-de-bray-2022.pdf?fbclid=IwAR2_hEQukp05JyoTTDJVyq_EABs-hnVkU68x9v87TpaGusmAiuZL_iJIxBs"
              className="btn url"
              target="_blank"
              rel="noreferrer">
              Brochure de l'Office de tourisme du Pays de Bray
            </a>
          </div>
        </div>
      </div>
    </>
  );
}

export default Domaine;
