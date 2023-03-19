import * as React from "react";
import { Link } from "gatsby";
import { FeaturesContext } from "./Features";

export default function Feature({ feature }) {
  const { selectedFeatures, setSelectedFeatures } = React.useContext(FeaturesContext);
  let newFeatures;

  if (selectedFeatures[feature]) {
    const { [feature]: deleted, ...rest } = selectedFeatures;
    newFeatures = { ...rest };
  } else {
    newFeatures = {
      ...selectedFeatures,
      [feature]: true,
    };
  }

  const featureList = Object.keys(newFeatures);
  const featureSearch = featureList.length
  ? `?features=${encodeURIComponent(featureList.join(','))}`
  : '';

  return (
    <Link
      className={`${selectedFeatures[feature] ? 'selected ' : ''}feature`}
      onClick={() => {
        setSelectedFeatures(newFeatures);
      }}
      to={`/${featureSearch}#participants`}
    >
      #{feature}
    </Link>
  );
}