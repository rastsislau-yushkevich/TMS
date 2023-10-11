function* generator() {
    yield console.log(1);
    yield console.log(2);
    yield console.log(3);
}


const gen = generator();

// generator().next();
// generator().next();
// generator().next();

console.log(gen.next()); // { value: undefined, done: false }
console.log(gen.next()); // { value: undefined, done: false }
console.log(gen.next()); // { value: undefined, done: false }
console.log(gen.next()); // { value: undefined, done: true }

//The next() method returns an object with a value property containing the yielded value and a done property which indicates whether the generator has yielded its last value, as a boolean.

function* generator1(i) {
    yield i+1;
    yield i*2;
    yield i-1;
}

const gen1 = generator1(4);
console.log(generator1());

console.log(gen1.next()); // { value: 5, done: false }
console.log(gen1.next()); // { value: 8, done: false }
console.log(gen1.next()); // { value: 3, done: false }
console.log(gen1.next()); // { value: undefined, done: true }

// value - текущее значение переменной (ее значение каждый раз возвращается к исходному, переданному в аргументы), done: false, если yieldы не закончились. После последнего yielda done: true
