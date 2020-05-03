var home = {
	databaseURL: "https://lunar-home.firebaseio.com/",
};
firebase.initializeApp(home);
var homedatabase = firebase.database();
//Event
var event = homedatabase.ref('stwl/next-event');
event.on('value', (function(snapshot) {
	var eventVal = snapshot.val();
	if(eventVal){
		var inside = "";
		document.getElementById('home-child').innerHTML += "<p>stwl/next-event:&nbsp; "+eventVal+"</p>";
	}
	if(!eventVal){
		document.getElementById('home-child').innerHTML += "<p>stwl/next-event:&nbsp; <mark>False</mark></p>";
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
		document.getElementById('home-child').innerHTML += "<p>stwl/book:&nbsp; <mark>False</mark></p>";
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
		document.getElementById('home-child').innerHTML += "<p>lunar/location:&nbsp; <mark>False</mark></p>";
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
		document.getElementById('home-child').innerHTML += "<p>mastodon/toot:&nbsp; <mark>False</mark></p>";
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
		document.getElementById('home-child').innerHTML += "<p>music-embed/id:&nbsp; <mark>False</mark></p>";
	}
}));
//Post-Message
var message = homedatabase.ref('post-message/html');
message.on('value', (function(snapshot) {
	var messageVal = snapshot.val();
	if(messageVal){
		document.getElementById('home-child').innerHTML += "<p>post-message/html:&nbsp; "+messageVal+"</p>";
	}
	if(!messageVal){
		document.getElementById('home-child').innerHTML += "<p>post-message/html:&nbsp; <mark>False</mark></p>";
	}
}));
