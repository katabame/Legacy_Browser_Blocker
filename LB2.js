var ua = navigator.userAgent.toLowerCase();
var ver = navigator.appVersion.toLowerCase();

// IE (except 11)
var isMSIE = (ua.indexOf('msie') > -1) && (ua.indexOf('opera') == -1);

// IE6
var isIE6 = isMSIE && (ver.indexOf('msie 6.') > -1);

// IE7
var isIE7 = isMSIE && (ver.indexOf('msie 7.') > -1);

// IE8
var isIE8 = isMSIE && (ver.indexOf('msie 8.') > -1);

// IE9
var isIE9 = isMSIE && (ver.indexOf('msie 9.') > -1);

// IE10
var isIE10 = isMSIE && (ver.indexOf('msie 10.') > -1);

// IE11
var isIE11 = (ua.indexOf('trident/7') > -1);

// IE
var isIE = isMSIE || isIE11;

// Edge
var isEdge = (ua.indexOf('edge') > -1);

// Google Chrome
var isChrome = (ua.indexOf('chrome') > -1) && (ua.indexOf('edge') == -1);

// Firefox
var isFirefox = (ua.indexOf('firefox') > -1);

// Safari
var isSafari = (ua.indexOf('safari') > -1) && (ua.indexOf('chrome') == -1);

// Opera
var isOpera = (ua.indexOf('opera') > -1);

// Document ready function
$(document).ready(function()
{
	document.getElementById("LB2_Blocked").style.display="none";

	if (isMSIE || isIE6 || isIE7 || isIE8 || isIE9 || isIE10 || isIE11 || isEdge)
	{
		document.getElementById("LB2_Passed").style.display="none";
		document.getElementById("LB2_Blocked").style.display="block";
	}
});