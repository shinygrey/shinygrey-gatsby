module.exports = {
	siteMetadata: {
		title: "Shiny Grey",
	},
	plugins: [
		{
			resolve: "gatsby-source-wordpress-experimental",
			options: {
				url: "https://wp.shinygrey.com/graphql",
				schema: {
					perPage: 100,
					requestConcurrency: 15
				}
			},
		},
		'gatsby-plugin-postcss',
		'gatsby-plugin-sharp'
	]
};
