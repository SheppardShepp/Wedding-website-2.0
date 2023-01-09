import React from "react";

import Header from "../components/Header";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Header origin="home" />
      <main>
        <div className="title">
          <h1>Formulaire de contact</h1>
          <p>
            Pour toute questions, renseignements ou détails à porter à notre
            attention, il vous suffit de remplir les champs ci-dessous.
          </p>
        </div>
        <form id="form_1" method="post" action="#" className="form">
          <div>
            <label for="nom">Invité:</label>
            <input id="nom" className="" type="text" required />
          </div>
          <div>
            <label for="reponse">
              Moyen pour vous répondre (téléphone ou email):
            </label>
            <select name="reponse" id="reponse">
              <option value="choix">(choix)</option>
              <option value="téléphone">téléphone</option>
              <option value="sms">SMS</option>
              <option value="email">Email</option>
            </select>
          </div>

          <div>
            <label for="message">
              Une question ? Quelques chose a nous dire ? Nous vous écoutons:
            </label>
            <textarea
              id="message"
              className=""
              rows="4"
              cols="50"
              required
            ></textarea>
          </div>

          <button className="" type="submit">
            Envoyer
          </button>
        </form>
      </main>
      <Footer />
    </>
  );
}

export default Contact;
