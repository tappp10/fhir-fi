/**
 * @type {import('gatsby').GatsbyConfig}
 */
module.exports = {
  siteMetadata: {
    siteUrl: 'https://fhir.fi/en/demo2024',
  },
  pathPrefix: '/en/demo2024',
  flags: {
    DEV_SSR: true,
  },
};