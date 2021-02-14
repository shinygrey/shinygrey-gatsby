if(document.readyState !== 'loading'){
	onShinyGreyDocumentLoad();
}else{
	document.addEventListener('DOMContentLoaded', onShinyGreyDocumentLoad);
}

function onShinyGreyDocumentLoad() {

	var navToggleButton = document.querySelector('button.shinygrey-nav-toggle');
	var navBarMain = document.getElementById('nav-bar-main');

	navToggleButton.addEventListener('click',function() {
		navToggleButton.classList.toggle('active');
		navBarMain.classList.toggle('active');
	});
	window.addEventListener('resize', function() {
		navToggleButton.classList.remove('active');
		navBarMain.classList.remove('active');
	});

	var cookieComponent = document.getElementById('cookie-component');
	if(!!cookieComponent && cookieComponent.constructor.name === "HTMLDivElement"){
		var cookieIndex = getCookieIndex();
		if(!!cookieIndex && 'ShinyGreyCookieA' in cookieIndex){
			setMessageHasCookie(cookieComponent,cookieIndex['ShinyGreyCookieA']);
		}else{
			var cookieYes = document.getElementById('cookie-yes');
			cookieYes.addEventListener('click', function() {
				setShinyGreyCookieAndReload();
			});
			var cookieNo = document.getElementById('cookie-no');
			cookieNo.addEventListener('click', function() {
				setMessageSadFace(cookieComponent);
			});
		}
	}
}

function getCookieIndex() {
	var decodedCookieStore = decodeURIComponent(document.cookie);
	if(decodedCookieStore.length > 0){
		var cookies = decodedCookieStore.split(/;\s?/);
		return cookies.reduce((acc,cookie) => {
			var matches = /(.*?)=(.*)/.exec(cookie);
			acc[matches[1]] = matches[2];
			return acc;
		},{});
	}else{
		return null;
	}
}

function setMessageHasCookie(cookieComponent,rawCookie) {
	var cookie = /ts:(\d+)&c:(\d{1,2})&fa:(\d)/.exec(rawCookie);
	var date = new Date(parseInt(cookie[1],10));

	cookieComponent.textContent = '';
	var p = document.createElement('p');
	var t = document.createTextNode("Welcome back. Your browser tells me it's stored a Shiny Grey cookie. The cookie in your browser is this shape: " + cookie[2] + " " + cookie[3] + " and it was stored "+ date.toGMTString());
	p.appendChild(t);
	cookieComponent.appendChild(p);
}

function setMessageSadFace(cookieComponent) {
	cookieComponent.textContent = '';
	var img = document.createElement('img');
	img.src = './sadface.svg';
	cookieComponent.appendChild(img);
	console.log('sad face');
}

function setShinyGreyCookieAndReload() {
	var randomColour = Math.floor(Math.random() * (139 - 1));
	var randomShape = Math.floor(Math.random() * (9 - 1));
	document.cookie = 'ShinyGreyCookieA=ts:' + Date.now() + '&c:' + randomColour + '&fa:'+ randomShape +';domain=shinygrey.com;samesite=lax;max-age=3153600000 path=/;';
	window.location.reload();
}
