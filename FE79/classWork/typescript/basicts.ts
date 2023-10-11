console.log('hello');
interface Rect {
    x: number,
    y: number,
    z?: number
}

const obj1 = {x: 10, y: 15} as Rect;
const obj2 = {x: 11, y: 11, z: 11};

function calc(obj: Rect): string {
    if (obj.z) {
        return 'V = ' +( obj.x * obj.y * obj.z )
    } else {
        return 'S = ' +( obj.x * obj.y )
    }
}
 console.log(calc(obj1));
 console.log(calc(obj2));

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

interface IUser {
    id: number,
    age: number,
    email: string, 
    first_name: string,
    last_name: string
}

const goThroughtUsers = (arr: IUser[]): void => {
    arr.forEach((user: IUser) => {
        console.log(getName(user))
    })
}

const getName = (user: IUser): string => {
    return `${user.first_name} ${user.last_name}, ${user.age} age`
}

goThroughtUsers(users);

enum Ingredients {
    flour = "flour",
    beef = "beef",
    salad = "salad",
    cheese = "cheese",
    sauce = "sauce",
    cucumber = "cucumber"
}

const products = [
	{
        id: 2,
        name: "Burger Lite",
        price: 2.3,
        currency: "euro",
        ingredients: [Ingredients.flour, Ingredients.beef, Ingredients.cheese, Ingredients.sauce],
		type: "burger",
		available: true
    },
];



interface IBurger {
    id: number,
    name: string,
    price: number,
    currency: string,
    ingredients: Ingredients[],
    type: string,
    available: boolean
}

const getBurger = (burger: IBurger) => {
    console.log(burger);
}

getBurger(products[0])

interface Lengthwise {
    length: number;
}

function loggingIdentity<Type extends Lengthwise>(arg: Type):Type {
    console.log(arg.length);
    return arg;
}

// ---First obj
loggingIdentity({ length: 10 });

// ---Second object
const secObj = {} as Lengthwise;
loggingIdentity(secObj)

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

interface ICountry {
    country: string,
    abbreviation: string,
    city: string,
    currency_name: string,
    population: number
};

// Task 1
// reduce
const getCountryNames = (arr: ICountry[]): string => {
    const resultStr = arr.reduce((prevValue, el) => {
        if (prevValue === '') {
            return el.country
        }
        return prevValue + `, ${el.country}`
    }, '');
    return resultStr;
}

// forEach
const getCountryNamesByForEach = (arr: ICountry[]): string => {
    let resultStr = '';
    arr.forEach((el, index) => {
        if (index === 0){
            resultStr += el.country;
        } else {
            resultStr += `, ${el.country}`
        }
    })
    return resultStr;
}

console.log('By reduce: ' + getCountryNames(countries));

//Task 2
// reduce
const getPopulation = (arr: ICountry[]): number => {
    const resultPopulation = arr.reduce((prevValue, el) => {
        return prevValue + el.population;
    }, 0);
    return resultPopulation;
}
console.log('Population is: ', getPopulation(countries));
// forEach 
const getPopulationByForEach = (arr: ICountry[]): number => {
    let count = 0;
    arr.forEach((el) => {
        count += el.population;
    })
    return count;
}
console.log('Population by forEach is: ', getPopulationByForEach(countries));

//Task 3
const sortCountries = (arr: ICountry[]): ICountry[] => {
    return arr.sort((a, b) => {
        if (a.country > b.country){
            return 1
        } else {
            return -1
        }
    })
}
console.log('Sorted: ',sortCountries(countries));

// Classes

class Animal {
    name: string;
    constructor(name: string) {
        this.name = name
    }
}

class Fish extends Animal {
    swim = true;
    constructor(name: string) {
        super(name)
    }
}

class Predator extends Fish {
    protected canEatPerson: boolean;
    constructor(name: string, canEatPerson: boolean) {
        super(name);
        this.canEatPerson = canEatPerson;
    }
}

class Shark extends Predator {
    countOfTeeth: number;
    private hiddenProperty = 'Tsss';
    readonly constantValue: string;
    constructor (name: string, canEatPerson: boolean, countOfTeeth: number) {
        super(name, canEatPerson);
        this.countOfTeeth = countOfTeeth;
        this.constantValue = "It's me, constant"
    }

    sayTs() {
        console.log(this.hiddenProperty);
    }

    getAvaliableEttingPerson() {
        return this.canEatPerson;
    }
}

const shark = new Shark('Great White', true, 1000000);
console.log(shark.constantValue);

shark.countOfTeeth = 2000000;

// Task 4
const getMoneyCountries = (arr: ICountry[]): string[] => arr.map((el) => el.currency_name)
console.log(getMoneyCountries(countries))

 // Task 5
const sortedCities = (arr: ICountry[]): string[] => {
    const cities = arr.map((el) => el.city);
    return cities.sort((a, b) => {
        if (a > b) {
            return 1
        } else {
            return -1
        }
    })
}
console.log(sortCountries(countries));

// Task 6
const getAveragePopulation = (arr: ICountry[]): number => {
    return getPopulation(arr)/arr.length
}
console.log(getAveragePopulation(countries))