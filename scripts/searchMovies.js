define(["jquery"],
function($) {

return {
	searchMovies: function (userData) {
    // console.log("inside searchMovies function");
      $.ajax({url: ""  // ADD FIREBASE URL
      }).done(function(movies) {
        // console.log("inside searchMovies done");
        console.log("movies = ", movies);
        require(["hbs!../templates/---"], function(resultsTemplate) {
      	$("#---").html(resultsTemplate(movies));
	  	});
      });
    }
};
  }
);
