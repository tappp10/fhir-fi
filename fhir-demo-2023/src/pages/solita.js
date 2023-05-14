import * as React from 'react';

import Demo from '../components/Demo';
import Features from '../components/Features';
import { demos } from '../config/data';
import solitaLogo from '../images/solita.jpg';

export const Head = () => <title>FHIR Demo 2023: Solita</title>;

export default function Solita({ location }) {
  const features = demos.solita.features;
  
  return (
    <Demo features={features} location={location}>
      <h1>
        <a href="https://www.solita.fi/">
          <img src={solitaLogo} alt="Solita" />
        </a>
      </h1>
      <Features list={features} />
      <p>Demo description will be added soon.</p>
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <h3>Janne Kaartinen</h3>
          <p>Senior Consultant</p>
          <address>
            <a href="mailto:janne.kaartinen@solita.fi">janne.kaartinen@solita.fi</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
