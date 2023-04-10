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
