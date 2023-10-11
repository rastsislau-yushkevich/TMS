// let admin;
// let name;

// name = "John";
// admin = name;

// console.log(admin);

// name = "John"+ 5 + 4 + "Doe";
// console.log(name);


// name = `John ${1+2}`
// console.log(name);

// //всего 8 типов данных: числа, строки, символы, бигинт, бул, объект, нулл, андефайнд


// let bigint = 1237912378172648172648176281873912796219481724891n; //n is for bigint

// //есть undefined, null

// let user = {  //объект
//     name: "Rost", 
//     age: 21
// }

// console.log(user);
// console.log(user.name);
// console.log(user.age);


// let id = Symbol("id");

// console.log(id);
// console.log(id.toString());

// console.log(typeof id);

// console.log(Math.pow(5, 100));

// console.log(typeof alert);

// let res = prompt("как тебя зовут?", "default"); alert(res);

// let value = true;

// // let val = value.toString();

// val = String(value);



// console.log("taskkkkkkkkkkkkk");

// const arr = [0, 2, -3, 5, -8, 10];

// const getPositiveSum = (array = []) => array.reduce((prev, el) => el > 0 ? prev + el : prev, 0);

// console.log(getPositiveSum(arr));


// const a = document.getElementById("main-url");

// a.onclick = (e) => {
//     e.preventDefault();
//     console.log("hello", e);

//     if(e.target.style.color === "blue" || e.target.style.color === "") {
//         e.target.style.color = "red";
//     } else {
//         e.target.style.color = "blue";
//     }
// };


// const users = [
//     {
//         id: 1, 
//         username: "Michael Lawson",
//         age: 22
//     },
//     { 
//         id: 2,
//         username: "Tom Spot",
//         age: 32
//     }, 
//     {
//         id: 3,
//         username: "Kate Ford",
//         age: 18
//     }
// ];

// function getAvgAge(arr) {
//     return arr.reduce((prev, cur) => prev + cur.age, 0)/arr.length;
// }
// console.log(getAvgAge(users));

// const sortByAge = (users) => users.sort((a, b) =>  a.age - b.age) 

// console.log(sortByAge(users));

// const searchAge = (users) => {
//     const searchedAge = prompt("Возраст");
//     console.log(Boolean(users.find((el) => el.age == searchedAge)));
// }

// searchAge(users);

const root = document.getElementById("root");

const data = [
    [11, 12, 13],
    [21, 22, 23],
    [31, 32, 33]
];

const createTable = (data) => {
    const table = document.createElement("table");
    data.forEach(element => {
        const tableRow = document.createElement("tr");
        element.forEach(elem => {
            const tableCell = document.createElement("td");
            tableCell.innerHTML = elem;
            tableRow.append(tableCell);
        });
        table.append(tableRow);
    });
    root.append(table);
}

createTable(data);