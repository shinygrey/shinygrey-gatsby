import * as React from "react";
import { Link } from "gatsby";

import ShinyGreyLayout from '../components/Layout';

export default function NotFoundPage() {
	return (<ShinyGreyLayout>
		<h1 >Page not found</h1>
		<p>
			<Link to="/">Go home</Link>
		</p>
	</ShinyGreyLayout>);
}
