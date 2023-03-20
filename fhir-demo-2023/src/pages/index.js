import * as React from 'react';
import { Link } from 'gatsby';

import Article from '../components/Article';
import Features, { FeatureFilter, FeaturesContext } from '../components/Features';
import * as AvailableFeatures from "../components/FeatureList";
import fhirLogo from '../images/fhir.svg';
import mikaelx1 from '../images/MikaelRinnetmaki.jpg';
import mikaelx2 from '../images/MikaelRinnetmaki2x.jpg';

const data = [
  {
    participant: 'Apotti',
    demos: [
      /*
      {
        features: [AvailableFeatures.SMART],
        renderInfo: () => (
          <>Apotti presents the Online Sandbox where app vendors can implement and test their integration with Apotti and demonstrate how apps are embedded into clinical workflows.</>
        ),
      },
      */
    ],
  },
  {
    participant: 'CGI',
    demos: [
      /*
      {
        features: [AvailableFeatures.Appointment, AvailableFeatures.Schedule, AvailableFeatures.Slot, AvailableFeatures.SMART],
        renderInfo: () => (
          <>CGI OMNI 360 offers many FHIR interfaces natively, including SMART App Launch and scheduling.</>
        ),
      },
      */
    ],
  },
  {
    participant: 'Fujitsu',
    demos: [
      /*
      {
        features: [AvailableFeatures.SMART],
        renderInfo: () => (
          <><Link to="/fujitsu">Managed FHIR Server</Link></>
        ),
      },
      */
    ],
  },
  {
    participant: 'InterSystems',
    demos: [
      /*
      {
        renderInfo: () => (
          <>HealthConnect</>
        ),
      },
      {
        renderInfo: () => (
          <>SMART Adapter</>
        ),
      },
      */
    ],
  },
  {
    participant: 'Microsoft',
    demos: [
      /*
      {
        renderInfo: () => (
          <>Azure Health API</>
        ),
      },
      {
        renderInfo: () => (
          <>Data Analytics</>
        ),
      },
      */
    ],
  },
  {
    participant: 'Sensotrend',
    demos: [
      {
        features: [AvailableFeatures.MedicationAdministration, AvailableFeatures.Observation, AvailableFeatures.SMART],
        renderInfo: () => (
          <>
            <p>
              <strong><Link to="/sensotrend-connect">Sensotrend Connect</Link></strong> is a suite
              of software products for diabetes remote monitoring.
            </p>
            <p>
              We demonstrate the interoperability of FHIR servers by integrating the solution with
              many different FHIR implementations (Azure FHIR API, Google Healthcare API, HAPI
              reference implementation, InterSystems, Kanta PHR, ) for data storage.
            </p>
            <p>
              Sensotrend Connect is also integrated with Eleectronic Health Record systems with the
              SMART App Launch functionality.
            </p>
            
          </>
        ),
        renderFullDemo: () => (
          <>
            <h1>Sensotrend Connect Full Description.</h1>
            <p>Sensotrend Connect is ...</p>
          </>
        ),
      },
      {
        features: [AvailableFeatures.MedicationAdministration, AvailableFeatures.Observation, AvailableFeatures.SMART],
        renderInfo: () => (
          <>
            <p>
              <strong><Link to="/sensotrend-nightscout-connect">Nightscout
              Connect</Link></strong> implements the <a
              href="http://www.nightscout.info/">Nightscout</a> API on the Finnish national <a
              href="https://kanta.fi/phr">Kanta PHR</a> platform.
            </p>
            <p>
              Nightscout is an open-source development community developing innovative solutions
              that make life with diabetes easier.
            </p>
          </>
        ),
        renderFullDemo: () => (
          <>
            <h1>Nightscout Connect Full Description.</h1>
            <p>Nightscout Connect is ...</p>
          </>
        ),
      },
    ],
  },
  {
    participant: 'Wellness Warehouse Engine (W2E)',
    demos: [
    ],
  },
  {
    participant: 'Wellmo',
    demos: [
      /*
      {
        renderInfo: () => (
          <>Wellmo APP as SMART Client</>
        ),
      },
      {
        renderInfo: () => (
          <>Wellmo as SMART host</>
        ),
      },
      */
    ],
  },
];

const IndexPage = () => {
  const { selectedFeatures = {} } = React.useContext(FeaturesContext);
  const features = Object.keys(selectedFeatures);
  console.log({ features });
  return (
    <>
      <Article>
        <section id="about">
          <h1>FHIR Demo 2023</h1>
          <img className="decoration" src={fhirLogo} alt="" />
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
              data.filter(
                (d) => !features.length || d.demos?.some(
                  demo => demo.features?.some(f => features.some(s => s === f))
                ))
              .map(d => (
                <li key={d.participant}>
                  <h2>{d.participant}</h2>
                  <ul>
                    {d.demos.map((demo, i) => (
                      <li key={`${d}-${i}`}>
                        {demo.renderInfo()}
                        <Features list={demo.features} />
                      </li>                     
                    ))}
                  </ul>
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
                22.-24.5.2023 <a
                href="https://koulutus.fcg.fi/sosiaali-ja-terveydenhuollon-ATK-paivat">Sosiaali- ja
                terveydenhuollon ATK-päivät</a>, Turku, Finland
              </li>
              <li>
                22.-25.5.2023 <a href="https://en.vitalis.nu/">Vitalis</a>, Gothenburg, Sweden
              </li>
              <li>
                6.-9.6.2023 <a href="https://www.devdays.com">FHIR DevDays</a>, Amsterdam, the
                Netherlands
              </li>
              <li>
                12.-14.6.2023 <a href="https://radicalhealthfestival.messukeskus.com/">Radical
                Health Festival</a>, Helsinki, Finland</li>
            </ul>
          </strong>
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
          <p>There's still time to get involved!</p>
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
              <img src="MikaelRinnetmaki.jpg" alt="" />
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

export default IndexPage;

export const Head = () => <title>FHIR Demo 2023 by HL7 Finland</title>;
