import * as React from 'react';

import Demo from '../components/Demo';
import Features from '../components/Features';
import { demos } from '../config/data';
import innokasLogo from '../images/innokas-medical.png';
import medicubexLogo from '../images/medicubex.png';

export const Head = () => <title>FHIR Demo 2023: Innokas Medical / MedicubeX</title>;

export default function InnokasMedical({ location }) {
  const features = demos['innokas-medical'].features;
  
  return (
    <Demo features={features} location={location}>
      <h1>
        <a href="https://www.innokasmedical.fi/">
          <img className="half" src={innokasLogo} alt="Innokas Medical" />
        </a>
        <a href="https://www.medicubex.com/">
          <img className="half" src={medicubexLogo} alt="MedicubeX" />
        </a>
      </h1>
      <Features list={features} />
      <p>Demo description will be added soon.</p>
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <h3>Heikki Miinalainen</h3>
          <p></p>
          <address>
            <a href="mailto:heikki.miinalainen@innokasmedical.fi">heikki.miinalainen@innokasmedical.fi</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
