const API_KEY = "f033742fef9c24a3a4e7b6f46e09b5cf";
const TMDB_VIDEO_API = "https://api.themoviedb.org/3";
const TMDB_IMAGE_URL = "https://image.tmdb.org/t/p/w500/";
const TMDB_MOVIE_LIST_API = `${TMDB_VIDEO_API}/movie/popular?api_key=${API_KEY}`;
const TMDB_MOVIE_SEARCH_API = `${TMDB_VIDEO_API}/search/movie?api_key=${API_KEY}`;

const mainElement = document.getElementsByClassName('main');
const overViewElement = document.getElementsByClassName('overview');
const formElement = document.getElementById('form');


const showMovieCards = (movies) => {
    let moviesArr = [];

    console.log(movies);
    // mainElement.innerHTML = null;

    if (!movies) return mainElement.innerHTML = 'Empty';

    movies.forEach(mov => {
        let spanColor = '';
        const { id, title, overview, poster_path, vote_average } = mov;
        const moviesElement = document.createElement("div");
        moviesElement.classList.add("movies");
        moviesArr.push(moviesElement);

        if (vote_average < 7) {
            spanColor = 'red';
        }
        else if (vote_average <= 7.5) {
            spanColor = 'orange';
        } else {
            spanColor = 'green';
        }

        moviesElement.innerHTML = `
        <img src=${TMDB_IMAGE_URL}/${poster_path} alt=${title}>
        <div class="title-card">
        <h3>${title}</h3>
        <span class = ${spanColor}>${vote_average}</span>
        </div>
        <div class="overview">
        <h2>OverView</h2>
        ${overview}
        </div>`;
        mainElement[0].appendChild(moviesElement);
    });

    moviesArr.forEach(movElement => {
        movElement.addEventListener("mouseover", () => {
            movElement.children[2].classList.add("show")
        });
    });
};

const getMovies = async () => {
    const response = await axios(`${TMDB_MOVIE_LIST_API}&language=en-US&page=1&include_adult=false`);
    showMovieCards(response.data.results);
};
getMovies();

formElement.addEventListener("submit", async (e) => {
    e.preventDefault();
    alert("ok");
    const searchValue = document.getElementById("search").value;
    const response = await axios(`https://api.themoviedb.org/3/search/movie?query=${searchValue}&api_key=${API_KEY}&language=en-US&page=1&include_adult=false`);
    showMovieCards(response.data.results);
});