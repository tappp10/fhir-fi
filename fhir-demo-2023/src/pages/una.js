import * as React from 'react';

import Demo from '../components/Demo';
import Features from '../components/Features';
import * as FeatureList from '../components/FeatureList';
import unaLogo from '../images/una.svg';

export const Head = () => <title>FHIR Demo 2023: Una</title>;

export default function Una({ location }) {
  const features = [
    FeatureList.SMART,
  ];
  
  return (
    <Demo features={features} location={location}>
      <h1>
        <a href="https://unaoy.fi/">
          <img src={unaLogo} alt="Una Oy" />
        </a>
      </h1>
      <Features list={features} />
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <h3>Juha Rannanheimo</h3>
          <p>Chief Development Officer</p>
          <address>
            <a href="mailto:juha.rannanheimo@unaoy.fi">juha.rannanheimo@unaoy.fi</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
