import * as React from 'react';

import { getHead } from '../components/Article';
import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';
import apottiLogo from '../images/apotti.png';

export function Head() {
  const title = <title>FHIR Demo 2024: Apotti</title>;
  return getHead({ title });
};

export default function Apotti({ location }) {
  const roles = demos.apotti.roles;
  
  return (
    <Demo roles={roles} location={location}>
      <h1>
        <a href="https://www.apotti.fi/">
          <img src={apottiLogo} alt="Apotti" />
        </a>
      </h1>
      <Roles list={roles} />
      <section className="work-in-progress">
        <p>Participation confirmed, showcase content to be added.</p>
        {/*
          From: Renko Jari
          Date: Friday, 12. April 2024 at 12.40
          To: Mikael Rinnetmäki <mikael@sensotrend.com>, Tiainen Ilkka
          Subject: VS: FHIR Demo 2024
        */}
      </section>
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <h3>Ilkka Tiainen</h3>
          <p>Ecosystem Specialist</p>
          <address>
            <a href="mailto:ilkka.tiainen@apotti.fi">ilkka.tiainen@apotti.fi</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
