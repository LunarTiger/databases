var productions = {
	databaseURL: "https://vr-productions-fce36.firebaseio.com/",
};
firebase.initializeApp(productions);
var productionsdatabase = firebase.database();
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
		document.getElementById('productions-child').innerHTML += "<p>the-hunt/id:&nbsp; "+huntVal+"</p>";
	}
	if(!huntVal){
		document.getElementById('productions-child').innerHTML += "<p>the-hunt/id:&nbsp; <mark>False</mark>.</p>";
	}
}));
