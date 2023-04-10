import * as React from 'react';

import Demo from '../components/Demo';
import Features from '../components/Features';
import { demos } from '../config/data';
import prowellnessLogo from '../images/prowellness.png';

export const Head = () => <title>FHIR Demo 2023: ProWellness</title>;

export default function ProWellness({ location }) {
  const features = demos.prowellness.features;
  
  return (
    <Demo features={features} location={location}>
      <h1>
        <a href="https://www.prowellness.com/">
          <img src={prowellnessLogo} alt="ProWellness" />
        </a>
      </h1>
      <Features list={features} />
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
