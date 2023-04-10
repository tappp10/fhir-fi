import * as React from 'react';

import Demo from '../components/Demo';
import Features from '../components/Features';
import { demos } from '../config/data';
import intersystemsLogo from '../images/intersystems.svg';

export const Head = () => <title>FHIR Demo 2023: InterSystems</title>;

export default function InterSystems({ location }) {
  const features = demos.intersystems.features;
  
  return (
    <Demo features={features} location={location}>
      <h1>
        <a href="https://www.intersystems.com/">
          <img src={intersystemsLogo} alt="InterSystems" />
        </a>
      </h1>
      <Features list={features} />
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <h3>Anssi Kauppi</h3>
          <p>Sales Engineer</p>
          <address>
            <a href="mailto:anssi.kauppi@intersystems.com">anssi.kauppi@intersystems.com</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
