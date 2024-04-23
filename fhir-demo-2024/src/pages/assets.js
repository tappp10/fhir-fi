import * as React from 'react';
import { Link, withPrefix } from 'gatsby';

import Article, { getHead } from '../components/Article';
import fhirLogo2 from '../images/fhir-deco.svg';

export function Head() {
  const title = <title>FHIR Demo 2024 Assets</title>;
  return getHead({ title });
};

export default function Assets() {
  const rootFolder = withPrefix('/');

  return (
    <Article id="assets">
      <section id="about">
        <h1>Graphical Assets for FHIR Demo 2024</h1>
        <p>
          Want to use the look and feel of the FHIR Demo 2024 in your own presentations? Awesome!
        </p>
        <p>
          There is no formal style guide for the demo, but the assets on this page should get you
          started.
        </p>
      </section>
      <section id="info">
        <h2>Graphical Assets</h2>
        Please feel free to download and reuse any of the following assets:
        <section id="fonts">
          <h3>Typography</h3>
          <ul>
            <li>
              <a
                href="https://fonts.google.com/share?selection.family=Tourney:ital,wght@0,100..900;1,100..900"
              >
                Tourney font (Google Fonts)
              </a> used for large headings
            </li>
            <li>
              <a
                href="https://fonts.google.com/share?selection.family=Commissioner:wght@100..900"
              >
                Commissioner font (Google Fonts)
              </a> used for body text
            </li>
          </ul>
          <p>
            The Tourney font is the main heading font, giving this year's showcase its look. It is
            a <i>journey</i> with it's <i>turns</i>... Or, more officially:
          </p>
          <blockquote cite="https://fonts.google.com/specimen/Tourney/about">
            <p>
              Tourney is a collaboration of tech and sport. At least, that is where the inspiration
              came from. Tourney would feel at home on a space ship or in a stadium. The lightest
              weight of Tourney (100) is almost an outline and that "stroke" thickens as the
              weights increase. 900 is completely solid.
            </p>
            <footer>The description of Tourney in Google Fonts</footer>
          </blockquote>
          <p>
            The pipe effects of the outlined font, combined with its aesthetics of 45 and 90 angle
            turns, continue in the randomly generated backgrounds of the site. The crossing paths
            symbolize connections of health data and how it can be routed from place to another.
          </p>
          <p>
            Note that Tourney is a variable font. When you change the weight of the font, you
            actually adjust the ratio between the outline and the fill of the characters. This site
            uses (at the time of writing this paragraph) weights 100, 400, 650, and 900 for
            different effects. You can check the details in the <a
            href="https://github.com/fhir-fi/fhir-fi.github.io/blob/fhir-demo-2024-gatsby/fhir-demo-2024/src/styles/index.css"
            >style sheet</a>, search for <code>font-weight</code>. Or <a
            href="https://developer.chrome.com/docs/devtools/open#inspect">inspect</a> any element
            on this site with your browser. 
          </p>
          <p>
            The body text font is Commissioner, as we need to affect the European Union and the
            regulation for the European Health Data Space (EHDS) and get the FHIR standard
            acknowledged more widely there. ;-)
          </p>
        </section>
        <section id="powerpoint">
          <h3>Presentation template</h3>
          <ul>
            <li>
              <a
                href={`${rootFolder}FHIR_Demo_2024_template.pptx`}
                download="FHIR_Demo_2024_template.pptx"
                type="application/vnd.ms-powerpoint"
              >
                FHIR_Demo_2024_template.pptx
              </a> Sample Powerpoint presentation
            </li>
            <li>
              <a
                href={`${rootFolder}FHIR_Demo_2024_template.potx`}
                download="FHIR_Demo_2024_template.potx"
                type="application/vnd.ms-powerpoint"
              >
                FHIR_Demo_2024_template.potx
              </a> Powerpoint template
            </li>
          </ul>
          <p>
            These are just very simple templates with a couple of slides using the FHIR Demo 2024
            look. The required fonts are included in the file, but it may still be safer for you to
            install the fonts locally too.
          </p>
        </section>
        <section id="backgrounds">
          <h3>Background images</h3>
          <ul>
            <li>
              <a
                href={`${rootFolder}fhir-demo-2024-backgrounds.zip`}
                download="fhir-demo-2024-backgrounds.zip"
                type="application/x-zip"
              >
                fhir-demo-2024-backgrounds.zip
              </a> image archive
            </li>
          </ul>
          <p>
            The zip archive contains some sample backgrounds. You can generate more yourself, with
            a click of a button, for any dimensions you wish, using the <Link
            to="/create-background">background generator</Link>. Just keep hitting the Redraw!
            button until you get the shape that appeals to you or suits your needs. 
          </p>             
        </section>
        <section id="fhir-logo">
        <h3>The FHIR Logo</h3>
          <ul>
            <li>
              <a
                href={`${rootFolder}fhir.svg`}
                download="fhir-logo.svg"
                type="image/svg+xml"
              >
                fhir-logo.svg
              </a>
            </li>
          </ul>
          <p>
            If you use the FHIR logo in your own materials, please do pay attention to the
            trademark and the <a href="https://www.hl7.org/fhir/license.html#trademark">guidance
            on how it can be used</a> from HL7 International.
          </p>

        </section>
      </section>
      <img className="decoration" src={fhirLogo2} alt="" />
    </Article>
  )
};
