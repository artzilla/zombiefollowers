//this is the actual code, that gets injected into the webpage
//using Jquery, from the Twitter page

//to-do: store Zombie-Count in Cookie, and load it on every page load, and increase number. Would look dope for the screencast

// mock console.log() if no Firebug etc. 
if(!console || !console.log) {
     var console = new Array();
     console.log = function () {}
}

// Jquery Scrolling animation
$('html, body').animate({ scrollTop: document.height }, 7000); 

function alert() {}; //sometimes twitter spits 'em out.


function playSound() { // Mario Coin Sound for each page (would prefer for each Zombie)
	embed = document.createElement("embed");
	//embed.setAttribute("src", "chrome://twitterzombies/content/coin.mp3");
	embed.setAttribute("src", "http://tobi-x.com/files/coin.mp3");
	embed.setAttribute("hidden", true);
	embed.setAttribute("autostart", true);
	embed.setAttribute("loop", 20); // 20x repeat doesnt work. not coool
	document.body.appendChild(embed);
}

console.log("Follower Archive detected, launching the Zombie Script");
var count = 0;
var sound_check = 0;

$(".follow-action").each(function(index, element)
{
     console.log(index);
     var width = $(element).css("width");
     console.log(width);
     
    
     if(width != "0px") 
     {
          console.log("Button visible. Go follow!");
          console.log($(element).children("button[href='/friendships/create/']").click());
         count += 1;
				sound_check = 1;
     }
     else
     {
          console.log("Already following this one")
     }
});
if (sound_check == 1) {
	playSound();
	console.log("sound");
}

console.log(count + " new Zombies");


// div overlay start 
//div_popupCode = '<div><h1 style="font-size:50px; background:white;">Zombie Count: '+ count +'</h1></div>';
div_popupCode = '<div><h1 style="font-size:50px; background:white;">Cashing in Zombies...</h1></div>';

var div_popup;
div_popup = document.createElement('div');
div_popup.innerHTML = div_popupCode;  //div_popupCode is a string of HTML
div_popup.setAttribute("style","position:fixed;z-index:1105;top:5px;right:5px;");
document.getElementsByTagName("body")[0].appendChild(div_popup);
// div overlay stuff end


function nextpage() {
     console.log("Going to the NEXT PAGE");
     window.location=$('.section_links[rel~=next]').attr('href');
	
}

window.setTimeout("nextpage()", 7000); 
// Dirty. would be better to wait till all requests are done. 7 seconds get about 95% though if Twitter is fine.
