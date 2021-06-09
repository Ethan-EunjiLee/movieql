export const people = [
    {
        id: "0",
        name: "Nicolas",
        age: 18,
        gender: "female",
    },
    {
        id: "1",
        name: "a",
        age: 19,
        gender: "male",
    },
    {
        id: "2",
        name: "b",
        age: 20,
        gender: "female",
    },
    {
        id: "3",
        name: "b",
        age: 21,
        gender: "male",
    },
];

// 일치하는 id를 가진 people 값 리턴
// filter 내부의 person: people의 각 요소
// 입력받은 id 값이 people의 id값이 일치하는 경우만 새롭게 filterPeople 배열을 만든다.
// filterPoeple 배열의 0번째 값을 return
export const getById = (id) => {
    const filteredPeople = people.filter((person) => person.id === String(id));
    return filteredPeople[0];
};
