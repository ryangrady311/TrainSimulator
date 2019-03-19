

 

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCEvJgZje8hclPv-RmHVJaIa2zNVybPfs0",
    authDomain: "trainsimulator-bff16.firebaseapp.com",
    databaseURL: "https://trainsimulator-bff16.firebaseio.com",
    projectId: "trainsimulator-bff16",
    storageBucket: "trainsimulator-bff16.appspot.com",
    messagingSenderId: "225142923908"
  };

  
  firebase.initializeApp(config);
  
  var database = firebase.database();
  
  // 2. Button for adding Employees
  $("#train-submit-btn").on("click", function(event) {
    

  
    // Grabs user input
    var trainName = $("#trainName").val().trim();
    var trainDestination = $("#destination").val().trim();
    var firstTrainTime = $("#trainStartTime").val().trim();
    var trainFrequency = $("#trainFrequency").val().trim();
  

    console.log(trainName);
    console.log(trainDestination);
    console.log(firstTrainTime);
    console.log(trainFrequency);

    // Creates local "temporary" object for holding employee data
    var newTrain = {
      name: trainName,
      destination: trainDestination,
      startTime: firstTrainTime,
      frequency: trainFrequency
    };
  
    // Uploads employee data to the database
    database.ref().push(newTrain);
  
    // Logs everything to console
    console.log(newTrain.name);
    console.log(newTrain.destination);
    console.log(newTrain.startTime);
    console.log(newTrain.frequency);
  
    alert("Train successfully added");
  
    // Clears all of the text-boxes
    $("#trainName").val("");
    $("#destination").val("");
    $("#trainStartTime").val("");
    $("#trainFrequency").val("");
  });
  
//   // 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
  database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());
  
    // Store everything into a variable.
    var trainName = childSnapshot.val().name;
    var trainDestination = childSnapshot.val().destination;
    var firstTrainTime = childSnapshot.val().startTime;
    var trainFrequency = childSnapshot.val().frequency;
  
//     // Employee Info
    console.log(trainName);
    console.log(trainDestination);
    console.log(firstTrainTime);
    console.log(trainFrequency);
  
//     // Prettify the employee start
    
  
//     // Calculate the months worked using hardcore math
//     // To calculate the months worked
  
  
  
//     // Calculate the total billed rate
  
  
//     // Create the new row
    var newRow = $("<tr>").append(
      $("<td>").text(trainName),
      $("<td>").text(trainDestination),
      $("<td>").text(trainFrequency),
      $("<td>").text(""),
      $("<td>").text("")
    );
  
//     // Append the new row to the table
    $("#employee-table > tbody").append(newRow);
  });
  
//   // Example Time Math
//   // -----------------------------------------------------------------------------
//   // Assume Employee start date of January 1, 2015
//   // Assume current date is March 1, 2016
  
//   // We know that this is 15 months.
//   // Now we will create code in moment.js to confirm that any attempt we use meets this test case
  