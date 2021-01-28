module.exports = {
  siteMetadata: {
    title: "Shiny Grey",
  },
  plugins: [
    {
      resolve: "gatsby-source-wordpress-experimental",
      options: {
        url: "https://wp.shinygrey.com/graphql",
      },
    },
  ],
};
