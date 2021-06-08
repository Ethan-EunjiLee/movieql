export let moives = [
    {
        id: 0,
        name: "NicolasMovie",
        score: 2,
    },
    {
        id: 1,
        name: "aMovie",
        score: 3,
    },
    {
        id: 2,
        name: "bMovie",
        score: 5,
    },
    {
        id: 3,
        name: "cMovie",
        score: 1,
    },
];

export const getById = (id) => {
    const filteredMoives = moives.filter((movie) => movie.id === id);
    return filteredMoives[0];
};

// movie 삭제
export const deleteMovie = (id) => {
    const cleanMovies = movies.filter((movie) => movie.id !== id);
    // 입력받은 id와 일치하지 않는 movies객체의 길이와 원래 original movies 객체 길이 비교
    // id불일치 movies객체의 길이가 더 작으면 기존 movies 객체를 id불일치 movies객체로 덮어씌우고 return true
    if (movies.length > cleanMovies.length) {
        movie = cleanMovies;
        return true;
    } else {
        return false;
    }
};

export const getMovies = () => movies;
