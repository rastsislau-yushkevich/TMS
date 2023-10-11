var users = [
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
//Task 1 
console.log("\nTask 2\n");
var getAllFullNames = function (arr) {
    return arr.reduce(function (prev, next, index) {
        if (index === 0) {
            return next.first_name + " " + next.last_name;
        }
        else {
            return prev + ", ".concat(next.first_name, " ").concat(next.last_name);
        }
    }, "");
};
var getAllFullNames1 = function (arr) { return arr.map(function (elem) { return "".concat(elem.first_name, " ").concat(elem.last_name); }).join(", "); };
console.log("GetAllFullNames1: ", getAllFullNames1(users));
console.log("All full names of users: ", getAllFullNames(users));
//Task 2
console.log("\nTask 2\n");
var sortEmails = function (arr) { return arr.map(function (el) { return el.email; }).sort(); };
console.log("Sorted array of emails: ", sortEmails(users));
var createUsersWithIds = function (arr) { return arr.map(function (el) { return ({ id: el.id, username: el.first_name + " " + el.last_name }); }); };
console.log(createUsersWithIds(users));
//Task 3
console.log("\nTask 3\n");
var sortUsersByAgeYounger40 = function (arr) { return arr.filter(function (el) { return el.age < 40; }).sort(function (a, b) { return a.age - b.age; }); };
console.log("Sorted array: ", sortUsersByAgeYounger40(users));
var getResultObject = function (arr) {
    var totalAge = 0;
    var amountHigher30 = 0;
    var amountHigher40 = 0;
    var amountHigher18 = 0;
    arr.forEach(function (elem) {
        totalAge += elem.age;
        if (elem.age > 18) {
            amountHigher18++;
            if (elem.age > 30) {
                amountHigher30++;
                if (elem.age > 40) {
                    amountHigher40++;
                }
            }
        }
    });
    return { avgAge: totalAge / arr.length, amountHigher18: amountHigher18, amountHigher30: amountHigher30, amountHigher40: amountHigher40 };
};
var getResultObj = function (arr) {
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
    var ageInfo = arr.reduce(function (prev, el) {
        prev.sum += el.age;
        if (el.age > 18) {
            prev.amountHigher18++;
            if (el.age > 30) {
                prev.amountHigher30++;
                if (el.age > 40) {
                    prev.amountHigher40++;
                }
            }
        }
        return prev;
    }, { sum: 0, amountHigher18: 0, amountHigher30: 0, amountHigher40: 0 });
    var sum = ageInfo.sum, amountHigher18 = ageInfo.amountHigher18, amountHigher30 = ageInfo.amountHigher30, amountHigher40 = ageInfo.amountHigher40;
    return {
        avgAge: sum / arr.length,
        amountHigher18: amountHigher18,
        amountHigher30: amountHigher30,
        amountHigher40: amountHigher40
    };
};
console.log("Results: ", getResultObject(users));
console.log("Results by reduce: ", getResultObj(users));
//Task 6
console.log("\nTask 6\n");
// const obj = {s: ['Snow'], f:['Felton', 'Ford', 'Ferdinand']};
var getSurnames = function (arr) {
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
    return arr.reduce(function (prev, el) {
        if (prev[el.last_name.charAt(0).toLowerCase()]) {
            prev[el.last_name.charAt(0).toLowerCase()].push(el.last_name);
        }
        else {
            prev[el.last_name.charAt(0).toLowerCase()] = [el.last_name];
        }
        return prev;
    }, {});
};
console.log(getSurnames(users));
// const myFunc = async () => {
//     const resp = await fetch("https://jsonplaceholder.typicode.com/users");
//     const data = resp.json();
//     console.log(data)
// }
// console.log(myFunc());
