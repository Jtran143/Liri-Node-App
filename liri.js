var request = require("request");
var fs = require("fs");
var keys = require("./keys.js");
var twitter = require("twitter");
var twit = new twitter(keys)
var spoitify = require("spotify");

var userInput = process.argv[2];
var userInput2 = process.argv[3];
//twitter logic

function receiveTweets() {

    twit.get(""); 
    function 

}

//I am going to get tutoring on this homework



//OMDB logic
var movie = process.argv[3];
var queryUrl = "http://www.omdbapi.com/?t=" + movieName + "&y=&plot=short&apikey=trilogy";
request("http://www.omdbapi.com/?i=tt3896198&apikey=d88263e1", function(error, response, body) {
    if (error) {
        console.log(error);
    }
});


//Spotify Logic
var song = process.argv;
spotify.search ({ type: "track", query: song}), function(err, data) {

}