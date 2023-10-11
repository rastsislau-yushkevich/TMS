var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var _this = this;
var usersNew = [
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
// Task 1
var getCommonFIO = function (arr) { return arr.reduce(function (prev, el, index) {
    if (index === 0) {
        return el.first_name + ' ' + el.last_name;
    }
    else {
        return prev + ', ' + el.first_name + ' ' + el.last_name;
    }
}, ''); };
var getCommonFioSmart = function (arr) { return arr.map(function (el) { return el.first_name + ' ' + el.last_name; }).join(', '); };
console.log(getCommonFioSmart(usersNew));
// Task 2
var getSortedEmails = function (arr) { return arr.map(function (el) { return el.email; }).sort(); };
console.log(getSortedEmails(usersNew));
var getShortUsers = function (arr) {
    var shortUsers = arr.map(function (el) { return ({
        id: el.id,
        username: el.first_name + ' ' + el.last_name
    }); });
    return shortUsers;
};
// Task 4
var getYoungUsers = function (arr) {
    return arr.filter(function (el) { return el.age < 40; }).sort(function (a, b) { return a.age - b.age; });
};
console.log(getYoungUsers(usersNew));
var getAgeObject = function (arr) {
    var sum = 0, over18 = 0, over30 = 0, over40 = 0;
    arr.forEach(function (el) {
        var age = el.age;
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
        over18: over18,
        over30: over30,
        over40: over40
    });
};
var getAgeObjectReduce = function (arr) {
    var ageInfo = arr.reduce(function (prev, el) {
        var age = el.age;
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
    }, { sum: 0, over18: 0, over30: 0, over40: 0 });
    var sum = ageInfo.sum, over18 = ageInfo.over18, over30 = ageInfo.over30, over40 = ageInfo.over40;
    return ({
        over18: over18,
        over30: over30,
        over40: over40,
        average: sum / arr.length
    });
};
console.log(getAgeObjectReduce(usersNew));
// Task 6 
var getSurnameObj = function (arr) {
    return arr.reduce(function (prev, el) {
        var last_name = el.last_name;
        var char = last_name.charAt(0).toLowerCase();
        var prevCharValue = prev[char];
        if (prevCharValue) {
            prev[char].push(last_name);
        }
        else {
            prev[char] = [last_name];
        }
        return prev;
    }, {});
};
console.log(getSurnameObj(usersNew));
// test fetch
var getUsers = function () { return __awaiter(_this, void 0, void 0, function () {
    var resp;
    return __generator(this, function (_a) {
        resp = fetch('https://jsonplaceholder.typicode.com/users');
        console.log(resp);
        return [2 /*return*/];
    });
}); };
getUsers();
