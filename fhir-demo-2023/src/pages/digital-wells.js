import * as React from 'react';

import Demo from '../components/Demo';
import Features from '../components/Features';
import { demos } from '../config/data';
import dwLogo from '../images/digital-wells.png';

export const Head = () => <title>FHIR Demo 2023: Digital Wells</title>;

export default function DigitalWells({ location }) {
  const features = demos['digital-wells'].features;
  
  return (
    <Demo features={features} location={location}>
      <h1>
        <a href="https://www.digitalwells.fi/">
          <img src={dwLogo} alt="Digital Wells" />
        </a>
      </h1>
      <Features list={features} />
      <p>Demo description will be added soon.</p>
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <h3>Christer Carlsson</h3>
          <p>CEO<br />Institute for Advanced Management Systems Research</p>
          <address>
            <a href="mailto:christer.carlsson@abo.fi">christer.carlsson@abo.fi</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
