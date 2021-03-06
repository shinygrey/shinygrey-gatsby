import React from "react";
import { Link, graphql } from "gatsby";
import ShinyGreyLayout from '../components/Layout';

export const testQuery = graphql`query TestPage {
	allWpPost(sort: { fields: [date] }) {
		nodes {
		title
		excerpt
		slug
		}
	}
}`;

export default function TestPage(props) {
	const keys = Object.keys(props);

	return (<ShinyGreyLayout>
		<img
			alt="Gatsby G Logo"
			src="data:image/svg+xml,%3Csvg width='24' height='24' fill='none' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M12 2a10 10 0 110 20 10 10 0 010-20zm0 2c-3.73 0-6.86 2.55-7.75 6L14 19.75c3.45-.89 6-4.02 6-7.75h-5.25v1.5h3.45a6.37 6.37 0 01-3.89 4.44L6.06 9.69C7 7.31 9.3 5.63 12 5.63c2.13 0 4 1.04 5.18 2.65l1.23-1.06A7.959 7.959 0 0012 4zm-8 8a8 8 0 008 8c.04 0 .09 0-8-8z' fill='%23639'/%3E%3C/svg%3E"
		/>
		<h1 style={{
			marginTop: 0,
			marginBottom: 64,
			maxWidth: 320,
		}}>
			Congratulations
			<br />
			<span style={{color: "#663399"}}>— you just made a Gatsby site! </span>
			<span role="img" aria-label="Party popper emojis">
			</span>
		</h1>

		<section>
			<h4 className="text-lg text-sgdark">API Exploration</h4>
			<p>What is passed to data?</p>
			<samp>
				<ul>
					{keys.map(key => <li key={key}>{typeof props[key]} <b>{key}</b> </li>)}
				</ul>
			</samp>
		</section>

		<p>
			Edit <code style={{
				color: "#8A6534",
				padding: 4,
				backgroundColor: "#FFF4DB",
				fontSize: "1.25rem",
				borderRadius: 4,
				}}>src/pages/index.js</code> to see this page
			update in real-time.{" "}
		</p>
		<aside>
			<ul>
			{props.data.allWpPost.nodes.map((node) => (
				<li key={node.slug}>
					<Link to={'/posts/'+node.slug}>
						{node.title}
					</Link>
				</li>
			))}
			</ul>
		</aside>
	</ShinyGreyLayout>);
}
