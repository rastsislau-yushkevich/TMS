function convertDate(date_str) {
    let temp_date = date_str.split(" ");
    return temp_date[0] + " " + temp_date[1] + " " + temp_date[2] + " " + temp_date[3];
}

const root = document.getElementById("root");

const menu = document.createElement("div");
menu.classList.add("menu");

root.append(menu);

const deleteAllBtn = document.createElement("button");
deleteAllBtn.classList.add("menu__deleteAllBtn");
deleteAllBtn.innerHTML = "Delete All";

const addInput = document.createElement("input");
addInput.classList.add("menu__addInput");
addInput.placeholder = "Enter todo ...";

const addBtn = document.createElement("button");
addBtn.classList.add("menu__addBtn");
addBtn.innerHTML = "Add";

menu.append(deleteAllBtn, addInput, addBtn);

const taskList = document.createElement("div");
taskList.classList.add("taskList");

root.append(taskList);

addBtn.addEventListener("click", () => {
    const taskElem = document.createElement("div");
    taskElem.classList.add("taskList__elem");

    const taskClearCheckBox = document.createElement("input");
    taskClearCheckBox.type = "checkbox";
    taskClearCheckBox.classList.add("taskElem__clearCheckBox");

    const taskInfo = document.createElement("span");
    taskInfo.classList.add("taskElem__info");
    taskInfo.innerHTML = addInput.value;
    addInput.value = "";

    const taskCol = document.createElement("div");
    taskCol.classList.add("taskList__elemCol");

    const taskDelBtn = document.createElement("button");
    taskDelBtn.classList.add("taskElem__delBtn");
    taskDelBtn.innerHTML = "x";

    const dateView = document.createElement("span");
    dateView.classList.add("taskElem__date");

    const date = new Date();
    dateView.innerHTML = convertDate(String(date));

    taskList.append(taskElem);

    taskCol.append(taskDelBtn, dateView);

    taskElem.append(taskClearCheckBox, taskInfo, taskCol);

    taskClearCheckBox.addEventListener("click", () => {
        taskClearCheckBox.parentElement.classList.toggle("taskList__elem-toggle");
        taskInfo.classList.toggle("taskElem__info-toggle");
    });

    taskDelBtn.addEventListener("click", () => {
        taskDelBtn.parentElement.parentElement.remove();
    });
});

deleteAllBtn.addEventListener("click", () => {
    console.log(taskList.children);
    console.log(document.querySelectorAll(".taskList__elem"));
    for (let elem of document.querySelectorAll(".taskList__elem")) {
        elem.remove();
    };
});







