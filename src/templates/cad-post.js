import React from "react";
import { graphql } from "gatsby";

import ShinyGreyLayout from "../components/Layout";

export const query = graphql`
query($id: String!) {
	allWpPost(filter: { id: { eq: $id } }) {
		nodes {
			title
			content
		}
	}
}`;

export default function BlogPost({ data, pageContext }) {
	const post = data.allWpPost.nodes[0];
	return (
		<ShinyGreyLayout menu={pageContext.menu} title="Shiny Grey / CAD">
		<div>
			<h1><i className="shinygrey-tag-cad">CAD</i> {post.title}</h1>
			<div dangerouslySetInnerHTML={{ __html: post.content }} />
		</div>
		</ShinyGreyLayout>
	);
}
