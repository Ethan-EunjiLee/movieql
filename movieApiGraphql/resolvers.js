import { getMovies } from "./movieDB";

const resolvers = {
    Query: {
        // 여기서 객체를 표현하는 _는 어떤 이름을 넣어도 상관없다.
        movies: (_, { limit, rating }) => getMovies(limit, rating),
    },
};

export default resolvers;
