import * as React from 'react';

import { getHead } from '../components/Article';
import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';
import cgiLogo from '../images/cgi.svg';

export function Head() {
  const title = <title>FHIR Demo 2024: CGI</title>;
  return getHead({ title });
};

export default function Cgi({ location }) {
  const roles = demos.cgi.roles;
  
  return (
    <Demo roles={roles} location={location}>
      <h1>
        <a href="https://www.cgi.com/fi/">
          <img src={cgiLogo} alt="CGI" />
        </a>
      </h1>
      <Roles list={roles} />
      <section className="work-in-progress">
        <p>Participation confirmed, showcase content to be added.</p>
        {/*
          From: Vehmanen, Markus
          Date: Thursday, 11. April 2024 at 14.58
          To: Mikael Rinnetmäki <mikael@sensotrend.com>
          Subject: RE: FHIR Demo 2024
        */}
      </section>
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <h3>Markus Vehmanen</h3>
          <p>Vice President, Healthcare & Social Care IT</p>
          <address>
            <a href="mailto:markus.vehmanen@cgi.com">markus.vehmanen@cgi.com</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
