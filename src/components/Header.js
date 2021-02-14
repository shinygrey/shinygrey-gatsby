import React, { Fragment } from "react";
import { Link } from "gatsby";

export default function Header(props) {
	return(<Fragment>
		<NavMenu menu={props.menu} />
	</Fragment>);
}

function NavMenu({menu}) {
	const menuItems = (!menu ? [] : menu.filter(item => item.path !== "/"));
	return(<nav id="nav-bar-main" className="sgt-flex-nowrap nav col fixed-top sgt-pr-0">
		<ul className="sgt-list-none sgt-pl-0 md:sgt-mt-0 sgt-flex sgt-flex-col md:sgt-flex-row sgt-w-11/12 md:sgt-w-auto">
			<li>
				<Link className="sgt-block sgc-nav-link sgt-py-2 sgt-px-4" to="/">
					<svg
						version="1.1"
						xmlns="http://www.w3.org/2000/svg"
						xmlnsXlink="http://www.w3.org/1999/xlink"
						height="44"
						className="home"
						role="img"
						viewBox="0 0 576 512">
						<path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z"></path>
					</svg>
				</Link>
			</li>

		{menuItems.map(item => {
			return(<li key={item.id} className="sgt-hidden md:sgt-block sgt-w-full">
				<Link to={item.path} className="sgt-block sgt-py-2 sgt-px-4 sgc-nav-link "><span className="align-middle sgt-transition-opacity sgt-opacity-0 sgt-duration-500 sgt-ease">{item.label}</span></Link>
			</li>);
		})}
		</ul>
		<button className="hover:sgt-text-sgdark hover:sgt-bg-white sgt-text-sglight shinygrey-nav-toggle sgt-border-none sgt-bg-opacity-100 sgt-cursor-pointer sgc-nav-link ml-auto sgt-block md:sgt-hidden">
			<span></span>
			<span></span>
			<span></span>
		</button>
	</nav>);
}
