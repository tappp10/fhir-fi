import * as React from 'react';
import { Link } from 'gatsby';

import Article, { getHead } from '../components/Article';
import { RoleFilter, RolesContext } from '../components/Roles';
import { demos } from '../config/data';
import fhirLogo from '../images/fhir.svg';
import fhirLogo2 from '../images/fhir-deco.svg';
import mikaelx1 from '../images/MikaelRinnetmaki.jpg';
import mikaelx2 from '../images/MikaelRinnetmaki2x.jpg';


export function Head() {
  const title = <title>FHIR Demo 2024</title>;
  return getHead({ title });
};

export default function IndexPage({ location }) {
  const { search } = location;
  const { selectedRoles = {} } = React.useContext(RolesContext);
  const roles = Object.keys(selectedRoles);
  return (
    <Article id="mainPage">
      <section id="about">
        <h1>FHIR Demo 2024</h1>
        <img className="decoration" src={fhirLogo} alt="" />
      </section>
      <section id="description" className="callout">
        <h2>Take part in the <strong>Nordic FHIR Demo</strong> showcase!</h2>
        <p>
          If you are an organization utilizing the HL7 FHIR standard or advocating for it, or if
          you have a product using the HL7 FHIR standard, we&apos;d love to get you included in the
          showcase. Just send us a description of the product. See this year&apos;s showcase
          and <a href="https://fhir.fi/en/demo2023/">last year&apos;s site</a> for examples.
        </p>
        <p>
          The focus is in showing what has been implemented with the HL7 FHIR standard in the
          Nordics, and in what the FHIR community is currently working on.
        </p>
        <p>
          Participation costs you nothing, and gives you increased visibility in trade events and
          the internet.
        </p>
        <p>
          The event continues the tradition of the FHIR Demo showcases organized in <a
          href="http://www.hl7.fi/wp-content/uploads/HL7-Finland-%23U0432%23U0402%23U201c-FHIR-demon-loppuraportti-20160527.pdf">2016</a>,
          {' '} <a href="https://fhir.fi/en/demo2022/index.html">2022</a>, and <a
          href="https://fhir.fi/en/demo2023/index.html">2023</a>.
        </p>
        <p className="center">
          <Link className="button" to="/participate">Participate!</Link>
        </p>
      </section>
      <section id="participants">
        <h1>Participants</h1>
        <RoleFilter />
        <ul>
          {
            Object.keys(demos).filter(
              (k) => !roles.length || demos[k].roles?.some((f => roles.some(s => s === f)))
            )
            .map(k => (
              <li key={k}>
                <Link to={`/${k}${search}`}>{demos[k].name}</Link>
              </li>
            ))
          }
        </ul>
      </section>
      <section id="events">
        <h1>Events</h1>
        <p>
          The FHIR Demo 2024 showcase is presented in several industry events and conferences.
          Showcase participants demonstrate their demos on their own stands. In some events the
          showcase will be included in conference program.
        </p>
        <strong>
          <p>Project participants will be present in at least the following events:</p>
          <ul>
            <li>
              13.-16.5.2024 <a href="https://vitalis.nu/">Vitalis</a>, Gothenburg, Sweden. See the
              session <a
              href="https://invitepeople.com/public/events/ae499c7a48/seminars/ae2dc6387c">Nordic
              FHIR Showcase 2024</a> on the program.
            </li>
            <li>
              21.-23.5.2024 <a href="https://radicalhealthfestival.messukeskus.com/">Radical Health
              Festival</a>, Helsinki, Finland
            </li>
            <li>
              27.-29.2.2024 <a
              href="https://koulutus.fcg.fi/sosiaali-ja-terveydenhuollon-ATK-paivat">Sosiaali ja
              terveydenhuollon ATK-päivät</a>, Tampere, Finland.
            </li>
          </ul>
        </strong>
        <p>
          We're also planning a tour at least to the Finnish Wellbeing Services Counties
          (<i lang="fi">hyvinvointialue</i>, known as Regions in other Nordic countries) in the
          autumn. We're happy to extend this demo to other audiences. If you're interested in
          having the FHIR Demo presented to you or your people, please <a href="#contact">get in
          touch!</a>
        </p>
        <p>The showcase will also remain online on this website until the end of the year.</p>
      </section>
      <section id="contact">
        <h1>Contact</h1>
        {
        /*
        <p>The showcase will keep evolving during the year, and we welcome new entries!</p>
        <p>
          If you have a product using the HL7 FHIR standard, we'd love to get it in the showcase.
          Just send us a description of the product. See <a
          href="https://fhir.fi/en/demo2023/apotti/">last year's site</a> for examples.
        </p>
        <p>
          If you have an idea of an integration you'd like to implement with another partcipant,
          let us know, and we can help you get it done.
        </p>
        */
        }
        <div className="business-card">
          <picture>
            <source srcSet={mikaelx2} media="(min-resolution: 144dpi)" />
            <source srcSet={mikaelx1} />
            <img src={mikaelx1} alt="" />
          </picture>
          <h3>Mikael Rinnetmäki</h3>
          <p>FHIR Ambassador, HL7 Finland</p>
          <address>
            <a href="mailto:mikael@sensotrend.com">mikael@sensotrend.com</a>
            <br />
            <a href="tel:+358503855511">+358 50 385 5511</a>
          </address>
        </div>
      </section>
      <img className="decoration" src={fhirLogo2} alt="" />
    </Article>
  )
};
