// let isActive: boolean = true;
// isActive = false;

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

function test(str: string, num: number): never {
    throw new Error();
};   

function getAttendance(arr: [string, number, string], lessons?: number): string { //? - перегрузка функции
    return `${arr[0]} visited ${lessons} lessons`;
}

console.log(getAttendance(["Mark", 23, "Minsk"], 10));

const x: "hello" = "hello";

//enumerations


enum Numbers {
    zero = 0,
    one = 1,
    two = 2, 
    three = 3,
    four = 4,
    five = 5,
    six = 6,
    seven = 7,
    eight = 8,
    nine = 9 
}

let numbers = [Numbers.zero, Numbers.one, Numbers.two, Numbers.three, Numbers.four, Numbers.five, Numbers.six, Numbers.seven, Numbers.eight, Numbers.nine];
const arr: [Numbers.three, Numbers.eight] = [3, 8];

console.log(Numbers);
console.log(numbers);
console.log(arr);

// ---------------------------------

interface IRect {
    x: number,  //можно писать readonly, чтобы после создания объекта нельзя быо переопределить переменную
    y: number,
    z?: number
}

function calc(rect: IRect): string {
    if (rect.z) {
        return `V = ${rect.x * rect.y * rect.z}`;
    } else {
        return `S = ${rect.x * rect.y}`;
    }
}

let rectObj: IRect  = {x: 10, y: 10, z: 5}; // либо const rectObj = {...} as IRect для явного вида имплементации
let sqrObj = {x: 10, y: 10} as IRect;

console.log(calc(rectObj));
console.log(calc(sqrObj));

//----------------------------------------

interface IUser {
    id: number,
    email: string,
    first_name: string,
    last_name: string,
    avatar: string,
    age: number
}

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
     }
];

const goThroughUsers = (users: IUser[]): void => {
    users.forEach((user: IUser) => {
        console.log(getName(user));
    });
};

const getName = (userObj: IUser): string => {
    return `First Name: ${userObj.first_name}. Last Name: ${userObj.last_name}. Age: ${userObj.age}`;
}

goThroughUsers(users);

//---------------------------------------

enum Ingredients {
    flour = "flour",
    beef = "beef",
    salad = "salad",
    cheese = "cheese",
    sauce = "sauce",
    cucumber = "cucumber"
}

interface IProduct {
    id: number,
    name: string,
    price: number,
    currency: string,
    ingredients: Ingredients[],
    type: string,
    available: boolean
}

const products = [
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

const goThroughProducts = (products: IProduct[]) => {
    products.forEach((product: IProduct) => {
        console.log(product);
    });
};

goThroughProducts(products);


//ClassWork 2 
console.log("\nclasswork 2\n");

interface Lengthwise {
    length: number,
}

function loggingIdentity<Type extends Lengthwise>(arg: Type): Type {
    console.log(arg.length);
    return arg;
}

const lengthwiseObj = {length: 10} as Lengthwise;

loggingIdentity(lengthwiseObj);

const secObj = {} as Lengthwise;
loggingIdentity(secObj);

//----------------------------------

interface ICountry {
    country: string,
    abbreviation: string,
    city: string,
    currency_name: string,
    population: number
}

const countries = [
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

const getCountriesNames = (arr: ICountry[]): string => {
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
    return arr.reduce((prev, next) => {
        if(prev === "") {
            return next.country;
        }
        return prev + `, ${next.country}`
    }, "");
    // return arr.reduce((prev, next) => prev += next.country + ", ", "");
}

console.log(getCountriesNames(countries));

const getAllPopulation = (arr: ICountry[]): number => {
    // let sum = 0;
    // arr.forEach(elem => {
    //     sum += elem.population;
    // });
    // return sum;

    return arr.reduce((prev, el) => prev += el.population, 0);
}

console.log("Total population is: ", getAllPopulation(countries));

const sortAllCountries = (arr: ICountry[]): ICountry[] => {
    return arr.sort((a, b) => {
        if (a.country > b.country) {
            return 1
        } else if (a.country < b.country) {
            return -1;
        } else {
            return 0;
        }
    });
}

console.log(sortAllCountries(countries));

const getCurrencies = (arr: ICountry[]): string[] => {
    // let resultArr = new Array();
    // arr.forEach(el => {
    //     resultArr.push(el.currency_name);
    // })
    // return resultArr;

    return arr.map(el => el.currency_name);
}

console.log("Currencies: ", getCurrencies(countries));

const getSortedCities = (arr: ICountry[]): string[] => {
    return arr.map(el => el.city).sort((a, b) => {
        if(a>b) {
            return 1
        } else {
            return -1
        }
    });
}

console.log(getSortedCities(countries));

const getAvgPopulation = (arr: ICountry[]): number => {
    // return arr.reduce((prev, next) => prev + next.population, 0)/arr.length;
    return getAllPopulation(arr)/arr.length;
}

console.log(getAvgPopulation(countries));

//--------------------------------------------------

class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
}

class Fish extends Animal {
    swim = true;
    constructor(name: string, swim: boolean) {
        super(name);
        this.swim = swim;
    }
}

class Predator extends Fish {
    canEatPerson: boolean;

    constructor(name: string, swim: boolean, canEatPerson: boolean) {
        super(name, swim);
        this.canEatPerson = canEatPerson;
    }
}

class Shark extends Predator {
    countOfTeeth: number;
    constructor(name: string, swim: boolean, canEatPerson: boolean, countOfTeeth: number) {
        super(name, swim, canEatPerson);
        this.countOfTeeth = countOfTeeth;
    }
}

let shark = new Shark("Sharkinson", true, true, 100);
console.log(shark);

//---------------------------------



export {}