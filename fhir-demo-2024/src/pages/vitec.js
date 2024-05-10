import * as React from 'react';

import { getHead } from '../components/Article';
import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';
import logo from '../images/Vitec_Acute.png'

export function Head() {
  const title = <title>FHIR Demo 2024: Vitec Acute</title>;
  return getHead({ title });
};

export default function Vitec({ location }) {
  const roles = demos.vitec.roles;
  
  return (
    <Demo roles={roles} location={location}>
      <h1 className="white">
        <a href="https://www.vitec-acute.com/en/"><img src={logo} alt="Vitec Acute" /></a>
      </h1>
      <Roles list={roles} />
      <section className="work-in-progress">
        <p>Showcase content to be added.</p>
      </section>
    </Demo>
  );
};
