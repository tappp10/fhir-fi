import * as React from 'react';

import Demo from '../components/Demo';
import Features from '../components/Features';
import { demos } from '../config/data';
import tietoevryLogo from '../images/tietoevry.png';

export const Head = () => <title>FHIR Demo 2023: TietoEVRY</title>;

export default function TietoEVRY({ location }) {
  const features = demos.tietoevry.features;
  
  return (
    <Demo features={features} location={location}>
      <h1>
        <a href="https://unaoy.fi/">
          <img src={tietoevryLogo} alt="TietoEVRY" />
        </a>
      </h1>
      <Features list={features} />
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <h3>Ilona Rannanheimo</h3>
          <p>Head of Digital Health</p>
          <address>
            <a href="mailto:Ilona.Raitakari@tietoevry.com">Ilona.Raitakari@tietoevry.com</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
