requirejs.config({
	baseURL: "./scripts",
	paths: {
		"jquery": "../lib/bower_components/jquery/dist/jquery.min",
		"hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
		"lodash": "../lib/bower_components/loadsh/lodash.min",
		"Q": "../lib/bower_components/q/q",
		"firebase": "../lib/bower_components/firebase/firebase",
		"bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min"
	},
	shim: {
		"bootstrap": "jquery",
		"firebase": {
			exports: "Firebase"
		}
	}
});

require(["dependencies", "login"], function(_$_, login) {
	console.log("Hellow from main.js");
	console.log("load dependencies and login");
	login.createNewUser();
	login.loginUser();

});