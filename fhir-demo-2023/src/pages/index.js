import * as React from 'react'

import Article from '../components/Article'
import hl7finland from '../images/hl7-finland.svg';

const IndexPage = () => {
  return (
    <Article>
      <section id="fhir-demo">
        <img src={hl7finland} />
        presents
        <h1>FHIR Demo 2023</h1>
      </section>
    </Article>
  )
}

export default IndexPage

export const Head = () => <title>Home Page</title>
