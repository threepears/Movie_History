define(function (require) {
	// define dependencies
	var $ = require("jquery");
	var login = require("login");
	var findMovies = require("findMovies");
	
	// attach click handler to register button
	$(document).on("click","#btn-register", function(event) {
		console.log("You clicked the 'Register' button.");
		login.createNewUser();
	});

	// attach click handler to login button
	$(document).on("click","#btn-login", function(event) {
		console.log("You clicked the 'login' button.");
		login.loginUser();
	});

	// attach click handler to logout button
	$(document).on("click","#btn-logout", function(event) {
		console.log("You clicked the logout btn.");
		// login.logout();
	});

	// attach click handler to 'find movies' search button
	$(document).on("keypress","#search-movies", function(event) {
		console.log("keypress detected: ", event.which);
		if (event.which === 13)
		{
			var movieTitle = $("#search-movies").val();
			movieTitle = movieTitle.replace(/ /g, "+"); 
			console.log("movie Title = ", movieTitle);
			findMovies.findMovies(movieTitle);
		}
	});

	$(document).on("click", ".btn-add", function(event) {
		// create movie data object from OMDB info stored on DOM: MVP needs actors, year, title, and poster
		console.log("event.target",$(event.target));
		var moviePoster = $(event.target.parentElement.firstElementChild.firstElementChild).attr("src");
		var movieTitle = $(event.target.parentElement.firstElementChild.firstElementChild).attr("alt");
		var movieActors = "actors"; // how do we get the actors?
		var movieYear = "year"; // currently stored in HBS template on DOM

		var movieData = {
			"Poster": moviePoster,
			"Title": movieTitle,
			"Year": movieYear,
			"Actors": movieActors
		};

		// store any movie any user adds to a global movies location in firebase
		var moviesRef = new Firebase("https://movieshistory.firebaseio.com/movies");
		// store the returned UID from firebase push to pass to users library of unwatched movies with rating "unwatched"
		var movieRef = moviesRef.push(movieData);

		// get current auth user ID
		var authData = moviesRef.getAuth();
		var userRef = new Firebase("https://movieshistory.firebaseio.com/users/" + authData.uid);
		movieRef = movieRef.toString().split("movies/")[1]	;
		userRef.child(movieRef).set("unwatched");
	});
	
	

});