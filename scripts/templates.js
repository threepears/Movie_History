define(function (require) {
	return {
		loadSplash: function () {
			require(["hbs!../templates/splash"], function (throwSplash) {
				$("#catcher").html(throwSplash);
			});
		},

		loadInitialPage: function() {
			require(["hbs!../templates/initial_page"], function (throwInitialPage) {
				$("#catcher").html(throwInitialPage);
			});
			require(["hbs!../templates/find_movies"], function (throwFindMoviesModal) {
				$("#find-movies-modal").html(throwFindMoviesModal);
			});
			require(["hbs!../templates/search_movies"], function (throwSearchMoviesModal) {
				$("#search-movies-modal").html(throwSearchMoviesModal);
			});
		}
	};
});