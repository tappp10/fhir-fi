import * as React from 'react';

import Demo from '../components/Demo';
import Features from '../components/Features';
import * as FeatureList from '../components/FeatureList';
import kantaPHRscreenshot from '../images/omatietovaranto-mittaustulokset.png';
import mikaelx1 from '../images/MikaelRinnetmaki.jpg';
import mikaelx2 from '../images/MikaelRinnetmaki2x.jpg';
import nightscoutLogo from '../images/nightscout.png';
import sensotrendLogo from '../images/sensotrend.svg';
import sensotrendAGPImage from '../images/sensotrend-agp.png';
import sensotrendConnectImage from '../images/sensotrend-connect.jpg';

export default function Sensotrend() {
  const features = [
    FeatureList.Consent,
    FeatureList.MedicationAdministration,
    FeatureList.Opensource,
    FeatureList.Observation,
    FeatureList.SMART,
  ];
  
  return (
    <Demo features={features}>
      <h1>
        <a href="https://www.sensotrend.com/">
          <img src={sensotrendLogo} alt="Sensotrend" />
        </a>
      </h1>
      <Features list={features} />
      <p>Sensotrend Oy presents two solutions:</p>
      <ul>
        <li>
          <a href="#sensotrend-connect">Sensotrend Connect</a>, a diabetes remote monitoring
          solution.
        </li>
        <li>
          <a href="#nightscout-connect">Nightscout Connect</a>, an implementation of the Nightscout
          API for open-source apps and devices implemented on top of the Finnish national Kanta PHR
          platform.
        </li>
      </ul>
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
        <img src={sensotrendConnectImage} alt="" />
        <p>
          Sensotrend Connect transforms data from third party apps and devices into HL7 FHIR format
          (mainly Observation and MedicationAdministration resources, see the <a
          href="https://github.com/Sensotrend/sensotrend-converter">open-source converter</a>) and
          stores it in any specified FHIR server.
        </p>
        <p>
          The solution also includes a dashboard view of the data that is integrated into
          electronic health record systems with the SMART App Launch specification. See an <a
          href="https://hl7.fi/fhir/finnish-smart/AuditEvent-apotti-ehr-launch-by-practitioner.html"
          >example launch flow</a> in the Finnish Implementation Guide for SMART App Launch.
        </p>
        <figure>
          <img src={sensotrendAGPImage} />
          <figcaption>
            The main view of Sensotrend Connect is based on the internationally harmonized <a
            href="http://www.agpreport.org/agp/about">Ambulatory Glucose Profile</a> specification.
          </figcaption>
        </figure>
        <p>
          Internally, Sensotrend Connect uses the Consent resource to manage permissions for
          healthcare providers to access the patient generated and patient controlled data. See
          the presentation and the <a
          href="https://www.devdays.com/wp-content/uploads/2021/12/DD18-EU-Mikael-Rinnetmaki-Patient-generated-health-data-with-consent-2018-11-16-1.pdf"
          >slides</a> given in a past FHIR DevDays event.
          <div className="media">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/cYO1vYUwzvA"
              title="Video recording of FHIR DevDays 2018 presentation: Patient-generated Health Data with Consent"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen>
            </iframe>
          </div>
        </p>
        <p>
          In FHIR Demo 2023 we demostrate the SMART App Launch from Apotti and Epic systems and
          through the SMART adapter by InterSystems. We also present data storage into FHIR servers
          from Google, InterSystems, and Microsoft, and into the Finnish national Kanta PHR platform. 
        </p>
        <p>
          See also the older version of Sensotrend Connect embedded in Cerner Millennium in a past
          video recording.
          <div className="media">
            <iframe
              width="100%"
              height="100%"
              src="https://www.youtube.com/embed/iF1v25Bzo5A?start=5525"
              title="Video recording of Cerner presenting Sensotrend Connect embedded in Cerner Millennium"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen>
            </iframe>
          </div>
        </p>
      </section>
      <section id="nightscout-connect">
        <h2>Nightscout Connect</h2>
        <p>
          <a href="http://www.nightscout.info/">Nightscout</a> is an open-source development
          community creating apps and devices that make life with diabetes easier. The community
          has thousands of developers, and tens of thousands of people using the apps globally.
        </p>
        <img className="logo" src={nightscoutLogo} alt="" />
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
          The most used resources are Observation for results from continuous glucose monitors and
          glucometers and for carbohydrate intake estimations, and MedicationAdministration for
          insulin doses.
        </p>
        <figure>
          <img src={kantaPHRscreenshot} />
          <figcaption>
            Individual observations in the Kanta PHR platform, visible on the Kanta patient portal.
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
            <img src="MikaelRinnetmaki.jpg" alt="" />
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
}