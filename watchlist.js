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

    
            document.getElementsByClassName("movies-container")[0].innerHTML = renderMovies(JSON.parse(localStorage.getItem("watchlist")));
        
    });