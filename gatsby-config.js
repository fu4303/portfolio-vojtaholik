const path = require('path')

module.exports = {
  siteMetadata: {
    title: `Vojta's digital drawer`,
    description: `Sometimes I put screenshots of stuff I've worked on inside a special
    folder and they magically appear here. I call it a Drawer.`,
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
          //default: path.resolve('./src/templates/markdown-page.js'),
        },
        gatsbyRemarkPlugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 960,
              sizeByPixelDensity: false,
              linkImagesToOriginal: true,
              wrapperStyle: {
                float: 'left',
              },
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
        path: `${__dirname}/content/cheatsheets/`,
        name: 'cheatsheets',
        ignore: [`**/\.*`], // ignore files starting with a dot,
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
        path: `${__dirname}/content/drawer/`,
        name: 'drawer',
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
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: 'UA-135029522-1',
        head: true,
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    'gatsby-plugin-emotion',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'Vojta - Designer',
        short_name: 'Vojta',
        background_color: '#3852E4',
        theme_color: '#3852E4',
        display: 'minimal-ui',
        icon: 'src/images/icon.png', // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
  ],
}
