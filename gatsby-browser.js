//import "./src/styles/style-main1.css";
//import "./src/styles/style-nav1.css";
import "./src/styles/bootstrap.min.css";
import './src/styles/global.css';

export const onClientEntry = () => {
	window.onload = () => {
		addScript('./browser.js');
	}
}

function addScript(url) {
	const script = document.createElement("script");
	script.src = url;
	script.async = true;
	document.body.appendChild(script);
}
