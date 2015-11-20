define(function (require) {
	return {
		loadSplash: function () {
			require(["hbs!../templates/splash"], function (throwSplash) {
				$("#catcher").html(throwSplash);
			});
		}
	};
});