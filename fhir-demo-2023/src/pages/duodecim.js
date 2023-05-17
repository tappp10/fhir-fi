import * as React from 'react';

import Demo from '../components/Demo';
import Features from '../components/Features';
import { demos } from '../config/data';
import duodecimLogo from '../images/duodecim.svg';

export const Head = () => <title>FHIR Demo 2023: Duodecim</title>;

export default function Duodecim({ location }) {
  const features = demos.duodecim.features;
  
  return (
    <Demo features={features} location={location}>
      <h1>
        <a href="https://duodecim.fi/">
          <img src={duodecimLogo} alt="Duodecim" />
        </a>
      </h1>
      <Features list={features} />
      <aside className="event atk-paivat">
        <h2>ATK-päivät: Ständi 124</h2>
        <p><strong>FHIR-demo <time
        dateTime="2023-05-23T15:35:00.000+03:00">tiistaina klo 15.35</time></strong>.</p>
      </aside>
      <p>Demo description will be added soon.</p>
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <h3>Joonas Mäkinen</h3>
          <p>Service Manager</p>
          <address>
            <a href="mailto:joonas.makinen@duodecim.fi">joonas.makinen@duodecim.fi</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
