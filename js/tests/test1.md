# 1

```javascript
[[0, 1], [2, 3]].reduce(
  (acc, cur) => {
    return acc.concat(cur);
  },
  [1, 2]
);
```

- A: `[0, 1, 2, 3, 1, 2]`
- B: `[6, 1, 2]`
- C: `[1, 2, 0, 1, 2, 3]`
- D: `[1, 2, 6]`

<details><summary><b>Ответ</b></summary>
<p>

#### Ответ: C

`[1, 2]` - начальное значение, с которым инициализируется переменная `acc`. После первого прохода `acc` будет равно `[1,2]`, а `cur` будет `[0,1]`. После конкатенации результат будет `[1, 2, 0, 1]`.

Затем `acc` равно `[1, 2, 0, 1]`, а `cur` равно `[2, 3]`. После слияния получим `[1, 2, 0, 1, 2, 3]`.

</p>
</details>

# 2

```javascript
const bird = {
  size: "small"
};

const mouse = {
  name: "Mickey",
  small: true
};
```

- A: `mouse.bird.size`
- B: `mouse[bird.size]`
- C: `mouse[bird["size"]]`
- D: Все варианты валидны

<details><summary><b>Ответ</b></summary>
<p>

#### Ответ: A

В JavaScript все ключи объекта являются строками (кроме Symbol). И хотя мы не _набираем_ их как строки, они всегда преобразовываются к строкам под капотом.

JavaScript интерпретирует (или распаковывает) операторы. При использовании квадратных скобок JS замечает `[` и продолжает пока не встретит `]`. Только после этого он вычислит то, что находится внутри скобок.

`mouse[bird.size]`: Сперва определяется `bird.size`, которое равно `"small"`. `mouse["small"]` возвращает `true`.

Но с записью через точку так не происходит. У `mouse` нет ключа `bird`. Таким образом, `mouse.bird` равно `undefined`. Затем мы запрашиваем ключ `size`, используя точечную нотацию: `mouse.bird.size`. Так как `mouse.bird` это `undefined`, мы запрашиваем `undefined.size`. Это не является валидным, и мы получаем ошибку типа `Cannot read property "size" of undefined`.

</p>
</details>

# 3

```javascript
const randomValue = 21;

function getInfo() {
	console.log(typeof randomValue);
	const randomValue = "Lydia Hallie";
}

getInfo();
```

- A: `"number"`
- B: `"string"`
- C: `undefined`
- D: `ReferenceError`

<details><summary><b>Ответ</b></summary>
<p>

#### Ответ: D

Переменные, объявленные с ключевым словом `const`, не имеют ссылки до их инициализации: это называется _временная мертвая зона_. В функции `getInfo` переменная `randomValue` находится в области видимости `getInfo`. В строке, где мы хотим записать значение `typeof randomValue`, переменная `randomValue` еще не инициализирована: выдается `ReferenceError`! Движок не пошел по цепочке областей видимости, так как мы объявили переменную `randomValue` в функции `getInfo`.

</p>
</details>

# 4

```javascript
function sayHi() {
  console.log(name);
  console.log(age);
  var name = "Lydia";
  let age = 21;
}

sayHi();
```

- A: `Lydia` и `undefined`
- B: `Lydia` и `ReferenceError`
- C: `ReferenceError` и `21`
- D: `undefined` и `ReferenceError`

<details><summary><b>Ответ</b></summary>
<p>

#### Ответ: D

Внутри функции мы сперва определяем переменную `name` с помощью ключевого слова `var`. Это означает, что переменная будет поднята (область памяти под переменную будет выделена во время фазы создания) со значением `undefined` по умолчанию, до тех пора пока исполнение кода не дойдет до строчки, где определяется переменная. Мы еще не определили значение `name` когда пытаемся вывести её в консоль, поэтому в консоли будет `undefined`.

Переменные, определенные с помощью `let` (и `const`), также поднимаются, но в отличие от `var`, не <i>инициализируются</i>. Доступ к ним не возможен до тех пор, пока не выполнится строка их определения (инициализации). Это называется "временная мертвая зона". Когда мы пытаемся обратиться к переменным до того момента как они определены, JavaScript выбрасывает исключение `ReferenceError`.

</p>
</details>

# 5

```javascript
function getAge() {
  "use strict";
  age = 21;
  console.log(age);
}

getAge();
```

- A: `21`
- B: `undefined`
- C: `ReferenceError`
- D: `TypeError`

<details><summary><b>Ответ</b></summary>
<p>

#### Ответ: C

Используя `"use strict"`, можно быть уверенным, что мы по ошибке не побъявим глобальные переменные. Мы ранее нигде не объявляли переменную `age`, поэтому с использованием `"use strict"` возникнет `ReferenceError`. Без использования `"use strict"` ошибки не возникнет, а переменная `age` добавится в глобальный объект.

</p>
</details>

# 6

```javascript
+true;
!"Lydia";
```

- A: `1` и `false`
- B: `false` и `NaN`
- C: `false` и `false`

<details><summary><b>Ответ</b></summary>
<p>

#### Ответ: A

Унарный плюс приводит операнд к числу. `true` это `1`, а `false` это `0`.

Строка `'Lydia'` это "истинное" значение. На самом деле мы спрашиваем "является ли это истинное значение ложным"? Ответ: `false`.

</p>
</details>

# 7

```javascript
var num = 8;
var num = 10;

console.log(num);
```

- A: `8`
- B: `10`
- C: `SyntaxError`
- D: `ReferenceError`

<details><summary><b>Ответ</b></summary>
<p>

#### Ответ: B

С помощью ключевого слова `var` можно определять сколько угодно переменных с одним и тем же именем. Переменная будет хранить последнее присвоенное значение.

Но такой трюк нельзя проделать с `let` и `const`, т.к. у них блочная область видимости.

</p>
</details>

# 8

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Ответ</b></summary>
<p>

#### Ответ: C

JavaScript это **динамически типизированный язык**: мы не определяем тип переменных. Переменные могут автоматически быть преобразованы из одного типа в другой без нашего участия, что называется _неявным приведением типов_. **Приведение** это преобразование из одного типа в другой.

В этом примере JavaScript сконвертировал число `1` в строку, чтобы операция внутри функции имела смысл и вернула значение. Во время сложения числа (`1`) и строки (`'2'`) число преобразовывается к строке. Мы можем конкатенировать строки вот так: `"Hello" + "World"`. Таким образом, `"1" + "2"` возвращает `"12"`.

</p>
</details>

# 9

```javascript
console.log(typeof typeof 1);
```

- A: `"number"`
- B: `"string"`
- C: `"object"`
- D: `"undefined"`

<details><summary><b>Ответ</b></summary>
<p>

#### Ответ: B

`typeof 1` возвращает `"number"`.
`typeof "number"` возвращает `"string"`

</p>
</details>

# 10

```javascript
function sayHi() {
  return (() => 0)();
}

typeof sayHi();
```

- A: `"object"`
- B: `"number"`
- C: `"function"`
- D: `"undefined"`

<details><summary><b>Ответ</b></summary>
<p>

#### Ответ: B

Функция `sayHi` возвращает значение, возвращаемое из немедленно вызываемого функционального выражения (IIFE). Результатом является `0` типа `"number"`.

Для информации: в JS 8 встроенных типов: `null`, `undefined`, `boolean`, `number`, `string`, `object`, `symbol` и `bigint`. `"function"` не является отдельным типом, т.к. функции являются объектами типа `"object"`.
</p>
</details>

# 11

```javascript
!!null;
!!"";
!!1;
```

- A: `false` `true` `false`
- B: `false` `false` `true`
- C: `false` `true` `true`
- D: `true` `true` `false`

<details><summary><b>Ответ</b></summary>
<p>

#### Ответ: B

`null` - "ложный". `!null` возвращает `true`. `!true` возвращает `false`.

`""` - "ложный". `!""` возвращает `true`. `!true` возвращает `false`.

`1` - "истинный". `!1` возвращает `false`. `!false` возвращает `true`.

</p>
</details>

# 12

```javascript
let number = 0;
console.log(number++);
console.log(++number);
console.log(number);
```

- A: `1` `1` `2`
- B: `1` `2` `2`
- C: `0` `2` `2`
- D: `0` `1` `2`

<details><summary><b>Ответ</b></summary>
<p>

#### Ответ: C

**Постфиксный** унарный оператор `++`:

1. Возвращает значение (`0`)
2. Инкрементирует значение (теперь число равно `1`)

**Префиксный** унарный оператор `++`:

1. Инкрементирует значение (число теперь равно `2`)
2. Возвращает значение (`2`)

Результат: `0 2 2`.

</p>
</details>

# 13

```javascript
function checkAge(data) {
  if (data === { age: 18 }) {
    console.log("Ты взрослый!");
  } else if (data == { age: 18 }) {
    console.log("Ты все еще взрослый.");
  } else {
    console.log(`Хмм.. Кажется, у тебя нет возраста.`);
  }
}

checkAge({ age: 18 });
```

- A: `Ты взрослый!`
- B: `Ты все еще взрослый.`
- C: `Хмм.. Кажется, у тебя нет возраста.`

<details><summary><b>Ответ</b></summary>
<p>

#### Ответ: C

В операциях сравнения примитивы сравниваются по их _значениям_, а объекты по _ссылкам_. JavaScript проверяет, чтобы объекты указывали на одну и ту же область памяти.

Сравниваемые объекты в нашем примере не такие: объект, переданный в качестве параметра, указывает на другую область памяти, чем объекты, используемые в сравнениях.

Поэтому `{ age: 18 } === { age: 18 }` и `{ age: 18 } == { age: 18 }` возвращают `false`.

</p>
</details>

# 14

```javascript
for (let i = 1; i < 5; i++) {
  if (i === 3) continue;
  console.log(i);
}
```

- A: `1` `2`
- B: `1` `2` `3`
- C: `1` `2` `4`
- D: `1` `3` `4`

<details><summary><b>Ответ</b></summary>
<p>

#### Ответ: C

Оператор `continue` пропускает итерацию, если условие возвращает `true`.

</p>
</details>

# 15


```javascript
function bark() {
  console.log("Woof!");
}

bark.animal = "dog";
```

- A: Ничего, всё в порядке!
- B: `SyntaxError`. Нельзя добавлять свойства функциям таким способом.
- C: `undefined`
- D: `ReferenceError`

<details><summary><b>Ответ</b></summary>
<p>

#### Ответ: A

В JavaScript это возможно, т.к. функции это объекты! (Всё есть объект кроме примитивов).

Функция — это специальный тип объекта, который можно вызвать. Кроме того, функция — это объект со свойствами. Свойство такого объекта нельзя вызвать, так как оно не является функцией.

</p>
</details>

# 16

```javascript
const sum = eval("10*10+5");
```

- A: `105`
- B: `"105"`
- C: `TypeError`
- D: `"10*10+5"`

<details><summary><b>Ответ</b></summary>
<p>

#### Ответ: A

`eval` выполняет код, переданный в виде строки. Если это выражение (как в данном случае), то вычисляется выражение. Выражение `10 * 10 + 5` вернет число `105`.

</p>
</details>

# 17

```javascript
function getInfo(member, year) {
  member.name = "Lydia";
  year = 1998;
}

const person = { name: "Sarah" };
const birthYear = "1997";

getInfo(person, birthYear);

console.log(person, birthYear);
```

- A: `{ name: "Lydia" }, "1997"`
- B: `{ name: "Sarah" }, "1998"`
- C: `{ name: "Lydia" }, "1998"`
- D: `{ name: "Sarah" }, "1997"`

<details><summary><b>Ответ</b></summary>
<p>

#### Ответ: A

Аргументы передаются _значением_, если их значение не является объектом, то они передаются _ссылкой_. `birthYear` передается по значению, поскольку это строка, а не объект. Когда мы передаем аргументы по значению, создается _копия_ этого значения (см. вопрос 46).

Переменная `birthYear` имеет ссылку на значение `"1997"`. Аргумент `year` также имеет ссылку на значение` "1997" `, но это не то же самое значение, на которое имеется ссылка для `birthYear`. Когда мы обновляем значение `year`, устанавливая `year` равным `"1998"`, мы обновляем только значение `year`. `birthYear` по-прежнему равно `"1997"`.

Значение `person` является объектом. Аргумент `member` имеет (скопированную) ссылку на _тот же_ объект. Когда мы изменяем свойство объекта, на который `member` ссылается, значение `person` также будет изменено, поскольку они оба имеют ссылку на один и тот же объект. Свойство `name` объекта `person` теперь равно значению `"Lydia"`.

</p>
</details>

# 18

```javascript
let num = 10;

const increaseNumber = () => num++;
const increasePassedNumber = number => number++;

const num1 = increaseNumber();
const num2 = increasePassedNumber(num1);

console.log(num1);
console.log(num2);
```

- A: `10`, `10`
- B: `10`, `11`
- C: `11`, `11`
- D: `11`, `12`

<details><summary><b>Ответ</b></summary>
<p>

#### Ответ: A

Унарный оператор `++` _сначала возвращает_ значение операнда, _затем приращивает_ значение операнда. Значение `num1` равно `10`, так как функция увеличений вначале возвращает значение `num`, которое равно `10`, и только затем увеличивает значение `num`.

`num2` - это `10`, так как мы передали `num1` в `incpasePassedNumber`. `number` равно `10` (значение `num1`. Опять же, унарный оператор `++` _сначала возвращает_ значение операнда, _затем увеличивает_ значение операнда. Значение `number` равно `10`, поэтому `num2` равно `10`.

</p>
</details>

# 19

```javascript
const groceries = ["banana", "apple", "peanuts"];

if (groceries.indexOf("banana")) {
	console.log("We have to buy bananas!");
} else {
	console.log(`We don't have to buy bananas!`);
}
```

- A: We have to buy bananas!
- B: We don't have to buy bananas
- C: `undefined`
- D: `1`

<details><summary><b>Ответ</b></summary>
<p>

#### Ответ: B

Мы передали условие `groceries.indexOf("banana")` в оператор `if`. `groceries.indexOf("banana")` возвращает `0`, что является ложным значением. Поскольку условие в операторе `if` ложно, выполняется код в блоке `else`, и в лог выводится ``We don't have to buy bananas!``.

</p>
</details>

# 20

```javascript
const shape = {
  radius: 10,
  diameter() {
    return this.radius * 2;
  },
  perimeter: () => 2 * Math.PI * this.radius
};

shape.diameter();
shape.perimeter();
```

- A: `20` и `62.83185307179586`
- B: `20` и `NaN`
- C: `20` и `63`
- D: `NaN` и `63`

<details><summary><b>Ответ</b></summary>
<p>

#### Ответ: B

Заметь, что `diameter` это обычная функция, в то время как `perimeter` это стрелочная функция.

У стрелочных функций значение `this` указывает на окружающую область видимости, в отличие от обычных функций! Это значит, что при вызове `perimeter` значение `this` у этой функции указывает не на объект `shape`, а на внешнюю область видимости (например, window).

У этого объекта нет ключа `radius`, поэтому возвращается `undefined`.

</p>
</details>

# 21

```javascript
let c = { greeting: "Hey!" };
let d;

d = c;
c.greeting = "Hello";
console.log(d.greeting);
```

- A: `Hello`
- B: `Hey!`
- C: `undefined`
- D: `ReferenceError`
- E: `TypeError`

<details><summary><b>Ответ</b></summary>
<p>

#### Ответ: A

В JavaScript все объекты являются _ссылочными_ типами данных.

Сперва переменная `c` указывает на объект. Затем мы указываем переменной `d` ссылаться на тот же объект, что и `c`.

<img src="https://i.imgur.com/ko5k0fs.png" width="200">

Когда ты изменяешь один объект, то изменяются значения всех ссылок, указывающих на этот объект.

</p>
</details>

# 22

```javascript
let greeting;
greetign = {}; // Опечатка!
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Ответ</b></summary>
<p>

#### Ответ: A

В консоли выведется объект, потому что мы только что создали пустой объект в глобальном объекте! Когда мы вместо `greeting` написали `greetign`, интерпретатор JS на самом деле выполнил `global.greetign = {}` (или `window.greetign = {}` в браузере).

Нужно использовать `"use strict"`, чтобы избежать такого поведения. Эта запись поможет быть уверенным в том, что переменная была определена перед тем как ей присвоили значение.

</p>
</details>

# 23

```javascript
const a = {};
const b = { key: "b" };
const c = { key: "c" };

a[b] = 123;
a[c] = 456;

console.log(a[b]);
```

- A: `123`
- B: `456`
- C: `undefined`
- D: `ReferenceError`

<details><summary><b>Ответ</b></summary>
<p>

#### Ответ: B

Ключи объекта автоматически конвертируются в строки. Мы собираемся добавить объект в качестве ключа к объекту `a` со значением `123`.

Тем не менее, когда мы приводим объект к строке, он становится `"[object Object]"`. Таким образом, мы говорим, что `a["object Object"] = 123`. Потом мы делаем то же самое. `c` это другой объект, который мы неявно приводим к строке. Поэтому `a["object Object"] = 456`.

Затем, когда мы выводим `a[b]`, мы имеем в виду `a["object Object"]`. Мы только что установили туда значение `456`, поэтому в результате получаем `456`.

</p>
</details>

# 24

```javascript
const obj = { a: "one", b: "two", a: "three" };
console.log(obj);
```

- A: `{ a: "one", b: "two" }`
- B: `{ b: "two", a: "three" }`
- C: `{ a: "three", b: "two" }`
- D: `SyntaxError`

<details><summary><b>Ответ</b></summary>
<p>

#### Ответ: C

Если есть два ключа с одинаковым именем, то ключ будет перезаписан. Его позиция сохранится, но значением будет последнее указанное.

</p>
</details>

# 25

```javascript
let person = { name: "Lydia" };
const members = [person];
person = null;

console.log(members);
```

- A: `null`
- B: `[null]`
- C: `[{}]`
- D: `[{ name: "Lydia" }]`

<details><summary><b>Ответ</b></summary>
<p>

#### Ответ: D

Сначала мы объявляем переменную `person` со значением объекта, у которого есть свойство` name`.

<img src="https://i.imgur.com/TML1MbS.png" width="200">

Затем мы объявляем переменную с именем `members`. Мы устанавливаем первый элемент этого массива равным значению переменной `person`. Объекты взаимодействуют посредством _ссылок_ при установке их равными друг другу. Когда вы назначаете ссылку из одной переменной в другую, вы создаете _копию_ этой ссылки. (обратите внимание, что у них _не одинаковые_ ссылки!)

<img src="https://i.imgur.com/FSG5K3F.png" width="300">

Затем мы присваиваем переменной `person` значение `null`.

<img src="https://i.imgur.com/sYjcsMT.png" width="300">

Мы изменили только значение переменной `person`, а не первый элемент в массиве, поскольку этот элемент имеет другую (скопированную) ссылку на объект. Первый элемент в `members` по-прежнему содержит ссылку на исходный объект. Когда мы выводим в консоль массив `members`, первый элемент по-прежнему содержит значение объекта, который выводится в консоль.

</p>
</details>

# 26

```javascript
function addToList(item, list) {
  return list.push(item);
}

const result = addToList("apple", ["banana"]);
console.log(result);
```

- A: `['apple', 'banana']`
- B: `2`
- C: `true`
- D: `undefined`

<details><summary><b>Ответ</b></summary>
<p>

#### Ответ: B

Метод `.push()` возвращает _длину_ нового массива! Ранее массив содержал один элемент (строка `"banana"`) и имел длину `1`. После добавления в массив строки `"apple"`, массив содержит два элемента и имеет длину `2`. Это возвращается из функции `addToList`.

Метод `push` изменяет исходный массив. Если вы хотите вернуть _массив_ из функции, а не _длину массива_, вы должны были вернуть `list` после добавления в нее `item`.

</p>
</details>

# 27

```javascript
const emojis = ['✨', '🥑', '😍']

emojis.map(x => x + '✨')
emojis.filter(x => x !== '🥑')
emojis.find(x => x !== '🥑')
emojis.reduce((acc, cur) => acc + '✨')
emojis.slice(1, 2, '✨') 
emojis.splice(1, 2, '✨')
```

- A: `All of them`
- B: `map` `reduce` `slice` `splice`
- C: `map` `slice` `splice` 
- D: `splice`

<details><summary><b>Ответ</b></summary>
<p>

#### Ответ: D

Используя метод `splice`, мы модифицируем исходный массив, удаляя, заменяя или добавляя элементы. В этом случае мы удалили 2 элемента из индекса 1 (мы удалили `'🥑'` и `'😍'`) и добавили `✨` emoji.

`map`, `filter` и `slice` возвращают новый массив, `find` возвращает элемент, а `reduce` возвращает аккумулированное значение.

</p>
</details>

#### Ответ: A

С помощью цикла _for-in_ мы можем перебирать **перечисляемые** свойства. В массиве перечисляемые свойства являются "ключами" элементов массива, которые фактически являются их индексами. Вы можете увидеть массив как:

`{0: "☕", 1: "💻", 2: "🍷", 3: "🍫"}`

Где ключи - перечисляемые свойства. `0` `1` `2` `3` войти в систему.

С помощью цикла _for-of_ мы можем выполнять итерацию **итераций**. Массив является итеративным. Когда мы выполняем итерацию по массиву, переменная "item" равна элементу, по которому она итерируется в данный момент, `"☕"` `"💻"` `"🍷"` `"🍫"` выводится в лог.

</p>
</details>

# 28

```javascript
const numbers = [1, 2, 3];
numbers[10] = 11;
console.log(numbers);
```

- A: `[1, 2, 3, 7 x null, 11]`
- B: `[1, 2, 3, 11]`
- C: `[1, 2, 3, 7 x empty, 11]`
- D: `SyntaxError`

<details><summary><b>Ответ</b></summary>
<p>

#### Ответ: C

Когда в массив добавляется значение, которое выходит за пределы длины массива, JavaScript создает так называемые "пустые ячейки". На самом деле они имеют значения `undefined`, но в консоли выводятся так:

`[1, 2, 3, 7 x empty, 11]`

в зависимости от окружения (может отличаться для браузеров, Node, и т.д.).

</p>
</details>

# 29

```javascript
[1, 2, 3].map(num => {
  if (typeof num === "number") return;
  return num * 2;
});
```

- A: `[]`
- B: `[null, null, null]`
- C: `[undefined, undefined, undefined]`
- D: `[ 3 x empty ]`

<details><summary><b>Ответ</b></summary>
<p>

#### Ответ: C

При использовании метода map, значение `num` равно элементу, над которым он в данный момент зацикливается. В этом случае элементы являются числами, поэтому условие оператора if `typeof num === "number"` возвращает `true`. Функция map создает новый массив и вставляет значения, возвращаемые функцией.

Однако мы не возвращаем значение. Когда мы не возвращаем значение из функции, функция возвращает значение `undefined`. Для каждого элемента в массиве вызывается функциональный блок, поэтому для каждого элемента мы возвращаем `undefined`.

</p>
</details>

# 30

```javascript
function sayHi(name) {
  return `Hi there, ${name}`
}

console.log(sayHi())
```

- A: `Hello there, `
- B: `Hello there, undefined`
- C: `Hello there, null`
- D:  `ReferenceError`

<details><summary><b>Ответ</b></summary>
<p>

#### Ответ: B

По умолчанию аргументы имеют значение `undefined`, если только значение не было передано функции. В этом случае мы не передали значение для аргумента `name`. `name` равно логгируемому `undefined`.

В ES6 мы можем перезаписать значение по умолчанию `undefined` параметрами по умолчанию. Например:

`function sayHi(name = "Lydia") { ... }`

В этом случае, если мы не передали значение или если мы передали `undefined`, `name` всегда будет равно строке `Lydia`

</p>
</details>

# 31

```javascript
function checkAge(age) {
  if (age < 18) {
    const message = "Sorry, you're too young."
  } else {
    const message = "Yay! You're old enough!"
  }

  return message
}

console.log(checkAge(21))
```

- A: `"Sorry, you're too young."`
- B: `"Yay! You're old enough!"`
- C: `ReferenceError`
- D: `undefined`

<details><summary><b>Ответ</b></summary>
<p>

#### Ответ: C

Переменные с ключевыми словами `const` и `let` имеют _блочную видимость_. Блок - это что-то между фигурными скобками (`{}`). В этом случае в фигурных скобках операторов if/else. Вы не можете ссылаться на переменную за пределами блока, в котором она объявлена, вызывается ReferenceError.

</p>
</details>

# 32

```javascript
console.log(`${(x => x)('I love')} to program`)
```

- A: `I love to program`
- B: `undefined to program`
- C: `${(x => x)('I love') to program`
- D: `TypeError`

<details><summary><b>Ответ</b></summary>
<p>

#### Ответ: A

Выражения внутри литералов шаблона расчитываются первыми. Это означает, что строка будет содержать возвращаемое значение выражения, в данном случае немедленно исполняемую функцию `(x => x)('I love')`. Мы передаем значение `'I love'` в качестве аргумента стрелочной функции `x => x`. `x` равно `'I love'`, которое и возвращается. Это приводит к `I love to program`.

</p>
</details>
