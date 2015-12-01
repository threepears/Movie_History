requirejs.config({
	baseURL: "./scripts",
	paths: {
		"jquery": "../lib/bower_components/jquery/dist/jquery.min",
		"hbs": "../lib/bower_components/require-handlebars-plugin/hbs",
		"lodash": "../lib/bower_components/loadsh/lodash.min",
		"Q": "../lib/bower_components/q/q",
		"firebase": "../lib/bower_components/firebase/firebase",
		"bootstrap": "../lib/bower_components/bootstrap/dist/js/bootstrap.min",
		"bootstrap-slider": "../lib/bower_components/seiyria-bootstrap-slider/js/bootstrap-slider"
		// "bootstrap-star-rating": "../lib/bower_components/bootstrap-star-rating/js/star-rating.min"
	},
	shim: {
		"bootstrap": ["jquery"],
		// "bootstrap-star-rating": "jquery",
		"firebase": {
			exports: "Firebase"
		}
	}
});

require(["jquery", "dependencies", "login", "handlers", "bootstrap-slider"], function($, _$_, login, handlers, bootstrapSlider) {
	console.log("Hello from main.js");


});