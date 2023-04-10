import * as React from 'react';

import Demo from '../components/Demo';
import Features from '../components/Features';
import { demos } from '../config/data';
import fujitsuLogo from '../images/fujitsu.svg';

export const Head = () => <title>FHIR Demo 2023: Fujitsu</title>;

export default function Fujitsu({ location }) {
  const features = demos.fujitsu.features;
  
  return (
    <Demo features={features} location={location}>
      <h1>
        <a href="https://www.fujitsu.com/fi/">
          <img src={fujitsuLogo} alt="Fujitsu" />
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
