import * as React from 'react';

import Demo from '../components/Demo';
import Features from '../components/Features';
import { demos } from '../config/data';
import intersystemsLogo from '../images/intersystems.svg';

export const Head = () => <title>FHIR Demo 2023: InterSystems</title>;

export default function InterSystems({ location }) {
  const features = demos.intersystems.features;
  
  return (
    <Demo features={features} location={location}>
      <h1>
        <a href="https://www.intersystems.com/">
          <img src={intersystemsLogo} alt="InterSystems" />
        </a>
      </h1>
      <Features list={features} />
      <aside className="event atk-paivat">
        <h2>ATK-päivät: Ständi 101</h2>
        <p>Tervetuloa ständillemme näkemään ja keskustelemaan kuinka voimme lisätä
        FHIR-kyvykkyyksiä olemassa oleviin ratkaisuihin!</p>
        <p>Esittelemme <strong>aikataulutetun FHIR-demon <time
        dateTime="2023-05-23T12:15:00.000+03:00">Tiistaina klo 12.15</time></strong>.</p>
        <p>Esittelemme demoja ja keskustelemme ständillämme koko tapahtuman ajan.</p>
      </aside>
      <section id="intro">
        <p>InterSystems can FHIR-enable your solution: provide it with a <a
        href="https://www.hl7.org/fhir/http.html">standards based FHIR API</a> including <a
        href="https://www.hl7.org/fhir/search.html">rich search capabilities</a>, map FHIR to other
        health care standards and non-standard data models and transport protocols, do what ever
        needed to connect your solution to the outside world and harmonise the data as it is optimal
        for your solution.</p>      
      </section>
      <section id="fhir-enabler">
        <h2>Very rich FHIR API on top of a native API of a patient system</h2>
        <p>We can show you, in co-operation with <a href="https://www.vitec-acute.com">Vitec
        Acute</a>, how a very rich standards based FHIR API can be implemented on top of existing
        internal API of Acute patient system. There are several options for making this happen,
        each with pros and cons. Come and see, and discuss.</p>
      </section>
      <section id="fhir-server">
        <h2>Standard FHIR server - from the cloud, as a service, or for your choice of
        platform</h2>
        <p>Looking for standard FHIR server to store and server your data? We are cloud agnostic
        offering the server from Azure, AWS, GCS, or any cloud. Or subscribe the FHIR server as a
        service from Fujitsu (in Finland) or from other partner of ours. Or deploy our IRIS for
        Health data platform yourself on public cloud or on-prem and spin up as many standard FHIR
        servers as you need - in minutes.</p>
      </section>
      <section id="smart">
        <h2>SMART on FHIR App Launch</h2>
        <p>You have surely heard of SMART on FHIR, but have you actually seen any such application
        live? Come and see how Sensotrend app works together with IRIS for Health data platform. We
        can even show all the magic happening under the hood.</p>
      </section>
      <section id="v2-lab">
        <h2>Mapping FHIR to HL7 v2 for laboratory orders and results</h2>
        <p>This case study shows that reality is lot more complex than you would expect - but can
        be solved with powerful technology. Even though the data model were exactly the same FHIR
        resources, this use case can be implemented in many different ways - that are incompatible
        on the FHIR side. Implementing it as RESTful as possible requires rich set of components
        for storing, mapping and implementing business processes with FHIR.</p>
      </section>
      <section id="ccow-to-smart">
        <h2>Mapping Finnish minimum context management to SMART App launch</h2>
        <p>We demonstrated this last year together with TietoEvry and can show you also this year
        how it worked.</p>
      </section>
      <section id="whatever-you-need">
        <h2>Health Care Interoperability - what ever you need</h2>
        <p>Be it FHIR or what ever data model, be it just integration or more complex data
        collection, harmonisation, viewing and analysing, we have the technologies needed - proven
        in the worlds biggest and most prominent settings.</p>
      </section>
      <section id="intersystems">
        <h2>InterSystems</h2>
        <p>An Innovative Data Technology Company, the Engine Behind the World's Most Important
        Applications.</p>
        <p><a href="https://www.intersystems.com/solutions/fhir/">InterSystems on FHIR</a></p>
      </section>
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <h3>Anssi Kauppi</h3>
          <p>Sales Engineer</p>
          <address>
            <a href="mailto:anssi.kauppi@intersystems.com">anssi.kauppi@intersystems.com</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
