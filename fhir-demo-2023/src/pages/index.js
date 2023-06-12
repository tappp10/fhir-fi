import * as React from 'react';
import { Link } from 'gatsby';

import Article from '../components/Article';
import { FeatureFilter, FeaturesContext } from '../components/Features';
import { demos } from '../config/data';
import fhirLogo from '../images/fhir.svg';
import mikaelx1 from '../images/MikaelRinnetmaki.jpg';
import mikaelx2 from '../images/MikaelRinnetmaki2x.jpg';

export const Head = () => <title>FHIR Demo 2023 by HL7 Finland</title>;

export default function IndexPage({ location }) {
  const { search } = location;
  const { selectedFeatures = {} } = React.useContext(FeaturesContext);
  const features = Object.keys(selectedFeatures);
  return (
    <>
      <Article>
        <section id="about">
          <h1>FHIR Demo 2023</h1>
          <img className="decoration" src={fhirLogo} alt="" />
        </section>
        <aside className="event atk-paivat">
          <h2>Sosiaali- ja terveydenhuollon ATK-päivät</h2>
          <Link to="atk-paivat">FHIR Demo 2023 ATK-päivillä</Link>
        </aside>
        <aside className="event vitalis">
          <h2>Vitalis</h2>
          <Link to="vitalis">Nordic FHIR Demo 2023 showcase in Vitalis</Link>
        </aside>
        <aside className="event radical-health">
          <h2>Radical Health Festival</h2>
          <Link to="radical-health">FHIR Demo 2023 at the Radical Health Festival</Link>
        </aside>        
        <section id="description">
          <p>The FHIR Demo 2023 is a showcase of FHIR implementations.</p>
          <p>
            <a href="https://hl7.org/fhir/">HL7&reg; FHIR&reg;</a> is a next generation standards
            framework created by HL7. FHIR combines the best features of HL7's earlier v2, v3, and
            CDA product lines.
          </p>
          <p>
            It's a free and openly available standard, with a strong foundation in popular web
            development standards XML, JSON, HTTP, OAuth, and RESTful architectures. The
            development community uses social media extensively. This makes it fast and easy to
            get started with FHIR.
          </p>
        </section>
        <section id="methods">
          <p>
            The FHIR Demo 2023 showcase is organized by <a href="https://hl7.fi">HL7 Finland</a>.
          </p>
          <p>
            The aim is to demonstrate integrations between many apps and systems, and to gain real
            world experience on the maturity of the FHIR standard.</p>
          <p>
            Specific focus is given to integrations that utilize any of the resource types profiled
            in the <a href="https://hl7.fi/fhir/finnish-base-profiles">Finnish Base Profiles</a> or
            the <a href="http://www.hl7.org/fhir/smart-app-launch/">HL7 SMART App
            Launch</a> mechanism, through which third party apps can be launched from an electronic
            health record system with a click of a button.
          </p>
          <p>
            Some demos are of existing solutions, some have been implemented specifically for this
            showcase.</p>
          <p>
            The showcase is a result of voluntary work of project participants.
          </p>
        </section>
        <section id="participants">
          <h1>Participants</h1>
          <FeatureFilter />
          <ul>
            {
              Object.keys(demos).filter(
                (k) => !features.length || demos[k].features?.some((f => features.some(s => s === f)))
              )
              .map(k => (
                <li key={k}>
                  <h2><Link to={`/${k}${search}`}>{demos[k].name}</Link></h2>
                </li>
              ))
            }
          </ul>
        </section>
        <section id="events">
          <h1>Events</h1>
          <p>
            The FHIR Demo 2023 showcase will be presented in several industry events in the spring
            2023.
          </p>
          <p>
            Demo project participants will demonstrate their demos on their own stands. In some
            events there will also be guided tours through the exhibitor stands participating in
            the showcase.
          </p>
        </section>
        <section>
          <strong>
            <p>Project participants will be present in at least the following events:</p>
            <ul>
              <li>
                22.-24.5.2023 <Link to="atk-paivat">Sosiaali- ja terveydenhuollon
                ATK-päivät</Link>, Turku, Finland
              </li>
              <li>
                22.-25.5.2023 <Link to="vitalis">Vitalis</Link>, Gothenburg, Sweden
              </li>
              <li>
                6.-9.6.2023 <a href="https://www.devdays.com">FHIR DevDays</a>, Amsterdam, the
                Netherlands
              </li>
              <li>
                12.-14.6.2023 <a href="radical-health">Radical
                Health Festival</a>, Helsinki, Finland</li>
            </ul>
          </strong>
          <p>
            We're also planning a tour at least to the Finnish Wellbeing Services Counties
            (<i>hyvinvointialue</i>, known as Regions in other Nordic countries) in the autumn.
            We're happy to extend this demo to other audiences. If you're interested in having the
            FHIR Demo presented to you or your people, please <a href="#contact">get in touch!</a>
          </p>
        </section>
        <section>
          <p>The showcase will also remain online on this website until the end of the year.</p>
          <p>
            See also last year's <a href="https://fhir.fi/en/demo2022/index.html">FHIR Demo
            2022</a>!
          </p>
        </section>
        <section id="contact">
          <h1>Contact</h1>
          <p>The showcase will keep evolving during the year, and we welcome new entries!</p>
          <p>
            If you have a product using the HL7 FHIR standard, we'd love to get it in the showcase.
            Just send us a description of the product. See the existing descriptions as examples.
          </p>
          <p>
            If you have an idea of an integration you'd like to implement with another partcipant,
            let us know, and we can help you get it done.</p>
        </section>
        <section>
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
        <img className="decoration" src={fhirLogo} alt="" />
      </Article>
    </>
  )
};
