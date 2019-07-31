require("dotenv").config();
  var keys = require("./keys.js");

var input = process.argv[2];
var artist = process.argv.slice(3).join(' ');

switch (input) {
    case "concert-this":
      searchconcert();
      break;
    
    case "spotify-this-song":
      searchspotify();
      break;
    
    case "movie-this":
      searchmovies();
      break;
    
    case "do-what-it-says":
      whatitdo();
      break;
    }
    
    function searchconcert() {
        var URL = "https://rest.bandsintown.com/artists/" + artist + "/events?app_id=codingbootcamp";
        axios.get(URL).then(function(response){
            console.log(response);

        });
    
        // Break down all the numbers inside
        data = data.split(", ");
        var result = 0;
    
        // Loop through those numbers and add them together to get a sum.
        for (var i = 0; i < data.length; i++) {
          if (parseFloat(data[i])) {
            result += parseFloat(data[i]);
          }
        }
    
        // We will then print the final balance rounded to two decimal places.
        console.log("You have a total of " + result.toFixed(2));
      });
    }
