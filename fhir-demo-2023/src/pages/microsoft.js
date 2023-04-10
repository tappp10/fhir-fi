import * as React from 'react';

import Demo from '../components/Demo';
import Features from '../components/Features';
import * as FeatureList from '../components/FeatureList';
import microsoftLogo from '../images/microsoft.svg';

export const Head = () => <title>FHIR Demo 2023: Microsoft</title>;

export default function Microsoft({ location }) {
  const features = [
    FeatureList.FHIR,
    FeatureList.Opensource,
    FeatureList.SMART,
  ];
  
  return (
    <Demo features={features} location={location}>
      <h1>
        <a href="https://www.microsoft.com/">
          <img src={microsoftLogo} alt="Microsoft" />
        </a>
      </h1>
      <Features list={features} />
      <p>Microsoft presents several solutions:</p>
      <ul>
        <li>
          An open-source <a href="#fhir-server">FHIR server</a> that can be used as a self-hosted
          server or as a managed solution.
        </li>
        <li>
          Several <a href="#analytics">data pipelines and analytics services</a> that can be used
          to analyze and utilize available FHIR data.
        </li>
      </ul>
      <section id="fhir-server">
        <h2>FHIR Server</h2>
      </section>
      <section id="analytics">
        <h2>Data Pipelines and Analytics</h2>
      </section>
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <h3>Aleksi Kuitunen</h3>
          <p>Health Lead at Microsoft</p>
          <address>
            <a href="mailto:aleksi.kuitunen@microsoft.com">aleksi.kuitunen@microsoft.com</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
