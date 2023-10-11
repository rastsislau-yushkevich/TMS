const div = document.body.firstElementChild;

console.log(document.body.lastElementChild);
console.log("-----------");

console.log("div", div);
console.log("-----------");

const ul = div.nextElementSibling;

console.log("ul", ul);
console.log("-----------");

const li = ul.lastElementChild;
console.log("li", li);

console.log("-----------");

console.log("li", document.body.firstElementChild.nextElementSibling.lastElementChild);
console.log("-----------");

const div1 = document.getElementById("div1");

console.log("div", document.getElementById("div1"));
console.log("-----------");

console.log("all li", document.querySelectorAll("li"));
console.log("-----------");

console.log("1st li", document.querySelectorAll("li")[1]);
console.log("-----------");

console.log("1st li", document.querySelector("li"));
console.log("-----------");

const divMatches = div1.matches("a"); //false
console.log("divMatches", divMatches)
console.log("-----------");

const divClosest = div1.closest("#div1"); //возвращает ближайшего предка элемента с заданным селектором или сам элемент
console.log("divClosest", divClosest);
console.log("-----------");

const lis = document.getElementsByTagName("li");
console.log("lis", lis);
console.log("-----------");

const divColl = document.getElementsByClassName("hola");
console.log("divColl", divColl);
console.log("-----------");

const classDivQS = document.querySelectorAll(".hola");
console.log("classDivQS", classDivQS); //output length 6

const classDivGEBC = document.getElementsByClassName("hola");
console.log("classDivGEDC", classDivGEBC); //output length 6

const div2 = document.getElementById("div2").classList = "hola";
console.log("new");
console.log("classDivQS", classDivQS); //output length 6
console.log("classDivGEDC", classDivGEBC); //output length 7
console.log("-----------");

let elem = document.body;

console.log(elem.nodeType);
console.log(elem.firstChild.nodeType);
console.log(elem.nodeName);
console.log(elem.firstChild.nodeName);

console.log("outer", div1.outerHTML); //возвращает элемент + его содержимое
console.log("inner", div1.innerHTML = "lalalalal"); //возвращает содержимое элемента (можно даже что-то изменить)
