const fs = require('fs');
const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
	return graphql(`query WpGraph {
		wpMenu(locations: { eq: PRIMARY }) {
			id
			name
			menuItems {nodes {id label title path parentId}}
		}
		allWpPage {
			edges {node {id	slug title isFrontPage isPostsPage content}}
		}
		allWpPost(sort: { fields: [date] }) {
			nodes {title excerpt slug}
		}
		allWpCategory {edges {node {
			id
			name
			slug
			parent {id}
			posts {
				nodes {id title slug content}
			}
		}}}
	}`)
	.then(result => {
		const { allWpCategory, allWpPage, allWpPost, wpMenu } = result.data;

		allWpCategory.edges.forEach(edge => {
			const categorySlug = edge.node.slug;
			actions.createPage({
				path: categorySlug,
				component: path.resolve(`./src/templates/posts-page.js`),
				context: {
					menu: wpMenu.menuItems.nodes,
					slug: categorySlug
				},
			});

			const catTemplatePath = path.resolve(`./src/templates/single-post.js`);
			const template = (
				fs.existsSync(catTemplatePath)
				? catTemplatePath
				: path.resolve(`./src/templates/blog-post.js`)
			);

			edge.node.posts.nodes.forEach(post => {
				actions.createPage({
					path: `/${categorySlug}/${post.slug}`,
					component: template,
					context: {
						menu: wpMenu.menuItems.nodes,
						id: post.id,
					},
				})
			})
		});

		allWpPage.edges.forEach(edge => {
			const pageSlug = (!edge.node.isFrontPage ? edge.node.slug : '/');
			actions.createPage({
				path: pageSlug,
				component: path.resolve(`./src/templates/page.js`),
				context: {
					menu: wpMenu.menuItems.nodes,
					slug: edge.node.slug
				},
			});
		});
	})
};

/*
exports.onCreateNode = ({ node }) => {
	//console.log(`Node created of type "${node.internal.type}"`)
};
*/

/*
const { createFilePath } = require(`gatsby-source-filesystem`);
exports.onCreateNode = ({ node, getNode, actions }) => {
	const { createNodeField } = actions
	if (node.internal.type === `MarkdownRemark`) {
		const slug = createFilePath({ node, getNode, basePath: `pages` })
		createNodeField({
		node,
		name: `slug`,
		value: slug,
		})
	}
};
exports.createPages = async ({ graphql, actions }) => {
	const { createPage } = actions;
	const result = await graphql(`
		query {
		allMarkdownRemark {
			edges {
			node {
				fields {
				slug
				}
			}
			}
		}
		}
	`);
	result.data.allMarkdownRemark.edges.forEach(({ node }) => {
		createPage({
		path: node.fields.slug,
		component: path.resolve(`./src/templates/blog-post.js`),
		context: {
			// Data passed to context is available
			// in page queries as GraphQL variables.
			slug: node.fields.slug,
		},
		})
	});
}
*/
/*exports.createPages = ({ graphql, actions }) => {
	const { createPage } = actions;
	return graphql(`
	{
		allWpPost(sort: { fields: [date] }) {
		nodes {
			title
			excerpt
			content
			slug
		}
		}
	}
	`).then((result) => {
		console.log(JSON.stringify(result, null, 4));
		process.exit();
	})
};*/

