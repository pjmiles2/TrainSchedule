  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyBeaq33RTM-DtBo0o5nRAMK2al1xwWvPBU",
    authDomain: "train-schedule-f0a8c.firebaseapp.com",
    databaseURL: "https://train-schedule-f0a8c.firebaseio.com",
    projectId: "train-schedule-f0a8c",
    storageBucket: "train-schedule-f0a8c.appspot.com",
    messagingSenderId: "1040567222203"
  };
  firebase.initializeApp(config);


  var database = firebase.database();


  $("#add-train").on("click", function(event) {

    var name = $("#name-input").val().trim();
    console.log(name);
    var destination = $("#destination-input").val().trim();
    console.log(destination);
    var time = $("#time-input").val().trim();
    console.log(time);
    var frequency = $("#frequency-input").val().trim();
    console.log(frequency);

  });


  var newTrain = {

    name : name,
    destination : destination,
    time : time,
    frequency : frequency,

  };

  database.ref().on("child_added", function(childSnapshot, prevChildKey) {

    console.log(childSnapshot.val());

    var tName = childSnapshot.val().name;
 var tDestination = childSnapshot.val().destination;
 var tFrequency = childSnapshot.val().frequency;
 var tFirstTrain = childSnapshot.val().firstTrain;

 var timeArr = tFirstTrain.split(":");
 var trainTime = moment().hours(timeArr[0]).minutes(timeArr[1]);
 var maxMoment = moment.max(moment(), trainTime);
 var tMinutes;
 var tArrival;
 
 //If the first train is later than the current time, sent arrival to the first train time
 if (maxMoment === trainTime) {
   tArrival = trainTime.format("hh:mm A");
   tMinutes = trainTime.diff(moment(), "minutes");
 } else {

   // Calculate the minutes until arrival using hardcore math
   // To calculate the minutes till arrival, take the current time in unix subtract the FirstTrain time
   // and find the modulus between the difference and the frequency.
   var differenceTimes = moment().diff(trainTime, "minutes");
   var tRemainder = differenceTimes % tFrequency;
   tMinutes = tFrequency - tRemainder;
   // To calculate the arrival time, add the tMinutes to the currrent time
   tArrival = moment().add(tMinutes, "m").format("hh:mm A");
 }
   console.log("tMinutes:", tMinutes);
   console.log("tArrival:", tArrival);

   // Add each train's data into the table
   $("#train-table > tbody").append("<tr><td>" + tName + "</td><td>" + tDestination + "</td><td>" +
     tFrequency + "</td><td>" + tArrival + "</td><td>" + tMinutes + "</td></tr>");
 });


