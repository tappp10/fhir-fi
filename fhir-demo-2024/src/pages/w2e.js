import * as React from 'react';

import Demo from '../components/Demo';
import Features from '../components/Features';
import { demos } from '../config/data';
import w2eLogo from '../images/w2e.jpeg';

export const Head = () => <title>FHIR Demo 2024: W2E</title>;

export default function W2e({ location }) {
  const features = demos.w2e?.features;
  
  return (
    <Demo features={features} location={location}>
      <h1>
        <a href="https://w2e.fi/">
          <img src={w2eLogo} alt="W2E" />
        </a>
      </h1>
      <Features list={features} />
      <p>Demo description will be added soon.</p>
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <h3>Timo Aaltonen</h3>
          <p>CTO</p>
          <address>
            <a href="mailto:timo.aaltonen@w2e.fi">timo.aaltonen@w2e.fi</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
