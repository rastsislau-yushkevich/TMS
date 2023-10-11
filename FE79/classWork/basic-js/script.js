const users = [
    {
        id: 1,
        username: "Michael Lawson",
        age: 22,
    },
    {
        id: 2,
        username: "Tom Spot",
        age: 32,
    },
    {
        id: 3,
        username: "Kate Ford",
        age: 18,
    }
];

const button = document.getElementById('calculate-btn');
button.addEventListener('click', () => {
    calculate(users);
})

const getAverage = (users) => users.reduce((prev, el) => prev + el.age, 0)/users.length;

const calculate = (users) => {
    console.log('average age is : ', getAverage(users));
    console.log('sorted array : ', sortByAge(users));
    console.log('does we have this age : ', searchAge(users));
}

const sortByAge = (users) => users.sort((a, b) => a.age - b.age)

const searchAge = (users) => {
    const searchedAge = prompt('есть ли пользователь соотвествуещего возраста');
    return !!users.find((el) => el.age == searchedAge);
}