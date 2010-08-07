// ==UserScript==
// @name           TWITTER ZOMBIES
// @namespace      yo
// @description    Make a lot of friends
// @include        *
// ==/UserScript==


// ************ Detect Zombie Archive URL ***************
//*******************************************************
var aUrl = window.location.href;
var aPosition = aUrl.indexOf("http://twitter.com/autofollowbacks/following");
var bPosition = aUrl.indexOf("https://twitter.com/autofollowbacks/following");
var cPosition = aUrl.indexOf("https://twitter.com/fffffat/following");
var dPosition = aUrl.indexOf("https://twitter.com/fffffat/following");

// indexOf will return -1 if the string doesn't exist
// if anything matches, inject our scripts
// NOTE added a generic /following URL for testing
// TODO only use the regex.match() style and a list of valid usernames...
if(aPosition == !(-1) || bPosition == !(-1) || aUrl.match(/\/following/)) {

	// ************ Load up zombie code, so it's part of the DOM ***************
	//**************************************************************************
	// Workaround for javascript security model. (read more: GM Unsafewindow)
	// Injecting script from Chrome URL
	
	var tz_script = document.createElement('script');
	tz_script.src = 'chrome://twitterzombies/content/tz_code.js';
	tz_script.type = 'text/javascript';
	document.getElementsByTagName('head')[0].appendChild(tz_script);

};




