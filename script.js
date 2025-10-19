// Get DOM elements
const input = document.getElementById("taskInput");
const taskList = document.getElementById("taskList");
const completeAllBtn = document.getElementById("completeAllBtn");

// Load tasks from localStorage on page load
window.onload = () => {
  const savedTasks = JSON.parse(localStorage.getItem("tasks")) || [];
  savedTasks.forEach(task => createTaskElement(task.text, task.completed));
};

// Add task function
function addTask() {
  const taskText = input.value.trim();
  if (taskText === "") {
    alert("Please enter a task!");
    return;
  }

  createTaskElement(taskText, false);
  saveTasks();
  input.value = "";
}

// Create task <li> element
function createTaskElement(text, completed) {
  const li = document.createElement("li");
  li.textContent = text;
  if (completed) li.classList.add("completed");

  // Toggle complete
  li.addEventListener("click", () => {
    li.classList.toggle("completed");
    saveTasks();
  });

  // Delete button
  const delBtn = document.createElement("button");
  delBtn.textContent = "❌";
  delBtn.style.marginLe
