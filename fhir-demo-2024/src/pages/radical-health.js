import * as React from 'react';
import { Link } from 'gatsby';

import Article, { getHead } from '../components/Article';
import fhirLogo from '../images/fhir.svg';

export function Head() {
  const title = <title>FHIR Demo 2024 at the Radical Health Festival</title>;
  return getHead({ title });
};

export default function RadicalHealth() {

  return (
    <Article id="radical-health" className="event">
      <section id="intro">
        <h1>FHIR Demo 2024 <br /><small>at the</small><br/> Radical Health Festival</h1>
        <p>
          Several demo participants will be at the <a
          href="https://radicalhealthfestival.messukeskus.com/">Radical Health Festival</a> in
          Helsinki.
        </p>
      </section>
      {/*
      <section className="event radical-health">
        <h2>Scheduled demos</h2>
        <p>No demos have been scheduled yet, but some most likely will be!</p>
        <table className="schedule">
          <tbody>
            <tr><th colspan="3"><time dateTime="2023-06-13">Tuesday 13.6.2023</time></th></tr>
            <tr>
              <td><time dateTime="2023-06-13T12:40:00.000+03:00">12.40-12.50</time></td>
              <td><Link to="../apotti">Apotti</Link> and <Link to="../sensotrend">Sensotrend</Link></td>
              <td>Health Capital Helsinki stand A6</td>
            </tr>
            <tr><th colspan="3"><time dateTime="2023-06-14">Wednesday 14.6.2023</time></th></tr>
            <tr>
              <td><time dateTime="2023-06-14T13:10:00.000+03:00">13.10-13.20</time></td>
              <td><Link to="../apotti">Apotti</Link> and <Link to="../sensotrend">Sensotrend</Link></td>
              <td>Health Capital Helsinki stand A6</td>
            </tr>
          </tbody>
        </table>
      </section>
      */}
      <section id="participants" className="event radical-health">
        <h2>FHIR Demo 2024 participants at the Radical Health Festival</h2>
        <table className="participants">
          <tbody>
            <tr><td></td><td><Link to="../apotti">Apotti</Link></td></tr>
            <tr><td></td><td><Link to="../innokas">Innokas</Link></td></tr>
            <tr><td></td><td><Link to="../sensotrend">Sensotrend</Link></td></tr>
            {/*
            <tr><td></td><td><Link to="../medicubex">MedicubeX</Link></td></tr>
            */}
          </tbody>
        </table>
      </section>
      <img className="decoration" src={fhirLogo} alt="" />
    </Article>
  )
};
