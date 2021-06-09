/**
 * Resolver: Query를 해결
 */

import { getMovies, getById, addMovie, deleteMovie } from "./movieDB";

// _: Object
// { 객체 내부의 property }
const resolvers = {
    Query: {
        movies: () => getMovies(),
        movie: (_, { id }) => getById(id),
    },
    Mutation: {
        addMovie: (_, { name, score }) => addMovie(name, score),
        deleteMovie: (_, { id }) => deleteMovie(id),
    },
};

export default resolvers;
