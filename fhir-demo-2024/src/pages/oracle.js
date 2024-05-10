import * as React from 'react';

import { getHead } from '../components/Article';
import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';
import logo from '../images/oracle.svg'

export function Head() {
  const title = <title>FHIR Demo 2024: Oracle Health (Cerner)</title>;
  return getHead({ title });
};

export default function Oracle({ location }) {
  const roles = demos.oracle.roles;
  
  return (
    <Demo roles={roles} location={location}>
      <h1>
        <a href="https://www.oracle.com/health/"><img src={logo} alt="Oracle Health" /></a>
      </h1>
      <Roles list={roles} />
      <section className="work-in-progress">
        <p>Showcase content to be added.</p>
      </section>
    </Demo>
  );
};
