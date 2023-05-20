import * as React from 'react';

import Demo from '../components/Demo';
import Features from '../components/Features';
import { demos } from '../config/data';
import wellmoLogo from '../images/wellmo.png';
import wellmoSolution from '../images/wellmo.webp';

export const Head = () => <title>FHIR Demo 2023: Wellmo</title>;

export default function Wellmo({ location }) {
  const features = demos.wellmo.features;
  
  return (
    <Demo features={features} location={location}>
      <h1 className="white">
        <a href="https://www.wellmo.com/">
          <img src={wellmoLogo} alt="Wellmo" />
        </a>
      </h1>
      <Features list={features} />
      <aside className="event atk-paivat">
        <h2>ATK-päivät: Startup-alue</h2>
        <p><strong>FHIR-demo <time
        dateTime="2023-05-23T12:45:00.000+03:00">tiistaina klo 12.45</time></strong>.</p>
      </aside>
      <section id="about">
        <h2>Platform for digital health services</h2>
        <p>Wellmo is an ultimate platform for personalised digital health services. Wellmo provides
        all the elements of an ecosystem platform, including integrations to hundreds of connected
        health devices, white label mobile app, a content management system and integration
        APIs.</p>
        <p>Effectively engage your customers in their own health, become more relevant, attract new
        welcustomers and save health care costs.</p>
        <img src={wellmoSolution} alt="" />
      </section>
      <section id="smart-in-two-ways">
        <h2>SMART App Launch in Two Ways</h2>
        <p>Wellmo can be integrated into electronic health record systems through the <strong>SMART
        App Launch</strong> mechanism.</p>
        <p>Wellmo can also act as a cover app integrating many other health and wellbeing apps. In
        this case, the apps can be launched from Wellmo using SMART.</p>
      </section>
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <h3>Jaakko Olkkonen</h3>
          <p>CEO and Founder</p>
          <address>
            <a href="mailto:jaakko.olkkonen@wellmo.com">jaakko.olkkonen@wellmo.com</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
