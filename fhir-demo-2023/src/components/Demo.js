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


  console.log({ pathname, selectedDemos, myIndex, next: selectedDemos[myIndex + 1] });

  const prevNextNav = (
    <nav className="prevNext">
      <div>
        <Link
          to={myIndex > 0 ? `/${selectedDemos[myIndex - 1]}${search}` : ''}
          disabled={myIndex <= 0}
        >
          Previous <img src={fhirLogo} alt="" />
        </Link>
      </div>
      <div>
        <Link
          to={myIndex < (selectedDemos.length - 1) ? `/${selectedDemos[myIndex + 1]}${search}` : ''}
          disabled={myIndex < (selectedDemos.length - 1)}
        >
          Next <img src={fhirLogo} alt="" />
        </Link>
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