import * as React from 'react';
import { Link } from 'gatsby';

import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';
import duodecimLogo from '../images/duodecim.svg';

export const Head = () => <title>FHIR Demo 2024: Duodecim</title>;

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
      <aside className="event atk-paivat">
        <h2>ATK-päivät: Ständi 124</h2>
        <p><strong>FHIR-demo <time
        dateTime="2023-05-23T15:35:00.000+03:00">tiistaina klo 15.35</time></strong>.</p>
      </aside>
      <section id="demo">
        <h2>FHIR Demo 2023</h2>
        <p>Duodecim has implemented <strong>SMART App Launch</strong> support for its Calculators
        and Forms platform. Various calculators and forms, mainly intended for healthcare
        professionals, have long been a popular part of Duodecim's offering, for example in the
        online portals and EBMEDS Clinical Decision Support. Nowadays, it is the responsibility of
        a professional to manually save the results of the form, and the results cannot be
        automatically saved structurally. In the new solution, it is possible to open the form
        directly from the electronic health record system, pre-fill it with patient data from the
        FHIR server, and save the form responses and results back to the FHIR server. In this way,
        the answers entered into the form can also be used later, for example, to assess the
        development of the patient's situation and, where applicable, to pre-fill other forms.</p>
        <p>Duodecim's FHIR Demo 2023 has been implemented in cooperation with <Link
        to="../esko">Esko Systems Oy</Link>. From the user interface of the electronic health
        record system, a clinician can open and fill in an EPDS form for the patient. The results
        are saved on Esko's FHIR server</p>
      </section>
      <section id="work-in-progress">
        <h2>Work in progress</h2>
        <p>Duodecim is currently exploring multiple areas related to Clinical Reasoning and
        Clinical Decision Support using FHIR</p>
        <ul>
          <li>CDS Hooks</li>
          <li>CQL - Clinical Quality Language</li>
          <li>CPG - Clinical Practice Guidelines</li>
          <li>EBMonFHIR</li>
        </ul>        
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
