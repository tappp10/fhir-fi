import * as React from "react"

import Demo from "../components/Demo";
import * as FeatureList from "../components/FeatureList";
import sensotrendLogo from "../images/sensotrend.svg";

export default function SensotrendConnect() {
  const features = [
    FeatureList.MedicationAdministration,
    FeatureList.Observation,
    FeatureList.SMART,
  ];
  return (
    <Demo features={features}>
      <main>
        <img src={sensotrendLogo} alt="Sensotrend" />
        <h1>Sensotrend Connect</h1>
        <p>
          Sensotrend Connect makes life with diabetes easier...
        </p>
        <p>
          FHIR Features:
        </p>
        <ul>
          <li>SMART App Launch functionality implemented with Apotti, Cerner, Epic, and InterSystems</li>
          <li>FHIR data storage and retrieval implemented with Apotti, Cerner, Epic, Google Healthcare API, InterSystems, Kanta PHR</li>
        </ul>
      </main>
    </Demo>
  );
}