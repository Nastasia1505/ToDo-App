let input = document.querySelector(".input");
let addBtn = document.querySelector(".btn");
let list = document.querySelector(".list");

let Task = function (value) {
  if (!value) return;
  this.date = new Date().getTime();
  this.name = value;
  this.edit = function (value) {
    if (!value) return;
    this.name = value;
  };
  this.isChecked = false;
};

let TaskList = function () {
  this.data = [];
  this.add = function (value) {
    let item = new Task(value);
    this.data.push(item);
    this.render();
  };
  this.render = function () {
    list.innerHTML = "";
    this.data.forEach((item) => {
      let task = document.createElement("li");
      task.classList.add("item");
      list.append(task);

      let taskText = document.createElement("p");
      taskText.classList.add("item__text");
      taskText.textContent = `${item.name}`;
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

      let remove = document.createElement("button");
      remove.classList.add("action__btn");
      remove.classList.add("action__btn-trash");
      task.append(remove);

      let iconTrash = document.createElement("i");
      iconTrash.classList.add("fa-solid");
      iconTrash.classList.add("fa-trash-can");
      remove.append(iconTrash);

      let check = document.createElement("button");
      if (item.isChecked) {
        check.classList.add("check");
      } else {
      }
      check.classList.add("action__btn");
      check.classList.add("action__btn-check");
      task.append(check);

      let iconCheck = document.createElement("i");
      iconCheck.classList.add("fa-solid");
      iconCheck.classList.add("fa-check");
      check.append(iconCheck);

      remove.addEventListener("click", () => {
        this.remove(item.date);
      });

      check.addEventListener("click", () => {
        this.check(item.date);
      });

      input.value = "";
    });
  };
  this.remove = function (id) {
    this.data = this.data.filter((item) => {
      if (item.date == id) {
        return false;
      } else {
        return true;
      }
    });
    console.log(this.data);
    this.render();
  };

  this.check = function (id) {
    this.data.forEach((item) => {
      if (item.date == id) {
        item.isChecked = !item.isChecked;
      }
    });
    this.render();
  };
};

let taskList = new TaskList();

addBtn.addEventListener("click", function () {
  console.log(taskList);
  taskList.add(input.value);
});
