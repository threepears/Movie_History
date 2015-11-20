define(["firebase","templates"], function (Firebase, templates) {
	var ref = new Firebase("https://movieshistory.firebaseio.com/");
	var usersRef = new Firebase("https://movieshistory.firebaseio.com/users");
	
	// load splash screen
	templates.loadSplash();

	return {
		createNewUser: function() {
			ref.createUser({
			// get email and password from splash page input form
			// call this function on new user button click
			email    : $("#email").val(),
			password : $("#pwd").val()
			}, function(error, userData) {
				if (error) {
				// log error message and error
				console.log("Error creating user:", error);
				// display error message and error in DOM
				$("#error").html("Create New User "+error);
				// Reset form inputs on fail
					$("#email").val("");
					$("#pwd").val("");
				} else {
				// log success message and uid for new user
				console.log("Successfully created user account with uid:", userData.uid);
				// display success message on DOM
				$("#error").html("Successfully created user account.");
				
				// store user under 'users' location in firebase, but this command
				// may need to wait until a user adds a movie, then push
				// {movieref: rating || "unwatched"} to user firebase ref
				var userID = userData.uid;
				usersRef.child(userID).set({"movieRef": "rating"});
				
				// direct user to initial_page after successful login
				templates.loadInitialPage();
				} // end else
			}); // end  onComplete callback for ref.createUser
		}, // end login.createNewUser

		loginUser: function() {
			ref.authWithPassword({
			
			/* TEST LOGIN CODE HERE */
			/* UNCOMMMENT NEXT TWO LINES TO AVOID TYPING IN LOGIN INFO */
			// email    : "test@test.com",
			// password : "pass"
			/* END TEST LOGIN PARAMS */

			/* PRODUCTIN LOGIN CODE */
			/* UNCOMMMENT NEXT TWO LINES FOR PRODUCTION USE */
			 email    : $("#email").val(),
			 password : $("#pwd").val()
			/* END PRODUCTION LOGIN PARAMS */


			}, function(error, authData) {
				if (error) {
					// log login fail error message and error
					console.log("Login Failed!", error);
					// display error message and error on dom
					$("#error").html("Login "+error);
					
					// Reset form inputs on fail
					$("#email").val("");
					$("#pwd").val("");

				} else {
					// log success message and user data
					console.log("Authenticated successfully with payload:", authData);
					// display success message on DOM
					$("#error").html("Authenticated successfully.", error);
					// direct user to initial_page after successful login
					templates.loadInitialPage();
				} // end else
			}); // end onComplete callback for ref.authWithPassword
		} // end loginUser
	}; // end module return
});





