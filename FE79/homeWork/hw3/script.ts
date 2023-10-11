const users = [
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
]

interface IUser {
    name: string,
    phone: string,
    email: string,
    animals?: string[],  //удалю - ошибка, что таких полей нет, сделаю обязательными - ошибка, что не все объекты удовлетворяют интерфейсу
    cars?: string[],
    hasChildren: boolean,
    hasEducation: boolean
}

//Task 1
console.log("Task 1\n");

const getAllUserNames = <Type extends IUser>(arr: Type[]): string => {
    return arr.reduce((prev, next) => {
        if(prev === "") {
            return next.name;
        } else {
            return prev + `, ${next.name}`;
        }
    }, "");
}

console.log("Names of all users: ", getAllUserNames(users));

//Task 2 

console.log("\nTask 2\n");

const getCarsAmount = <Type extends IUser>(arr: Type[]): number => {
    return arr.reduce((prev, next) => {
        if(next.cars !== undefined) {
            return prev += next.cars.length;
        } else {
            return prev;
        }
    }, 0)
}

console.log("The total amount of cars is: ", getCarsAmount(users));

//Task 3
console.log("\nTask 3\n");

const filterByEducation = <Type extends IUser>(arr: Type[]): Type[] => {
    return arr.filter(elem => elem.hasEducation == true);
}

console.log("Users with education: ",  filterByEducation(users));

//Task 4
console.log("\nTask 4\n");

const filterByAnimals = <Type extends IUser>(arr: Type[]): Type[] => {
    return arr.filter(elem => elem.animals !== undefined);
}

console.log("Users with animals: ", filterByAnimals(users));

//Tasks 3 and 4 with one function
console.log("\nTasks 3 and 4 with one function\n");

const filterByAvailability = <Type extends IUser, Key extends keyof Type>(arr: Type[], key: Key): Type[] => {
    return arr.filter(elem => elem[key]);
}

console.log("Users with education: ",  filterByAvailability(users, "hasEducation"));
console.log("Users with animals: ",  filterByAvailability(users, "animals"));

//Task 5

console.log("\nTask 5\n");

const getAllCarNames = <Type extends IUser>(arr: Type[]): string => {
    return arr.reduce((prev, next) => {
        if(next.cars === undefined) {
            return prev;
        } else {
            if(prev === "") {
                return next.cars.join(", ");
            } else {
                return prev + `, ${next.cars.join(", ")}`;
            }
        }
    }, "")
}

console.log("All car names are: ", getAllCarNames(users));