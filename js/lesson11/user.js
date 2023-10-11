const user = {
  name: "Che",
  age: 21,
};


// export { user };

// export const changeUserInformation = (user) => {
//   (user.name = "Fidel"), (user.age = 41);
// };

const arr = [1, 2, 3, 4];

const a = arr[0];
const b = arr[1];

// const [a1, b1, c1, d1] = [1, 2, 3, 4];
const [a1, b1, c1, d1] = arr;
console.log(a1, b1, c1, d1);

const { name, age } = user; //the same as const name = user.name;
