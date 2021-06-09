import fetch from "node-fetch";

const API_URL = "https://yts.mx/api/v2/list_movies.json?";

export const getMovies = (limit, rating) => {
    let REQUEST_URL = API_URL;
    if (limit > 0) {
        REQUEST_URL += `limit=${limit}&`;
    }
    if (rating > 0) {
        REQUEST_URL += `minimum_rating=${rating}`;
    }
    console.log(
        "🚀 ~ file: movieDB.js ~ line 14 ~ getMovies ~ REQUEST_URL",
        REQUEST_URL
    );
    return fetch(REQUEST_URL)
        .then((res) => res.json())
        .then((json) => json.data.movies);
};

// fetch(`${API_URL}?limit=${limit}&minimun_rating=${rating}`)
//     .then((res) => res.json())
//     .then((json) => json.data.movies);