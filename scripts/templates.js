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
				$("#ex17a").slider({min  : 0, max  : 10, value: 0, tooltip_position:'bottom'});
			});
		}

		
	};
});