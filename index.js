module.exports = function () {
	try {
		return /iphone/i.test(window.navigator.userAgent) && window.screen.height === 812;
	} catch(e) {
		return false;
	} 
}