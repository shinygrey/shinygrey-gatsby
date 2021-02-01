import React from "react";
import { graphql } from "gatsby";

import ShinyGreyLayout from "../components/Layout";

export const query = graphql`
query($slug: String!) {
	allWpCategory(filter: { slug: { eq: $slug } }) {
		edges {
		  node {
			id
			posts {
			  nodes {id title slug content}
			}
		  }
		}
		distinct(field: ancestors___nodes)
	  }
}`;

export default function PostsPage({ data, pageContext }) {
	const categorySlug = pageContext.slug;
	const posts = data.allWpCategory.edges[0].node.posts.nodes;
	return(<ShinyGreyLayout menu={pageContext.menu} title={categorySlug}>
		<h1 className={`shinygrey-tag-${categorySlug}`}>{categorySlug}</h1>
		<div>
			{posts.map(post => {
				return(<article
						key={post.id}
						className="sgt-mb-5 sgt-p-7 sgt-border-solid sgt-border-2 sgt-border-sgdark sgt-rounded-xl"
					>
					<a href={`/${categorySlug}/${post.slug}`}><h2>{post.title}</h2></a>
					<div dangerouslySetInnerHTML={{ __html: post.content }} />
				</article>);
			})}
		</div>
	</ShinyGreyLayout>);
}
