import * as React from 'react';

import { getHead } from '../components/Article';
import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';
import innokasLogo from '../images/innokas-medical.png';
import digiousLogo from '../images/logo_digious.png';
import medicubexBoothOpen from '../images/medicubex_booth_open.png';
import anttiKaltiainen from '../images/antti_kaltiainen.png';
import heikkiMiinalainen from '../images/heikki_miinalainen.png';
import flowChart from '../images/digious_flow_chart.png';
import tapioPelkonen from '../images/tapio_pelkonen.png';

export function Head() {
  const title = <title>FHIR Demo 2024: Innokas Medical / MedicubeX</title>;
  return getHead({ title });
};

export default function Innokas({ location }) {
  const roles = demos['innokas'].roles;
  
  return (
    <Demo roles={roles} location={location}>
      <h1>
        <a href="https://www.innokasmedical.fi/">
          <img className="half" src={innokasLogo} alt="Innokas" />
        </a>
      </h1>
      <Roles list={roles} />
      <p>
        Our solution is an integration channel where data can be effortlessly transferred from a
        medical device to the national healthcare databases. This removes the need for manual input
        entirely and would save significant time and resources for healthcare providers around the
        world.
      </p>
      <p>
        In FHIR Demo 2024 we demonstrate the sending of a patient's results (MedicubeX) and show
        them on OmaKanta's web app. The eHealth Station will also be available for the exhibition
        guests to see and experience at the Radical Health Festival.
      </p>
      <h3>Index</h3>
      <ul>
        <li><a href="#approach">Innnokas Approach</a></li>
        <li><a href="#flow">Measurement Transfer Flow</a></li>
        <li><a href="#medicubex">MedicubeX™ eHealth Station</a></li>
        <li><a href="#digious">Digious</a></li>
        <li><a href="#innokas-medical">Innokas Medical</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
      <section id="approach">
        <h2>Innokas Approach</h2>
        <p>
          Sending patient's self-check results from customer product (MedicubeX™) to national
          health registry (OmaKanta) without any healthcare professional actions needed.
        </p>
      </section>
      <ul>
        <li>
          Transform customer data format to FHIR
        </li>
        <li>
          Supports strong authentication (e.g. bank credentials) with Suomi.fi authorization
        </li>
        <li>
          Includes own FHIR server 
        </li>
        <li>
          Designed in fault-tolerant way; failed transactions will be retried later to be stored to
          national health registry 
        </li>
        <li>
          Could be modified to support any other customer's system with minimal work needed
        </li>
        <li>
          Value proposition is to get customer product's data into the national health registry for
          doctors to see it when browsing patient's medical records
        </li>
      </ul>
      <div className="media">
        <iframe 
            width="100%"
            height="100%"
            src="https://player.vimeo.com/video/835519980?h=6407d3777e" 
            title="Innokas & MedicubeX on FHIR"
            frameBorder="0" 
            allow="autoplay; fullscreen; picture-in-picture"
            allowFullScreen>
        </iframe>
      </div>
      <section id="flow">
        <h2>Measurement Transfer Flow</h2>
        <p>Demo inputs:</p>
        <ul>
          <li>Standalone demo web panel</li>
          <li>MedicubeX self-measurement booth</li>
        </ul>
        <p>Destinations:</p>
        <ul>
          <li>Omakanta Omatietovaranto</li>
          <li>Standalone OpenEMR demo panel</li>
        </ul>
        <p>Flow:</p>
        <ul>
          <li>User finishes measurements.</li>
          <li>User interface asks to send measurements to cloud.</li>
          <li>User interface transfers them to Digious backend.</li>
          <li>
            Innokas backend parses them to FHIR Observations, stores them to own FHIR server, and
            dispatches jobs to transmit.
          </li>
          <li>
            Queue worker tries to transmit FHIR Observations to FHIR destination (Omatietovaranto).
          </li>
          <li>
            After succesful transmission, measurement data is available to be read from Omakanta.
          </li>
        </ul>
        <img src={flowChart} alt="" />
      </section>
      <section id="medicubex">
        <img src={medicubexBoothOpen} alt="MedicubeX™ eHealth Station" />
        <h2>MedicubeX™ eHealth Station</h2>
        <p>
          The MedicubeX™ eHealth Station is an autonomous self-check station with antimicrobial and
          safe space solutions. This station can be used to measure a person's vital signs and
          cardiovascular risk factors.
        </p>
        <p>
          At any given moment, users can view their accurate vital signs and more, such as their
          body composition or their personal risk of cardiovascular disease. Remote appointments
          from the station enable direct communication with healthcare professionals without being
          in physical contact with other patients or healthcare staff.
        </p>
        <p>
          The MedicubeX™ station is an all-in-one healthcare solution. The eHealth station can be
          used for self-motivated fitness and wellness use or as a tool for healthcare providers.
        </p>
      </section>
      <div className="media">
        <iframe
          width="100%"
          height="100%"
          src="https://www.youtube.com/embed/e8kNx2UagNY"
          title="Medicubex demo"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen>
        </iframe>
      </div>
      <section id="innokas">
        <img className="logo" src={innokasLogo} alt="Innokas" />
        <h2>Innokas</h2>
        <p>
          With nearly 30 years of experience and our 200 experts specialized in Medtech we are your
          one-stop shop. Innokas is a family-owned, contract design and manufacturing company from
          Finland.
        </p>
        <p>
          Innokas is a reliable Nordic partner for bringing your ideas into reality. We have
          optimal ISO 13485/FDA compliant processes, and expertise in manufacturing as well as
          designing of highly demanding medical and IVD devices. Our customer project portfolio
          ranges from small wearables to huge diagnostics equipment and all the way to software as
          a medical device. 
        </p>
      </section>
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <picture>
            <source srcSet={anttiKaltiainen} />
            <img src={anttiKaltiainen} alt="Antti Kaltiainen" />
          </picture>
          <h3>Antti Kaltiainen</h3>
          <p>CTO, Digious</p>
          <address>
            <a href="mailto:antti.kaltiainen@digious.fi">antti.kaltiainen@digious.fi</a>
            <br />
            <a href="tel:+358405700333">+358 40 570 0333</a>
          </address>
        </div>
        <br />
        <div className="business-card">
          <picture>
            <source srcSet={heikkiMiinalainen} />
            <img src={heikkiMiinalainen} alt="Heikki Miinalainen" />
          </picture>
          <h3>Heikki Miinalainen</h3>
          <p>Software Engineer, Digious</p>
          <address>
            <a href="mailto:heikki.miinalainen@digious.fi">heikki.miinalainen@digious.fi</a>
          </address>
        </div>
        <br />
        <div className="business-card">
          <picture>
            <source srcSet={tapioPelkonen} />
            <img src={tapioPelkonen} alt="Tapio Pelkonen" />
          </picture>
          <h3>Tapio Pelkonen</h3>
          <p>Senior Software Engineer, Digious</p>
          <address>
            <a href="mailto:tapio.pelkonen@digious.fi">tapio.pelkonen@digious.fi</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
