import * as React from 'react';
import { Link } from 'gatsby';

import Article from '../components/Article';
import fhirLogo from '../images/fhir.svg';

export const Head = () => <title>FHIR Demo 2023 at FHIR DevDays</title>;

export default function DevDays() {

  return (
    <Article>
      <section id="devdays">
        <h1>FHIR Demo 2023 in FHIR DevDays</h1>
        <p>
          The FHIR Demo was presented in <a href="https://www.devdays.com/devdays-2023/">FHIR
          DevDays</a> in Amsterdam.
        </p>
      </section>
      <section className="devadys">
        <h2 id="video">Video recording</h2>
        <div className="media">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube-nocookie.com/embed/fJ0aaJv7FZs?si=Txe1KNraBPZ3LfU1"
            title="YouTube video player: Mikael Rinnetmäki - Finnish FHIR Demo 2023 | DevDays 2023 Amsterdam"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </div>
        <h2 id="presentation">Presentation</h2>
        <p>
          See the <a
          href="https://www.devdays.com/wp-content/uploads/2023/08/230609_MikaelRinnetmaki_Finnish_FHIR_Demo_2023-v2.pdf">presentation
          slides</a>.
        </p>
      </section>
      <section id="other-events">
        <h2>Other events</h2>
        <p>
          The demo was also presented at the Finnish <Link
          to="../atk-paivat">Sosiaali- ja terveydenhuollon ATK-päivät</Link> event, at the <Link
          to="../vitalis">Vitalis</Link> conference, and at the <a
          href="https://radicalhealthfestival.messukeskus.com/">Radical Health Festival</a>.
        </p>
        <p>
          We're also planning some roadshows for the FHIR Demo. If you'd like the Nordic FHIR Demo
          2023 showcase to be presented to you or your people, please get in touch with <a
          href="mailto:mikael@sensotrend.com">mikael@sensotrend.com</a>!
        </p>
      </section>
      <img className="decoration" src={fhirLogo} alt="" />
    </Article>
  )
};
