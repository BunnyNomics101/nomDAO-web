module.exports = {
  siteMetadata: {
    title: 'nomDAO — The Iron Bank of Wonderland',
    author: 'nomDAO',
    description: 'nomDAO — The Iron Bank of Wonderland',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/bg.svg', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
  ],
  flags: {
    DEV_SSR: false,
    FAST_REFRESH : true
  }
}
