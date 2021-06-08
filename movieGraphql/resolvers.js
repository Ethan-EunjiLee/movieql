/**
 * Resolver: Query를 해결
 */

import { getMovies, getById, deleteMovie } from "./movieDB";

const resolvers = {
    Query: {
        movies: () => getMovies(),
        movie: (_, { id }) => getById(id),
    },
};

export default resolvers;
