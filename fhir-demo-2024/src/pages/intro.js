import * as React from 'react';
import { Link } from 'gatsby';

import Article from '../components/Article';
import hl7finland from '../images/hl7-finland-animated.svg';

const Intro = () => {
  return (
    <>
      <Article id="intro">
        <Link to="/">
          <img src={hl7finland} alt="HL7 Finland" />
          <p>presents</p>
          <h1>FHIR Demo 2024</h1>
        </Link>
      </Article>
    </>
  )
};

export default Intro;

export const Head = () => <title>FHIR Demo 2024 by HL7 Finland - WELCOME!</title>;
