// function removeEveryOther(arr){
//     return arr.filter((elem, index) => {
//         return index % 2 == 0;
//     });
// }

// console.log(removeEveryOther([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// function sumArray(array) {
//   if(array == null || array.length == 0) {
//     return 0;
//   } else {
//     let min = array.indexOf(Math.min(...array));
//     array.splice(min, 1);
//     let max = array.indexOf(Math.max(...array));
//     array.splice(max, 1);
//     let sum = array.reduce((prev, next) => prev + next, 0);

//     return sum;
//   }
// }

// console.log(sumArray([1, 2, 3, 4, 5]));

// function find_average(array) {
//     if(array == null || array.length == 0) {
//         return 0;
//     } else {
//         return array.reduce((a, b) => a + b)/array.length;
//     }
// }

// console.log(find_average([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));


// function isDivideBy(number, a, b) {
//    return number % a == 0 && number % b == 0 ? true : false;
// }

// console.log(isDivideBy(-12, 2, -5));

// function feast(beast, dish) {
//   if(beast.substr(0, 1) == dish.substr(0, 1) && beast.substr(beast.length - 1, 1) == dish.substr(dish.length - 1, 1)) {
//     return true;
//   } else {
//     return false;
//   }
// }

// console.log(feast("beast", "bist"));

// var summation = function (num) {
//   let sum = 0;
//   for(i = 0; i <= num; i++ ) {
//     sum += i;
//   }
//   return sum;
// }

// console.log(summation(4));

// function validatePIN (pin) {
//   let reg = new RegExp("ˆ\wˆ\W")
// }

