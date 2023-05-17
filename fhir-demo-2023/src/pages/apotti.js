import * as React from 'react';
import { Link } from 'gatsby';

import Demo from '../components/Demo';
import Features from '../components/Features';
import { demos } from '../config/data';
import apottiLogo from '../images/apotti.png';

export const Head = () => <title>FHIR Demo 2023: Apotti</title>;

export default function Apotti({ location }) {
  const features = demos.apotti.features;
  
  return (
    <Demo features={features} location={location}>
      <h1>
        <a href="https://www.apotti.fi/">
          <img src={apottiLogo} alt="Apotti" />
        </a>
      </h1>
      <Features list={features} />
      <aside className="event atk-paivat">
        <h2>ATK-päivät: Ständi 400</h2>
        <p></p>
        <p>Aikataulutetut demot esittelevät Apotin ekosysteemin sekä <Link
        to="../sensotrend">Sensotrendin</Link> FHIR-sovelluksen osana Apotin työnkulkua:</p>
        <strong>
          <ul>
            <li>
              <time dateTime="2023-05-23T12:30:00.000+03:00">tiistaina klo 12.30</time>, Ständi 400
            </li>
            <li>
              <time dateTime="2023-05-23T13:30:00.000+03:00">tiistaina klo 13.30</time>,
              Startup-alue, pöytä 10
            </li>
            <li>
              <time dateTime="2023-05-23T15:00:00.000+03:00">tiistaina klo 15.00</time>, Ständi 400
            </li>
            <li>
              <time dateTime="2023-05-24T12:15:00.000+03:00">keskiviikkona klo 12.15</time>, Ständi
              400
            </li>
          </ul>
        </strong>
      </aside>
      <p>Demo description will be added soon.</p>
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <h3>Ilkka Tiainen</h3>
          <p>Ecosystem Specialist</p>
          <address>
            <a href="mailto:ilkka.tiainen@apotti.fi">ilkka.tiainen@apotti.fi</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
