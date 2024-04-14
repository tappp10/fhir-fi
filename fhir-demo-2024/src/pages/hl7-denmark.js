import * as React from 'react';

import { getHead } from '../components/Article';
import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';

export function Head() {
  const title = <title>FHIR Demo 2024: HL7 Denmark</title>;
  return getHead({ title });
};

export default function Hl7Denmark({ location }) {
  const roles = demos['hl7-denmark'].roles;
  
  return (
    <Demo roles={roles} location={location}>
      <h1>
        <a href="https://hl7.dk/">HL7 Denmark</a>
      </h1>
      {/*
      We sure would like to deliver a showcase of the MedCom modernization, with transformation
      from legacy to FHIR. I will coordinate with my colleague Thea.
 
      I am sure Jens would be positive about a showcase of his Danish telemedicine project “FUT”.
      Probably you two already have plans.
      @Thea Do we have plans in the Danish affiliate, to suggest other Danish FHIR projects to join
      in? Next affiliate meeting is April 30. – is that too close to the conference?
      */}
      <Roles list={roles} />
      <section className="work-in-progress">
        <p>Showcase content to be added.</p>
      </section>
    </Demo>
  );
};
