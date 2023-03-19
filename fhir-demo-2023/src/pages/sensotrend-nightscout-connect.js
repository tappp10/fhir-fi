import * as React from "react"

import Article from "../components/Article";
import Features from "../components/Features";

export default function NightscoutConnect() {
  // const features = ['MedicationAdministration', 'Observation', 'SMART App Launch'];
  const features = [];
  return (
    <Article>
      <main>
        <h1>Nightscout Connect</h1>
        <p>
          Nightscout Connect makes life with diabetes easier...
        </p>
        <p>
          FHIR Features:
        </p>
        <ul>
          <li>SMART App Launch functionality implemented with Apotti, Cerner, Epic, and InterSystems</li>
          <li>FHIR data storage and retrieval implemented with Apotti, Cerner, Epic, Google Healthcare API, InterSystems, Kanta PHR</li>
        </ul>
        <Features list={features} />
      </main>
    </Article>
  );
}