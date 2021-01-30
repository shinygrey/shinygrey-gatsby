import React from "react";
import ShinyGreyLayout from "../components/Layout";

export const query = graphql`
query($slug: String!) {
	allWpPage(filter: { slug: { eq: $slug } }) {
		edges {
			node {
				title
				content
			}
		}
	}
}`;

export default function Page({ data, pageContext }) {
	const page = data.allWpPage.edges[0].node;
	return(<ShinyGreyLayout menu={pageContext.menu}>
		<title>{page.title}</title>
		<div dangerouslySetInnerHTML={{ __html: page.content }} />
	</ShinyGreyLayout>);
}
