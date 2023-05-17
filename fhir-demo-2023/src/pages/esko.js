import * as React from 'react';

import Demo from '../components/Demo';
import Features from '../components/Features';
import { demos } from '../config/data';
import eskoLogo from '../images/eskosystems.svg';

export const Head = () => <title>FHIR Demo 2023: Esko Systems</title>;

export default function EskoSystems({ location }) {
  const features = demos.esko.features;
  
  return (
    <Demo features={features} location={location}>
      <h1>
        <a href="https://eskosystems.fi/">
          <img src={eskoLogo} alt="Esko Systems" />
        </a>
      </h1>
      <Features list={features} />
      <aside className="event atk-paivat">
        <h2>ATK-päivät: Ständi 126</h2>
      </aside>
      <p>Demo description will be added soon.</p>
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <h3>Petteri Stoor</h3>
          <p>Product Owner, Integrations</p>
          <address>
            <a href="mailto:Petteri.Stoor@eskosystems.fi">Petteri.Stoor@eskosystems.fi</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
