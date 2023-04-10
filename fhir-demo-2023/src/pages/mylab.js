import * as React from 'react';

import Demo from '../components/Demo';
import Features from '../components/Features';
import { demos } from '../config/data';
import mylabLogo from '../images/mylab.png';

export const Head = () => <title>FHIR Demo 2023: Mylab</title>;

export default function Mylab({ location }) {
  const features = demos.mylab.features;
  
  return (
    <Demo features={features} location={location}>
      <h1>
        <a href="https://www.mylab.fi/">
          <img src={mylabLogo} alt="Mylab" />
        </a>
      </h1>
      <Features list={features} />
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <h3>Mikko Sipilä</h3>
          <p>Portfolio Director</p>
          <address>
            <a href="mailto:mikko.sipila@mylab.fi">mikko.sipila@mylab.fi</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
