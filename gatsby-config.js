const path = require(`path`);

module.exports = {
  siteMetadata: {
    title: `Daniel Ryan`,
    author: `Daniel Ryan`,
    description: `Personal Website`,
    siteUrl: `https://danielryan.xyz/`,
    social: {
      twitter: `dcryan22`,
    },
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        trackingIds: process.env.GOOGLE_ANALYTICS_TRACKING_ID,
        gtagConfig: {
          anonymize_ip: true,
          cookie_expires: 0,
        },
        pluginConfig: {
          head: true,
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/blog`,
        name: `blog`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/content/assets`,
        name: `assets`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sass`,
  ],
};
