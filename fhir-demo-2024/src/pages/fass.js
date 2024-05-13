import * as React from 'react';

import { getHead } from '../components/Article';
import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';
import logo from '../images/fass-logo-allmanhet.png';

export function Head() {
  const title = <title>FHIR Demo 2024: Fass.se</title>;
  return getHead({ title });
};

export default function Fass({ location }) {
  const roles = demos.fass.roles;

  return (
    <Demo roles={roles} location={location}>
      <h1>
        <a href="https://www.fass.se/">
          <img src={logo} alt="Fass.se" />
        </a>
      </h1>
      <Roles list={roles} />
      <section id="about">
        <p>Showcase content to be included.</p>
      </section>
    </Demo>
  );
};
