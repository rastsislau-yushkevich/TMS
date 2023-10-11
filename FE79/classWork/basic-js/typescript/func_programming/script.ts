const users = [
    {
        "id": 7,
        "email": "michael.lawson@reqres.in",
        "first_name": "Michael",
        "last_name": "Lawson",
        "avatar": "https://reqres.in/img/faces/7-image.jpg",
         "age": 23
    },
    {
        "id": 8,
        "email": "lindsay.ferguson@reqres.in",
        "first_name": "Lindsay",
        "last_name": "Ferguson",
        "avatar": "https://reqres.in/img/faces/8-image.jpg",
         "age": 20
     },
    {
        "id": 9,
        "email": "tobias.funke@reqres.in",
        "first_name": "Tobias",
        "last_name": "Funke",
        "avatar": "https://reqres.in/img/faces/9-image.jpg",
        "age": 40
    },
    {
        "id": 10,
        "email": "byron.fields@reqres.in",
        "first_name": "Byron",
        "last_name": "Fields",
        "avatar": "https://reqres.in/img/faces/10-image.jpg",
        "age": 36
    },
    {
        "id": 11,
        "email": "george.edwards@reqres.in",
        "first_name": "George",
        "last_name": "Edwards",
        "avatar": "https://reqres.in/img/faces/11-image.jpg",
        "age": 70
    },
    {
        "id": 12,
        "email": "rachel.howell@reqres.in",
        "first_name": "Rachel",
        "last_name": "Howell",
        "avatar": "https://reqres.in/img/faces/12-image.jpg",
         "age": 45
    }
];

interface IUser {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string,
    age: number
}

interface IUsername {
    id: number,
    username: string
}

interface IResultSet {
    avgAge: number,
    amountHigher30: number,
    amountHigher40: number,
    amountHigher18: number
}

//Task 1 

console.log("\nTask 2\n");

const getAllFullNames = <T extends IUser>(arr: T[]): string => {
    return arr.reduce((prev, next, index) =>{
        if (index === 0) {
            return next.first_name + " " + next.last_name;
        } else {
            return prev + `, ${next.first_name} ${next.last_name}`;
        }
    } ,"");
}

const getAllFullNames1 = <T extends IUser>(arr: T[]): string => arr.map(elem => `${elem.first_name} ${elem.last_name}`).join(", ");

console.log("GetAllFullNames1: ", getAllFullNames1(users));

console.log("All full names of users: ", getAllFullNames(users));

//Task 2

console.log("\nTask 2\n")

const sortEmails = <T extends IUser>(arr: T[]): string[] => arr.map(el => el.email).sort();

console.log("Sorted array of emails: ", sortEmails(users));

const createUsersWithIds = <T extends IUser>(arr: T[]): IUsername[] => arr.map(el => ({id: el.id, username: el.first_name + " " + el.last_name}));

console.log(createUsersWithIds(users));

//Task 3
console.log("\nTask 3\n")

const sortUsersByAgeYounger40 = <T extends IUser>(arr: T[]): T[] => arr.filter(el => el.age < 40).sort((a, b) => a.age - b.age);

console.log("Sorted array: ", sortUsersByAgeYounger40(users));

const getResultObject = <T extends IUser>(arr: T[]): IResultSet => {
    let totalAge = 0;
    let amountHigher30 = 0;
    let amountHigher40 = 0;
    let amountHigher18 = 0;

    arr.forEach(elem => {
        totalAge += elem.age;
        if(elem.age > 18) {
            amountHigher18++;
            if(elem.age > 30) {
                amountHigher30++;
                if(elem.age > 40) {
                    amountHigher40 ++;
                }
            }
        }
    });
    return {avgAge: totalAge/arr.length, amountHigher18, amountHigher30, amountHigher40};
}

const getResultObj = <T extends IUser>(arr: T[]): IResultSet => {
    // let totalAge = 0;
    // return arr.reduce((prev, next) => {
    //     if(next.age > 18) {
    //         prev.amountHigher18++;
    //         if(next.age > 30) {
    //             prev.amountHigher30++;
    //             if(next.age > 40) {
    //                 prev.amountHigher40++;
    //             }
    //         }
    //     }
    //     totalAge += next.age;
    //     prev.avgAge = totalAge/arr.length;
    //     return prev;
    // }, {avgAge: 0, amountHigher18: 0, amountHigher30: 0, amountHigher40: 0}); // так тоже можно 

    const ageInfo = arr.reduce((prev, el) => {
        prev.sum += el.age;
        if(el.age > 18) {
            prev.amountHigher18++;
            if(el.age > 30) {
                prev.amountHigher30++;
                if(el.age > 40) {
                    prev.amountHigher40++;
                }
            }
        }
        return prev;
    }, {sum: 0, amountHigher18: 0, amountHigher30: 0, amountHigher40: 0});
    const {sum, amountHigher18, amountHigher30, amountHigher40} = ageInfo;
    return {
        avgAge: sum/arr.length,
        amountHigher18,
        amountHigher30,
        amountHigher40
    }
}

console.log("Results: ", getResultObject(users));

console.log("Results by reduce: ",  getResultObj(users));

//Task 6

console.log("\nTask 6\n");

// const obj = {s: ['Snow'], f:['Felton', 'Ford', 'Ferdinand']};

const getSurnames = <T extends IUser>(arr: T[]) =>{
    // return arr.reduce((prev, el) => {
    //     // prev[el.last_name.charAt(0).toLowerCase()] = el.last_name;
    //     const { last_name } = el;
    //     const char = last_name.charAt(0).toLowerCase();
    //     const prevCharValue = prev[char];
    //     if(prevCharValue) {
    //         prev[char].push(last_name);
    //     } else {
    //         prev[char] = [last_name];
    //     }
    //     return prev;
    // }, {})

    return arr.reduce((prev, el) => {
        if(prev[el.last_name.charAt(0).toLowerCase()]) {
            prev[el.last_name.charAt(0).toLowerCase()].push(el.last_name);
        } else {
            prev[el.last_name.charAt(0).toLowerCase()] = [el.last_name];
        }
        return prev;
    }, {})
}

console.log(getSurnames(users));

// const myFunc = async() => {
//     const resp = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = await resp.json();
//     console.log(data);
// }

// myFunc();