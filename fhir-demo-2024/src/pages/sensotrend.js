import * as React from 'react';
import { Link } from 'gatsby';

import { getHead } from '../components/Article';
import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';
import kantaPHRscreenshot from '../images/omatietovaranto-mittaustulokset.png';
import mikaelx1 from '../images/MikaelRinnetmaki.jpg';
import mikaelx2 from '../images/MikaelRinnetmaki2x.jpg';
import nightscoutLogo from '../images/nightscout.png';
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
      <aside className="event atk-paivat">
        <h2>ATK-päivät: Startup-alue, pöytä 10</h2>
        <p>Esittelemme diabeteksen etäseurannan ratkaisua, joka on saumattomasti integroitu
        potilastietojärjestelmiin.</p>
        <p>Olemme toteuttaneet FHIR-integraatioita ainakin Apotin, Cernerin, Epicin,
        InterSystemsin, Omaolon, Terveyskylän ja Wellmon palveluihin. Autamme mielellämme myös
        muita yrityksiä FHIR-integraatioissa.</p>
        <p>Olemme myös olleet mukana luomassa <a
        href="https://fhir.fi/profiling.html">kansallisia FHIR-soveltamisoppaita.</a></p>
        <p>Kokemusta ja kokemuksia löytyy, saa kysellä!</p>
        <p>Esittelemme yhdessä Apotin kanssa Sensotrendin sovelluksen saumattomana osana Apotin
          käyttöliittymää</p>
        <strong>
          <ul>
            <li>
              <time dateTime="2023-05-23T12:30:00.000+03:00">tiistaina klo 12.30</time>, Ständi 400
            </li>
            <li>
              <time dateTime="2023-05-23T13:30:00.000+03:00">tiistaina klo 13.30</time>,
              Startup-alue, pöytä 10
            </li>
            <li>
              <time dateTime="2023-05-23T15:00:00.000+03:00">tiistaina klo 15.00</time>, Ständi 400
            </li>
            <li>
              <time dateTime="2023-05-24T12:15:00.000+03:00">keskiviikkona klo 12.15</time>, Ständi
              400
            </li>
          </ul>
        </strong>
        <p>Lisäksi sovelluksemme voi nähdä toiminnassa ainakin <Link
        to="../intersystems">InterSystemsin</Link> ja <Link
        to="../wellmo">Wellmon</Link> ständeillä.</p>
      </aside>
      <aside className="event vitalis">
        <p>
          <Link to="../sensotrend">Sensotrend</Link> will be present at the event on Thursday, May
          25.
        </p>
        <p>
          Sensotrend's founder Mikael Rinnetmäki, also the FHIR Ambassador of HL7 Finland, presents
          the <a href="https://invitepeople.com/public/seminars/ae2cdf5033">Nordic FHIR Showcase
          2023</a> at <strong><time dateTime="2023-05-25T11:00:00.000+02:00">11:00 -
          11:30</time></strong> on <strong>stage F1</strong>.
        </p>
      </aside>
      <aside className="event radical-health">
        <h2>Sensotrend at the Radical Health Festival</h2>
        <p>Startup Area, SU1</p>
        <p>
          We present our solution integrated into <Link to="../apotti">Apotti</Link>, an Epic
          installation in Finland.
        </p>
        <strong>
          <ul>
          <li>
              <time dateTime="2023-06-13T12:40:00.000+03:00">Tuesday at 12.40</time>, Health
              Capital Helsinki stand A6
            </li>
            <li>
              <time dateTime="2023-06-14T13:10:00.000+03:00">Wednesday at 13.10</time>, Health
              Capital Helsinki stand A6
            </li>
          </ul>
        </strong>        
      </aside>

      <section id="intro">
        <p>Sensotrend Oy presents two solutions:</p>
        <ul>
          <li>
            <a href="#sensotrend-connect">Sensotrend Connect</a>, a diabetes remote monitoring
            solution.
          </li>
          <li>
            <a href="#nightscout-connect">Nightscout Connect</a>, an implementation of the
            open-source Nightscout API on top of the Finnish national Kanta PHR platform.
          </li>
        </ul>
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
        <p>
          Internally, Sensotrend Connect uses the <strong>Consent</strong> resource to manage
          permissions for healthcare providers to access the patient generated and patient
          controlled data. See the presentation and the <a
          href="https://www.devdays.com/wp-content/uploads/2021/12/DD18-EU-Mikael-Rinnetmaki-Patient-generated-health-data-with-consent-2018-11-16-1.pdf"
          >slides</a> given in a past FHIR DevDays event.
        </p>
        <div className="media">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/cYO1vYUwzvA"
            title="Video recording of FHIR DevDays 2018 presentation: Patient-generated Health Data with Consent"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen>
          </iframe>
        </div>
        <p>
          In FHIR Demo 2023 we demostrate the <strong>SMART App Launch</strong> from Apotti and
          Epic systems and through the SMART adapter by InterSystems. We also present data storage
          into FHIR servers from Google, InterSystems, and Microsoft, and into the Finnish national
          Kanta PHR platform. 
        </p>
        <p>
          See also an older version of Sensotrend Connect embedded in Cerner Millennium in a past
          video recording.
        </p>
        <div className="media">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/iF1v25Bzo5A?start=5525"
            title="Video recording of Cerner presenting Sensotrend Connect embedded in Cerner Millennium"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen>
          </iframe>
        </div>
      </section>
      <section id="nightscout-connect">
        <h2>Nightscout Connect</h2>
        <p>
          <a href="http://www.nightscout.info/">Nightscout</a> is an open-source development
          community creating apps and devices that make life with diabetes easier. The community
          has thousands of developers, and tens of thousands of people using the apps globally.
        </p>
        <img className="logo" src={nightscoutLogo} alt="Nightscout logo" />
        <p>
          Nightscout Connect implements the API used by the Nightscout apps on top of the Finnish
          national Kanta PHR platform, bringing the data from these apps into the national
          healthcare data infrastructure.
        </p>
        <p>
          Thanks to the service, people wanting to take Nightscout apps into use no longer need to
          operate the server side of the solution themselves. It is still up to each individual and
          family to install and use the apps created by the community.
        </p>
        <p>
          Nightscout Connect transforms data between Nightscout's own content format and HL7 FHIR.
          The most used resources are <strong>Observation</strong> for results from continuous
          glucose monitors and glucometers and for carbohydrate intake estimations,
          and <strong>MedicationAdministration</strong> for insulin doses.
        </p>
        <figure>
          <a href={kantaPHRscreenshot}>
            <img
              src={kantaPHRscreenshot}
              alt="Screen capture of data from Nightscout Connect in Kanta PHR"
            />
          </a>
          <figcaption>
            Individual observations in the Kanta PHR platform, present on the Kanta patient portal.
          </figcaption>
        </figure>
        <p>
          In Kanta PHR the data can be shared with Sensotrend Connect, and thereby be made
          available for healthcare providers.
        </p>
        <p>
          In FHIR Demo 2023 we demonstrate the transformation of data formats and the sharing of
          data between apps using the HL7 FHIR standard.
        </p>
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
