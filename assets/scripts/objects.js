const d = document;
const addMovieBtn = d.getElementById("add-movie-btn");
const searchBtn = d.getElementById("search-btn");

const movies = [];

const renderMovies = () => {
	const movieList = d.getElementById("movie-list");

	if (movies.length === 0) {
		movieList.classList.remove('visible');
	} else {
		movieList.classList.add("visible");
	}
	movieList.innerHTML = "";

	movies.forEach(movie => {
		const movieEl = d.createElement("li");
		let text = movie.info.title + " - ";

		for (const key in movie.info) {
			if (key !== "title") {
				text = text + `${key}: ${movie.info[key]}`
			}
		}
		
		movieEl.textContent = text;
		movieList.append(movieEl);
	})
};

const addMovieHandler = () => {
	const title = d.getElementById("title").value;
	const extraName = d.getElementById("extra-name").value;
	const extraValue = d.getElementById("extra-value").value;

	if (title.trim() === "" || extraName.trim() === "" || extraValue.trim() === "") {
		return;
	}

	const newMovie = {
		info: {
			title,
			[extraName]: extraValue
		},
		id: Math.random()
	};

	movies.push(newMovie);
	renderMovies();
};

addMovieBtn.addEventListener("click", addMovieHandler);