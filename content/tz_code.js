//this is the actual code, that gets injected into the webpage
//using Jquery, from the Twitter page

// TODO 
// * store Zombie-Count in Cookie, and load it on every page load, and increase number. Would look dope for the screencast
// * go to next page when final change() trigger goes off instead of just waiting 7 seconds

// Mock console.log() if no Firebug
if(!console || !console.log) {
  var console = new Array();
  console.log = function () {};
}

// Jquery Scrolling animation
$('html, body').animate({ scrollTop: document.height }, 7000); 

function alert() {}; //sometimes twitter spits 'em out.

// Trigger Mario Coin Sound for each zombie
// TODO use local chrome:// file
function playSound() {
  embed = document.createElement("embed");
  //embed.setAttribute("src", "chrome://twitterzombies/content/coin.mp3");
  embed.setAttribute("src", "http://tobi-x.com/files/coin.mp3");
  embed.setAttribute("hidden", true);
  embed.setAttribute("autostart", true);
  document.body.appendChild(embed);
}

// Show some gif bling $$$$ -- also TODO use local chrome:// file
function flashCoins(element,count) {
    
  var coin_id = 'zombie_coin'+count;
  $(element).after('<img id="'+coin_id+'" src="http://zachd.com/mario/coin.gif" />');
  // cc-c-c-c-c-combo breakerrrrrrrr
  $(coin_id).fadeIn(100).animate({top:"-=20px"},100).animate({top:"+=20px"},100).animate({top:"-=20px"},100).animate({top:"+=20px"},100).animate({top:"-=20px"},100).animate({top:"+=20px"},100);
  
  // animate the viewport downwards instead of the main animation?
}


// Initialize
console.log("Follower Archive detected, launching the Zombie Script");
var count = 0;
var sound_check = 0;

// TODO show splash screen to click link to twitter if this is the first time
// use GM_set/getValue() to store state

// Show some info about what's going on
div_popupCode = '<div><h1 style="font-size:50px; background: white; padding: 8px 15px;">Cashing in zombies... <span id="count">0</span></h1></div>';
var div_popup = document.createElement('div');
div_popup.innerHTML = div_popupCode;  //div_popupCode is a string of HTML
div_popup.setAttribute("style","position:fixed;z-index:1105;top:5px;right:5px;");
document.getElementsByTagName("body")[0].appendChild(div_popup);

// Initiate followings
$(".follow-action").each(function(index, element) {

  // console.log(index);
  var width = $(element).css("width");
  // console.log(width);

  if(width != "0px") 
  {
    count += 1;

    // Stagger the actions (and responses)
    setTimeout(function(){
      console.log("Button visible. Go follow!");
      var button = $(element).children("button[href='/friendships/create/']");
      button.click();      
      
      playSound();
      flashCoins(element,count);      
      $("#count").html(count);      
    }, count*250);        
  }
  else
  {
      console.log("Already following this one");
  }
});

console.log(count + " new Zombies");


function nextpage() {
  console.log("Going to the NEXT PAGE");
  window.location=$('.section_links[rel~=next]').attr('href');  
}

window.setTimeout("nextpage()", 7000); 
// Dirty. would be better to wait till all requests are done. 7 seconds get about 95% though if Twitter is fine.
