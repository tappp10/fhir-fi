import * as React from 'react';
import { FeaturesContextProvider } from './src/components/Features';

// Wraps every page in a component
export const wrapPageElement = ({ element, props }) => {
  return (
    <FeaturesContextProvider {...props}>
      {element}
    </FeaturesContextProvider>
  );
};
