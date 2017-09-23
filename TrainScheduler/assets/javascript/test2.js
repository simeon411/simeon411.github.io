var config = {
    apiKey: "AIzaSyCO_OxaNZZ6bXxlYxGpt3Px3vG5Mo6aJLo",
    authDomain: "train-scheduler-fe9e8.firebaseapp.com",
    databaseURL: "https://train-scheduler-fe9e8.firebaseio.com",
    projectId: "train-scheduler-fe9e8",
    storageBucket: "train-scheduler-fe9e8.appspot.com",
    messagingSenderId: "793190231850"
  };
  firebase.initializeApp(config);

// Assign the reference to the database to a variable named 'database'
var database = firebase.database();

var trainName = "";
var destination = "";
var firstTrain ="";
var freqMin ="";
var currentTime = moment();
// var timeNow = now.hour() + ":" + now.minutes();
$("#currentTime").append(moment(currentTime).format("hh:mm"));


$("#submit").on("click", function(event) {
	event.preventDefault();

	 trainName = $("#trainName").val().trim();
	 destination = $("#destination").val().trim();
	 firstTrain = $("#trainTime").val().trim();
	 freqMin = $("#freqMin").val().trim();

	 // code for handling push
	database.ref().push({
	 	trainName: trainName,
	 	destination: destination,
	 	firstTrain: firstTrain,
	 	freqMin: freqMin,
	 	dateAdded: firebase.database.ServerValue.TIMESTAMP
	});
});


database.ref().on("child_added", function PrintTrain(childSnapshot)	{

	var trainName = childSnapshot.val().trainName;
	var destination = childSnapshot.val().destination;
	var firstTrain = childSnapshot.val().firstTrain;
	var freqMin = childSnapshot.val().freqMin;
	var suffice = '';

	var firstTrainConverted = moment(firstTrain, "hh:mm").subtract(1, "years");

    // Difference between the times
    var diffTime = moment().diff(moment(firstTrainConverted), "minutes");
    // Time apart (remainder)
    var tRemainder = diffTime % freqMin;
    // Minute Until Train
    var minsAway = freqMin - tRemainder;
    // Next Train
    var nextArrival = moment().add(minsAway, "minutes");

    if (nextArrival.hour() < 12 ){
    	suffice = ("AM");
    }
    else {
    	suffice = ("PM");
    }

	$("#table-rows").append("<tr>" + "<td>" + trainName + "</td><td>" + destination + "</td><td>" + freqMin + "</td><td>" + moment(nextArrival).format("hh:mm") + " " + suffice + "</td><td>" + minsAway + "</td>" + "</tr>");
                                 
});




