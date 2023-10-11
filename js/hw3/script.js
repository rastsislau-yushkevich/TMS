//Task 1
console.log("Task 1");
function getSum(param) {
    let sum = 0;

    for(let i = 0; i <= param; i++) {
        sum += i;
    }
    return sum;
};

console.log(getSum(100));

//Task 2
console.log("Task 2");
function countCredit(loan) {
    return loan * 0,17 * 5;
};

console.log(countCredit(100));

//Task 3
console.log("Task 3");
function trimString(str, from, until) {
    return(str.slice(from, until));
};

console.log(trimString("Rastsislau", 2, 5));

//Task 4
console.log("Task 4");
function getSumNumbers(num) {
    let sum = 0;

    for(let i = 0; i < Array.from(String(num), Number).length; i++) {
        sum += Array.from(String(num), Number)[i];
    }
    return sum;
};

console.log(getSumNumbers(2021));

//Task 5
console.log("Task 5");
function getSum1(a, b) {
    let sum = 0;

    if (a == b) {
        return a;
    } else {
        for(let i = a; i <= b; i++) {
            sum += i;
        }
        return sum;
    };
};

console.log(getSum1(0,100));

//Task 6
console.log("Task 6");
function fooboo(bool, foo, boo) {
    if(bool) {
        return foo();
    } else {
        return boo();
    };
};

function foo() {
    return "foo";
};

function boo() {
    return "boo";
};

console.log(fooboo(true, foo, boo));

//Advanced
//Task 1
console.log("Task 1");
function isTriangle(a, b, c) {
    if (a < b + c && b < a + c && c < a + b) {
        return true;
    } else {
        return false;
    };
};

console.log(isTriangle(3,100,5));

//Task 2
console.log("Task 2");
function splitChoc(n, m) {
    if (n * m > 0) {
        return n * m - 1;
    } else return 0;
};

console.log(splitChoc(5,8));

//Task 3
console.log("Task 3");

const taxRate = 0.2;
const phonePrice = 100;
const accPrice = 20;
let amount = 0;
let balance = 1000;

function countPhonePrice(balance, amount, taxRate, phonePrice, accPrice, countTax) {
    let totalPrice = 0;
    while (totalPrice < balance) {
        amount++;
        totalPrice = (countTax(taxRate, phonePrice, accPrice) + phonePrice + accPrice) * amount;
        console.log(formatPrice(totalPrice));
    }
}

function countTax(taxRate, phonePrice, accPrice) {
    return taxRate * (phonePrice + accPrice);
}

function formatPrice(totalPrice) {
    return "$" + totalPrice.toFixed(2);
}

console.log(countPhonePrice(balance, amount, taxRate, phonePrice, accPrice, countTax));