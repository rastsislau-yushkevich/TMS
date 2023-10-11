const usersNew = [
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

interface IUserNew {
    id: number,
    age: number,
    email: string, 
    first_name: string,
    last_name: string,
    avatar: string,
}
// Task 1
const getCommonFIO = (arr: IUserNew[]): string => arr.reduce((prev, el, index) => {
    if (index === 0) {
        return el.first_name + ' ' + el.last_name;
    } else {
        return prev + ', '+ el.first_name + ' ' + el.last_name;
    }
}, '');

const getCommonFioSmart = (arr: IUserNew[]): string => arr.map((el) => el.first_name + ' ' + el.last_name).join(', ');
console.log(getCommonFioSmart(usersNew));

// Task 2
const getSortedEmails = (arr: IUserNew[]): string[] => arr.map((el) => el.email).sort();
console.log(getSortedEmails(usersNew));

//Task 3
interface IShortInfoUser {
    id: number,
    username: string,
}

const getShortUsers = (arr: IUserNew[]): IShortInfoUser[] => {
    const shortUsers = arr.map((el) => ({
        id: el.id,
        username: el.first_name + ' ' + el.last_name,
    }))
    return shortUsers;
}

// Task 4
const getYoungUsers = (arr: IUserNew[]): IUserNew[] =>
    arr.filter((el) => el.age < 40).sort((a, b) => a.age - b.age)
console.log(getYoungUsers(usersNew));

// Task 5 
interface IAge {
    average: number,
    over18: number,
    over30: number,
    over40: number,
}
const getAgeObject = (arr: IUserNew[]): IAge => {
    let sum = 0, over18 = 0, over30 = 0, over40 = 0;
    arr.forEach((el) => {
        const { age } = el;
        sum += age;
        if (age > 18) {
            over18++;
            if (age > 30) {
                over30++;
                if (age > 40) {
                    over40++;
                }
            }
        }
    });
    return ({
        average: sum / arr.length,
        over18,
        over30,
        over40
    })
}

const getAgeObjectReduce = (arr: IUserNew[]): IAge => {
    const ageInfo = arr.reduce((prev, el) => {
        const { age } = el;
        prev.sum += age;
        if (age > 18) {
            prev.over18++;
            if (age > 30) {
                prev.over30++;
                if (age > 40) {
                    prev.over40++;
                }
            }
        }
        return prev;
    }, {sum: 0, over18: 0, over30: 0, over40: 0})
    const { sum, over18, over30, over40 } = ageInfo;
    return ({
        over18,
        over30,
        over40,
        average: sum/arr.length
    })
}

console.log(getAgeObjectReduce(usersNew));

// Task 6 

const getSurnameObj = (arr: IUserNew[]) => {
    arr.reduce((prev, el) => {
        const { last_name } = el;
        const char = last_name.charAt(0).toLowerCase();
        const prevCharValue = prev[char];
        if (prevCharValue) {
            prev[char].push(last_name);
        } else {
            prev[char] = [last_name];
        }
        return prev;
    }, {});
}

console.log(getSurnameObj(usersNew));
