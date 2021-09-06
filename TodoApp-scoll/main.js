function loadTodos() {
  let itemList = ["Milch", "Auto", "Essen"];
  return itemList;
}

let toDoUl = document.querySelector(".todo-list");
function createTodoHTML(todo) {
  let newlist = document.createElement("li");
  newlist.classList.add("todo-item");
  newlist.innerHTML =
    '<div class="todo-name">' +
    todo +
    '</div><button class="delete-todo">x</button';

  let deletebtn = newlist.querySelector(".delete-todo");
  //   console.log(deletebtn);
  deletebtn.onclick = function deleteTodo() {
    newlist.remove();
  };
  return newlist;
}

let loadedTodos = loadTodos(); // it would be better to save it in a variable
for (let i = 0; i < loadedTodos.length; i++) {
  toDoUl.appendChild(createTodoHTML(loadedTodos[i]));
}

let input = document.querySelector(".input-group input");
let form = document.querySelector(".todo-form");
form.onsubmit = function addTodo(event) {
  event.preventDefault();
  toDoUl.appendChild(createTodoHTML(input.value));
};

let dialog = document.querySelector(".dialog-overlay");
let agreeBtn = document.querySelector(".dialog-agree-btn");
agreeBtn.onclick = function closeDialog() {
  dialog.remove();
};
