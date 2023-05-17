import * as React from 'react';

import Demo from '../components/Demo';
import Features from '../components/Features';
import { demos } from '../config/data';
import cgiLogo from '../images/cgi.svg';

export const Head = () => <title>FHIR Demo 2023: CGI</title>;

export default function Cgi({ location }) {
  const features = demos.cgi.features;
  
  return (
    <Demo features={features} location={location}>
      <h1>
        <a href="https://www.cgi.com/fi/">
          <img src={cgiLogo} alt="CGI" />
        </a>
      </h1>
      <Features list={features} />
      <section id="omni360">
        <h2>OMNI360</h2>
        <p>OMNI360 is a modular and modern solution for healthcare, socialcare and specialized
        care.</p>
        <p>CGI has a strong commitment to use HL7 FHIR within our product portfolio and therefore
        we already have a wide range of different FHIR resources implemented. Future roadmap also
        contains our next FHIR development targets.</p>
        <p>FHIR resources already <strong>in production</strong> or <i>being implemented</i> are:</p>
        <ul>
          <li><i>Appointment</i></li>
          <li><i>Careplan</i></li>
          <li><strong>ClinicalDocument</strong></li>
          <li><i>Composition</i></li>
          <li><strong>Condition</strong></li>
          <li><i>Consent</i></li>
          <li><strong>Encounter</strong></li>
          <li><strong>Immunization</strong></li>
          <li><strong>Location</strong></li>
          <li><strong>Observation</strong></li>
          <li><strong>Organization</strong></li>
          <li><strong>Patient</strong></li>
          <li><strong>Practitioner</strong></li>
          <li><i>Procedure</i></li>
          <li><i>RelatedPerson</i></li>
          <li><strong>Schedule</strong></li>
          <li><strong>Task</strong></li>
        </ul>
      </section>
      <section id="other-products">
        <h2>Other Products</h2>
        <p>In addition to OMNI360, CGI uses FHIR API's in <strong>AVPH</strong> scheduling
        solution and in <strong>Hyvis</strong> patient portal.</p>
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
