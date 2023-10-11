import {
    changeUserInformation,
    user
} from "./user.js";

document.body.innerHTML = `name: ${user.name} age: ${user.age}`;

changeUserInformation(user);

document.body.innerHTML += ` name: ${user.name} age: ${user.age}`;
