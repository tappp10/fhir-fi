import * as React from 'react';

import Demo from '../components/Demo';
import Features from '../components/Features';
import { demos } from '../config/data';
import bcbMedicalLogo from '../images/bcb-medical.svg';

export const Head = () => <title>FHIR Demo 2023: BCB Medical</title>;

export default function BcbMedical({ location }) {
  const features = demos['bcb-medical'].features;
  
  return (
    <Demo features={features} location={location}>
      <h1>
        <a href="https://www.microsoft.com/">
          <img src={bcbMedicalLogo} alt="BCB Medical" />
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
