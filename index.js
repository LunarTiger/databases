var homeConfig = {
	databaseURL: "https://lunar-home.firebaseio.com/",
};
var home = firebase.initializeApp(homeConfig, "home");
var homeDatabase = home.database();
//Event
var event = homeDatabase.ref('stwl/next-event');
event.on('value', (function(snapshot) {
	var eventVal = snapshot.val();
	if(eventVal){
		document.getElementById('home-child').innerHTML += "<p>stwl/next-event:&nbsp; "+eventVal+"</p>";
	}
	if(!eventVal){
		document.getElementById('home-child').innerHTML += "<p>stwl/next-event:&nbsp; <mark>False</mark></p>";
	}
}));
//Book
var book = homeDatabase.ref('stwl/book');
book.on('value', (function(snapshot) {
	var bookVal = snapshot.val();
	if(bookVal){
		document.getElementById('home-child').innerHTML += "<p>stwl/book:&nbsp; "+bookVal+"</p>";
	}
	if(!bookVal){
		document.getElementById('home-child').innerHTML += "<p>stwl/book:&nbsp; <mark>False</mark></p>";
	}
}));
//Location
var loc = homeDatabase.ref('lunar/location');
loc.on('value', (function(snapshot) {
	var locVal = snapshot.val();
	if(locVal){
		document.getElementById('home-child').innerHTML += "<p>lunar/location:&nbsp; "+locVal+"</p>";
	}
	if(!locVal){
		document.getElementById('home-child').innerHTML += "<p>lunar/location:&nbsp; <mark>False</mark></p>";
	}
}));
//Toot
var toot = homeDatabase.ref('mastodon/toot');
toot.on('value', (function(snapshot) {
	var tootVal = snapshot.val();
	if(tootVal){
		document.getElementById('home-child').innerHTML += "<p>mastodon/toot:&nbsp; "+tootVal+"</p>";
	}
	if(!tootVal){
		document.getElementById('home-child').innerHTML += "<p>mastodon/toot:&nbsp; <mark>False</mark></p>";
	}
}));
//Music
var id = homeDatabase.ref('music-embed/id');
id.on('value', (function(snapshot) {
	var idVal = snapshot.val();
	if(idVal){
		document.getElementById('home-child').innerHTML += "<p>music-embed/id:&nbsp; "+idVal+"</p>";
	}
	if(!idVal){
		document.getElementById('home-child').innerHTML += "<p>music-embed/id:&nbsp; <mark>False</mark></p>";
	}
}));
//Post-Message
var message = homeDatabase.ref('post-message/html');
message.on('value', (function(snapshot) {
	var messageVal = snapshot.val();
	if(messageVal){
		document.getElementById('home-child').innerHTML += "<p>post-message/html:&nbsp; "+messageVal+"</p>";
	}
	if(!messageVal){
		document.getElementById('home-child').innerHTML += "<p>post-message/html:&nbsp; <mark>False</mark></p>";
	}
}));
/////////////////////////////////////////////////////////////////
var productionsConfig = {
	databaseURL: "https://vr-productions-fce36.firebaseio.com/",
};
var productions = firebase.initializeApp(productionsConfig, "productions");
var productionsDatabase = productions.database();
//Rooftop Video
var rooftop = productionsDatabase.ref('the-rooftop/id');
rooftop.on('value', (function(snapshot) {
	var rooftopVal = snapshot.val();
	if(rooftopVal){
		document.getElementById('productions-child').innerHTML += "<p>the-rooftop/id:&nbsp; "+rooftopVal+"</p>";
	}
	if(!rooftopVal){
		document.getElementById('productions-child').innerHTML += "<p>the-rooftop/id:&nbsp; <mark>False</mark></p>";
	}
}));
//Open Mic Night Video
var omn = productionsDatabase.ref('open-mic/id');
omn.on('value', (function(snapshot) {
	var omnVal = snapshot.val();
	if(omnVal){
		document.getElementById('productions-child').innerHTML += "<p>open-mic/id:&nbsp; "+omnVal+"</p>";
	}
	if(!omnVal){
		document.getElementById('productions-child').innerHTML += "<p>open-mic/id:&nbsp; <mark>False</mark></p>";
	}
}));
//The Hunt
var hunt = productionsDatabase.ref('the-hunt/id');
hunt.on('value', (function(snapshot) {
	var huntVal = snapshot.val();
	if(huntVal){
		document.getElementById('productions-child').innerHTML += "<p>the-hunt/id:&nbsp; "+huntVal+"</p>";
	}
	if(!huntVal){
		document.getElementById('productions-child').innerHTML += "<p>the-hunt/id:&nbsp; <mark>False</mark></p>";
	}
}));
