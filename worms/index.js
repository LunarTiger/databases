var worms = {
	databaseURL: "https://worms-68137.firebaseio.com/",
};
firebase.initializeApp(worms);
var wormsdatabase = firebase.database();
//ID
var id = wormsdatabase.ref('id');
id.on('value', (function(snapshot) {
	var idVal = snapshot.val();
	if(idVal){
		document.getElementById('worms-child').innerHTML += "<p>id:&nbsp; "+idVal+"</p>";
	}
	if(!idVal){
		document.getElementById('worms-child').innerHTML += "<p>id:&nbsp; <mark>False</mark></p>";
	}
}));
//State
var state = wormsdatabase.ref('state');
state.on('value', (function(snapshot) {
	var stateVal = snapshot.val();
	if(stateVal){
		document.getElementById('worms-child').innerHTML += "<p>state:&nbsp; "+stateVal+"</p>";
	}
	if(!stateVal){
		document.getElementById('worms-child').innerHTML += "<p>state:&nbsp; <mark>False</mark></p>";
	}
}));
