// let num = +prompt("Enter number", "1");


// if (num > 0) {
//     alert(1);
// } else if (num < 0) {
//     alert(-1);
// } else if (num == 0) {
//     alert(0);
// } else {
//     alert("You are writing NaN");
// }

function DNAtoRNA(dna) {
    // create a function which returns an RNA sequence from the given DNA sequence
    
    let dnaarr = Array.from(dna);
    
    for(let i = 0; i<dnaarr.length; i++) {
      if (dnaarr[i] == "T") {
            dnaarr[i] = "U";
        }
    }
    return dnaarr.join("");
}

console.log(DNAtoRNA("GCAT"));


// || ищет первое истинное (если находит, то выводит истину, если не находит, то выводит ложное) , && ищет первое ложное (если находит, то выводит его, если нет -- последнее истинное)

let age = 99;

if (age > 14 && age <90) {
    console.log("It fits");
} else {
    console.log("It does not fit");
}

for(let i = 2; i<11; i+=2) {
    console.log(i);
}

let k = "asd";

switch(k) {
    case "Mother":
        console.log("Mother");
        break;
    case "Father":
        console.log("Father");
        break;
    case "Sister":
        console.log("Sister");
        break;
    case "Brother":
        console.log("Brother");
        break;
    case "Grandmother":
        console.log("Grandmother");
        break;
    default:
        console.log("1");
}