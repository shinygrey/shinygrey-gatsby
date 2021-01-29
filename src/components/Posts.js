import React from "react";

export default function Posts({ allWpPost }) {
	return (
		<div>
		<h3>Posts</h3>
		{allWpPost.nodes.map((node) => (
			<div>
			<p>{node.title}</p>
			<div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
			</div>
		))}
		</div>
	);
}
