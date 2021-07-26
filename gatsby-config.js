module.exports = {
  siteMetadata: {
    siteUrl: "https://www.katrinah.io",
    title: "Katrina H.",
    description: "Katrina Hussain, front end developer and UI/UX designer.",
    author: "Katrina H."
  },
  plugins: ["gatsby-plugin-gatsby-cloud",
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
