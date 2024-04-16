import * as React from 'react';
import { Link } from 'gatsby';

import { getHead } from '../components/Article';
import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';
import triforkLogo from '../images/trifork.svg';

export function Head() {
  const title = <title>FHIR Demo 2024: Trifork</title>;
  return getHead({ title });
};

export default function Trifork({ location }) {
  const roles = demos.trifork.roles;

  return (
    <Demo roles={roles} location={location}>
      <h1>
        <a href="https://trifork.com/">
          <img src={triforkLogo} alt="Trifork" />
        </a>
      </h1>
      <Roles list={roles} />
      <section id="intro">
        <p>Trifork offers both Platform-as-a-Service (PaaS) and consultancy.</p>
        <h2>Platform</h2>
        <ul>
          <li><Link to="#thp">Trifork Health Platform</Link></li>
        </ul>
        <h2>Consultancy</h2>
        <ul>
          <li><Link to="#fut">Fælles Udbredelse af Telemedicin (FUT)</Link></li>
          <li><Link to="#gravitate">Gravitate Health</Link></li>
          <li><Link to="#rkkp">Regionernes Kliniske Kvalitetsudviklingsprogram (RKKP)</Link></li>
          <li><Link to="#regulatory">Regulatory Affairs</Link></li>
        </ul>
      </section>

      <section id="thp">
        <h2>Trifork Health Platform</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at diam vehicula, semper ligula ac, auctor justo. Nunc in felis aliquet, viverra erat aliquet, accumsan sapien. Quisque elementum congue purus at mattis. Etiam volutpat porta urna, non faucibus nibh lacinia nec. Phasellus sed nisl blandit leo ultrices sagittis at quis mauris. Phasellus eget dolor nec justo aliquet ultrices non nec lorem. Etiam tortor eros, tempor ut sollicitudin a, dignissim in diam.
        </p>
      </section>

      <section id="fut">
        <h2>FUT</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at diam vehicula, semper ligula ac, auctor justo. Nunc in felis aliquet, viverra erat aliquet, accumsan sapien. Quisque elementum congue purus at mattis. Etiam volutpat porta urna, non faucibus nibh lacinia nec. Phasellus sed nisl blandit leo ultrices sagittis at quis mauris. Phasellus eget dolor nec justo aliquet ultrices non nec lorem. Etiam tortor eros, tempor ut sollicitudin a, dignissim in diam.
        </p>
      </section>

      <section id="gravitate">
        <h2>Gravitate Health</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at diam vehicula, semper ligula ac, auctor justo. Nunc in felis aliquet, viverra erat aliquet, accumsan sapien. Quisque elementum congue purus at mattis. Etiam volutpat porta urna, non faucibus nibh lacinia nec. Phasellus sed nisl blandit leo ultrices sagittis at quis mauris. Phasellus eget dolor nec justo aliquet ultrices non nec lorem. Etiam tortor eros, tempor ut sollicitudin a, dignissim in diam.
        </p>
      </section>

      <section id="rkkp">
        <h2>Regionernes Kliniske Kvalitetsudviklingsprogram (RKKP)</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus at diam vehicula, semper ligula ac, auctor justo. Nunc in felis aliquet, viverra erat aliquet, accumsan sapien. Quisque elementum congue purus at mattis. Etiam volutpat porta urna, non faucibus nibh lacinia nec. Phasellus sed nisl blandit leo ultrices sagittis at quis mauris. Phasellus eget dolor nec justo aliquet ultrices non nec lorem. Etiam tortor eros, tempor ut sollicitudin a, dignissim in diam.
        </p>
      </section>

      

      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">

          <h3>Jens Kristian Villadsen</h3>
          <p>Healthcare CTO, Trifork</p>
          <address>
            <a href="mailto:jvi@trifork.com">jvi@trifork.com</a>
            <br />
            <a href="tel:+4523373806">+45 23 37 38 06</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
