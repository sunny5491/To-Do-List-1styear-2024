function updateDateTime() {
    const now = new Date();
    const dateTimeString = now.toLocaleString();
    document.getElementById("date-time").textContent = "Date & Time: " + dateTimeString;
}

function addTask() {
    const taskInput = document.getElementById("task-input");
    const taskText = taskInput.value.trim();
    if (taskText === "") {
        alert("Please enter a task.");
        return;
    }

    const taskList = document.getElementById("task-list");
    const taskDiv = document.createElement("div");
    taskDiv.className = "task";

    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "box";

    const label = document.createElement("label");
    label.textContent = taskText;

    const taskDateTime = document.createElement("span");
    taskDateTime.className = "task-date-time";
    taskDateTime.textContent = ` (Added: ${new Date().toLocaleString()})`;

    const removeButton = document.createElement("button");
    removeButton.textContent = "Remove";
    removeButton.className = "remove-button";
    removeButton.onclick = function() {
        taskList.removeChild(taskDiv);
    };

    taskDiv.appendChild(checkbox);
    taskDiv.appendChild(label);
    taskDiv.appendChild(taskDateTime);
    taskDiv.appendChild(removeButton);
    taskList.appendChild(taskDiv);

    taskInput.value = "";
}

document.getElementById("add-task").addEventListener("click", addTask);
setInterval(updateDateTime, 1000);
updateDateTime();
