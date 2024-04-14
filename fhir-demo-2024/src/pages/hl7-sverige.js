import * as React from 'react';

import { getHead } from '../components/Article';
import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';

export function Head() {
  const title = <title>FHIR Demo 2024: HL7 Sverige</title>;
  return getHead({ title });
};

export default function Hl7Sverige({ location }) {
  const roles = demos['hl7-sverige'].roles;
  
  return (
    <Demo roles={roles} location={location}>
      <h1>
        <a href="https://hl7.se/">HL7 Sverige</a>
      </h1>
      <Roles list={roles} />
      <section className="work-in-progress">
        <p>Showcase content to be added.</p>
      </section>
    </Demo>
  );
};
