import * as React from 'react';
import { Link, withPrefix } from 'gatsby';

import Article from './Article';
import { demos } from '../config/data';
import { FeaturesContext } from './Features';
import fhirLogo from '../images/fhir.svg';
import Features from './Features';

const prefix = withPrefix('/');

export default function Demo({ children, location }) {

  const { search, pathname } = location;

  const { selectedFeatures = {} } = React.useContext(FeaturesContext);

  const features = Object.keys(selectedFeatures).sort();

  const selectedDemos = Object.keys(demos).filter(
    (k) => !features.length || demos[k].features?.some((f => features.some(s => s === f)))
  );

  const myIndex = selectedDemos.indexOf(pathname.replace(prefix, '').replaceAll('/', ''));

  const prevNextNav = selectedDemos.length > 1 ?(
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
  ) : null;

  return (
    <Article>
      <header>
        {features.length
        ? (
          <>
            <hr />
            <h3>{`Showing demos with feature${features.length > 1 ? 's' : ''}:`}</h3>
            <Features list={features} />
            <hr />
          </>
        )
        : null
        }
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