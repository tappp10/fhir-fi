import * as React from 'react';
import { Link } from 'gatsby';

import Demo from '../components/Demo';
import Features from '../components/Features';
import { demos } from '../config/data';
import glucostratusLogo from '../images/glucostratus.png';

export const Head = () => <title>FHIR Demo 2023: Glucostratus</title>;

export default function Glucostratus({ location }) {
  const features = demos.glucostratus?.features;
  
  return (
    <Demo features={features} location={location}>
      <h1 className="white">
        <a href="https://www.glucostratus.com/">
          <img src={glucostratusLogo} alt="Glucostratus" />
        </a>
      </h1>
      <Features list={features} />
      <aside className="event atk-paivat">
        <h2>ATK-päivät: Startup-alue</h2>
      </aside>
      <p>The aim is to implement the <strong>SMART App Launch</strong> from <Link
      to="../una">Una</Link>.</p>
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <h3>Pekka Mäkelä</h3>
          <p>CEO, Co-Founder</p>
          <address>
            <a href="mailto:pekka.makela@glucostratus.com">pekka.makela@glucostratus.com</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
