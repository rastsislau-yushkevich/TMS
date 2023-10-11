const subjects = {
    mathematics: {
        students: 200,
        teachers: 6
    },
    biology: {
        students: 120,
        teachers: 6
    },
    geography: {
        students: 60,
        teachers: 2
    },
    chemistry: {
        students: 100,
        teachers: 3
    }
};

//task 1
console.log("Task 1\n");
const showAllProps = (obj) => {
    let result = "";
    for(let key in obj) {
        result += key + " ";
    }
    return result;
}

console.log(showAllProps(subjects));


//task 2
console.log("Task 2\n");
const countAll = (obj) => {
    let studSum = 0;
    let teachSum = 0;
    for(let key in obj) {
       for(innerKey in obj[key]) {
        if(innerKey == "students") {
            studSum += obj[key][innerKey];
        } else if(innerKey == "teachers") {
            teachSum += obj[key][innerKey];
        }
       }
    }
    return `The amount of students is ${studSum} and the amount of teachers is ${teachSum}`;
}

console.log(countAll(subjects));


//task 3
console.log("Task 3\n");
const countStudAvg = (obj) => {
    let studAmount = 0;
    let counter = 0;
    for(let key in obj) {
        for(innerKey in obj[key]) {
            if(innerKey == "students") {
                studAmount += obj[key][innerKey];
                counter++;
            }
        }
    }
    return studAmount/counter;
}

console.log(countStudAvg(subjects));


// task 4
console.log("Task 4\n");
const subjectsArray = Object.values(subjects);

console.log(subjectsArray);

//task 5
console.log("Task 5\n");
const sorted = subjectsArray.sort((a, b) => b.teachers - a.teachers);

console.log(sorted);

//create table task

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