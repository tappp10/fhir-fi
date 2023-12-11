import * as React from 'react';
import { Link } from 'gatsby';

import Article from '../components/Article';
import fhirLogo from '../images/fhir.svg';

export const Head = () => <title>FHIR Demo 2023 at Vitalis</title>;

export default function Vitalis() {

  return (
    <Article>
      <section id="vitalis">
        <h1>FHIR Demo 2023 in Vitalis</h1>
        <p>
          Several FHIR Demo 2023 participants will be at <a href="https://vitalis.nu/">Vitalis</a>.
        </p>
      </section>
      <section className="event vitalis">
        <h2>FHIR Demo particinpants at Vitalis</h2>
        <ul>
          <li>
            <Link to="../innokas-medical">Innokas Medical</Link> presents the Digious concept and
            the MedicubeX station at the <strong>Matchmaking & Event Area</strong> on <strong><time
            dateTime="2023-05-24T15:30:00.000+02:00">Wednesday, May 24 at 15:30 -
            17:00</time></strong>.
          </li>
          <li>
            <p>
              <Link to="../mylab">Mylab</Link> presents their ideas using FHIR
              at <strong>B09:34</strong> on
            </p>
            <strong>
              <ul>
                <li>
                  <time dateTime="2023-05-23T15:10:00.000+02:00">Tuesday, May 23 at 15:10</time>.
                </li>
                <li>
                  <time dateTime="2023-05-24T15:30:00.000+02:00">Wednesday, May 24 at 10:10</time>.
                </li>
              </ul>
            </strong>
            <p>
              Read also <a
              href="https://www.mylab.fi/en/voice-of-mylab/news/improved-quality-of-life-through-integrated-diagnostics-lets-discuss-the-future-of-ehealth-at-vitalis/">Mylab's
              full Vitalis programme</a>.
            </p>
          </li>
          <li>
            <p>
              <Link to="../sensotrend">Sensotrend</Link> will be present at the event on Thursday,
              May 25.
            </p>
            <p>
              Sensotrend's founder Mikael Rinnetmäki, also the FHIR Ambassador of HL7 Finland,
              presents the <a href="https://invitepeople.com/public/seminars/ae2cdf5033">Nordic
              FHIR Showcase 2023</a> at <strong><time
              dateTime="2023-05-25T11:00:00.000+02:00">11:00 -
              11:30</time></strong> on <strong>stage F1</strong>.
            </p>
          </li>
        </ul>
        <p>Other FHIR Demo participants include</p>
        <ul>
          <li>
            <Link to="../cgi">CGI</Link>, place B07:03
          </li>
          <li>
            <Link to="../intersystems">InterSystems</Link>, place B09:20
          </li>
          <li>
            <Link to="../microsoft">Microsoft</Link>, place B08:32
          </li>
          <li>
            <Link to="../tietoevry">Tietoevry</Link>, place B09:12
          </li>
        </ul>
      </section>
      <section id="other-events">
        <h2>Other events</h2>
        <p>
          At the same time, many participants were also at the Finnish <Link
          to="../atk-paivat">Sosiaali- ja terveydenhuollon ATK-päivät</Link> event.
        </p>
        <p>
          The demos were also be presented in the <Link to="../devdays">FHIR
          DevDays</Link> developer event and at the <a
          href="https://radicalhealthfestival.messukeskus.com/">Radical Health Festival</a>.
        </p>
        <p>
          We're also planning some roadshows for the FHIR Demo. If you'd like the Nordic FHIR Demo
          2023 showcase to be presented to you or your people, please get in touch with <a
          href="mailto:mikael@sensotrend.com">mikael@sensotrend.com</a>!
        </p>
      </section>
      <img className="decoration" src={fhirLogo} alt="" />
    </Article>
  )
};
