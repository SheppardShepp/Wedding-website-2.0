import React from "react";

function Info() {
  return (
    <>
      <div className="bloc-1">
        <div className="bloc-1_text bloc-2-margin">
          <div>
            <h4>Détails pour les photos</h4>
            <p>
              Une photographe sera présent à la mairie et sur le domaine afin d'immortalisé cette
              Évènement, soyez près à sourire! <br />
              Pour avoir une trace de vous, de nous et des autres, nous vous proposerons aussi de
              mettre vos photos prise avec vos smartphones grâce à une application (disponible sur
              Android et Apple) et ainsi partager vos clichés avec les autres invités sur un album
              unique. <br />
              Vous pourrez donc également télécharger celles des autres! <br />
              Pour les curieux l'application ce nomme "WedShoots", il y aura des QRcode sur les
              tables afin de rejoindre le groupe de partage.
            </p>
          </div>

          <div className="blocbutton">
            <a
              href="https://www.wedshoots.com/fr"
              className="btn"
              target="_blank"
              rel="noreferrer">
              Lien de l'application WedShoots
            </a>
          </div>
        </div>

        <div className="bloc-1_text bloc-2-margin">
          <h4>Détail pour la musique</h4>
          <p>
            Nous laissons à disposition les coordonnées du DJ au cas où certain aurai des demande
            particulière à formuler sans nous prévenir.
          </p>
          <p>
            Il sera présent avec son matériel (ce qui est préférable), s'occupera de la musique la
            soirée et fera également des animations.
          </p>
          <div className="bloc-1_text_coordonnée">
            <div className="bloc-1_text_coordonnée_text">
              <p>Mail : childreamdj@gmail.com</p>
              <p>Téléphone: 06 47 93 79 44</p>
            </div>
            <div className="bloc-1_text_coordonnée_btn">
              <a
                href="https://www.facebook.com/childreamdj"
                className="btn"
                target="_blank"
                rel="noreferrer">
                Page Facebook
              </a>
            </div>
          </div>
        </div>
      </div>
      <div className="bloc-2 bloc-2-margin">
        <div className="bloc-2_text bloc-2-margin">
          <h4>Détails pour les enfants</h4>
          <p>
            Afin que tous les parents puissent profiter au mieux des festivités, nous avons fait le
            choix d'avoir une personne dédié qui s'occupera des enfants (à partir de 3 ans) une fois
            que nous serons sur le domaine.
          </p>
        </div>
        <div className="bloc-2_text bloc-2-margin">
          <h4>Détails pour le repas</h4>
          <p>
            Pour les repas, les enfants seront en groupe dans une pièce du gite. S'il y a des
            enfants de moins de 3 ans, il faudra que les parents prévoient le repas.
          </p>
        </div>
      </div>
    </>
  );
}

export default Info;
