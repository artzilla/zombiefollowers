// ==UserScript==
// @name           TWITTER ZOMBIES
// @namespace      yo
// @description    yoyo
// @include        *
// ==/UserScript==


// ************ Detect Zombie Archive URL ***************
//*******************************************************
var aUrl = window.location.href; // Get URL
var aPosition = aUrl.indexOf("http://twitter.com/autofollowbacks/following"); // one line for every URL
var bPosition = aUrl.indexOf("https://twitter.com/autofollowbacks/following");
var cPosition = aUrl.indexOf("https://twitter.com/autofollowbots/following");
var dPosition = aUrl.indexOf("https://twitter.com/autofollowbots/following");
//alert(aPosition);

// indexOf will return -1 if the string doesn't excist
// if one or the other excists, inject script
if(aPosition == !(-1) || bPosition == !(-1) || cPosition == !(-1) || dPosition == !(-1)) {
	//alert("you've found an archive!");

	// ************ Load up zombie code, so it's part of the DOM ***************
	//**************************************************************************
	// Workaround for javascript security model. (read more: GM Unsafewindow)
	// Injecting script from Chrome URL
	
	var tz_script = document.createElement('script');
	tz_script.src = 'chrome://twitterzombies/content/tz_code.js';
	tz_script.type = 'text/javascript';
	document.getElementsByTagName('head')[0].appendChild(tz_script);

};




