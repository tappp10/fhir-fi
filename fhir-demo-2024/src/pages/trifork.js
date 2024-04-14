import * as React from 'react';

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
      <section className="work-in-progress">
        <p>Participation confirmed, showcase content to be added.</p>
      </section>
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
        </div>
      </section>
    </Demo>
  );
};
