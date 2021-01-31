import React, { Fragment } from "react"
import { Link } from "gatsby";

export default function Header(props) {
	return(<Fragment>
		<NavMenu menu={props.menu} />
	</Fragment>);
}

function NavMenu({menu}) {
	const menuItems = (!menu ? [] : menu.filter(item => item.path !== "/"));
	return(<nav id="navbartop" className="sgt-flex-nowrap nav col fixed-top sgt-pr-0">
		<Link className="nav-link" to="/">
			<svg className="home" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path></svg>
		</Link>

		{menuItems.map(item => {
			return(<Link to={item.path} key={item.id} className="nav-link d-none d-md-block"><span className="align-middle">{item.label}</span></Link>);
		})}

		<button id="navToggleButton" className="sgt-cursor-pointer nav-link d-sm-block d-md-none ml-auto">
			{/*outer a id="navToggleLink" inner div id="navToggleButton" className="">*/}
			<span id="navAnimatedButtonTop"></span>
			<span id="navAnimatedButtonMiddle"></span>
			<span id="navAnimatedButtonBottom"></span>
		</button>
	</nav>);
}

// eslint-disable-next-line
function NewNavMenu({menu}) { 
	const menuItems = (!menu ? [] : menu.filter(item => item.path !== "/"));
	return(<Fragment>
		<nav id="navbartop" className="">{/* nav col fixed-top pr-0    sgt-text-sglight sgt-bg-gradient-to-br sgt-from-sgdark sgt-to-black */}
			<ul className="sgt-list-none sgt-flex">
				<li className="sgt-align-middle sgt-py-5">
					<Link to='/'>
						<svg xmlns="http://www.w3.org/2000/svg" height="2.5em" viewBox="0 0 24 24" width="2.5em"><path d="M0 0h24v24H0z" fill="none" /><path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" /></svg>
					</Link>
				</li>
				{menuItems.map(item => {
					return <li key={item.id} className="">  {/* sgt-py-5 sgt-px-3 */}
						<Link to={item.path}>
							<span className="">{item.label}</span>  {/* sgt-align-middle sgt-text-2xl sgt-text-shadow */}
						</Link>
					</li>
				})}
			</ul>
		</nav>
	</Fragment>);
}

/*

<nav id="navbartop" class="nav col fixed-top pr-0" style="flex-wrap: nowrap;">
	<a class="nav-link" href="/"><svg class="svg-inline--fa fa-home fa-w-18 fa-2x" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512" data-fa-i2svg=""><path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path></svg><!-- <i class="fas fa-home fa-2x"></i> --></a>
	<a href="/cad" class="nav-link d-none d-md-block"><span class="align-middle">CAD</span></a>
	<a href="/code" class="nav-link d-none d-md-block"><span class="align-middle">Code</span></a>
	<a href="/blog" class="nav-link d-none d-md-block"><span class="align-middle">Blog</span></a>
	<a id="navToggleLink" class="nav-link d-sm-block d-md-none ml-auto" style="cursor: pointer;">
		<div id="navToggleButton" class="">
		<span id="navAnimatedButtonTop"></span>
		<span id="navAnimatedButtonMiddle"></span>
		<span id="navAnimatedButtonBottom"></span>
		</div>
	</a>
</nav>


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
	 */
