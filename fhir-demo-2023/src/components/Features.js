import * as React from "react";

import Feature from "./Feature";
import FeatureList from "../components/FeatureList";
import { demos } from '../config/data';


const availableFeatures = FeatureList.filter(
  f => Object.values(demos).some(d => d.features.some(s => s === f))
);

export const FeaturesContext = React.createContext({});

export function FeaturesContextProvider({
  children = <React.Fragment />,
  initialState,
  location
}) {

  // Init features from the URL...
  const { search } = location;
  const featuresUrlParam = search.match(/[?&]features=([^&]+)/) || [];
  const decoded = decodeURIComponent(featuresUrlParam[1] || '');
  const urlState = (decoded.length ? decoded.split(',') : []).reduce((o, f) => {
    o[f] = true;
    return o;
  }, {});

  const [selectedFeatures, setSelectedFeatures] = React.useState(initialState || urlState);

  const state = Object.freeze({
    selectedFeatures,
    setSelectedFeatures,
  });

  return (
    <FeaturesContext.Provider value={state}>
      {children}
    </FeaturesContext.Provider>
  );
};

export function FeatureFilter() {
  return (
    <small>
      <hr />
      <h3>Filter demos by features:</h3>
      <ul className="features">
        {availableFeatures.map(f => (
          <React.Fragment key={f}><Feature feature={f} />{' '}</React.Fragment>
        ))}
      </ul>
      <hr />
    </small>
  );
}

export default function Features({ list }) {
  if (!list?.length) {
    return null;
  }
  return (
    <ul className="hashtags" title="Hashtags">
      {list.map(f => (<React.Fragment key={f}><Feature feature={f} />{' '}</React.Fragment>))}
    </ul>
  );
};
