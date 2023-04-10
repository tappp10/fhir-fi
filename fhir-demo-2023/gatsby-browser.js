import * as React from 'react';
import { FeaturesContextProvider } from './src/components/Features';

/*
const { search } = document.location;
const urlFeatures = ((decodeURIComponent(search).match(/features=([^&]*)&?/) || [])[1])?.split(',') || [];
const features = urlFeatures.reduce((o, f) => ({...o, [f]: true}), {});

// console.log({ search, urlFeatures, features });
*/

// Wraps every page in a component
export const wrapPageElement = ({ element, props }) => {
  return (
    <FeaturesContextProvider {...props}>
      {element}
    </FeaturesContextProvider>
  );
};
