define(function (require) {
	console.log("this is templates.js");
	return {
		loadSplash: function () {
			require(["hbs!../templates/splash"], function (throwSplash) {
				$("#catcher").html(throwSplash);
			});
		}
	};
});