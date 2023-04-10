import * as React from 'react';

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
