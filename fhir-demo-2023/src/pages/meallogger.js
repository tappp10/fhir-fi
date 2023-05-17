import * as React from 'react';
import { Link } from 'gatsby';

import Demo from '../components/Demo';
import Features from '../components/Features';
import { demos } from '../config/data';
import mealloggerLogo from '../images/meallogger.jpeg';
import mealloggerSolution from '../images/meallogger.png';

export const Head = () => <title>FHIR Demo 2023: Meallogger</title>;

export default function Meallogger({ location }) {
  const features = demos.meallogger.features;
  
  return (
    <Demo features={features} location={location}>
      <h1>
        <a href="https://www.meallogger.com/">
          <img src={mealloggerLogo} alt="Meallogger" />
        </a>
      </h1>
      <Features list={features} />
      <aside className="event atk-paivat">
        <h2>ATK-päivät: Startup-alue</h2>
        <p>Demomme voi nähdä <Link to="../wellmo">Wellmon</Link> ständillä.</p>
      </aside>
      <section>
        <h2>Smart Photo Food Journal</h2>
        <p>MealLogger is a digital platform for hospitals and health care providers to scale
        nutrition interventions.</p>
        <img src={mealloggerSolution} alt="" />
        <p>MealLogger enables population-level nutrition coaching with  automated programs, peer
        support, AI-assisted features, and advanced analytics as well as private and small group
        coaching.</p>
      </section>
      <section id="ai">
        <h2>Supported by Artificial Intelligence</h2>
        <p>MealLogger has developed several deep neural networks based on a proprietary database of
        5+ million meals. These networks analyze food images and provide suggestions to the
        professional, thus improving their scalability.</p>
      </section>
      <section>
        <h2>SMART App Launch from Health Village</h2>
        <p>MealLogger is integrated to nutrition related care paths in Health Village
        (<i>Terveyskylä</i>). Both patients and healthcare practitioners can access the service
        seamlessly from the care path, with no extra sign-in or searching for patient accounts.</p>
        <div className="media">
          <iframe
            width="100%"
            height="100%"
            src="https://www.youtube.com/embed/Nw15LDwtCaI?start=2262"
            title="MealLogger-palvelun käynistys Painonhallintatalon hoitopolulta"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen>
          </iframe>
        </div>
      </section>
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <h3>Michael Quarshie</h3>
          <p>CEO</p>
          <address>
            <a href="mailto:michael@meallogger.com">michael@meallogger.com</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
