import * as React from 'react';

import { getHead } from '../components/Article';
import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';

export function Head() {
  const title = <title>FHIR Demo 2024: HL7 Norway</title>;
  return getHead({ title });
};

export default function Hl7Norway({ location }) {
  const roles = demos['hl7-norge'].roles;
  
  return (
    <Demo roles={roles} location={location}>
      <h1>
        <a href="https://hl7.no/">HL7 Norge</a>
      </h1>
      <Roles list={roles} />
      <section className="work-in-progress">
        <p>Showcase content to be added.</p>
      </section>
    </Demo>
  );
};
