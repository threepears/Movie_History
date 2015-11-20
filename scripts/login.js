define(["firebase","templates"], function (Firebase, templates) {
	var ref = new Firebase("https://movieshistory.firebaseio.com/");
	
	// load splash screen
	templates.loadSplash();

	console.log("ref",ref);
	return {
		createNewUser: function() {
		console.log("ref",ref);
			ref.createUser({
			// get email and password from splash page input form
			// call this function on new user button click
			email    : "toferdev@yourmom.com",
			password : "password"
			}, function(error, userData) {
				if (error) {
				console.log("Error creating user:", error);
				} else {
				console.log("Successfully created user account with uid:", userData.uid);
				} // end else
			}); // end  onComplete callback for ref.createUser
		}, // end login.createNewUser

		loginUser: function() {
			ref.authWithPassword({
			// get email and password from splash page
			// call this function on login button click
			email    : "toferdev@yourmom.com",
			password : "password"
			}, function(error, authData) {
				if (error) {
				console.log("Login Failed!", error);
				} else {
				console.log("Authenticated successfully with payload:", authData);
				} // end else
			}); // end onComplete callback for ref.authWithPassword
		} // end loginUser
	}; // end module return
});





