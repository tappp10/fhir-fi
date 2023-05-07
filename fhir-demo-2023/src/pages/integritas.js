import * as React from 'react';

import Demo from '../components/Demo';
import Features from '../components/Features';
import { demos } from '../config/data';
import integritasLogo from '../images/integritas.svg';

export const Head = () => <title>FHIR Demo 2023: Integritas</title>;

export default function Integritas({ location }) {
  const features = demos.integritas.features;
  
  return (
    <Demo features={features} location={location}>
      <h1>
        <a href="https://www.integritas.fi/">
          <img src={integritasLogo} alt="Integritas" />
        </a>
      </h1>
      <Features list={features} />
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <h3>Kalle Horjamo</h3>
          <p>CEO</p>
          <address>
            <a href="mailto:kalle.horjamo@integritas.fi">kalle.horjamo@integritas.fi</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
