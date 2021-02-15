import React, { Fragment, useState } from "react";
import Header from "./Header"; // eslint-disable-line no-unused-vars
import Footer from "./Footer"; // eslint-disable-line no-unused-vars

import FooterMenusWidgets from "./FooterMenusWidgets";
import MenuModal from "./MenuModal";

const backdropClasses = " backdrop";

export default function ShinyGreyLayout({ children, bodyClass, menu, title }) {
	const [backdropActive, setBackdropActive] = useState(false);

	const toggleBackdrop = (e, active) => {
		e.preventDefault();
		setBackdropActive(active);
	}

	return(<Fragment>
		{(!title ? <Fragment /> : <title>Shiny Grey | {title}</title>)}
		<div
			id={"GatsbyBody"}
			className={
				(!bodyClass ? '' : bodyClass) +
				" sgt-w-10/12 sm:sgt-w-9/12 md:sgt-w-8/12 sgt-mx-auto sgt-my-5 showing-menu-modal showing-modal" +
				(backdropActive ? backdropClasses : "")
			}
		>
			<Header toggleBackdrop={toggleBackdrop} menu={menu} />

			<MenuModal isActive={backdropActive} toggleBackdrop={toggleBackdrop} />

			<main id="site-content" role="main">
				{children}
			</main>

			<FooterMenusWidgets />

			<Footer />
		</div>
	</Fragment>);
}
