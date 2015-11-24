define(["jquery", "firebase"],
function($, Firebase) {
  var ref = new Firebase ("https://movieshistory.firebaseio.com/");
  var moviesRef = new Firebase ("https://movieshistory.firebaseio.com/movies/");
  var authData = ref.getAuth();
  var userUID = authData.uid;
  var userDataRef = new Firebase("https://movieshistory.firebaseio.com/users/"+userUID);

return {
      // ***get user input from search box and return object with matching movies from OMDB
	findOMDBMovies: function (searchInput) {
      console.log("inside findMovies function");

      // ***format user input for url to be used in ajax call
      searchInput = searchInput.toLowerCase();
      searchInput = searchInput.replace(/ /g, "+");

      // ***submit GET request to OMDB
      $.ajax({url: "http://www.omdbapi.com/?s=" + searchInput + "&r=json"
      }).done( function(movies) {

        // console.log("inside findMovies done");
        console.log("movies = ", movies);

        // ***Pass results to HBS template (consider returning movies as object and passing to HBS outside of method?)
        require(["hbs!../templates/find_results"], function(resultsTemplate) {
      	$("#movie-catcher").html(resultsTemplate(movies));
	  	});
      });
    },


    /*************** getAllUserMovies ***********/
    getAllUserMovies: function () {
      var userMovieData = {};
      var tempUserMovieData = {};
      userDataRef.once("value", function(snapshot) {

        // ***The callback function will only get called once since we return true
        // ***get movieRef keys to get data from firebase/movies location
        snapshot.forEach(function(childSnapshot) {

          // ***add rating as key/value pair to tempUserMovieData[movieRef]
          // console.log("childSnapshot key", childSnapshot.key());
          // console.log("childSnapshot val", childSnapshot.val());
          tempUserMovieData[childSnapshot.key()] = {"Rating" : childSnapshot.val()};
          // console.log("tempUserMovieData", tempUserMovieData);
          
          // ******PUT IN METHOD called: getMovieData(movieKey): function() {};
          // ***create reference to firebase movies/movieRef location
          var movieRef = new Firebase("https://movieshistory.firebaseio.com/movies/"+childSnapshot.key());
          
          // ***get snapshot of movies/movieRef data
          movieRef.once("value", function(snapshot) {  
            
            // ***set data at movie location as key/value pair of userMovieData[movieRef]
            userMovieData[snapshot.key()] = snapshot.val();

            // ***combine temp object with user data to 
            userMovieData[snapshot.key()].Rating = tempUserMovieData[snapshot.key()].Rating;
            // console.log("userMovieData", userMovieData);
            return userMovieData;
          }); // end movieRef.once callback
    console.log("userMovieData", userMovieData);
        }); // end snapshot.forEach callback
      }); // end userDataRef.once callback
    return userMovieData;
    } // end getAllSUerMovies function

}; // end RETURN

}); // end module
