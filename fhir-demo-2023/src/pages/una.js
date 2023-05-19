import * as React from 'react';
import { Link } from 'gatsby';

import Demo from '../components/Demo';
import Features from '../components/Features';
import { demos } from '../config/data';
import unaLogo from '../images/una.svg';

export const Head = () => <title>FHIR Demo 2023: Una</title>;

export default function Una({ location }) {
  const features = demos.una.features;
  
  return (
    <Demo features={features} location={location}>
      <h1>
        <a href="https://unaoy.fi/">
          <img src={unaLogo} alt="Una Oy" />
        </a>
      </h1>
      <Features list={features} />
      <aside className="event atk-paivat">
        <h2>ATK-päivät: Ständi 210</h2>
        <p>UNA on mukana sosiaali- ja terveydenhuollon ATK-päivillä järjestettävässä FHIR Demossa.
        Tervetuloa ständillemme C.210 keskustelemaan FHIRistä ja muista mahdollisuuksistamme auttaa
        saamaan sote-data hyödynnettäväksi.</p>
      </aside>
      <section id="demo">
        <h2>Demo</h2>
        <p>UNA on toteuttanut FHIR Demoon 2023 konkreettisen ja testattavissa olevan kansallisia
        FHIR perusprofiileja hyödyntävän tapahtumien FHIR-rajapinnan, jossa yhdistellään Ydin
        UNA:ssa tietoja useista eri tietolähteistä. Rajapinnan tuottama tieto on lisäksi tuotu
        hyödynnettäväksi <Link to="../bcb-medical">BCB Medicalin</Link> toteuttamaan
        Omavointi-mobiilisovellukseen.</p>
        <div className="media">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/CRt6nMQL6O4"
            title="UNA FHIR Demo 2023"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen>
          </iframe>
        </div>
      </section>
      <section id="smart">
        <h2>SMART App Launch</h2>
        <p>UNAssa ollaan tekemässä myös sovellusten käynnistys SMART App Launch -toteutuksena.</p>
      </section>
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <h3>Juha Rannanheimo</h3>
          <p>Chief Development Officer</p>
          <address>
            <a href="mailto:juha.rannanheimo@unaoy.fi">juha.rannanheimo@unaoy.fi</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
