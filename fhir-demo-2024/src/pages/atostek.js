import * as React from 'react';

import Demo from '../components/Demo';
import Features from '../components/Features';
import { demos } from '../config/data';
import atostekLogo from '../images/atostek.png';

export const Head = () => <title>FHIR Demo 2024: Atostek</title>;

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
        <p><strong>FHIR-demo <time
        dateTime="2023-05-24T12:45:00.000+03:00">keskiviikkona klo 12.45</time></strong>.</p>
      </aside>
      <p>Atostek's demo case is descibed on an <a
      href="https://atostek.com/fhir-standardin-kayttoonotto-terveydenhuollossa-miksi-vaiheittainen-toteutus-on-avain-onnistumiseen/">external
      site</a>.</p>
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
