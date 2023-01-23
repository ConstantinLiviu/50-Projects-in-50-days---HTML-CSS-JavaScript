const inputEl = document.querySelector("input");
const todoListLeft = document.querySelector(".todo-left");
const todoListRight = document.querySelector(".todo-right");
const savedTasks = JSON.parse(localStorage.getItem("savedToDoList"));

// Checks if there is any info stored in local storage
if (savedTasks) {
  savedTasks.forEach((task) => {
    addTask(task);
  });
}

// triggers main funciton only if the user inputs something
// in the input field and presses enter
inputEl.addEventListener("keypress", (e) => {
  if (e.key === "Enter" && inputEl.value != "") {
    addTask();
  }
});

/**
 * Function creates a task item and adds it to the list. If there are tasks saved in local storage it uses the information to create a list on page load.
 * @param {Object} task - task info stored in local storage
 */
function addTask(task) {
  // Store input field value
  let taskContent = inputEl.value;

  // Store input field value if value is retrieved from local storage
  if (task) {
    taskContent = task.content;
  }

  // Clear input field after pressing Enter;
  inputEl.value = "";

  // Create task and add content
  const taskEl = document.createElement("p");
  taskEl.textContent = taskContent;

  // Create check icon, add classes and append to task in list
  const checkMark = document.createElement("i");
  checkMark.classList.add("fas", "fa-check-circle", "hidden");
  taskEl.appendChild(checkMark);

  // checks the status of the task retrieved form local storage
  // adds a green background and reveals the green checkmark if
  // the task was set as completed before being added to the local storage
  if (task && task.status) {
    checkMark.classList.toggle("hidden");
    taskEl.classList.add("done");
  }

  // Add task element on the left side list or on the right depending how many task are already in the list
  if (todoListLeft.childElementCount >= 15) {
    todoListRight.appendChild(taskEl);
  } else {
    todoListLeft.appendChild(taskEl);
  }

  // On click toggle task element bg green and check icon
  taskEl.addEventListener("click", () => {
    checkMark.classList.toggle("hidden");
    taskEl.classList.toggle("done");
    updateToDoList();
  });

  // On right click remove task element from the list
  taskEl.addEventListener("contextmenu", (e) => {
    e.preventDefault();
    taskEl.remove();
    updateToDoList();
  });

  updateToDoList();
}

/**
 * Function gathers, saves in an array and transfers to local storage tasks related info
 */
function updateToDoList() {
  // select all available tasks in the tasks list
  let pArr = document.querySelectorAll(".todo p");

  // empty array to collect and add to local storage tasks info
  const tasksListArr = [];

  // loop through taks and get task text and not/completed status as boolean
  pArr.forEach((paragraph) => {
    console.log(paragraph.textContent);
    tasksListArr.push({
      content: paragraph.textContent,
      status: paragraph.classList.contains("done"),
    });
  });

  localStorage.setItem("savedToDoList", JSON.stringify(tasksListArr));
}
