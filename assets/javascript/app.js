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

    $("#name-input").val().trim();
    $("#destination-input").val().trim();
    $("#time-input").val().trim();
    $("#frequency-input").val().trim();

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




