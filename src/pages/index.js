import React from "react";
import { graphql } from "gatsby";

import ShinyGreyLayout from '../components/Layout';

export const homeQuery = graphql`query WpGraph {
	allWpPage {
		edges {
			node {
			id
			slug
			title
			isFrontPage
			isPostsPage
			content
			}
		}
	}
	allWpPost(sort: { fields: [date] }) {
		nodes {
		title
		excerpt
		slug
		}
	}
}`;

export default function IndexPage({data}) {
	const propsKeys = Object.keys({data});
	const dataKeys = Object.keys(data.allWpPage.edges[0].node);

	const homePage = data.allWpPage.edges.find(item => item.node.isFrontPage)

	return (<ShinyGreyLayout>
		<section
			key={homePage.node.id}
			id={homePage.node.id}
			dangerouslySetInnerHTML={{ __html: homePage.node.content }}
		/>
	</ShinyGreyLayout>);
}
