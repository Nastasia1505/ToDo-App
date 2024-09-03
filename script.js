let input = document.querySelector(".input");
let addBtn = document.querySelector(".btn");
let list = document.querySelector(".list");

let value = input.value;

addBtn.addEventListener("click", function () {
  console.log(input.value);
  let task = document.createElement("li");
  task.classList.add("item");
  list.append(task);

  let taskText = document.createElement("p");
  taskText.classList.add("item__text");
  taskText.innerHTML = `${value}`;
  task.append(taskText);

  let action = document.createElement("div");
  action.classList.add("action");
  task.append(action);

  let edit = document.createElement("button");
  edit.classList.add("action__btn");
  edit.classList.add("action__btn-edit");
  task.append(edit);

  let iconEdit = document.createElement("i");
  iconEdit.classList.add("fa-solid");
  iconEdit.classList.add("fa-pencil");
  edit.append(iconEdit);

  let trash = document.createElement("button");
  trash.classList.add("action__btn");
  trash.classList.add("action__btn-trash");
  task.append(trash);

  let iconTrash = document.createElement("i");
  iconTrash.classList.add("fa-solid");
  iconTrash.classList.add("fa-trash-can");
  trash.append(iconTrash);

  let check = document.createElement("button");
  check.classList.add("action__btn");
  check.classList.add("action__btn-check");
  task.append(check);

  let iconCheck = document.createElement("i");
  iconCheck.classList.add("fa-solid");
  iconCheck.classList.add("fa-check");
  check.append(iconCheck);

  input.value = "";
});

let TaskList = function () {
  this.data = [];
  this.add = function (value) {
    let item = new Task(value);
    this.data.push(item);
  };
};

let Task = function (value) {
  if (!value) return;
  this.date = new Date().getTime();
  this.name = value;
  this.edit = function (value) {
    if (!value) return;
    this.name = value;
  };
  this.trash = function () {};
  this.check = function () {};
};

let task1 = new Task("hooh");
let newList = new TaskList();

console.log(task1);
