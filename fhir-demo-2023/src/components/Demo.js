import { Link } from "gatsby";
import * as React from "react"

import Article from "../components/Article";
import Features from "../components/Features";
import fhirLogo from "../images/fhir.svg";

export default function Demo({ children, features }) {
  return (
    <Article>
      <header>
        <nav className="prevNext">
          <Link to="">Previous <img src={fhirLogo} alt="" /></Link> 
          <Link to=""><img src={fhirLogo} alt="" /> Next</Link> 
        </nav>
      </header>
      <main>
        { children }
        <Features list={features} />
      </main>
    </Article>
  );
}