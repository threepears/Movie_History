define(["jquery"],
function($) {

return {
	findMovies: function (userData) {
    // console.log("inside findMovies function");
      $.ajax({url: "http://www.omdbapi.com/?s=" + userData + "&r=json"
      }).done(function(movies) {
        // console.log("inside findMovies done");
        console.log("movies = ", movies);
        require(["hbs!../templates/find_details"], function(resultsTemplate) {
      	$("#findResults").html(resultsTemplate(movies));
	  	})
      })
    }
}
  }
)
