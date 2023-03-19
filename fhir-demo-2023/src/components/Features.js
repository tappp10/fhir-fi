import * as React from "react";

import Feature from "./Feature";
import FeatureList from "../components/FeatureList";


export const FeaturesContext = React.createContext({});

export function FeaturesContextProvider({ children = <React.Fragment />, initialState = {} }) {

  // TODO: Init features from the URL...


  const [selectedFeatures, setSelectedFeatures] = React.useState(initialState);

  const state = Object.freeze({
    selectedFeatures,
    setSelectedFeatures,
  });

  console.log('Features', selectedFeatures);
  
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
        {FeatureList.map(f => (
          <><Feature feature={f} />{' '}</>
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
    <ul className="hashtags">
      {list.map(f => (<React.Fragment key={f}><Feature feature={f} />{' '}</React.Fragment>))}
    </ul>
  );
};
