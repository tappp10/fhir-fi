import { Link } from "gatsby";
import * as React from "react"

import Article from "../components/Article";
import fhirLogo from "../images/fhir.svg";

export default function Demo({ children }) {
  return (
    <Article>
      <header>
        <nav className="prevNext">
          <div>
            <Link to="">Previous <img src={fhirLogo} alt="" /></Link> 
          </div>
          <div>
            <Link to=""><img src={fhirLogo} alt="" /> Next</Link> 
          </div>
        </nav>
      </header>
      <main className="demo">
        { children }
      </main>
      <nav className="prevNext">
        <div>
          <Link to="">Previous <img src={fhirLogo} alt="" /></Link> 
        </div>
        <div>
          <Link to=""><img src={fhirLogo} alt="" /> Next</Link> 
        </div>
      </nav>
      <img className="decoration" src={fhirLogo} alt="" />
    </Article>
  );
}