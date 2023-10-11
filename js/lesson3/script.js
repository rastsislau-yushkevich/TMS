// console.log(findMin(57, 5));
// console.log(findMin());
// console.log(findMin);

// function countPositivesSumNegatives(input) {
//     Array.from(input);


//     return;
// }

// let age = prompt("What's your age again?", 15)/1;
// let time = prompt("What is you work time?", 10)/1;

// let age = Number(prompt("What's your age again?", 15));
// let time = Number(prompt("What is you work time?", 10));

// function getWage(age, time, countWageAdult, countWageYouth) {
//     if(age >= 18) {
//         // alert("Your wage is: " + countWageAdult(time))
//         alert(`Your wage is:  ${countWageAdult(time)}`);
//     } else {
//         // alert("Your wage is: " + countWageYouth(time));
//         alert(`Your wage is:  ${countWageYouth(time)}`);
//     }
// }

// function countWageAdult(time) {
//     return 20 * time;
// }

// function countWageYouth(time) {
//     return 10 * time;
// }

// getWage(age, time, countWageAdult, countWageYouth);



let a = Number(prompt("Enter a", 3));
let b = Number(prompt("Enter b", 4));
let c = Number(prompt("Enter c", 5));

function squareRight(a, b) {
    return a*b/2;
}

function squareEqual(a) {
    return a * Math.pow(3, 1/2)/4;
}

function perimeter(a, b, c) {
    return a+b+c;
}

function isTriangle(a, b, c) {
    if (a < b + c && b < a + c && c < a + b) {
        return true;
    } else {
        return false;
    }
}

function isRight(a, b, c) {
    if (Math.pow(a, 2) + Math.pow(b, 2) === Math.pow(c, 2) || Math.pow(a, 2) + Math.pow(c, 2) === Math.pow(b, 2) || Math.pow(c, 2) + Math.pow(b, 2) === Math.pow(a, 2)) {
        return true;
    } else {
        return false;
    }
}

function isEqual(a, b, c) {
    // if(a == b == c) {
    //     return true;
    // } else {
    //     return false;
    // }

    return a === b === c;
}

function getResult(a, b, c, squareRight, squareEqual, perimeter, isTriangle, isEqual, isRight) {
    if(isTriangle(a, b, c)) {
        debugger;
        if(isEqual(a, b, c)) {
            squareEqual(a);
            alert("The equal square is: " + squareEqual(a));
        } else if(isRight(a, b, c)) {
            squareRight(a, b);
            alert("The right square is: " + squareRight(a, b));
        } else {
            perimeter(a, b, c);
            alert("The perimeter is: " + perimeter(a, b, c));
        }
    } else {
        alert("This is not a triangle");
    }
}

getResult(a, b, c, squareRight, squareEqual, perimeter, isTriangle, isEqual, isRight);

// function findTwoMin(a, b, c) {
//     let arr = [a, b, c].sort;
//     return Array.toString(arr[0].toString + " " + arr[1].toString)
// }