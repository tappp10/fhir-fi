import * as React from 'react';

import Demo from '../components/Demo';
import Features from '../components/Features';
import { demos } from '../config/data';
import atostekLogo from '../images/atostek.png';

export const Head = () => <title>FHIR Demo 2023: Atostek</title>;

export default function Atostek({ location }) {
  const features = demos.atostek.features;
  
  return (
    <Demo features={features} location={location}>
      <h1>
        <a href="https://atostek.com/">
          <img src={atostekLogo} alt="Atostek" />
        </a>
      </h1>
      <Features list={features} />
      <aside className="event atk-paivat">
        <h2>ATK-päivät: Ständi 94</h2>
      </aside>
      <p>Demo description will be added soon.</p>
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <h3>Mika Torhola</h3>
          <p>CEO</p>
          <address>
            <a href="mailto:Mika.Torhola@atostek.com">Mika.Torhola@atostek.com</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
