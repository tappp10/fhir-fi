import * as React from 'react';
import { Link } from 'gatsby';

import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';
import dwLogo from '../images/digital-wells.png';

export const Head = () => <title>FHIR Demo 2024: Digital Wells</title>;

export default function DigitalWells({ location }) {
  const roles = demos['digital-wells']?.roles;
  
  return (
    <Demo roles={roles} location={location}>
      <h1>
        <a href="https://www.digitalwells.fi/">
          <img src={dwLogo} alt="Digital Wells" />
        </a>
      </h1>
      <Roles list={roles} />
      <section>
        <p>
          Whilst life expectancy at older ages is improving, insufficient physical activity
          threatens ageing population. Physical activity has significant health benefits across all
          age groups and contributes to the prevention of non-communicable diseases. But, how to
          find solutions to battle the problems associated with a sedentary lifestyle and to
          improve the probability of people living a healthy and active life in older age? One
          potential solution to support physical activity and healthy aging is digital wellness
          technologies.
        </p>
        <p>
          Digital Wells research project (2019–) aims to detect the best activity programs for
          young elderly, i.e. for citizens within the age groups of 60 to 75+. Furthermore, with
          the help of statistical models one of the objectives is to detect whether there are
          differences between genders, age groups, in physical activity history as well as in work
          history.
        </p>
        <p>
          Activities are measured with metabolic equivalent of task (MET) instead of kilocalories,
          and this enables more precise individual results. Each participant builds an individual
          activity program: 6 weeks of planning + 4 months of active use + 6 weeks of evaluation.
          Physical activity and exercises are then tracked by DigitalWells mobile application that
          uses the <Link to="../wellmo">Wellmo</Link> platform.
        </p>
        <p>
          The collected personal data can be transfered to My Kanta Personal Health Record (<Link
          to="../kela/#kanta-phr">Kanta PHR</Link>) <strong>in FHIR format</strong>, if and only if
          the participant so chooses. All participants will be anonymous but labelled with a code
          on the Kanta PHR -platform.
        </p>
      </section>
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <h3>Christer Carlsson</h3>
          <p>CEO<br />Institute for Advanced Management Systems Research</p>
          <address>
            <a href="mailto:christer.carlsson@abo.fi">christer.carlsson@abo.fi</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
