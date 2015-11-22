define(function (require) {
	// define dependencies
	var $ = require("jquery");
	var login = require("login");
	
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

	// attach click handler to 'find movies' search button
	$(document).on("click","#btn-find", function(event) {
		console.log("click");
		var movieTitle = $("#titleText").val();
		movieTitle = movieTitle.replace(/ /g, "+"); 
		console.log("movie Title = ", movieTitle);
	});
	
	

});