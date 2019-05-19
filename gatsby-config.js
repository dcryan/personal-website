module.exports = {
  siteMetadata: {
    title: `Title from siteMetadata`,
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        path: `${__dirname}/src/markdown`,
        name: 'markdown-pages',
      },
    },
    `gatsby-transformer-remark`,
  ],
};
