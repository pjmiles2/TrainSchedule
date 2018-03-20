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

  var firstTimeConverted = moment(firstTime, "HH:mm").subtract(1, "years");
  console.log(firstTimeConverted);


  var currentTime = moment();
  console.log("CURRENT TIME: " + moment(currentTime).format("hh:mm"));



  database.ref().on("child_added", function(childSnapshot, prevChildKey) {

    console.log(childSnapshot.val());



  });