const switcher = document.getElementById('switch'); 

function enableDarkMode() {
	document.body.classList.add('darkmode');
	localStorage.setItem('darkmode', 'enabled');
	
	// Dispatch event to notify other scripts
	window.dispatchEvent(new Event('darkmode-change'));
}

function disableDarkMode() {
	document.body.classList.remove('darkmode');
	localStorage.setItem('darkmode', 'disabled');
	
	// Dispatch event to notify other scripts
	window.dispatchEvent(new Event('darkmode-change'));
}

function pageReloadCheck() {
	if (localStorage.getItem('darkmode') === 'enabled') {
		enableDarkMode();
	} else {
		disableDarkMode();
	}
}

window.addEventListener('pageshow', pageReloadCheck);

if (localStorage.getItem('darkmode') === 'enabled') {
	enableDarkMode();
}

switcher.addEventListener('click', () => {
	if (localStorage.getItem('darkmode') !== 'enabled') {
		enableDarkMode();
	} else {
		disableDarkMode();
	}
});
