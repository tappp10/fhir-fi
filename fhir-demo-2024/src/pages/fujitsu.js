import * as React from 'react';
import { Link } from 'gatsby';

import Demo from '../components/Demo';
import Features from '../components/Features';
import { demos } from '../config/data';
import fujitsuLogo from '../images/fujitsu.svg';
import emom from '../images/emom.png';
import joni from '../images/joni_hirviniemi.png';

export const Head = () => <title>FHIR Demo 2024: Fujitsu</title>;

export default function Fujitsu({ location }) {
  const features = demos.fujitsu.features;
  
  return (
    <Demo features={features} location={location}>
      <h1>
        <a href="https://www.fujitsu.com/fi/">
          <img src={fujitsuLogo} alt="Fujitsu" />
        </a>
      </h1>
      <Features list={features} />
      <aside className="event atk-paivat">
        <h2>ATK-päivät: Ständi 114</h2>
        <p>Tervetuloa ständillemme keskustelemaan terveydenhuollon järjestelmä- ja
        integraatiotarpeista!</p>
        <p>Esittelemme raskausdiabeteksen kattavaa eMOM-etäseurantaratkaisua, jolla saadaan aidosti
        vaikuttavaa, ennakoivaa ja osallistavaa hoitoa raskaana oleville äideille.</p>
        <p>Aikataulutettu demo esittelee eMOM-etäseurantaratkaisun SMART on FHIR App Launchin
        Apotti-järjestelmästä sekä tietojen hakua Apotin FHIR-rajapintoja hyödyntäen.</p>
        <ul>
          <li>
            <time dateTime="2023-05-23T15:45:00.000+03:00">tiistaina klo 15.45</time>, Ständi 114
          </li>
        </ul>
        <p>Kerromme myös kattavasta integraatiopalvelustamme.</p>
      </aside>
      <p>With over 40 years of experience, Fujitsu Finland develops intelligent, human-centered
      services in cooperation with customers, research institutes and universities.</p>
      <section id="emom">
        <h2>SMART on FHIR App Launch</h2>
        <p>Our eMOM service for monitoring gestational diabetes is integrated to <Link
        to="../apotti">Apotti</Link> with <strong>SMART App Launch</strong>. It also uses Apotti's
        FHIR resources.</p>
        <img className="no-scale" src={emom} alt="" />
      </section>
      <section id="fhir-server">
        <h2>FHIR server as a service</h2>
        <p>You can have FHIR capabilities easily with our 24/7 monitored Integration as a Service.</p>
        <p>Service is based on excellent InterSystems technology.</p>
      </section>
      <section id="contact">
        <h3>Contact</h3>
        <div className="white business-card">
          <picture>
            <img src={joni} alt="" />
          </picture>
          <h3>Joni Hirviniemi</h3>
          <p>Integration Lead</p>
          <address>
            <a href="mailto:joni.hirviniemi@fujitsu.com">joni.hirviniemi@fujitsu.com</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
