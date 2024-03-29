
require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

const config = require('./config/website');
const pathPrefix = config.pathPrefix === '/' ? '' : config.pathPrefix;

module.exports = {
  // flags: {
  //   DEV_SSR: true,
  // },
  /* General Information */
  pathPrefix: config.pathPrefix,
  siteMetadata: {
    siteUrl: config.siteUrl + pathPrefix,
  },
  trailingSlash: `always`,
  /* Plugins */
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-emotion",
    "gatsby-plugin-tailwindcss",
    "gatsby-plugin-image",
    "gatsby-plugin-apollo",
    {
      resolve: "gatsby-plugin-postcss",
      options: {
        postCssPlugins: [require("tailwindcss"), require("autoprefixer")],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "images",
        path: `${__dirname}/src/images/`,
      },
    },
    // "gatsby-transformer-json",
    // "gatsby-transformer-json-key-value-to-array",
    {
      resolve: "gatsby-plugin-copy-files",
      options: {
        source: `${__dirname}/src/images`,
        destination: "/images",
      },
    },
    "gatsby-transformer-sharp",
    {
      resolve: `gatsby-transformer-sharp`,
      options: {
        // The option defaults to true
        checkSupportedExtensions: true,
      },
    },
    "gatsby-plugin-sharp",
    {
      resolve: "gatsby-plugin-manifest",
      options: {
        name: config.siteTitle,
        short_name: config.siteTitleAlt,
        description: config.siteDescription,
        start_url: config.pathPrefix,
        background_color: config.backgroundColor,
        theme_color: config.themeColor,
        display: "standalone",
        icon: "src/images/avatar2.jpg",
        legacy: true,
      },
    },
    {
      resolve: "gatsby-plugin-google-analytics",
      options: {
        trackingId: "UA-64483982-2",
      },
    },
    /* Must be placed at the end */
    "gatsby-plugin-offline",
  ],
};
