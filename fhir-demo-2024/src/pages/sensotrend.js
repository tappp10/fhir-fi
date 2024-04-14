import * as React from 'react';
import { Link } from 'gatsby';

import { getHead } from '../components/Article';
import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';
import mikaelx1 from '../images/MikaelRinnetmaki.jpg';
import mikaelx2 from '../images/MikaelRinnetmaki2x.jpg';
import sensotrendLogo from '../images/sensotrend.svg';
import sensotrendAGPImage from '../images/sensotrend-agp.png';
import sensotrendConnectImage from '../images/sensotrend-connect.jpg';

export function Head() {
  const title = <title>FHIR Demo 2024: Sensotrend</title>;
  return getHead({ title });
};

export default function Sensotrend({ location }) {
  const roles = demos.sensotrend.roles;

  return (
    <Demo location={location} >
      <h1>
        <a href="https://www.sensotrend.com/">
          <img src={sensotrendLogo} alt="Sensotrend" />
        </a>
      </h1>
      <Roles list={roles} targetPage="." targetFragment="" />

      {/*
      - Apps and Consultancy

      

      - business models?
      - ecosystems?
      - work groups
      */}
      <section id="intro">
        <p>Sensotrend offers both apps and consultancy.</p>
        <h2>Apps</h2>
        <ul>
          <li><Link to="#sensotrend-connect">Diabetes Remote Monitoring</Link></li>
          <li><Link to="#careplan">Care Plan for Diabetes</Link></li>
          <li><Link to="#carepath">Digital Care Path</Link></li>
        </ul>
        <h2>Consultancy</h2>
        <ul>
          <li><Link to="#ehr-integrations">EHR Integrations</Link></li>
          <li><Link to="#fhir-imlpementations">FHIR Implementations</Link></li>
          <li><Link to="#regulatory">Regulatory Affairs</Link></li>
        </ul>
        <p>
          See also our demos in <a href="https://fhir.fi/en/demo2023/sensotrend/">last year&apos;s
          showcase</a>. They contain plenty of additional information.
        </p>
      </section>
      <section id="sensotrend-connect">
        <h2>Sensotrend Connect</h2>
        <p>
          Sensotrend Connect is a diabetes remote monitoring solution.
        </p>
        <p>
          It makes life with diabetes easier by combining data from dozens of medical devices and
          wellness trackers and deriving actionable insights from the data. It also facilitates
          sharing the information with both healthcare professionals and peers.
        </p>
        <a href={sensotrendConnectImage}>
          <img src={sensotrendConnectImage} alt="Illustration of Sensotrend Connect" />
        </a>
        <p>
          Sensotrend Connect transforms data from third party apps and devices into HL7 FHIR format
          (mainly <strong>Observation</strong> and <strong>MedicationAdministration</strong> resources,
          see the <a
          href="https://github.com/Sensotrend/sensotrend-converter">open-source converter</a>) and
          stores it in any specified FHIR server.
        </p>
        <p>
          The solution also includes a dashboard view of the data that is integrated into
          electronic health record systems with the <strong>SMART App Launch</strong> specification.
          See an <a
          href="https://hl7.fi/fhir/finnish-smart/AuditEvent-apotti-ehr-launch-by-practitioner.html"
          >example launch flow</a> in the Finnish Implementation Guide for SMART App Launch.
        </p>
        <figure>
          <a href={sensotrendAGPImage}>
            <img src={sensotrendAGPImage} alt="Screen capture of Sensotrend AGP Report" />
          </a>
          <figcaption>
            The main view of Sensotrend Connect is based on the internationally harmonized <a
            href="http://www.agpreport.org/agp/about">Ambulatory Glucose Profile</a> specification.
          </figcaption>
        </figure>
      </section>
      <section id="careplan">
        <h2>Care Plan for Diabetes</h2>
        <p>
          The Care Plan for Diabetes formalizes established treatment protocols and best practices
          for diabetes treatment into an app.
        </p>
        <p>
          It keeps track and notifies the patient of appointments, lab tests, and other actions
          relevant to care. The app also helps healthcare organizations identify treatment gaps.
        </p>
      </section>
      <section id="carepath">
        <h2>Digital Care Path</h2>
      </section>
      <section id="ehr-integrations">
        <h2>EHR Integrations</h2>
      </section>
      <section id="fhir-implementations">
        <h2>FHIR Implementations</h2>
      </section>
      <section id="regulatory">
        <h2>Regulatory Affairs</h2>
      </section>
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <picture>
            <source srcSet={mikaelx2} media="(min-resolution: 144dpi)" />
            <source srcSet={mikaelx1} />
            <img src={mikaelx1} alt="" />
          </picture>
          <h3>Mikael Rinnetmäki</h3>
          <p>Founder, Sensotrend Oy</p>
          <address>
            <a href="mailto:mikael@sensotrend.com">mikael@sensotrend.com</a>
            <br />
            <a href="tel:+358503855511">+358 50 385 5511</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
