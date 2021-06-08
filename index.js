import { GraphQLServer } from "graphql-yoga";
//import resolvers from "./graphql/resolvers";
import resolvers from "./movieGraphql/resolvers";

const server = new GraphQLServer({
    // 원하는 서버 설정 입력
    // 1. typeDefs: 모든 type들에 대한 정의
    typeDefs: "./movieGraphql/schema.graphql",
    resolvers,
});

server.start(() => console.log("Graphql Server Running"));
