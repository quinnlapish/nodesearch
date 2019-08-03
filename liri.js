require("dotenv").config();
var keys = require("./keys.js");
var Spotify = require( 'node-spotify-api' );
var spotify = new Spotify( keys.spotify );

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

        })};
        //spotify//
    function searchspotify() {

    if (process.argv.length <4){
            artist = "The Sign";
    }
   
    spotify 
       .search({ type: 'track', query: artist })
       .then( function( response )
       {

        console.log(response.tracks.items[0].artists[0].name);
        console.log(response.tracks.items[0].name);
        console.log(response.tracks.items[0].preview_url);
        console.log(response.tracks.items[0].album.name);
       });

        }

        //movies//

        function searchmovies() {

            var axios = require("axios");

// Then run a request with axios to the OMDB API with the movie specified
axios.get("http://www.omdbapi.com/?t=" + artist +  "&apikey=trilogy").then(
  function(response) {
    //console.log("The movie's rating is: " + response.data.imdbRating);
    console.log("The movie's rating is: " + response.data[0]);
})
  .catch(function(error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.log("---------------Data---------------");
      console.log(error.response.data);
      console.log("---------------Status---------------");
      console.log(error.response.status);
      console.log("---------------Status---------------");
      console.log(error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      // `error.request` is an object that comes back with details pertaining to the error that occurred.
      console.log(error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", error.message);
    }
    console.log(error.config);
  });

        }

        //do-what-it-says//

        function whatitdo(){


        }

        
    
    //     // Break down all the numbers inside
    //     data = data.split(", ");
    //     var result = 0;
    
    //     // Loop through those numbers and add them together to get a sum.
    //     for (var i = 0; i < data.length; i++) {
    //       if (parseFloat(data[i])) {
    //         result += parseFloat(data[i]);
    //       }
    //     }
    
    //     // We will then print the final balance rounded to two decimal places.
    //     console.log("You have a total of " + result.toFixed(2));
    //   });
    // }
