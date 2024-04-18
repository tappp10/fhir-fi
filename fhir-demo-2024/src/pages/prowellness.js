import * as React from 'react';

import { getHead } from '../components/Article';
import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';
import prowellnessLogo from '../images/prowellness.png';

export function Head() {
  const title = <title>FHIR Demo 2024: ProWellness</title>;
  return getHead({ title });
};

export default function ProWellness({ location }) {
  const roles = demos.prowellness.roles;
  
  return (
    <Demo roles={roles} location={location}>
      <h1 className="white">
        <a href="https://www.prowellness.com/">
          <img src={prowellnessLogo} alt="ProWellness" />
        </a>
      </h1>
      <Roles list={roles} />
      <section className="work-in-progress">
        <p>Participation confirmed, showcase content to be added.</p>
        {/*
          From: Mika Sipila <mika.sipila@prowellness.com>
          Date: Thursday, 11. April 2024 at 8.54
          To: 'Mikael Rinnetmäki' <mikael@sensotrend.com>
          Subject: RE: FHIR Demo 2024
 
          Apps on oikea alue, ja tässä meillä on:
          •	ProWellness CDMS (Chronic Diseases Management System),  jossa Smart App Launch (EHR -> CDMS)
          •	Balansio, jossa Smart App Launch (EHR -> Balansio), sekä järjestelmän sisäisesti Balansion omissa REST-kutsuissa käytössä FHIR-resurssit
            o	/fhir/observation
            o	/fhir/MedicalAdministration
 
          Kuvia + tekstiä on ja saadaan toki muokattua/tehtyä paremmiksi..
 
        */}
      </section>

      {/*
      <section id="balansio">
        <h2><img src={balansioLogo} alt="Balansio" /></h2>
        <p>Balansio is a CE marked medical device for diabetes clinics and hospitals to extend
        their clinical services beyond scheduled appointments. Balansio contains other individual
        CE marked medical devices (e.g. bolus insulin calculator). </p>
        <p>Balansio has been integrated with Epic through the <strong>SMART App
        Launch</strong> mechanism.</p>
      </section>
      */}
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <h3>Mika Sipilä</h3>
          <p>CEO</p>
          <address>
            <a href="mailto:mika.sipila@prowellness.com">mika.sipila@prowellness.com</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
