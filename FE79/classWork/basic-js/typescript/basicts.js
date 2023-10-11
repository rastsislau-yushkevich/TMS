"use strict";
// let isActive: boolean = true;
// isActive = false;
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
// console.log(isActive);
// const user: [string, number] = ["mark", 25];
// const users: string[] = ["mark", "don", "raphael", "leonardo", "michealangelo", "donatello"];
// const turple: [string, number, null, number, boolean] = ["hello", 3, null, 4.83, true];
// console.log(turple);
// type Name = string; //custom types
// const fio: Name = "Ivanov Ivan";
// function test(str: string, num: number): void {
//     const newStr = str + num;
// };   
// function test(str: string, num: number): string {
//     return str + num;
// };   
// console.log(test("bro ", 1));
function test(str, num) {
    throw new Error();
}
;
function getAttendance(arr, lessons) {
    return "".concat(arr[0], " visited ").concat(lessons, " lessons");
}
console.log(getAttendance(["Mark", 23, "Minsk"], 10));
var x = "hello";
//enumerations
var Numbers;
(function (Numbers) {
    Numbers[Numbers["zero"] = 0] = "zero";
    Numbers[Numbers["one"] = 1] = "one";
    Numbers[Numbers["two"] = 2] = "two";
    Numbers[Numbers["three"] = 3] = "three";
    Numbers[Numbers["four"] = 4] = "four";
    Numbers[Numbers["five"] = 5] = "five";
    Numbers[Numbers["six"] = 6] = "six";
    Numbers[Numbers["seven"] = 7] = "seven";
    Numbers[Numbers["eight"] = 8] = "eight";
    Numbers[Numbers["nine"] = 9] = "nine";
})(Numbers || (Numbers = {}));
var numbers = [Numbers.zero, Numbers.one, Numbers.two, Numbers.three, Numbers.four, Numbers.five, Numbers.six, Numbers.seven, Numbers.eight, Numbers.nine];
var arr = [3, 8];
console.log(Numbers);
console.log(numbers);
console.log(arr);
function calc(rect) {
    if (rect.z) {
        return "V = ".concat(rect.x * rect.y * rect.z);
    }
    else {
        return "S = ".concat(rect.x * rect.y);
    }
}
var rectObj = { x: 10, y: 10, z: 5 }; // либо const rectObj = {...} as IRect для явного вида имплементации
var sqrObj = { x: 10, y: 10 };
console.log(calc(rectObj));
console.log(calc(sqrObj));
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
    }
];
var goThroughUsers = function (users) {
    users.forEach(function (user) {
        console.log(getName(user));
    });
};
var getName = function (userObj) {
    return "First Name: ".concat(userObj.first_name, ". Last Name: ").concat(userObj.last_name, ". Age: ").concat(userObj.age);
};
goThroughUsers(users);
//---------------------------------------
var Ingredients;
(function (Ingredients) {
    Ingredients["flour"] = "flour";
    Ingredients["beef"] = "beef";
    Ingredients["salad"] = "salad";
    Ingredients["cheese"] = "cheese";
    Ingredients["sauce"] = "sauce";
    Ingredients["cucumber"] = "cucumber";
})(Ingredients || (Ingredients = {}));
var products = [
    {
        id: 1,
        name: "Burger Premium",
        price: 6,
        currency: "euro",
        ingredients: [Ingredients.flour, Ingredients.beef, Ingredients.salad, Ingredients.cheese, Ingredients.sauce],
        type: "burger",
        available: true
    },
    {
        id: 2,
        name: "Burger Lite",
        price: 2.3,
        currency: "euro",
        ingredients: [Ingredients.flour, Ingredients.beef, Ingredients.cheese, Ingredients.sauce, Ingredients.sauce],
        type: "burger",
        available: true
    },
];
var goThroughProducts = function (products) {
    products.forEach(function (product) {
        console.log(product);
    });
};
goThroughProducts(products);
//ClassWork 2 
console.log("\nclasswork 2\n");
function loggingIdentity(arg) {
    console.log(arg.length);
    return arg;
}
var lengthwiseObj = { length: 10 };
loggingIdentity(lengthwiseObj);
var secObj = {};
loggingIdentity(secObj);
var countries = [
    {
        country: "United Arab Emirates",
        abbreviation: "AE",
        city: "Abu Dhabi",
        currency_name: "Arab Emirates Dirham",
        population: 9630959
    },
    {
        country: "Poland",
        abbreviation: "PL",
        city: "Warszawa",
        currency_name: "Polish Zloty",
        population: 37974750
    },
    {
        country: "Russian Federation",
        abbreviation: "RU",
        city: "Moscow",
        currency_name: "Russian Ruble",
        population: 144478050
    }
];
var getCountriesNames = function (arr) {
    // let total = "";
    // arr.forEach((element, index) => {
    //     if(index == 0) {
    //         total += element.country;
    //     } else {
    //         total += `, ${element.country}`
    //     }
    //     total += element.country + ", ";
    // });
    // return total;
    return arr.reduce(function (prev, next) {
        if (prev === "") {
            return next.country;
        }
        return prev + ", ".concat(next.country);
    }, "");
    // return arr.reduce((prev, next) => prev += next.country + ", ", "");
};
console.log(getCountriesNames(countries));
var getAllPopulation = function (arr) {
    // let sum = 0;
    // arr.forEach(elem => {
    //     sum += elem.population;
    // });
    // return sum;
    return arr.reduce(function (prev, el) { return prev += el.population; }, 0);
};
console.log("Total population is: ", getAllPopulation(countries));
var sortAllCountries = function (arr) {
    return arr.sort(function (a, b) {
        if (a.country > b.country) {
            return 1;
        }
        else if (a.country < b.country) {
            return -1;
        }
        else {
            return 0;
        }
    });
};
console.log(sortAllCountries(countries));
var getCurrencies = function (arr) {
    // let resultArr = new Array();
    // arr.forEach(el => {
    //     resultArr.push(el.currency_name);
    // })
    // return resultArr;
    return arr.map(function (el) { return el.currency_name; });
};
console.log("Currencies: ", getCurrencies(countries));
var getSortedCities = function (arr) {
    return arr.map(function (el) { return el.city; }).sort(function (a, b) {
        if (a > b) {
            return 1;
        }
        else {
            return -1;
        }
    });
};
console.log(getSortedCities(countries));
var getAvgPopulation = function (arr) {
    // return arr.reduce((prev, next) => prev + next.population, 0)/arr.length;
    return getAllPopulation(arr) / arr.length;
};
console.log(getAvgPopulation(countries));
//--------------------------------------------------
var Animal = /** @class */ (function () {
    function Animal(name) {
        this.name = name;
    }
    return Animal;
}());
var Fish = /** @class */ (function (_super) {
    __extends(Fish, _super);
    function Fish(name, swim) {
        var _this = _super.call(this, name) || this;
        _this.swim = true;
        _this.swim = swim;
        return _this;
    }
    return Fish;
}(Animal));
var Predator = /** @class */ (function (_super) {
    __extends(Predator, _super);
    function Predator(name, swim, canEatPerson) {
        var _this = _super.call(this, name, swim) || this;
        _this.canEatPerson = canEatPerson;
        return _this;
    }
    return Predator;
}(Fish));
var Shark = /** @class */ (function (_super) {
    __extends(Shark, _super);
    function Shark(name, swim, canEatPerson, countOfTeeth) {
        var _this = _super.call(this, name, swim, canEatPerson) || this;
        _this.countOfTeeth = countOfTeeth;
        return _this;
    }
    return Shark;
}(Predator));
var shark = new Shark("Sharkinson", true, true, 100);
console.log(shark);
//---------------------------------
// Lesson 3 
console.log("\nLesson 3\n");
