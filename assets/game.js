var config = {
    apiKey: "AIzaSyA9HxQts1eRbFeP76147sH6ZAi9uyPIBw4",
    authDomain: "sample-95e09.firebaseapp.com",
    databaseURL: "https://sample-95e09.firebaseio.com",
    projectId: "sample-95e09",
    storageBucket: "sample-95e09.appspot.com",
    messagingSenderId: "739157600074"
  };
firebase.initializeApp(config);

var database = firebase.database();

$("#addPlayer").click(function(event) {
    //prevent default
    event.preventDefault();
    //assign players
    var playOne = $("#player1").attr("value");
    var playTwo = $("#player2").attr("value");
    var newPlayer = $("#newPlayer").val().trim();
    console.log(newPlayer);
    if (playOne === "false") {
        console.log("starting if statement");
        $("#player1").attr("value","true");
        $("#player1").text(newPlayer);
        console.log(newPlayer+" is player 1");
        database.ref().push({
            name: newPlayer,
            wins: 0,
            losses: 0
        });
        console.log(newPlayer+" pushed to firebase");
    } else if (playTwo === "false") {
        $("#player2").attr("value","true");
        $("#player2").text(newPlayer);
        $("#addPlayer").css("display","none");
        $("#newPlayer").css("display","none");
        console.log(newPlayer+" is player 2");
        database.ref().push({
            name: newPlayer,
            wins: 0,
            losses: 0
        });
        console.log(newPlayer+" pushed to firebase");
    }
});
$("#chatBtn").click(function() {
    console.log($("#chatbox").value);
});

