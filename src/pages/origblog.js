import * as React from "react";
import { graphql } from "gatsby";

import Posts from '../components/Posts';
import ShinyGreyLayout from "../components/Layout";

export const postsQuery = graphql`
query {
	allWpPost(sort: { fields: [date] }) {
		nodes {
		title
		excerpt
		slug
		}
	}
	wpMenu(locations: { eq: PRIMARY }) {
		id
		name
		menuItems {
			nodes {
				id
				label
				title
				path
				parentId
			}
		}
	}
}`;

export default function IndexPage({data}) {
	return(<ShinyGreyLayout menu={data.wpMenu.menuItems.nodes}>
		<h1>Blog</h1>
		<Posts allWpPost={data.allWpPost} />
	</ShinyGreyLayout>);
}
