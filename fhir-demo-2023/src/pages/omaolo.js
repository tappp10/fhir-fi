import * as React from 'react';

import Demo from '../components/Demo';
import Features from '../components/Features';
import { demos } from '../config/data';
import omaoloLogo from '../images/omaolo.svg';

export const Head = () => <title>FHIR Demo 2023: Omaolo (DigiFinland)</title>;

export default function Omaolo({ location }) {
  const features = demos.omaolo.features;
  
  return (
    <Demo features={features} location={location}>
      <h1>
        <a href="https://www.omaolo.fi/">
          <img src={omaoloLogo} alt="Omaolo" />
        </a>
      </h1>
      <Features list={features} />
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <h3></h3>
          <p></p>
          <address>
          </address>
        </div>
      </section>
    </Demo>
  );
};
