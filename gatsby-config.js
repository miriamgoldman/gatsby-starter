require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})
module.exports = {
  siteMetadata: {
    title: `Miriam Test Gatsby`,
    description: `Testing out and learning Gatsby.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
        resolve: `gatsby-source-wordpress`,
        options: {
          baseUrl: `miriamgoldman.ca`,
          protocol: `https`,
          hostingWPCOM: false,
          useACF: true,
          auth: {
          jwt_user: process.env.JWT_USER,
          jwt_pass: process.env.JWT_PWD,
          jwt_base_path: "/jwt-auth/v1/token",
          },
          acfOptionPageIds: [],
          verboseOutput: false,
          perPage: 100,
          searchAndReplaceContentUrls: {
            sourceUrl: "https://www.miriamgoldman.ca",
            replacementUrl: "https://localhost:8000",
          },
          includedRoutes: [
            "**/categories",
            "**/posts",
            "**/pages",
            "**/media",
            "**/tags",
            "**/taxonomies",
            "**/users",
            "**/wp-api-menus/v2/menus", // <== Menu api endpoint
            "**/wp-api-menus/v2/locations", // <== Menu api endpoint
          ]
        },
    },
    {
      resolve: `gatsby-plugin-s3`,
      options: {
          bucketName: process.env.AWS_BUCKETNAME,
          acf: 'null'
      },
  },
  ],
}
