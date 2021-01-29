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


export default function Page(props) {
	/*const pagesIndex = data.allWpPage.edges.reduce((acc,item) => {
		acc[item.slug] = item;
		return acc;
	},{});*/
	//const page = data.allWpPage.edges[0];
	const keys = Object.keys(props);
	const dataKeys = Object.keys(props.data.allWpPage.edges[0].node.title);
	return (<ShinyGreyLayout>
		<p>What is passed to data?</p>
		<ul>{keys.map(key => <li key={key}>{typeof props[key]} <b>{key}</b> </li>)}</ul>
		<p>{props.pageResources.toString()}</p>
		<p>{dataKeys.map(key => <i key={key}>{typeof props[key]} <b>{key}</b> </i>)}</p>
		<h4>{props.data.allWpPage.edges[0].node.title}</h4>
		<div dangerouslySetInnerHTML={{ __html: props.data.allWpPage.edges[0].node.content }} />
	</ShinyGreyLayout>);
}


/*

	return (
		<ShinyGreyLayout>
			<h1>{page.title}</h1>
			<div dangerouslySetInnerHTML={{ __html: page.content }} />
		</ShinyGreyLayout>
	);

*/