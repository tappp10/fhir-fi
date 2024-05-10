import * as React from 'react';

import { getHead } from '../components/Article';
import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';
import logo from '../images/cambio.svg'

export function Head() {
  const title = <title>FHIR Demo 2024: Cambio</title>;
  return getHead({ title });
};

export default function Cambio({ location }) {
  const roles = demos.cambio.roles;
  
  return (
    <Demo roles={roles} location={location}>
      <h1>
        <a href="https://www.cambiogroup.com/cambio"><img src={logo} alt="Cambio" /></a>
      </h1>
      <Roles list={roles} />
      <section className="work-in-progress">
        <p>Showcase content to be added.</p>
      </section>
    </Demo>
  );
};
