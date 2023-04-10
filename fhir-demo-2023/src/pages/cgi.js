import * as React from 'react';

import Demo from '../components/Demo';
import Features from '../components/Features';
import * as FeatureList from '../components/FeatureList';
import cgiLogo from '../images/cgi.svg';

export const Head = () => <title>FHIR Demo 2023: CGI</title>;

export default function Cgi({ location }) {
  const features = [
    FeatureList.Appointment,
    FeatureList.Schedule,
    FeatureList.Slot,
    FeatureList.SMART,
  ];
  
  return (
    <Demo features={features} location={location}>
      <h1>
        <a href="https://www.cgi.com/fi/">
          <img src={cgiLogo} alt="CGI" />
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
