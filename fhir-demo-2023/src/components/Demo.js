import * as React from 'react';
import { Link } from 'gatsby';

import Article from './Article';
import { demos } from '../config/data';
import { FeaturesContext } from './Features';
import fhirLogo from '../images/fhir.svg';

export default function Demo({ children, location }) {

  const { search, pathname } = location;

  const { selectedFeatures = {} } = React.useContext(FeaturesContext);
  const features = Object.keys(selectedFeatures).sort();

  const selectedDemos = Object.keys(demos).filter(
    (k) => !features.length || demos[k].features?.some((f => features.some(s => s === f)))
  );

  const myIndex = selectedDemos.indexOf(pathname.replaceAll('/', ''));

  const prevNextNav = (
    <nav className="prevNext">
      <div>
        {myIndex > 0
        ? (
          <Link to={`/${selectedDemos[myIndex - 1]}${search}`}>
            Previous <img src={fhirLogo} alt="" />
          </Link>
        )
        : (
          <Link to={`/${selectedDemos[selectedDemos.length - 1]}${search}`}>
            Last <img src={fhirLogo} alt="" />
          </Link>
        )
        }
      </div>
      <div>
        {myIndex < (selectedDemos.length - 1)
        ? (
          <Link to={`/${selectedDemos[myIndex + 1]}${search}`}>
            Next <img src={fhirLogo} alt="" />
          </Link>
        )
        : (
          <Link to={`/${selectedDemos[0]}${search}`}>
            First<img src={fhirLogo} alt="" />
          </Link>
        )
        }
      </div>
    </nav>
  );

  return (
    <Article>
      <header>
        {prevNextNav}
      </header>
      <main className="demo">
        { children }
      </main>
      {prevNextNav}
      <img className="decoration" src={fhirLogo} alt="" />
    </Article>
  );
}