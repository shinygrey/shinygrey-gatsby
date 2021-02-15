import React from "react";
import { graphql } from "gatsby";

import ShinyGreyLayout from "../components/Layout";

export const query = graphql`
query($id: String!) {
	allWpPost(filter: { id: { eq: $id } }) {
		nodes {
			id
			slug
			title
			content
			categories { nodes { slug } }
		}
	}
}`;
// postId

export default function SinglePost({ data, pageContext }) {
	const post = data.allWpPost.nodes[0];
	const slug = post.categories.nodes[0].slug;
	return (
		<ShinyGreyLayout menu={pageContext.menu} title={`Shiny Grey / ${slug}`}>
			<h1 data-widt={typeof post.id} data-slug={post.slug}>
				<i className={"shinygrey-tag-"+slug}>{slug}</i> {post.title}
			</h1>
			<div dangerouslySetInnerHTML={{ __html: post.content }} />
		</ShinyGreyLayout>
	);
}
