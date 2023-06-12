import * as React from 'react';
import { Link } from 'gatsby';

import Article from '../components/Article';
import fhirLogo from '../images/fhir.svg';

export const Head = () => <title>FHIR Demo 2023 at the Radical Health Festival</title>;

export default function RadicalHealth() {

  return (
    <Article>
      <section id="radical-health">
        <h1>
          FHIR Demo 2023 at the <a href="https://radicalhealthfestival.messukeskus.com/">Radical
          Health Festival</a>
        </h1>
      </section>
      <section className="event radical-health">
        <h2>Scheduled demos</h2>
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
      <section id="participants">
        <h2>FHIR Demo 2023 participants at the Radical Health Festival</h2>
        <table className="participants">
          <tbody>
            <tr><td>A6</td><td><Link to="../apotti">Apotti</Link></td></tr>
            <tr><td>C2</td><td><Link to="../innokas-medical">Digious / Innokas Medical</Link></td></tr>
            <tr><td>SU1</td><td><Link to="../sensotrend">Sensotrend</Link></td></tr>
            <tr><td>SU10</td><td><Link to="../innokas-medical">MedicubeX</Link></td></tr>
          </tbody>
        </table>
      </section>
      <img className="decoration" src={fhirLogo} alt="" />
    </Article>
  )
};
