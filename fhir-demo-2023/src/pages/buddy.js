import * as React from 'react';

import Demo from '../components/Demo';
import Features from '../components/Features';
import { demos } from '../config/data';
import buddyLogo from '../images/buddy.png';

export const Head = () => <title>FHIR Demo 2023: Buddy Healthcare</title>;

export default function Buddy({ location }) {
  const features = demos.buddy.features;
    
  return (
    <Demo features={features} location={location}>
      <h1>
        <a href="https://www.buddyhealthcare.com/">
          <img src={buddyLogo} alt="Buddy Healthcare" />
        </a>
      </h1>
      <Features list={features} />
      <p>Demo description will be added soon.</p>
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <h3>Markus Lind</h3>
          <p>VP of Product and Business Development</p>
          <address>
            <a href="mailto:markus@buddyhealthcare.com">markus@buddyhealthcare.com</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
