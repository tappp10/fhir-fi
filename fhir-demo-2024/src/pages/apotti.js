import * as React from 'react';
import { Link } from 'gatsby';

import { getHead } from '../components/Article';
import Demo from '../components/Demo';
import Roles from '../components/Roles';
import { demos } from '../config/data';
import apottiLogo from '../images/apotti.png';

export function Head() {
  const title = <title>FHIR Demo 2024: Apotti</title>;
  return getHead({ title });
};

export default function Apotti({ location }) {
  const roles = demos.apotti.roles;
  
  return (
    <Demo roles={roles} location={location}>
      <h1>
        <a href="https://www.apotti.fi/">
          <img src={apottiLogo} alt="Apotti" />
        </a>
      </h1>
      <Roles list={roles} />
      <aside className="event atk-paivat">
        <h2>ATK-päivät: Ständi 400</h2>
        <p>Aikataulutetut demot esittelevät Apotin ekosysteemin sekä <Link
        to="../sensotrend">Sensotrendin</Link> FHIR-sovelluksen osana Apotin työnkulkua:</p>
        <strong>
          <ul>
            <li>
              <time dateTime="2023-05-23T12:30:00.000+03:00">tiistaina klo 12.30</time>, Ständi 400
            </li>
            <li>
              <time dateTime="2023-05-23T13:30:00.000+03:00">tiistaina klo 13.30</time>,
              Startup-alue, pöytä 10
            </li>
            <li>
              <time dateTime="2023-05-23T15:00:00.000+03:00">tiistaina klo 15.00</time>, Ständi 400
            </li>
            <li>
              <time dateTime="2023-05-24T12:15:00.000+03:00">keskiviikkona klo 12.15</time>, Ständi
              400
            </li>
          </ul>
        </strong>
      </aside>
      <aside className="event radical-health">
        <h2>Apotti at the Radical Health Festival</h2>
        <p>Health Capital Helsinki stand A6</p>
        <p>
          The Apotti Ecosystem is presented in cooperation with the healthtech startup <Link
          to="../sensotrend">Sensotrend</Link>.
        </p>
        <strong>
          <ul>
          <li>
              <time dateTime="2023-06-13T12:40:00.000+03:00">Tuesday at 12.40</time>, Health
              Capital Helsinki stand A6
            </li>
            <li>
              <time dateTime="2023-06-14T13:10:00.000+03:00">Wednesday at 13.10</time>, Health
              Capital Helsinki stand A6
            </li>
          </ul>
        </strong>        
      </aside>

      <section id="kyvykkyydet">
        <h2>Apotti-järjestelmän kyvykkyydet ja kehitys</h2>
        <p>Apotti-järjestelmä on kattavin ja edistyksellisin ratkaisu sosiaali- ja terveydenhuollon
        tarpeisiin. Meillä on jo nyt käytössämme erikoissairaanhoidon, perusterveydenhuollon ja
        sosiaalihuollon tiedot yhdistävä, kyvykäs ja jatkuvasti kehittyvä asiakas- ja potilastieto-
        sekä toiminnanohjausjärjestelmä. Apotti-järjestelmää ja sen käytettävyyttä kehitetään
        jatkuvasti tiiviissä yhteistyössä Apotin omistajaorganisaatioiden kanssa, mm. Apotti
        2.0-kehitysohjelmassa.</p>
        <p>Apotin yhteistyö Epicin kanssa tuo edistyneimmät kansainväliset ratkaisut Apotin
        asiakasorganisaatioiden saataville. Epic tekee yhteistyötä alan merkittävimpien
        toimijoiden, kuten Microsoftin, OpenAI:n ja Applen kanssa.</p>
      </section>
      <section id="ekosysteemi">
        <h2>Apotin ekosysteemitoiminta ja verkostokehittäminen</h2>
        <p>Apotti-järjestelmän ytimenä toimiva Epic on käytössä maailman parhaissa sairaaloissa eri
        puolilla maailmaa. Apotin ja Epicin yhteistyö tarjoaa suomalaisille sosiaali- ja
        terveysteknologian yrityksille väylän kehittää palveluita ja sovelluksia niin kotimaisille
        kuin kansainvälisille markkinoille. Olemme avanneet Apotti-ekosysteemin kehitys- ja
        testausympäristön, jossa yritykset pääsevät turvallisesti testaamaan omia palveluitaan
        kuvitteellisella asiakas- ja potilasdatalla.</p>
      </section>
      <section id="demo">
        <h2>Apotin ekosysteemin demo ATK-päivillä</h2>
        <p>Demossa kuvataan Apotti-järjestelmän ja sovellusten yhteistoiminta <strong>SMART App
        Launch</strong> -käynnistyksenä (vanhalta nimeltään SMART on FHIR), jolloin Apottiin
        kirjautunut käyttäjä näkee yhdellä kirjautumisella myös sovelluksen tuottaman tiedon.</p>
        <p>Demossa näytetään:</p>
        <ul>
          <li>
            <Link to="../sensotrend">Sensotrend</Link> (Apotin ekosysteemikumppani): rooli =
            diabetespotilas
            <ul>
              <li>
                näkymä: potilaan näkymät tabletin kautta (Sensotrendin näkymä on kansainvälisesti
                harmonisoitu ambulatoorinen glukoosiprofiili, jota diabetesta hoitavat
                terveydenhuollon ammattilaiset osaavat tulkita.)
              </li>
            </ul>
          </li>
          <li>
            Apotti: rooli = Apotti-järjestelmää käyttävä sisätautilääkäri
            <ul>
              <li>
                näkymä: sisätautilääkärin työnkulkua diabetespotilaan hoidossa, missä on mukana
                Sensotrendin näkymä saumattomasti upotettuna
              </li>
            </ul>
          </li>
        </ul>
      </section>
      <section id="background">
        <h2>Taustaa</h2>
        <p>Apotti on modulaarinen järjestelmä, johon on aiempaa helpompaa liittää
        terveys&shy;teknologia&shy;yritysten/startupien kehittämiä sovelluksia <strong>SMART App
        Launch</strong> -teknologialla. Näin Apotti-järjestelmään kirjautunut ammattilaiskäyttäjä
        näkee yhdellä kirjautumisella myös sovelluksen tuottaman tiedon. Tämä tehostaa toimintaa ja
        vähentää virheiden todennäköisyyttä, koska ammattilaiskäyttäjän ei tarvitse manuaalisesti
        poimia tarvitsemiaan tietoja eri palveluista tai sovelluksista.</p>
      </section>
      <section id="contact">
        <h3>Contact</h3>
        <div className="business-card">
          <h3>Ilkka Tiainen</h3>
          <p>Ecosystem Specialist</p>
          <address>
            <a href="mailto:ilkka.tiainen@apotti.fi">ilkka.tiainen@apotti.fi</a>
          </address>
        </div>
      </section>
    </Demo>
  );
};
