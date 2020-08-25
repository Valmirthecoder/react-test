/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.org/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
    resolve: 'gatsby-source-contentful',
      options: {
        spaceId: '6la3fx1fmvhm',
        accessToken: 'oUuj6njlUrosufvGdZ23gqBaRBOaNL4dG4fNdDMWkss'
      }
    }
  ]
}
