import * as React from 'react';
import { Link } from 'gatsby';

import { FeaturesContext } from '../components/Features';
import hl7finland from '../images/hl7-finland.svg';
import "@fontsource/big-shoulders-display/900.css";
import "@fontsource/big-shoulders-text";
import '../styles/index.css';

const Article = ({ children, ...rest }) => {
  const { selectedFeatures = {} } = React.useContext(FeaturesContext);
  const featureList = Object.keys(selectedFeatures);
  console.log({ selectedFeatures, featureList });

  return (
    <>
      <article {...rest}>
        <nav>
          <ul>
            <li>
              <Link to="/">
                FHIR Demo 2023
              </Link>
            </li>
            <li>
              <Link to="/#participants">
                Participants
              </Link>
            </li>
            <li>
              <Link to="/#events">
                Events
              </Link>
            </li>
            <li>
              <Link to="/#contact">
                Contact
              </Link>
            </li>
          </ul>
        </nav>
        {children}
      </article>
      <footer>
        <p>
          &copy;2023 <a href="https://hl7.fi/"><img src={hl7finland} alt="HL7 Finland" /></a>
          <span>&nbsp;</span>
          <Link to="/privacy">Privacy</Link>
          <span>|</span>
          <a
          href="https://github.com/fhir-fi/fhir-fi.github.io/tree/main/en/demo2023">Source&nbsp;Code</a>
          <span>|</span>
          <a href="mailto:mikael@sensotrend.com">Feedback</a>
        </p>
      </footer>
    </>
  )
}

export default Article