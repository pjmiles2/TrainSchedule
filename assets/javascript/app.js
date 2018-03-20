  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAkpeBPqjL2PbJqviH9qI2CImJJXwdwO4c",
    authDomain: "train-scheduler-bb939.firebaseapp.com",
    databaseURL: "https://train-scheduler-bb939.firebaseio.com",
    projectId: "train-scheduler-bb939",
    storageBucket: "train-scheduler-bb939.appspot.com",
    messagingSenderId: "858772338657"
  };
  firebase.initializeApp(config);  
 

  var database = firebase.database();


  $("#add-train").on("click", function(event) {

   var name = $("#name-input").val().trim();
   var destination =  $("#destination-input").val().trim();
   var time = $("#time-input").val().trim();
   var frequency = $("#frequency-input").val().trim();

  var newTrain = {

    name : name,
    destination : destination,
    time : time,
    frequency : frequency,
    dateAdded: firebase.database.ServerValue.TIMESTAMP

  };

  database.ref().push(newTrain);
  
  console.log(newTrain.name);


  $("#name-input").val("");
  $("#destination-input").val("");
  $("#time-input").val("");
  $("#frequency-input").val("");

});

database.ref().on("child_added", function(snapshot, prevChildKey) {


var newName = snapshot.val().name;
var newDest = snapshot.val().destination;
var time = snapshot.val().time;
var frequency = snapshot.val().frequency;

console.log(newName);
console.log(newDest);
console.log(time);
console.log(frequency);

var tFrequency = frequency;
var firstTime = newTime;

var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
console.log(firstTimeConverted);

var currentTime = moment();
console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));

var diffTime = moment().diff(moment(firstTimeConverted), "minutes");
console.log("DIFFERENCE IN TIME: " + diffTime);

tRemainder = diffTime % tFrequency;
console.log(tRemainder);

var tMinutesTillTrain = tFrequency - tRemainder;
console.log("MINUTES TILL TRAIN: " + tMinutesTillTrain);

var nextTrain = moment().add(tMinutesTillTrain, "minutes");
console.log("ARRIVAL TIME: " + moment(nextTrain).format("hh:mm"))

$("#trains > tbody").append("<tr><td>" + newName + "</td><td>" + newDest + "</td><td>" +
frequency + "</td><td>" + moment(nextTrain).format("hh:mm") + "</td><td>" + tMinutesTillTrain + "</td><td>");

});