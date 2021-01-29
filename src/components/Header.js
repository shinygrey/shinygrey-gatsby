import React, { Fragment } from "react"

export default function Header() {
	return(<NavMenu />);
}

function NavMenu() {
	return(<Fragment>
	<nav id="navbartop" className="nav col fixed-top pr-0" style={{flexWrap: "nowrap"}}>
		<a className="nav-link" href="/">
			<svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24">
				<path d="M0 0h24v24H0z" fill="none" />
				<path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
			</svg>
		</a>
		<a href="/cad" className="nav-link d-none d-md-block">
			<span className="align-middle">CAD</span>
		</a>
		<a href="/code" className="nav-link d-none d-md-block">
			<span className="align-middle">Code</span>
		</a>
		<a href="/blog" className="nav-link d-none d-md-block">
			<span className="align-middle">Blog</span>
		</a>
		<button id="navToggleLink" className="nav-link d-sm-block d-md-none ml-auto" style={{cursor: "pointer"}}>
			<div id="navToggleButton" className="">
			<span id="navAnimatedButtonTop"></span>
			<span id="navAnimatedButtonMiddle"></span>
			<span id="navAnimatedButtonBottom"></span>
			</div>
		</button>
	</nav>
	<nav id="navoffcanvas" className="nav pt-3">
		<a href="/CAD" className="nav-link pl-5"><span className="align-middle">CAD</span></a>
		<a href="/code" className="nav-link pl-5"><span className="align-middle">Code</span></a>
		<a href="/blog" className="nav-link pl-5"><span className="align-middle">Blog</span></a>
	</nav>
	</Fragment>);
}
