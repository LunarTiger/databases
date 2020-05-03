var home = {
	databaseURL: "https://lunar-home.firebaseio.com/",
};
homefirebase.initializeApp(home);
var homedatabase = homefirebase.database();
//Event
var event = homedatabase.ref('stwl/next-event');
event.on('value', (function(snapshot) {
	var eventVal = snapshot.val();
	if(eventVal){
		var inside = "";
		document.getElementById('home-child').innerHTML += "<p>stwl/next-event:&nbsp; "+eventVal+"</p>";
	}
	if(!eventVal){
		document.getElementById('home-child').innerHTML += "<p>stwl/next-event:&nbsp; <mark>False</mark>.</p>";
	}
}));
//Book
var book = homedatabase.ref('stwl/book');
book.on('value', (function(snapshot) {
	var bookVal = snapshot.val();
	if(bookVal){
		document.getElementById('home-child').innerHTML += "<p>stwl/book:&nbsp; "+bookVal+"</p>";
	}
	if(!bookVal){
		document.getElementById('home-child').innerHTML += "<p>stwl/book:&nbsp; <mark>False</mark>.</p>";
	}
}));
//Location
var loc = homedatabase.ref('lunar/location');
loc.on('value', (function(snapshot) {
	var locVal = snapshot.val();
	if(locVal){
		document.getElementById('home-child').innerHTML += "<p>lunar/location:&nbsp; "+locVal+"</p>";
	}
	if(!locVal){
		document.getElementById('home-child').innerHTML += "<p>lunar/location:&nbsp; <mark>False</mark>.</p>";
	}
}));
//Toot
var toot = homedatabase.ref('mastodon/toot');
toot.on('value', (function(snapshot) {
	var tootVal = snapshot.val();
	if(tootVal){
		document.getElementById('home-child').innerHTML += "<p>mastodon/toot:&nbsp; "+tootVal+"</p>";
	}
	if(!tootVal){
		document.getElementById('home-child').innerHTML += "<p>mastodon/toot:&nbsp; <mark>False</mark>.</p>";
	}
}));
//Music
var id = homedatabase.ref('music-embed/id');
id.on('value', (function(snapshot) {
	var idVal = snapshot.val();
	if(idVal){
		document.getElementById('home-child').innerHTML += "<p>music-embed/id:&nbsp; "+idVal+"</p>";
	}
	if(!idVal){
		document.getElementById('home-child').innerHTML += "<p>music-embed/id:&nbsp; <mark>False</mark>.</p>";
	}
}));
//Post-Message
var message = homedatabase.ref('post-message/html');
message.on('value', (function(snapshot) {
	var messageVal = snapshot.val();
	if(messageVal){
		document.getElementById('home-child').innerHTML += "<p>post-message/html:&nbsp; "+idVal+"</p>";
	}
	if(!messageVal){
		document.getElementById('home-child').innerHTML += "<p>post-message/html:&nbsp; <mark>False</mark>.</p>";
	}
}));
///////////////////////////////////////////////////////////////
var productions = {
	databaseURL: "https://vr-productions-fce36.firebaseio.com/",
};
productionsfirebase.initializeApp(productions);
var productionsdatabase = productionsfirebase.database();
//Rooftop Video
var rooftop = productionsdatabase.ref('the-rooftop/id');
rooftop.on('value', (function(snapshot) {
	var rooftopVal = snapshot.val();
	if(rooftopVal){
		var inside = "";
		document.getElementById('productions-child').innerHTML += "<p>the-rooftop/id:&nbsp; "+rooftopVal+"</p>";
	}
	if(!rooftopVal){
		document.getElementById('productions-child').innerHTML += "<p>the-rooftop/id:&nbsp; <mark>False</mark>.</p>";
	}
}));
//Open Mic Night Video
var omn = productionsdatabase.ref('open-mic/id');
omn.on('value', (function(snapshot) {
	var omnVal = snapshot.val();
	if(omnVal){
		var inside = "";
		document.getElementById('productions-child').innerHTML += "<p>open-mic/id:&nbsp; "+omnVal+"</p>";
	}
	if(!omnVal){
		document.getElementById('productions-child').innerHTML += "<p>open-mic/id:&nbsp; <mark>False</mark>.</p>";
	}
}));
//The Hunt
var hunt = productionsdatabase.ref('the-hunt/id');
hunt.on('value', (function(snapshot) {
	var huntVal = snapshot.val();
	if(huntVal){
		var inside = "";
		document.getElementById('productions-child').innerHTML += "<p>the-hunt/id:&nbsp; "+huntVal+"</p>";
	}
	if(!huntVal){
		document.getElementById('productions-child').innerHTML += "<p>the-hunt/id:&nbsp; <mark>False</mark>.</p>";
	}
}));
///////////////////////////////////////////////////////////////
