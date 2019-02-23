const path = require('path')

module.exports = {
  siteMetadata: {
    title: 'Digital Mass',
    description: 'Unknown.',
    author: '@vjthlk',
  },
  plugins: [
    {
      resolve: `gatsby-mdx`,
      options: {
        globalScope: `
          import ResponsiveEmbed from "react-responsive-embed";
          import { TwitterTweetEmbed } from "react-twitter-embed";

          export default { ResponsiveEmbed, TwitterTweetEmbed };
        `,
        defaultLayouts: {
          default: path.resolve('./src/components/layout.js'),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 960,
              sizeByPixelDensity: true,
              linkImagesToOriginal: false,
            },
          },
        ],
      },
    },
    'gatsby-transformer-remark',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages/`,
        ignore: [`**/\.*`], // ignore files starting with a dot
      },
    },

    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/articles/`,
        name: 'articles',
        ignore: [`**/\.*`], // ignore files starting with a dot,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/projects/`,
        name: 'projects',
        ignore: [`**/\.*`], // ignore files starting with a dot,
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/screenshots/`,
        name: 'screenshots',
        ignore: [`**/\.*`], // ignore files starting with a dot,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-emotion',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'how-to-egghead',
        short_name: 'egghead',
        background_color: '#3852E4',
        theme_color: '#3852E4',
        display: 'minimal-ui',
        icon: 'src/images/egghead-icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
