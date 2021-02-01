import React from "react";

export default function Footer() {
	return(<footer className="container-fluid text-center sgt-mt-5">
		<div>
			<button
				className="sgt-cursor-pointer sgt-text-black"
				data-toggle="popover"
				data-placement="top"
				title=""
				data-content="public@shinygrey.com"
				data-original-title="Email me"
			>
				<div
					className="sgt-hidden sgt-absolute sgt-top-0 sgt-left-0 sgt-transform sgt-translate-x-287 sgt-translate-y-532 popover fade bs-popover-top show"
					role="tooltip"
					id="popover857660"
					x-placement="top"
				>
					<div className="arrow sgt-left-72"></div>
					<h3 className="popover-header">Email me</h3>
					<div className="popover-body">public@shinygrey.com</div>
				</div>

				<svg height="2em" className="svg-inline--fa fa-envelope fa-w-16 fa-fw fa-2x" aria-hidden="true" focusable="false" data-prefix="far" data-icon="envelope" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512" data-fa-i2svg=""><path fill="currentColor" d="M464 64H48C21.49 64 0 85.49 0 112v288c0 26.51 21.49 48 48 48h416c26.51 0 48-21.49 48-48V112c0-26.51-21.49-48-48-48zm0 48v40.805c-22.422 18.259-58.168 46.651-134.587 106.49-16.841 13.247-50.201 45.072-73.413 44.701-23.208.375-56.579-31.459-73.413-44.701C106.18 199.465 70.425 171.067 48 152.805V112h416zM48 400V214.398c22.914 18.251 55.409 43.862 104.938 82.646 21.857 17.205 60.134 55.186 103.062 54.955 42.717.231 80.509-37.199 103.053-54.947 49.528-38.783 82.032-64.401 104.947-82.653V400H48z"></path></svg>
			</button>
			<span>&nbsp;|&nbsp;</span>
			<a
				href="skype:live:greg_15187"
				title="Contact me using Skype"
				data-content="Contact me using Skype"
			>
				<svg height="2em" className="svg-inline--fa fa-skype fa-w-14 fa-fw fa-2x" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="skype" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M424.7 299.8c2.9-14 4.7-28.9 4.7-43.8 0-113.5-91.9-205.3-205.3-205.3-14.9 0-29.7 1.7-43.8 4.7C161.3 40.7 137.7 32 112 32 50.2 32 0 82.2 0 144c0 25.7 8.7 49.3 23.3 68.2-2.9 14-4.7 28.9-4.7 43.8 0 113.5 91.9 205.3 205.3 205.3 14.9 0 29.7-1.7 43.8-4.7 19 14.6 42.6 23.3 68.2 23.3 61.8 0 112-50.2 112-112 .1-25.6-8.6-49.2-23.2-68.1zm-194.6 91.5c-65.6 0-120.5-29.2-120.5-65 0-16 9-30.6 29.5-30.6 31.2 0 34.1 44.9 88.1 44.9 25.7 0 42.3-11.4 42.3-26.3 0-18.7-16-21.6-42-28-62.5-15.4-117.8-22-117.8-87.2 0-59.2 58.6-81.1 109.1-81.1 55.1 0 110.8 21.9 110.8 55.4 0 16.9-11.4 31.8-30.3 31.8-28.3 0-29.2-33.5-75-33.5-25.7 0-42 7-42 22.5 0 19.8 20.8 21.8 69.1 33 41.4 9.3 90.7 26.8 90.7 77.6 0 59.1-57.1 86.5-112 86.5z"></path></svg>
			</a>
			<span>&nbsp;|&nbsp;</span>
			<a href="https://wa.me/447842763915"><svg height="2em" className="svg-inline--fa fa-whatsapp fa-w-14 fa-fw fa-2x" title="Contact me using WhatsApp" data-content="Contact me using WhatsApp" aria-labelledby="svg-inline--fa-title-4OjU9cCgbep6" data-prefix="fab" data-icon="whatsapp" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><title id="svg-inline--fa-title-4OjU9cCgbep6">Contact me using WhatsApp</title><path fill="currentColor" d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L0 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"></path></svg></a>
			<span>&nbsp;|&nbsp;</span>
			<a href="https://m.me/shinygreyltd" title="Contact me using Facebook messenger">
				<svg height="2em" className="svg-inline--fa fa-facebook-messenger fa-w-14 fa-fw fa-2x" aria-hidden="true" focusable="false" data-prefix="fab" data-icon="facebook-messenger" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg=""><path fill="currentColor" d="M224 32C15.9 32-77.5 278 84.6 400.6V480l75.7-42c142.2 39.8 285.4-59.9 285.4-198.7C445.8 124.8 346.5 32 224 32zm23.4 278.1L190 250.5 79.6 311.6l121.1-128.5 57.4 59.6 110.4-61.1-121.1 128.5z"></path></svg>
			</a>
			<br />
			&copy; Shiny Grey Ltd 2019 | <a className="" href="/privacypolicy">Privacy Policy</a><br />
			<span className="d-sm-none">&middot;</span>
			<span className="d-none d-sm-inline d-md-none">&middot;&middot;</span>
			<span className="d-none d-md-inline d-lg-none">&middot;&middot;&middot;</span>
			<span className="d-none d-lg-inline d-xl-none">&middot;&middot;&middot;&middot;</span>
			<span className="d-none d-xl-inline">&middot;&middot;&middot;&middot;&middot;</span>
			<small>Registered in England.</small>  Company number 11318007
			<span className="d-sm-none">&middot;</span>
			<span className="d-none d-sm-inline d-md-none">&middot;&middot;</span>
			<span className="d-none d-md-inline d-lg-none">&middot;&middot;&middot;</span>
			<span className="d-none d-lg-inline d-xl-none">&middot;&middot;&middot;&middot;</span>
			<span className="d-none d-xl-inline">&middot;&middot;&middot;&middot;&middot;</span>
		</div>
	</footer>);
}
