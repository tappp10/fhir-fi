import * as React from 'react';

import { getHead } from '../components/Article';
import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';
import duodecimLogo from '../images/duodecim.svg';

export function Head() {
  const title = <title>FHIR Demo 2024: Duodecim</title>;
  return getHead({ title });
};

export default function Duodecim({ location }) {
  const roles = demos.duodecim.roles;
  
  return (
    <Demo roles={roles} location={location}>
      <h1>
        <a href="https://duodecim.fi/">
          <img src={duodecimLogo} alt="Duodecim" />
        </a>
      </h1>
      <Roles list={roles} />
      <section className="work-in-progress">
        <p>Participation confirmed, showcase content to be added.</p>
      </section>
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <h3>Joonas Mäkinen</h3>
          <p>Product Owner</p>
          <address>
            <a href="mailto:joonas.makinen@duodecim.fi">joonas.makinen@duodecim.fi</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
