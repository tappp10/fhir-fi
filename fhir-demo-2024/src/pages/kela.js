import * as React from 'react';

import { getHead } from '../components/Article';
import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';
import kelaLogo from '../images/kela.png';

export function Head() {
  const title = <title>FHIR Demo 2024: Kela</title>;
  return getHead({ title });
};

export default function Kela({ location }) {
  const roles = demos.kela.roles;
  
  return (
    <Demo roles={roles} location={location}>
      <h1 className="white">
        <a href="https://www.kela.fi/">
          <img src={kelaLogo} alt="Kela" />
        </a>
      </h1>
      <Roles list={roles} />
      <section id="kanta-phr">
        <h2>Kanta Personal Health Record (Omatietovaranto)</h2>
        <p>
          Kanta Personal Health Record (Kanta PHR) is a national Kanta service in which users can
          save their wellbeing data. The service was deployed for the first-phase production use in
          spring 2018.
        </p>
        <p>
          Anyone can develop a new wellbeing application that utilises Kanta PHR. The applications
          can be server-based or mobile applications. Their users may consist of citizens,
          professionals, or both. For wellbeing application suppliers, Kanta PHR offers the
          interfaces and the open national accepted data content based on the HL7 FHIR standard.
          The FHIR Rest API interfaces are specified in the Capability Statement description. The
          data content is developed in cooperation with various actors.
        </p>
        <p>
          Application developers can integrate their own application in the sandbox environments of
          Kanta PHR for independent testing. Further information: <a
          href="https://www.kanta.fi/en/system-developers/sandbox-environments">Sandbox
          environments</a>.</p>
        <p>
          Further information about the service and the latest updates are available on the <a
          href="https://www.kanta.fi/en/system-developers/kanta-phr">Kanta PHR page</a>.
        </p>
      </section>
      <section id="kanta-prescription-api">
        <h2>Kanta Prescription Centre FHIR Interface</h2>
        <p>
          Prescription centre is a national Kanta service in which citizens' electronic
          prescriptions and electronic dispensations are saved. Main interfaces in production are
          based on HL7 V3 Medical Records messaging and HL7 V3 CDA R2 documents. For metadata
          search of the prescriptions, a search operation has been developed based on FHIR custom
          operations and FHIR Medication*-resources. The FHIR interface includes only metadata of
          the prescription, although the data content of the metadata includes a large amount of
          information of the actual prescription.
        </p>
        <p>
          <a href="https://simplifier.net/guide/finnishkantamedicationr4/home?version=current">For
          this interface</a> there is no open Sandbox environment available. The interface can be
          used only through the Kanta <a
          href="https://www.kanta.fi/en/system-developers/test-environments#Client%20test%20environment"
          >Client testing environment</a> and needs joining to this environment (<a
          href="https://www.kanta.fi/documents/20143/91498/Kanta-asiakastestipalvelun+liittymisohje.pdf/e254b933-1d7f-04fd-d982-6ea0360aab37"
          >instructions</a> in Finnish).</p>
      </section>
      <section id="future">
        <h2>Other Kanta FHIR Interfaces in the Future</h2>
        <p>
          In the future, there is a plan to offer data of the Kanta services in FHIR format. This
          data can be, for example, diagnoses (problems), lab results, and vital signs from the
          Patient data archive service.
        </p>
      </section>
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <h3>Kanta services</h3>
          <address>
            <a href="mailto:kanta@kanta.fi">kanta@kanta.fi</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
