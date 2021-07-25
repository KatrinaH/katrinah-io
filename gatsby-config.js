module.exports = {
  siteMetadata: {
    siteUrl: "https://www.katrinah.io",
    title: "Katrina H.",
  },
  plugins: ["gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-fontawesome-css",
    {
      resolve: "gatsby-plugin-web-font-loader",
      options: {
        typekit: {
          id: process.env.TYPEKIT_ID,
        }
      }
    },
    "gatsby-plugin-sass",
    "gatsby-plugin-gatsby-cloud",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
  ]
};
