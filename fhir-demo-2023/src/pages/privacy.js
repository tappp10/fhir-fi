import * as React from 'react';
import Article from '../components/Article';

export default function Privacy () {
  return (
    <Article>
      <main>
        <h1>You Are Not Being Tracked</h1>
        <p>Feel free to surf, there are no trackers used on the FHIR Demo 2023 pages.</p>
        {/* 
        {document?.location?.host?.endsWith('fhir.fi')
        ? (
          <p>
            The pages are served with the <a href="https://pages.github.com/">GitHub
            pages</a> functionality.
          </p>
        )
        : undefined
        }
        */}
        <p>
          You can inspect the source code in <a
          href="https://github.com/fhir-fi/fhir-fi.github.io/tree/fhir-demo-2023-gatsby/en/demo2023">GitHub</a>.
        </p>
      </main>
    </Article>
  );
};
