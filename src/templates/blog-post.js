import React from "react";
import ShinyGreyLayout from "../components/Layout";

export const query = graphql`
query($slug: String!) {
	allWpPost(filter: { slug: { eq: $slug } }) {
		nodes {
			title
			content
		}
	}
}`;

export default function BlogPost({ data }) {
	const post = data.allWpPost.nodes[0];
	console.log(post);
	return (
		<ShinyGreyLayout>
		<div>
			<h1>{post.title}</h1>
			<div dangerouslySetInnerHTML={{ __html: post.content }} />
		</div>
		</ShinyGreyLayout>
	);
}
