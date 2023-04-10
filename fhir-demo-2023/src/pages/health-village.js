import * as React from 'react';

import Demo from '../components/Demo';
import Features from '../components/Features';
import * as FeatureList from '../components/FeatureList';
import healthVillageLogo from '../images/health-village.png';

export const Head = () => <title>FHIR Demo 2023: Health Village (Terveyskylä)</title>;

export default function HealthVillage({ location }) {
  const features = [
    FeatureList.Observation,
  ];
  
  return (
    <Demo features={features} location={location}>
      <h1>
        <a href="https://www.terveyskyla.fi/">
          <img src={healthVillageLogo} alt="Health Village (Terveyskylä)" />
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
