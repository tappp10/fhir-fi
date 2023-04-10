import * as React from 'react';

import Demo from '../components/Demo';
import Features from '../components/Features';
import * as FeatureList from '../components/FeatureList';
import kelaLogo from '../images/kela.png';

export const Head = () => <title>FHIR Demo 2023: Kela</title>;

export default function Kela({ location }) {
  const features = [
    FeatureList.FHIR,
  ];
  
  return (
    <Demo features={features} location={location}>
      <h1>
        <a href="https://www.kela.fi/">
          <img src={kelaLogo} alt="Kela" />
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
