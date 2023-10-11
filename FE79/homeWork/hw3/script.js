var users = [
    {
        name: "Harry Felton",
        phone: "(09) 897 33 33",
        email: "felton@gmail.com",
        animals: ["cat"],
        cars: ["bmw"],
        hasChildren: false,
        hasEducation: true
    },
    {
        name: "May Sender",
        phone: "(09) 117 33 33",
        email: "sender22@gmail.com",
        hasChildren: true,
        hasEducation: true
    },
    {
        name: "Henry Ford",
        phone: "(09) 999 93 23",
        email: "ford0@gmail.com",
        cars: ["bmw", "audi"],
        hasChildren: true,
        hasEducation: false
    }
];
//Task 1
console.log("Task 1\n");
var getAllUserNames = function (arr) {
    return arr.reduce(function (prev, next) {
        if (prev === "") {
            return next.name;
        }
        else {
            return prev + ", ".concat(next.name);
        }
    }, "");
};
console.log("Names of all users: ", getAllUserNames(users));
//Task 2 
console.log("\nTask 2\n");
var getCarsAmount = function (arr) {
    return arr.reduce(function (prev, next) {
        if (next.cars !== undefined) {
            return prev += next.cars.length;
        }
        else {
            return prev;
        }
    }, 0);
};
console.log("The total amount of cars is: ", getCarsAmount(users));
//Task 3
console.log("\nTask 3\n");
var filterByEducation = function (arr) {
    return arr.filter(function (elem) { return elem.hasEducation == true; });
};
console.log("Users with education: ", filterByEducation(users));
//Task 4
console.log("\nTask 4\n");
var filterByAnimals = function (arr) {
    return arr.filter(function (elem) { return elem.animals !== undefined; });
};
console.log("Users with animals: ", filterByAnimals(users));
//Tasks 3 and 4 with one function
console.log("\nTasks 3 and 4 with one function\n");
var filterByAvailability = function (arr, key) {
    return arr.filter(function (elem) { return elem[key]; });
};
console.log("Users with education: ", filterByAvailability(users, "hasEducation"));
console.log("Users with animals: ", filterByAvailability(users, "animals"));
//Task 5
console.log("\nTask 5\n");
var getAllCarNames = function (arr) {
    return arr.reduce(function (prev, next) {
        if (next.cars === undefined) {
            return prev;
        }
        else {
            if (prev === "") {
                return next.cars.join(", ");
            }
            else {
                return prev + ", ".concat(next.cars.join(", "));
            }
        }
    }, "");
};
console.log("All car names are: ", getAllCarNames(users));
