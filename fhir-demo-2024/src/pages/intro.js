import * as React from 'react';
import { Link, withPrefix } from 'gatsby';

import Article, { getHead } from '../components/Article';

const Intro = () => {
  return (
    <Article id="intro">
      <Link to="/">
        <img src={`${withPrefix('/images/hl7-finland-animated.svg')}?d=${Date.now()}`} alt="HL7 Finland" />
        <p>presents</p>
        <h1>FHIR Demo 2024</h1>
      </Link>
    </Article>
  )
};

export default Intro;

export function Head() {
  const title = <title>FHIR Demo 2024 by HL7 Finland - WELCOME!</title>;
  return getHead({ title });
};
