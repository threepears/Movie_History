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
				console.log("Error creating user:", error);
				} else {
				console.log("Successfully created user account with uid:", userData.uid);
				var userID = userData.uid;
				usersRef.set({userID: "movie refs"});
				} // end else
			}); // end  onComplete callback for ref.createUser
		}, // end login.createNewUser

		loginUser: function() {
			ref.authWithPassword({
			// get email and password from splash page
			// call this function on login button click
			
			email: "toferdev@yourmom.com",
			password: "password"

			/* UNCOMMMENT NEXT TWO LINES FOR PRODUCTION USE */
			// email    : $("#email").val(),
			// password : $("#pwd").val()
			
			}, function(error, authData) {
				if (error) {
				console.log("Login Failed!", error);
				} else {
				console.log("Authenticated successfully with payload:", authData);
				console.log("authData.uid", authData.uid);
				} // end else
			}); // end onComplete callback for ref.authWithPassword
		} // end loginUser
	}; // end module return
});





