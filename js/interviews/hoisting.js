'use strict'

// vars
i = 10;

function foo () {
    var i = 15;
}

console.log(i); //i = 10

var i = 5;

console.log(i);//i = 5

//-------------------------

var x = 1;
var y;
console.log(x + " " + y); //1 undefined
y=2

var x = 1;
y = 2;
console.log(x + " " + y); //1 2
var y = 3;

//---------------------------