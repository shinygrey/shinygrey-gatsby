module.exports = {
	siteMetadata: {
		title: "Shiny Grey",
	},
	plugins: [
		'gatsby-plugin-postcss',
		'gatsby-plugin-sharp',
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
		{
			resolve: "gatsby-plugin-manifest",
			options: {
			name: "Shiny Grey Ltd",
			short_name: "Shiny Grey",
			start_url: "/",
			background_color: "#666f7c",
			theme_color: "#666f7c",
			display: "standalone",
			icon: "src/images/icon.png",
			crossOrigin: `use-credentials`,
			},
		},
	]
};
