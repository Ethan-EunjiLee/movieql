/**
 * Resolver: Query를 해결
 */

import { people, getById } from "./db";

const resolvers = {
    Query: {
        people: () => people,
        // 어떤 사용자가 name Query를 보내면 "nicolas"을 반환하는 함수로 답한다
        //name: () => "nicolas",
        // 어떤 person을 받던 nicolas 함수를 리턴
        //person: () => nicolas,
        // 위 정의와 일치
        // person: function(){
        //     return nicolas
        // }
        person: (_, { id }) => getById(id),
    },
};

export default resolvers;

// const nicolas = {
//     name: "Nicolas",
//     age: 18,
//     gender: "female",
// };
