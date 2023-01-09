const inputEl = document.querySelector("input");
const todoListLeft = document.querySelector(".todo-left");
const todoListRight = document.querySelector(".todo-right");

inputEl.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && inputEl.value != "") {
    const todoTaskText = inputEl.value;
    inputEl.value = "";
    const todoTask = document.createElement("p");
    todoTask.textContent = todoTaskText;
    if (todoListLeft.childElementCount >= 15) {
      todoListRight.appendChild(todoTask);
    } else {
      todoListLeft.appendChild(todoTask);
    }

    todoTask.addEventListener("click", () => {
      todoTask.style.backgroundColor = "rgba(4,171,33,0.17)";
      todoTask.style.color = "green";
    });

    todoTask.addEventListener("contextmenu", (e) => {
      e.preventDefault();
      todoTask.remove();
    });
  }
});
