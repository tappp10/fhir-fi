import * as React from 'react';

import Demo from '../components/Demo';
import Features from '../components/Features';
import * as FeatureList from '../components/FeatureList';
import wellmoLogo from '../images/wellmo.png';

export const Head = () => <title>FHIR Demo 2023: Wellmo</title>;

export default function Wellmo({ location }) {
  const features = [
    FeatureList.SMART,
  ];
  
  return (
    <Demo features={features} location={location}>
      <h1>
        <a href="https://www.wellmo.com/">
          <img src={wellmoLogo} alt="Wellmo" />
        </a>
      </h1>
      <Features list={features} />
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <h3>Jaakko Olkkonen</h3>
          <p>CEO and Founder</p>
          <address>
            <a href="mailto:jaakko.olkkonen@wellmo.com">jaakko.olkkonen@wellmo.com</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
