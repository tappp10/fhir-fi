import * as React from 'react';

import { getHead } from '../components/Article';
import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';
import innokasLogo from '../images/innokas.png';

export function Head() {
  const title = <title>FHIR Demo 2024: Innokas Medical / MedicubeX</title>;
  return getHead({ title });
};

export default function Innokas({ location }) {
  const roles = demos['innokas'].roles;
  
  return (
    <Demo roles={roles} location={location}>
      <h1>
        <a href="https://www.innokasmedical.fi/">
          <img src={innokasLogo} alt="Innokas" />
        </a>
      </h1>
      <Roles list={roles} />
      <section className="work-in-progress">
        <p>Participation confirmed, showcase content to be added.</p>
      </section>
    </Demo>
  );
};
