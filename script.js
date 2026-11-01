// ============================================================
// TASK 0. First Script
// ============================================================
console.log("Student: Your Full Name");
console.log("Group: Your Group");

document.getElementById("alertBtn").addEventListener("click", () => {
  alert("Hello, JavaScript World!");
});

// ============================================================
// TASK 1. Variables & Operators
// ============================================================
const task1Output = document.getElementById("task1Output");

// Variables of different data types
const studentName = "Aibek";       // string
const studentAge = 20;             // number
const isStudent = true;            // boolean

// Arithmetic operations
const a = 12;
const b = 4;
const sum = a + b;
const diff = a - b;
const product = a * b;
const quotient = a / b;

// String concatenation
const fullInfo = studentName + " is " + studentAge + " years old. Student status: " + isStudent;

// Display on page
task1Output.textContent =
  `String: ${studentName}\n` +
  `Number: ${studentAge}\n` +
  `Boolean: ${isStudent}\n\n` +
  `Arithmetic:\n` +
  `${a} + ${b} = ${sum}\n` +
  `${a} - ${b} = ${diff}\n` +
  `${a} * ${b} = ${product}\n` +
  `${a} / ${b} = ${quotient}\n\n` +
  `Concatenation:\n${fullInfo}`;

// Also print to console
console.log("Task 1 – Variables & Operators");
console.log({ studentName, studentAge, isStudent });
console.log({ sum, diff, product, quotient });
console.log(fullInfo);

// ============================================================
// TASK 2. Changing Content
// ============================================================
const changeTextEl = document.getElementById("changeText");
const changeBtn = document.getElementById("changeBtn");

changeBtn.addEventListener("click", () => {
  changeTextEl.textContent = "The paragraph text has been changed! ✅";
});

// ============================================================
// TASK 3. Changing Styles
// ============================================================
const styleBox = document.getElementById("styleBox");
const bgBtn = document.getElementById("bgBtn");
const fontBtn = document.getElementById("fontBtn");

let isBlue = false;

bgBtn.addEventListener("click", () => {
  styleBox.style.backgroundColor = isBlue ? "#e2e8f0" : "#fde68a";
  isBlue = !isBlue;
});

let isLarge = false;

fontBtn.addEventListener("click", () => {
  styleBox.style.fontSize = isLarge ? "16px" : "26px";
  isLarge = !isLarge;
});

// ============================================================
// TASK 4. Creating & Removing Elements
// ============================================================
const itemList = document.getElementById("itemList");
const addItemBtn = document.getElementById("addItemBtn");
const removeItemBtn = document.getElementById("removeItemBtn");

let itemCounter = 0;

addItemBtn.addEventListener("click", () => {
  itemCounter++;
  const li = document.createElement("li");
  li.textContent = `Item ${itemCounter}`;
  itemList.appendChild(li);
});

removeItemBtn.addEventListener("click", () => {
  if (itemList.lastElementChild) {
    itemList.removeChild(itemList.lastElementChild);
    itemCounter = Math.max(0, itemCounter - 1);
  } else {
    alert("The list is already empty!");
  }
});

// ============================================================
// TASK 5. Mouse Events
// ============================================================
const mouseBox = document.getElementById("mouseBox");

mouseBox.addEventListener("mouseover", () => {
  mouseBox.style.backgroundColor = "#f59e0b";
});

mouseBox.addEventListener("mouseout", () => {
  mouseBox.style.backgroundColor = "#3b82f6";
});

// ============================================================
// TASK 6. Keyboard Events
// ============================================================
const liveInput = document.getElementById("liveInput");
const liveOutput = document.getElementById("liveOutput");

liveInput.addEventListener("keyup", () => {
  liveOutput.textContent = liveInput.value;
});

// ============================================================
// TASK 7. Calculator
// ============================================================
const calcA = document.getElementById("calcA");
const calcB = document.getElementById("calcB");
const calcResult = document.getElementById("calcResult");
const calcButtons = document.querySelectorAll(".calc-buttons button");

calcButtons.forEach((btn) => {
  btn.addEventListener("click", () => {
    const a = parseFloat(calcA.value);
    const b = parseFloat(calcB.value);

    if (isNaN(a) || isNaN(b)) {
      calcResult.textContent = "Please enter both numbers.";
      return;
    }

    let result;
    switch (btn.dataset.op) {
      case "+":
        result = a + b;
        break;
      case "-":
        result = a - b;
        break;
      case "*":
        result = a * b;
        break;
      case "/":
        if (b === 0) {
          calcResult.textContent = "Cannot divide by zero!";
          return;
        }
        result = a / b;
        break;
      default:
        result = "Unknown operation";
    }

    calcResult.textContent = result;
  });
});

// ============================================================
// TASK 8. Interactive To-Do List
// ============================================================
const taskInput = document.getElementById("taskInput");
const addTaskBtn = document.getElementById("addTaskBtn");
const todoList = document.getElementById("todoList");

// Temporary storage – array of task objects
const tasks = [];

function renderTasks() {
  todoList.innerHTML = "";

  tasks.forEach((task, index) => {
    const li = document.createElement("li");

    const span = document.createElement("span");
    span.classList.add("task-text");
    span.textContent = task.text;
    if (task.completed) {
      li.classList.add("completed");
    }

    // Toggle completion on click
    span.addEventListener("click", () => {
      task.completed = !task.completed;
      renderTasks();
    });

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener("click", () => {
      tasks.splice(index, 1);
      renderTasks();
    });

    li.appendChild(span);
    li.appendChild(deleteBtn);
    todoList.appendChild(li);
  });
}

addTaskBtn.addEventListener("click", () => {
  const text = taskInput.value.trim();

  if (text === "") {
    alert("Please enter a task!");
    return;
  }

  tasks.push({ text, completed: false });
  taskInput.value = "";
  renderTasks();
});

// Allow pressing "Enter" to add a task
taskInput.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    addTaskBtn.click();
  }
});