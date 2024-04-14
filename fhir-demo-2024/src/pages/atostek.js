import * as React from 'react';

import { getHead } from '../components/Article';
import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';
import atostekLogo from '../images/atostek.png';

export function Head() {
  const title = <title>FHIR Demo 2024: Atostek</title>;
  return getHead({ title });
};

export default function Atostek({ location }) {
  const roles = demos.atostek.roles;
  
  return (
    <Demo roles={roles} location={location}>
      <h1>
        <a href="https://atostek.com/">
          <img src={atostekLogo} alt="Atostek" />
        </a>
      </h1>
      <Roles list={roles} />
      <section className="work-in-progress">
        <p>Participation confirmed, showcase content to be added.</p>
        {/*
          From: Riikka Ala-Hulkko
          Date: Thursday, 11. April 2024 at 10.26
          To: Mikael Rinnetmäki <mikael@sensotrend.com>
          Subject: Re: FHIR Demo 2024
          Kiva juttu, kiitos. Kokoan ne sinulle heti, kun saadaan ankat riviin täällä päässä!
        */}
      </section>
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <h3>Mika Torhola</h3>
          <p>CEO</p>
          <address>
            <a href="mailto:Mika.Torhola@atostek.com">Mika.Torhola@atostek.com</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
