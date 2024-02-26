import * as React from 'react';
import { Link, withPrefix } from 'gatsby';

import Article from './Article';
import { demos } from '../config/data';
import { FeaturesContext } from './Features';
import fhirLogo from '../images/fhir.svg';
import fhirLogo2 from '../images/fhir-deco.svg';
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
            <div>
              <span className="navSymbol">&lt;</span> {' '}
              <span className="navText">Previous</span> {' '}
              <img src={fhirLogo} alt="" />
            </div>
          </Link>
        )
        : (
          <Link to={`/${selectedDemos[selectedDemos.length - 1]}${search}`}>
            <div>
              <span className="navSymbol">&lt;</span> {' '}
              <span className="navText">Last</span> {' '}
              <img src={fhirLogo} alt="" />
            </div>
          </Link>
        )
        }
      </div>
      <div>
        {myIndex < (selectedDemos.length - 1)
        ? (
          <Link to={`/${selectedDemos[myIndex + 1]}${search}`}>
            <div>
              <img src={fhirLogo} alt="" /> {' '}
              <span className="navText">Next</span> {' '}
              <span className="navSymbol">&gt;</span>
            </div>
          </Link>
        )
        : (
          <Link to={`/${selectedDemos[0]}${search}`}>
            <div>
              <img src={fhirLogo} alt="" /> {' '}
              <span className="navText">First</span> {' '}
              <span className="navSymbol">&gt;</span>
            </div>
          </Link>
        )
        }
      </div>
    </nav>
  ) : null;

  return (
    <Article id="demo">
      <header>
        <h1>FHIR Demo 2024 <img className="inline" src={fhirLogo} alt="" /></h1>
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
      </header>
      {prevNextNav}
      <main className="demo">
        { children }
      </main>
      {prevNextNav}
      <img className="decoration" src={fhirLogo2} alt="" />
    </Article>
  );
}