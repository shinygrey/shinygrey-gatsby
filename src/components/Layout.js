import React, { useState } from "react";
import Header from "./Header"; // eslint-disable-line no-unused-vars
import Footer from "./Footer"; // eslint-disable-line no-unused-vars

import FooterMenusWidgets from "./FooterMenusWidgets";
import MenuModal from "./MenuModal";

const backdropClasses = " backdrop";

export default function ShinyGreyLayout({ children, bodyClass, menu }) {
	const [backdropActive, setBackdropActive] = useState(false);

	const toggleBackdrop = (e, active) => {
		e.preventDefault();
		setBackdropActive(active);
	}

	return(<div
			id={"GatsbyBody"}
			className={
				bodyClass +
				" showing-menu-modal showing-modal" +
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
	</div>);
}
