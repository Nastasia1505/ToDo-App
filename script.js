let input = document.querySelector(".input");
let addBtn = document.querySelector(".addBtn");
let editBtn = document.querySelector(".editBtn");
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

      let taskContent = document.createElement("div");
      taskContent.classList.add("task__content");
      task.append(taskContent);

      let check = document.createElement("button");
      if (item.isChecked) {
        check.classList.add("check");
      } else {
      }
      check.classList.add("action__btn");
      check.classList.add("action__btn-check");
      taskContent.append(check);

      let iconCheck = document.createElement("i");
      iconCheck.classList.add("fa-solid");
      iconCheck.classList.add("fa-check");
      check.append(iconCheck);

      let taskText = document.createElement("p");
      taskText.classList.add("item__text");
      taskText.textContent = `${item.name}`;
      taskContent.append(taskText);

      let action = document.createElement("div");
      action.classList.add("action");
      task.append(action);

      let edit = document.createElement("button");
      edit.classList.add("action__btn");
      edit.classList.add("action__btn-edit");
      action.append(edit);

      let iconEdit = document.createElement("i");
      iconEdit.classList.add("fa-solid");
      iconEdit.classList.add("fa-pencil");
      edit.append(iconEdit);

      let remove = document.createElement("button");
      remove.classList.add("action__btn");
      remove.classList.add("action__btn-trash");
      action.append(remove);

      let iconTrash = document.createElement("i");
      iconTrash.classList.add("fa-solid");
      iconTrash.classList.add("fa-trash-can");
      remove.append(iconTrash);

      check.addEventListener("click", () => {
        this.check(item.date);
      });

      remove.addEventListener("click", () => {
        this.remove(item.date);
      });

      edit.addEventListener("click", () => {
        this.edit(item.date);
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

  this.edit = function (id) {
    this.data.forEach((item) => {
      if (item.date == id) {
        input.value = `${item.name}`;
        console.log(input.value);
        addBtn.classList.add("disable");
        editBtn.classList.remove("disable");
        editBtn.addEventListener("click", function () {
          item.name = input.value;
          console.log(item);
          editBtn.classList.add("disable");
          addBtn.classList.remove("disable");
          input.value = "";
        });
      }
    });
  };
};

let taskList = new TaskList();

addBtn.addEventListener("click", function () {
  taskList.add(input.value);
});
