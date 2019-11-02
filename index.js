
document.addEventListener("DOMContentLoaded", function () {
    function renderMovies(movieArray) {
        var movieHTML = movieArray.map(function (currentMovie) {
            return `
            <div class="row">
						<div class="card" style="width: 18rem;">
							<img src= "${currentMovie.Poster}" class="card-img-top" alt="...">
							<div class="card-body">
                                <h5 class="movie-title">${currentMovie.Title}</h5>
                                <h6 class="date">${currentMovie.Year}</h6>
								<a href="#" class="btn btn-primary" onclick="saveToWatchlist('${currentMovie.imdbID}')">Add</a>
							</div>
						</div>
					</div>
            `
        })

        return movieHTML.join("")
    }

        document.getElementById("search-form").addEventListener("submit", function(e) {
            e.preventDefault();
            var serachString = document.getElementsByClassName("search-bar")[0].value
            var urlEncodedSearchString = encodeURIComponent(serachString);
            axios.get("https://www.omdbapi.com/?apikey=3430a78&s=" + urlEncodedSearchString)
            .then(function(response) {
                console.log(response.data);
                var movieHTML = renderMovies(response.data.Search);
                document.getElementsByClassName("movies-container")[0].innerHTML = movieHTML;
            })
        });
        
    });

    function saveToWatchlist(imdbID) {
        var movie = movieData.find(function(currentMovie) {
            return currentMovie.imdbID == imdbID;
        });
        var watchlistJSON = localStorage.getItem("watchlist");
        var watchlist = JSON.parse(watchlistJSON);
        if (watchlist == null) {
            watchlist = [];
        }
        watchlist.push(movie);
        watchlistJSON = JSON.stringify(watchlist);
        localStorage.setItem("watchlist", watchlistJSON);
    };