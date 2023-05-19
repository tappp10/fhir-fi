import * as React from 'react';

import Demo from '../components/Demo';
import Features from '../components/Features';
import { demos } from '../config/data';
import prowellnessLogo from '../images/prowellness.png';
import balansioLogo from '../images/balansio.png';

export const Head = () => <title>FHIR Demo 2023: ProWellness</title>;

export default function ProWellness({ location }) {
  const features = demos.prowellness.features;
  
  return (
    <Demo features={features} location={location}>
      <h1 className="white">
        <a href="https://www.prowellness.com/">
          <img src={prowellnessLogo} alt="ProWellness" />
        </a>
      </h1>
      <Features list={features} />
      <aside className="event atk-paivat">
        <h2>ATK-päivät: Ständi 404</h2>
        <p>Olemme tavattavissa BusinessOulun ständillä.</p>
      </aside>
      <section id="balansio">
        <h2><img src={balansioLogo} alt="Balansio" /></h2>
        <p>Balansio is a CE marked medical device for diabetes clinics and hospitals to extend
        their clinical services beyond scheduled appointments. Balansio contains other individual
        CE marked medical devices (e.g. bolus insulin calculator). </p>
        <p>Balansio has been integrated with Epic through the <strong>SMART App
        Launch</strong> mechanism.</p>
      </section>
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
