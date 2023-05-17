import * as React from 'react';

import Demo from '../components/Demo';
import Features from '../components/Features';
import { demos } from '../config/data';
import mylabLogo from '../images/mylab_logo_slogan_black_rgb.png';
import myplusLogo from '../images/mylab_plus_rgb.png';
import myplusCareLogo from '../images/mylab_plus_care_rgb.png';
import myplusHubLogo from '../images/mylab_plus_hub_rgb.png';

export const Head = () => <title>FHIR Demo 2023: Mylab</title>;

export default function Mylab({ location }) {
  const features = demos.mylab.features;
  
  return (
    <Demo features={features} location={location}>
      <h1>
        <a href="https://www.mylab.fi/en/">
          <img src={mylabLogo} alt="Mylab" />
        </a>
      </h1>
      <Features list={features} />
      <aside className="event vitalis">
        <h2>Mylab at Vitalis</h2>
        <p>Welcome to visit Mylab's stand! We have a scheduled time for presenting our ideas using
        FHIR on</p>
        <strong>
          <ul>
            <li><time dateTime="2023-05-23T15:10:00.000+02:00">23th May at 15:10</time></li>
            <li><time dateTime="2023-05-24T10:10:00.000+02:00">24th May at 10:10</time></li>
          </ul>
        </strong>
        <p>If this time is not suitable for you, you may visit any time Mylab's stand and contact
        our personnel to schedule presentation time and share your ideas.</p>
      </aside>
      <aside className="event atk-paivat">
        <h2>Mylab ATK-päivillä</h2>
        <p>If you are interested in the topic, please contact any Mylab's personnel in the event
        and share your contact information, ideas and possible needs to integrate your application
        using laboratory data and we will contact you later. Mylab don't have stand and demo
        presentation in ATK-days.</p>
      </aside>
      <section id="mylab">
        <p>Mylab is the leading Finnish supplier of health care laboratory and diagnostics
        information systems. By implementing better and more reliable technological solutions for
        health care use, we facilitate longer and healthier lifespans and improved quality of life.
        Human life is at our core.</p>
      </section>
      <section id="mylab-demo">
        <h2>Boost Your integration with Laboratory Information System: My+ on FHIR® </h2>
        <p>Mylab presents a vision and ideas using FHIR for integration with laboratory information
        system.</p>
      </section>
      <section id="myplus">
        <h2><img src={myplusLogo} alt="My+ LIS" /></h2>
        <a href="https://www.mylab.fi/en/solutions/myplus-vital-data-for-your-laboratory/">My+® -
        vital data for your laboratory - Mylab</a>
        <p>My+® is a LIS system that guides users and enhances the efficiency of different aspects
        of healthcare laboratory processes from pre-analytics to post-analytics, managing the
        entire process smoothly and safely for patients' diagnosis decision making. My+® is a truly
        multidisciplinary LIS gathering together all of the specialist areas of healthcare
        laboratories from clinical chemistry and hematology to microbiology, pathology, and
        genetics along with versatile equipment and systems integrations, as well as crucial
        support functions and data analytics. Although My+® is a genuine cross-functional system
        serving all the laboratory specialty areas within the same system, the specialty areas are
        promptly designed to meet the unique needs of each specialty area.</p>
        <h4>Benefits of FHIR for integration with My+ LIS</h4>
        <p>EHR system users who need to see detailed information of patient laboratory analysis
        results or order new tests could open the My+ Care application using SSO.</p>
        <p>Session context information can be shared between the systems, such as patient,
        organization, user data etc.</p>
      </section>
      <section id="mypluscare">
        <h2><img src={myplusCareLogo} alt="My+ Care" /></h2>
        <a href="https://www.mylab.fi/en/solutions/mypluscare-delivering-data-for-care/">My+ care®
        - delivering data for care - Mylab</a>
        <p>My+ care® enables physicians, nurses and other staff in treatment units to access
        laboratory information in patient care directly. The service gives treatment units access
        to all laboratory information according to the agreed region, in compliance with data
        protection regulations, and gives them the ability to request laboratory and other
        diagnostics tests. My+ care includes advanced test and blood product orders, the ability to
        view results as well as data connections, and delivery of information involving treatment
        to patients. Versatile device and systems integrations transmit the information needed for
        decision-making regarding treatments to physicians and nursing staff in a reliable,
        targeted way.</p>
        <h4>Benefits of FHIR for integration with My+ Care</h4>
        <p>EHR system users who need to see detailed information of patient laboratory analysis
        results or order new tests could open the My+ Care application using SSO. Session context
        information can be shared between the systems, such as patient, organization, user data
        etc.</p>
        <p>FHIR SMART App Launch helps to build UI integration between the systems and provides a
        flexible standardized way to share session information and build seamless UI-integration
        between the systems.</p>
      </section>
      <section id="myplushub">
        <h2><img src={myplusHubLogo} alt="My+ Hub" /></h2>
        <a href="https://www.mylab.fi/en/solutions/myplushub-integrating-your-crucial-data/">My+
        hub® - integrating your crucial data - Mylab</a>
        <p>My+ hub® ensures secure up-to-date transfer of critical data needed to support
        healthcare decision-making. My+ hub® acts as a centralised national data transfer node. Our
        cost-effective solution enable reliable, secure and agile data transfer, making the
        old-fashioned and costly individual data transfer integrations between laboratories
        redundant. Integrate your organization into a nationwide healthcare data transfer hub and
        expand your organization’s communication capabilities. Laboratories collaborate in a
        variety of ways with other laboratories. For example, when acquiring special analytics from
        other laboratories, My+ hub® enables agile and secure data transfer between all actors
        already connected to the service.</p>
        <h4>Benefits of FHIR for integration with My+ Hub</h4>
        <p>My+ Hub is a platform to connect health care organizations and systems. FHIR standard
        helps to create faster and more flexible and customizable integration and API between the
        health care providers.</p>
      </section>
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <h3>Hannu Honkala</h3>
          <p>Chief Commercial Officer</p>
          <address>
            <a href="mailto:hannu.honkala@mylab.fi">hannu.honkala@mylab.fi</a>
          </address>
        </div>
      </section>
    </Demo>     
  );
};
