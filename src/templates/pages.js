import React from "react";
import { graphql } from "gatsby";

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
		<div className="sgt-w-10/12 sm:sgt-w-9/12 md:sgt-w-8/12  sgt-mx-auto" dangerouslySetInnerHTML={{ __html: page.content }} />
	</ShinyGreyLayout>);
}
