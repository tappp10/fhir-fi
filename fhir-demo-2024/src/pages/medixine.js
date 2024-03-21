import * as React from 'react';

import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';
import medixineLogo from '../images/medixine.webp';

export const Head = () => <title>FHIR Demo 2024: Medixine</title>;

export default function Medixine({ location }) {
  const roles = demos.medixine?.roles;
  
  return (
    <Demo roles={roles} location={location}>
      <h1>
        <a href="https://www.medixine.com/">
          <img src={medixineLogo} alt="Medixine" />
        </a>
      </h1>
      <Roles list={roles} />
      <aside className="event atk-paivat">
        <h2>ATK-päivät: Ständi 413</h2>
      </aside>
      <p>Demo description will be added soon.</p>
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <h3>Lasse Rousi</h3>
          <p>CEO</p>
          <address>
            <a href="mailto:lasse.rousi@medixine.com">lasse.rousi@medixine.com</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
